import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Inventory Software | Owners Inventory",
  description: "Construction inventory management software to track materials, tools, and equipment across sites, manage suppliers, and control costs. Start your free trial today.",
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
