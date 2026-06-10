import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenience Store POS System | Owners Inventory",
  description: "Convenience store POS system for fast barcode billing, real-time stock tracking, and multi-payment support across single or multiple stores. Start a free trial.",
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
