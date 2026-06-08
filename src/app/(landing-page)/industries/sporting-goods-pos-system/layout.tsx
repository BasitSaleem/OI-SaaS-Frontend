import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Sporting Goods Stores | Owners Inventory",
  description: "Speed up checkouts at your sporting goods store with our Sporting Goods POS system. Manage sizes, color variants, inventory levels, splits bills, and track cashier shifts in real time.",
  keywords: [
    "POS system for sporting goods stores",
    "sporting goods POS system",
    "sporting goods POS software",
    "best POS for sporting goods store",
    "sporting goods retail POS",
    "athletic wear POS software",
    "owners inventory",
    "sports shop POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/sporting-goods-pos-system",
  },
};

export default function SportingGoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
