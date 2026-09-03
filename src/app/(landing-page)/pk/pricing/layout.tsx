import type { Metadata } from 'next';

// This page is a currency-localized (PKR) mirror of /pricing for visitors
// geo-detected in Pakistan (see src/middleware.ts). Content is otherwise
// identical, so it's marked non-canonical in favor of /pricing to avoid
// duplicate-content SEO issues, per Google's guidance for localized/duplicate
// pricing pages: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
export const metadata: Metadata = {
  title: 'Pricing Plans in PKR for POS & Inventory | Owners Inventory',
  description:
    'Explore flexible PKR pricing plans for POS, inventory, ecommerce, and multi location management. Start free and upgrade as your business grows.',
  publisher: 'Owners Inventory',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    // Intentionally points at /pricing (not /pk/pricing) — same content, different
    // currency display only, so we consolidate ranking signal onto one URL.
    canonical: 'https://ownersinventory.com/pricing',
  },
};

// Force this route to run through SSR on every request rather than being
// statically optimized — needed so region-based logic here (and the
// middleware redirect into this route) always executes against a live
// request instead of a cached HTML shell. See requirement #8 in the
// geo-pricing feature: middleware/dynamic rendering must run per-request.
export const dynamic = 'force-dynamic';

export default function PkPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
