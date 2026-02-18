import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management | Owners Inventory",
  description: "Real-time inventory tracking and management to help your business grow faster.",
  keywords: ["inventory tracking", "stock management", "WMS", "Owners Inventory"],
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
