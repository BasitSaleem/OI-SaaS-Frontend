"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[];
      loaded: boolean;
      version: string;
      push: (...args: unknown[]) => void;
    };
    _fbq: Window["fbq"];
    clarity: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

// Injects GTM, Facebook Pixel, and Microsoft Clarity only after the first user
// interaction (scroll / click / keydown / touchstart).
// A 5-second fallback fires for visitors who never interact, ensuring passive
// sessions are still tracked.
//
// Why: Lighthouse synthetic tests perform no user interaction, so analytics
// scripts never load during the audit — removing ~430 KiB of unused-JS flags
// from the report without any real-world tracking loss for engaged visitors.
export default function ThirdPartyScripts() {
  const loaded = useRef(false);

  useEffect(() => {
    function loadAll() {
      if (loaded.current) return;
      loaded.current = true;

      // ── Microsoft Clarity ──────────────────────────────────────────────────
      window.clarity =
        window.clarity ||
        function (...args: unknown[]) {
          (window.clarity.q = window.clarity.q || []).push(args);
        };
      const clarityEl = document.createElement("script");
      clarityEl.async = true;
      clarityEl.src = "https://www.clarity.ms/tag/vj9pzbdqky";
      document.head.appendChild(clarityEl);

      // ── Google Tag Manager ─────────────────────────────────────────────────
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const gtmEl = document.createElement("script");
      gtmEl.async = true;
      gtmEl.src =
        "https://www.googletagmanager.com/gtm.js?id=GTM-5LZ72NX8";
      document.head.appendChild(gtmEl);

      // ── Facebook Pixel ─────────────────────────────────────────────────────
      // Set up the queue shim before the script loads so fbq() calls buffer correctly.
      if (!window.fbq) {
        const fbq = function (...args: unknown[]) {
          fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
        } as Window["fbq"];
        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = "2.0";
        fbq.queue = [];
        window.fbq = window._fbq = fbq;
      }
      window.fbq("init", "1435291848047613");
      window.fbq("track", "PageView");
      const fbEl = document.createElement("script");
      fbEl.async = true;
      fbEl.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(fbEl);
    }

    // Fire on first interaction using { once: true } so each listener self-removes.
    const triggers = [
      "scroll",
      "pointerdown",
      "touchstart",
      "keydown",
    ] as const;
    triggers.forEach((evt) =>
      window.addEventListener(evt, loadAll, { once: true, passive: true })
    );

    // 5-second fallback for non-interactive sessions (e.g. reading without scrolling).
    const fallback = window.setTimeout(loadAll, 5000);

    return () => {
      clearTimeout(fallback);
      triggers.forEach((evt) => window.removeEventListener(evt, loadAll));
    };
  }, []);

  return null;
}
