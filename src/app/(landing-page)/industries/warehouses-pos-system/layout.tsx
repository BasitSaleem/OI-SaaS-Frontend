import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouses POS System | Owners Inventory",
  description: "Warehouse POS system to track SKUs, dimensions, and variants, speed up order processing, and sync inventory across facilities and sales channels. Start your free trial today.",
  keywords: [
    "POS system for warehouses",
    "warehouse POS system",
    "warehouse POS software",
    "best POS for warehouses",
    "warehouse inventory management POS",
    "warehouse management POS software",
    "owners inventory",
    "warehouse inventory POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/warehouses-pos-system",
  },
};

export default function WarehousesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
