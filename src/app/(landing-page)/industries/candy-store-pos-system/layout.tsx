import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Candy Stores | Owners Inventory",
  description: "Speed up counter queues at your candy shop with our Candy Store POS system. Manage bulk weights, chocolates, inventory jars, split bills, and track cashier shifts in real time.",
  keywords: [
    "POS system for candy stores",
    "candy store POS system",
    "candy shop POS software",
    "best POS for candy store",
    "chocolate shop POS system",
    "sweet shop POS software",
    "owners inventory",
    "candy stand POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/candy-store-pos-system",
  },
};

export default function CandyStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
