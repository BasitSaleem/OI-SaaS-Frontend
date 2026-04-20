import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Inventory Management Software | Owners Inventory",
  description: "Improve hotel operations with Owners Inventory by managing inventory in real time reducing waste and maintaining full control across departments.",
  keywords: [
    "hotel inventory management software",
    "hotel inventory system",
    "inventory management software for hotels",
    "hotel stock management software"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/hotel-inventory-management-software"
  }
}

export default function HealthcareInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
