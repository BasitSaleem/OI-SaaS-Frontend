import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thrift Store POS System | Owners Inventory",
  description: "Specialized thrift store POS system to track unique SKU inventories, consignment payouts, donor records, and color-tag markdowns. Start your free trial today.",
  keywords: [
    "POS system for thrift stores",
    "thrift store POS system",
    "thrift shop POS software",
    "consignment POS system",
    "second hand retail POS",
    "thrift store inventory management",
    "owners inventory",
    "charity shop POS software",
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
