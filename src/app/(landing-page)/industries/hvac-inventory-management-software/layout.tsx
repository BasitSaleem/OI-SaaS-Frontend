import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Inventory Management Software | Owners Inventory",
  description: "Stop losing money to stockouts and unplanned return trips. Owners Inventory gives HVAC contractors real-time parts visibility across every van and warehouse. Start free today.",
  keywords: [
    "hvac inventory management software",
    "hvac inventory management system",
    "hvac parts tracking software",
    "hvac stock management software",
    "inventory management software for hvac",
    "hvac van stock tracking",
    "hvac inventory tracking software",
    "hvac parts inventory system"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/hvac-inventory-management-software"
  }
}

export default function HvacInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
