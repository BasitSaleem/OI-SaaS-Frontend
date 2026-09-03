import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────
// Geo-pricing redirect: /pricing -> /pk/pricing for visitors in Pakistan.
//
// Country detection order:
//   1. `CloudFront-Viewer-Country` request header — set by CloudFront when
//      "Add Viewer Country Header" is enabled on the distribution (off by
//      default). See the console steps at the bottom of this file.
//   2. Fallback: geo-IP lookup of the visitor's IP via ipapi.co, when the
//      CloudFront header isn't present (e.g. running `next dev` locally,
//      or the distribution setting hasn't been enabled yet).
//
// Bots/crawlers are never redirected — they always get /pricing so a single
// canonical URL gets crawled and indexed there.
// ─────────────────────────────────────────────────────────────────────────

const PK_REDIRECT_COOKIE = "pricing_region";
const GEO_IP_TIMEOUT_MS = 1200;

// Matches the major search/social crawlers. Extend as needed.
const BOT_USER_AGENT_RE =
  /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|whatsapp|telegrambot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|ccbot|claudebot|perplexitybot|duckduckbot|baiduspider|yandexbot|sogou|exabot/i;

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_USER_AGENT_RE.test(userAgent);
}

// Amplify Hosting runs Next.js on Lambda behind CloudFront — `request.ip`
// (a Vercel-only convenience field) is not populated there, so the client
// IP has to be read from the standard forwarding header CloudFront sets.
function getClientIp(request: NextRequest): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // "x-forwarded-for" can be a comma-separated chain; the first entry is
    // the original client.
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip");
}

async function lookupCountryByIp(ip: string | null): Promise<string | null> {
  if (!ip) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEO_IP_TIMEOUT_MS);

  try {
    // Plain-text endpoint — returns just the 2-letter country code, e.g. "PK".
    // Free tier: 1,000 requests/day. Swap for a paid provider/your own
    // MaxMind DB lookup if you outgrow that.
    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      signal: controller.signal,
      headers: { "User-Agent": "owners-inventory-geo-middleware" },
    });
    if (!res.ok) return null;

    const text = (await res.text()).trim();
    // ipapi.co returns things like "Undefined" or an error string for
    // private/invalid IPs — only trust a clean 2-letter code.
    if (/^[A-Z]{2}$/.test(text)) return text;
    return null;
  } catch {
    // Timed out, rate-limited, or network error — fail open (don't block
    // the request, don't redirect).
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname !== "/pricing") {
    return NextResponse.next();
  }

  // Never redirect crawlers — they always see the canonical /pricing page.
  const userAgent = request.headers.get("user-agent");
  if (isBot(userAgent)) {
    return NextResponse.next();
  }

  // Manual "View global pricing" escape hatch from /pk/pricing (see the
  // switch link in PricingPage.tsx). Once set, the cookie keeps the visitor
  // on /pricing for the rest of their session even if they're geo-located
  // in Pakistan.
  if (searchParams.get("region") === "global") {
    const response = NextResponse.next();
    response.cookies.set(PK_REDIRECT_COOKIE, "global", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  const regionCookie = request.cookies.get(PK_REDIRECT_COOKIE)?.value;
  if (regionCookie === "global") {
    return NextResponse.next();
  }

  // 1. CloudFront viewer-country header (requires enabling it — see below).
  let country = request.headers.get("CloudFront-Viewer-Country");

  // 2. Fallback to geo-IP lookup if the header isn't present.
  if (!country) {
    country = await lookupCountryByIp(getClientIp(request));
  }

  if (country === "PK") {
    const url = request.nextUrl.clone();
    url.pathname = "/pk/pricing";
    url.search = ""; // drop any query string from the original request
    return NextResponse.redirect(url, 302);
  }

  return NextResponse.next();
}

// Only run this middleware for the /pricing route — everything else
// (including /pk/pricing itself) is untouched, which also avoids any
// possibility of a redirect loop.
export const config = {
  matcher: "/pricing",
};

// ─────────────────────────────────────────────────────────────────────────
// Amplify / CloudFront console steps to enable CloudFront-Viewer-Country
// ─────────────────────────────────────────────────────────────────────────
//
// Amplify Hosting's managed CDN is CloudFront under the hood, but you don't
// get to edit that distribution directly from the Amplify console — Amplify
// manages it for you. To turn on the viewer-country header you need to work
// through CloudFront directly against the distribution Amplify created:
//
// 1. AWS Console -> CloudFront -> Distributions. Find the distribution whose
//    "Alternate domain name (CNAME)" matches your Amplify domain (or, if
//    you can't tell them apart, go to Amplify Hosting -> your app -> Domain
//    management, note the exact CloudFront domain shown there, and match it
//    in the CloudFront list).
//
// 2. Open that distribution -> "Behaviors" tab. Select the behavior that
//    serves your Next.js compute origin (usually the default `*` behavior,
//    the one pointing at the Amplify SSR/Lambda origin — NOT a `/assets/*`
//    or static-asset behavior). Click "Edit".
//
// 3. Under "Cache key and origin requests", you need an Origin Request
//    Policy (or a Cache Policy, if you're using the legacy "Cache and
//    origin request settings" combined mode) that forwards headers to the
//    origin. CloudFront does NOT let you forward `CloudFront-Viewer-Country`
//    as a header from an Origin Request Policy directly — instead:
//
//    a. Go to CloudFront -> Policies -> "Origin request" tab -> "Create
//       origin request policy".
//    b. Name it e.g. `owners-inventory-viewer-country`.
//    c. Under "Headers", choose "Include the following headers" and add
//       `CloudFront-Viewer-Country`. (This is a CloudFront-generated
//       pseudo-header — it doesn't come from the client, so you don't
//       need to allow-list anything else for it specifically; but make
//       sure you're not accidentally switching from "All viewer headers"
//       to a restrictive list that drops headers your app already needs.)
//    d. Under "Query strings" and "Cookies", keep whatever Amplify's
//       default policy already forwards (typically "All") so you don't
//       break existing behavior — check the policy currently attached to
//       the behavior before creating a new one, and mirror its query
//       string/cookie settings.
//    e. Save the policy, go back to the distribution's behavior, and
//       attach your new Origin Request Policy in place of the old one.
//
// 4. Save changes and wait for the distribution status to go from
//    "Deploying" back to "Deployed" (a few minutes).
//
// 5. Verify: `curl -sI https://your-domain.com/pricing` won't show you the
//    header (it's added on the *request* to your origin, not the response
//    the browser sees). Instead, temporarily log
//    `request.headers.get("CloudFront-Viewer-Country")` in this middleware
//    and check your Amplify Hosting compute logs (Amplify console -> your
//    app -> Hosting -> Monitoring -> Logs), or curl through a VPN endpoint
//    in Pakistan and confirm you land on /pk/pricing.
//
// Caveat: because Amplify owns and can redeploy/regenerate the underlying
// CloudFront distribution on certain configuration changes, this manual
// CloudFront edit can in some cases be reset. If you find the header
// stops working after an unrelated Amplify config change, redo steps 1-4.
// The geo-IP fallback in this middleware exists specifically to keep the
// redirect working even if that happens.
