import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grocery Store POS System for Billing and Inventory",
  description: "Grocery store POS system to manage billing, inventory, pricing, and stock in real time. Speed up checkout and maintain accurate inventory across your store.",
  keywords: ["grocery store pos system", "pos system grocery store", "pos for grocery store", "pos system for grocery store", "grocery store pos systems", "best pos for grocery store", "best pos system for grocery store", "best grocery store pos", "grocery store pos software", "pos software for grocery store", "best pos software for grocery store"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/grocery-store-pos-system",
  },
};

export default function GroceryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
