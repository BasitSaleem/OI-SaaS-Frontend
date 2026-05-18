import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Convenience Stores | Owners Inventory",
  description: "Convenience store POS system to track inventory & expiration dates, scan barcodes, handle promotions, and sync stock across multiple mart branches in real time.",
  keywords: [
    "POS system for convenience stores",
    "convenience store POS system",
    "convenience store POS software",
    "POS software for convenience stores",
    "mart POS system",
    "mart POS software",
    "best POS system for convenience stores",
    "POS for convenience stores",
    "mini mart POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/convenience-store-pos-system",
  },
};

export default function ConvenienceStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
