import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Inventory Management Software | Owners Inventory",
  description: "Furniture inventory software to track stock in real time, automate billing, manage multi-location warehouses, and get insights to grow your business faster.",
  keywords: [
    "furniture inventory management software",
    "furniture inventory management system",
    "furniture inventory software",
    "furniture stock management software",
    "inventory management software for furniture business",
    "furniture inventory tracking software"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/furniture-inventory-management-software"
  }
}

export default function FurnitureInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
