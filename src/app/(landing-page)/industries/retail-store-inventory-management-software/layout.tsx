import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Store Inventory Management Software | Owners Inventory",
  description: "Retail store inventory management software with fast billing, stock tracking, and reports. Manage variants, sales, and suppliers easily. Book a demo or try it for free.",
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
