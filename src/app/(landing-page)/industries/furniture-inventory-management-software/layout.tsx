import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Furniture Inventory Management Software",
  description: "Scale your furniture business with Owners Inventory's management software. Track variants, manage multi-location stock, and streamline order fulfillment.",
  keywords: [
    "furniture inventory management software",
    "furniture store inventory software",
    "furniture stock tracking",
    "best inventory software for furniture business"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/furniture-inventory-management-software"
  }
}

export default function FurnitureInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
