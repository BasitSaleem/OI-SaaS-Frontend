import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Point of Sale System for Coffee Shops | Owners Inventory",
  description: "Coffee shop POS system to speed up counter orders, sync inventory, manage payments, and handle peak-hour rushes from one connected platform built for cafes.",
  keywords: ["point of sale system for coffee shops", "coffee shop POS system", "POS system for coffee shop", "cafe POS system", "coffee shop POS software", "POS for cafes and coffee shops", "best POS for coffee shops"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/coffee-shop-pos-system",
  },
};

export default function CoffeeShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
