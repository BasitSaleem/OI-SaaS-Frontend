import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing Inventory Management Software | Owners Inventory",
  description: "Clothing inventory management software with fast billing, stock tracking, and reports. Manage sizes, sales, and suppliers easily. Book a demo or try it for free.",
  keywords: ["clothing inventory management software", "apparel inventory management software", "fashion inventory management software", "clothing stock management system", "apparel stock management software", "garment inventory software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/clothing-inventory-management-software",
  },
};

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
