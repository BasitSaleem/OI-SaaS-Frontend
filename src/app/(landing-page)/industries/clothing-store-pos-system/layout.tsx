import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System for Clothing Stores with Inventory Control",
  description: "POS system for clothing stores to manage sizes, colors, inventory, billing, and sales in real time. Improve checkout speed and keep stock accurate.",
  keywords: ["pos system for clothing store", "clothing store pos system", "pos system for retail clothing store", "best pos system for clothing store", "best pos system for retail clothing store", "pos systems for clothing store"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/clothing-store-pos-system",
  },
};

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
