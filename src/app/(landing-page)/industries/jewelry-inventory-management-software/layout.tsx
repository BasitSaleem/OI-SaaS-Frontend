import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Inventory Management Software | Owners Inventory",
  description: "Track jewelry stock, manage custom orders, sync multi-location inventory, and automate purchase orders with Owners Inventory's jewelry inventory software.",
  keywords: ["jewelry stock tracking system", "jewelry inventory management software", "jewelry inventory software", "jewelry store management software", "jewelry store inventory tracking system", "jewelry business inventory software", "real-time jewelry stock management"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/jewelry-inventory-management-software",
  },
};

export default function JewelryInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
