import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Store Inventory Management Software | Owners Inventory",
  description: "Ecommerce store inventory management software with fast order processing, stock tracking, and reports. Manage SKUs, sales channels, and suppliers easily. Book a demo or try it for free.",
  keywords: ["ecommerce inventory management software", "ecommerce store inventory management", "online store inventory software", "ecommerce stock management system", "ecommerce stock management software", "ecommerce inventory software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/ecommerce-store-inventory-management-software",
  },
};

export default function EcommerceInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
