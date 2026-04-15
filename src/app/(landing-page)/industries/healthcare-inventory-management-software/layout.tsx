import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Inventory Management Software | Owners Inventory",
  description: "Track medical supplies, monitor expiry dates, and manage multi-location healthcare inventory in real time with Owners Inventory's healthcare inventory software.",
  keywords: ["healthcare inventory management software", "medical inventory management software", "medical inventory software", "hospital inventory management software", "medical supplies inventory tracking"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/healthcare-inventory-management-software",
  },
};

export default function HealthcareInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
