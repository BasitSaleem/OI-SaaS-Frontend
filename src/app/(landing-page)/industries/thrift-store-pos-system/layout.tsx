import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thrift Store POS System for Unique Inventory",
  description: "A thrift store POS system built for donated, vintage, and one-of-a-kind stock. Flexible pricing, fast checkout, real-time tracking. Try Owners Inventory free.",
  keywords: [
    "thrift store POS system",
    "thrift store POS software",
    "POS system for thrift stores",
    "thrift shop POS system",
    "thrift store point of sale",
    "best POS system for thrift stores"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/thrift-store-pos-system",
  },
};

export default function ThriftStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
