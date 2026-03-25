import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grocery Store POS System | Efficient Inventory & Billing | Owners Inventory",
  description: "Owners Inventory provides a specialized POS system for grocery stores to manage large inventories, simplify billing, and track sales performance in real-time.",
  keywords: ["grocery pos", "grocery store management", "grocery inventory tracking", "billing software", "Owners Inventory"],
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
