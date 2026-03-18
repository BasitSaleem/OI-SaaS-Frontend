import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System for Small Retail Store Management",
  description:
    "POS system for small retail store that simplifies billing, inventory, payments, and reporting. Improve efficiency, control operations, and grow sales.",
  keywords: [
    "pos system for small retail store",
    "pos for small retail business",
    "best small business pos",
    "best pos system for small retail store",
    "best point of sale software for small retail business"
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/retail-store-pos-system",
  },
};

export default function RetailStorePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
