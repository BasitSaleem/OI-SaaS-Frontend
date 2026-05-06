import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Point of Sale System for Shoes Stores | Owners Inventory",
  description: "Shoes store POS system to speed up counter orders, sync inventory, manage payments, and handle peak-hour rushes from one connected platform built for footwear retailers.",
  keywords: ["point of sale system for shoes stores", "shoes store POS system", "POS system for shoe store", "footwear store POS system", "shoes store POS software", "POS for shoes and footwear stores", "best POS for shoe stores"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/shoe-stores-pos-system",
  },
};

export default function ShoesStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
