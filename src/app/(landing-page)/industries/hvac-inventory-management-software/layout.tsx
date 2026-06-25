import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Inventory Management Software | Owners Inventory",
  description: "Stop losing jobs to stockouts. HVAC inventory management software tracks parts across every van and warehouse in real time. Start free with Owners Inventory.",
  keywords: [
    "HVAC inventory management software",
    "HVAC inventory software",
    "inventory management software for HVAC",
    "HVAC parts inventory software",
    "HVAC stock management software",
    "best HVAC inventory software"
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
