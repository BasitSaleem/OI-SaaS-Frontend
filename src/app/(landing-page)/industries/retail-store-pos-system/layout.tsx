import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Inventory Management Software for Retail Store",
  description:
    "Inventory management software for retail store by Owners Inventory with real-time stock tracking, billing, and reports. Manage sales and inventory easily.",
  keywords: [
    "inventory management software for retail store",
    "retail inventory management software",
    "retail store inventory system",
    "inventory software for retail business",
    "retail stock management software",
    "retail inventory control system"
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/retail-store-pos-system",
  },
};

export default function RetailStorePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
