import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery POS System for Inventory and Order Management",
  description:
    "Bakery POS system to manage sales, ingredients, custom cake orders, and inventory in real time. Improve billing speed and keep bakery operations organized.",
  keywords: [
    "bakery pos system",
    "pos system for bakery",
    "bakery pos software",
    "bakery inventory management system",
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/bakery-pos-system",
  },
};

export default function BakeryPosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
