import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sporting Goods POS System | Owners Inventory",
  description: "Sporting goods POS system to track sizes, brands, and variants, speed up checkout, and sync inventory across branches and online. Start your free trial today.",
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
