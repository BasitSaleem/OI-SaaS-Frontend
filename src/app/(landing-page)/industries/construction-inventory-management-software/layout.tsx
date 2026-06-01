import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Inventory Management Software | Owners Inventory",
  description: "Construction inventory software to track stock in real time, automate billing, manage multi-location warehouses, and get insights to grow your business faster.",
  keywords: [
    "construction inventory management software",
    "construction inventory management system",
    "construction inventory software",
    "construction stock management software",
    "inventory management software for construction business",
    "construction inventory tracking software"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/construction-inventory-management-software"
  }
}

export default function ConstructionInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
