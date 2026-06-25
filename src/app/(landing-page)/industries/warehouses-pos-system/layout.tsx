import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse POS System for Real-Time Stock Control",
  description: "Warehouse POS system that tracks inventory across every location, speeds up order processing, and cuts dispatch errors. Try Owners Inventory free today.",
  keywords: [
    "warehouse POS system",
    "warehouse POS software",
    "POS system for warehouse",
    "warehouse inventory POS",
    "warehouse management POS system",
    "best warehouse POS system"
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
