import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candy Store POS System | Owners Inventory",
  description: "Candy store POS system for fast billing, weight and unit-based selling, and real-time stock tracking for sweet shops. Start your Owners Inventory free trial today.",
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
