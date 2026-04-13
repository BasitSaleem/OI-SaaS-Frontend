import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Inventory Management Software | Owners Inventory",
  description: "Sync ecommerce stock in real time, manage multi-channel orders, and automate fulfillment with Owners Inventory's ecommerce inventory management software.",
  keywords: ["ecommerce inventory management software", "inventory management system for ecommerce", "online store inventory management", "ecommerce inventory software", "multi-channel inventory management", "real-time inventory sync ecommerce"],
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
