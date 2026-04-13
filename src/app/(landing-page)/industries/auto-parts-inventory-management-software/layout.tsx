import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Parts Inventory Management Software | Owners Inventory",
  description: "Track auto parts stock in real time, manage supplier orders, and streamline multi-location repair workflows with Owners Inventory's auto parts inventory software.",
  keywords: ["auto parts inventory management software", "automotive inventory management software", "automotive parts inventory software", "auto repair shop inventory management", "auto parts inventory software for small business", "real-time auto parts stock visibility"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/auto-parts-inventory-management-software",
  },
};

export default function AutoPartsInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
