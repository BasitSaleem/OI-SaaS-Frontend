import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans for POS & Inventory | Owners Inventory',
  description:
    'Explore flexible pricing plans for POS, inventory, ecommerce, and multi location management. Start free and upgrade as your business grows.',
  //   keywords: ["inventory management solutions", "inventory management system software", "inventory management systems", "inventory system software", "inventory management system", "inventory management software", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/pricing",
  },
};

// Keep this route off Next's static/ISR path so it's always served through
// SSR compute — required so the geo-redirect middleware (src/middleware.ts)
// runs on every request instead of the CDN serving a cached static shell
// that never reaches the middleware/compute layer.
export const dynamic = "force-dynamic";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
