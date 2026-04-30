import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management Software for Small Businesses & Stores",
  description: "Inventory software for small businesses to track stock in real time, automate billing, sync sales channels, and simplify daily operations from one dashboard.",
  keywords: [
    "inventory management software for small businesses",
    "small business inventory management software",
    "inventory software for small business",
    "small business inventory system",
    "inventory management system for small business",
    "best inventory software for small business"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/small-businesses-inventory-management-software"
  }
}

export default function SmallBusinessInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
