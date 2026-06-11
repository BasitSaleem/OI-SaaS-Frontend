import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliance Store POS System | Owners Inventory",
  description: "Appliance store POS system to track model inventory, serial numbers, and warranties, manage deliveries, and calculate commissions. Start your free trial today.",
  keywords: [
    "POS system for appliance stores",
    "appliance store POS system",
    "appliance store POS software",
    "best POS for appliance stores",
    "appliance inventory management POS",
    "appliance retail management software",
    "owners inventory",
    "appliance showroom POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/appliance-store-pos-system",
  },
};

export default function ApplianceStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
