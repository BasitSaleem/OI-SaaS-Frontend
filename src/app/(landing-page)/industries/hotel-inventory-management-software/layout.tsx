import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Inventory Management Software | Owners Inventory",
  description: "Track linens, amenities, F&B supplies, and manage multi-property hotel inventory in real time with Owners Inventory's hotel inventory management software.",
  keywords: [
    "hotel inventory management software",
    "hospitality inventory management system",
    "hotel supplies tracking software",
    "hotel inventory control system",
    "housekeeping inventory software"
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
