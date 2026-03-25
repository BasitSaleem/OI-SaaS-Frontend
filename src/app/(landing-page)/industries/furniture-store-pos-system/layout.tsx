import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Store POS System & Retail Software",
  description: "Manage your furniture store with powerful POS and retail software. Track inventory, sales, and customers easily to boost efficiency and growth.",
  keywords: ["furniture pos", "furniture store management", "furniture inventory tracking", "furniture delivery tracking", "Owners Inventory"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/furniture-store-pos-system",
  },
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
