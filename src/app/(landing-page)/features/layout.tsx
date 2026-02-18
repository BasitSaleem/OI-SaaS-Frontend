import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Features of Owners Inventory | POS & Inventory Software",
  description: "Explore powerful Owners Inventory features including POS, inventory, sales, purchases, reporting, marketing, integrations, and multi location control.",
  keywords: ["POS and inventory management software", "All in one POS system", "Inventory management system", "Business management software", "Retail POS software", "Multi location inventory software", "POS software for small business", "Inventory and sales management system"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
