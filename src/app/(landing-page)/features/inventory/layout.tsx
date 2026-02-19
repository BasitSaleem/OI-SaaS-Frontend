import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Inventory Control with Owners Inventory Software",
  description: "Track stock in real time, manage SKUs, streamline inventory operations, sync across locations, reduce shortages, and improve efficiency with Owners Inventory.",
  keywords: ["inventory management software", "real-time stock tracking", "SKU and warehouse control", "inventory optimization tools", "multi-location inventory sync", "reduce stock shortages", "inventory dashboard analytics", "inventory operations"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/inventory",
  },
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
