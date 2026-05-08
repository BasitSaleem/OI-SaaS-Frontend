import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Shoe Stores | Owners Inventory",
  description: "Shoe store POS system to track every size and style, speed up checkout, manage returns, and sync inventory across branches and online channels in real time.",
  keywords: ["POS system for shoe stores", "shoe store POS system", "shoe store POS software", "POS software for shoe stores", "footwear POS system", "footwear POS software", "best POS system for shoe stores", "POS for shoe stores", "shoe shop POS system"],
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
