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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
