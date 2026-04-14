import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System for Supermarkets with Inventory Control",
  description: "POS system for supermarkets to manage products, categories, inventory, billing, and sales in real time. Improve checkout speed and keep stock accurate.",
  keywords: ["pos system for supermarket", "supermarket pos system", "pos system for retail supermarket", "best pos system for supermarket", "best pos system for retail supermarket", "pos systems for supermarket"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/supermarket-pos-system",
  },
};

export default function SupermarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
