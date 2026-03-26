import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing Store POS System for Billing and Inventory",
  description: "Clothing store POS system to manage billing, inventory, pricing, and stock in real time. Speed up checkout and maintain accurate inventory across your store.",
  keywords: ["clothing store pos system", "pos system clothing store", "pos for clothing store", "pos system for clothing store", "clothing store pos systems", "best pos for clothing store", "best pos system for clothing store", "best clothing store pos", "clothing store pos software", "pos software for clothing store", "best pos software for clothing store"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/clothing-store-pos-system",
  },
};

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
