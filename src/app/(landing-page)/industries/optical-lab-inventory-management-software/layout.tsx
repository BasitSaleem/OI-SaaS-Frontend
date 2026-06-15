import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optical Lab Inventory Software | Owners Inventory",
  description: "Optical lab inventory management software to track lens blanks, frame stocks, and consumables, monitor lens breakages, and optimize lab workflow.",
  keywords: [
    "optical lab inventory management software",
    "optical lab inventory management system",
    "optical lab inventory software",
    "lens stock management software",
    "inventory management software for optical business",
    "optical laboratory stock tracking software"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/optical-lab-inventory-management-software"
  }
}

export default function OpticalLabInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
