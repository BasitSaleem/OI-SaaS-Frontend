import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Parts Inventory Management Software | Owners Inventory",
  description: "Auto parts inventory management software with fast billing, stock tracking, and reports. Manage variants, sales, and suppliers easily. Book a demo or try it for free.",
  keywords: ["auto parts inventory management software", "auto parts inventory management", "auto parts store inventory software", "auto parts stock management system", "auto parts stock management software", "auto parts inventory software"],
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
