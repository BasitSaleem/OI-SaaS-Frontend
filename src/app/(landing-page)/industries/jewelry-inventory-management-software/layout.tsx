import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Inventory Management Software | Owners Inventory",
  description: "Jewelry inventory management software with fast billing, stock tracking, and reports. Manage variants, sales, and suppliers easily. Book a demo or try it for free.",
  keywords: ["jewelry inventory management software", "jewelry inventory management", "jewelry store inventory software", "jewelry stock management system", "jewelry stock management software", "jewelry inventory software"],
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
