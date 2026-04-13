import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Store Inventory Management Software | Owners Inventory",
  description: "Inventory management software for retail store by Owners Inventory with real-time stock tracking, billing, and reports. Manage sales and inventory easily.",
  keywords: ["retail store inventory management software", "retail inventory management software", "store inventory software", "retail stock management system", "retail stock management software", "retail inventory software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/retail-store-inventory-management-software",
  },
};

export default function RetailStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
