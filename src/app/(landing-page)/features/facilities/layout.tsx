import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Multi-Location Facilities with Owners Inventory Software",
  description: "Centralize facility operations, manage stores & warehouses, track inventory and performance in real-time, and integrate POS across all locations with ease.",
  keywords: ["facility management software", "multi-location inventory tracking", "warehouse and store management", "real-time facility dashboard", "POS integration across locations"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/facilities",
  },
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
