import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System for Bakery to Manage Sales and Orders",
  description:
    "POS system for bakery to manage orders, billing, ingredients, and stock levels in one system. Improve checkout speed and maintain accurate inventory for your bakery.",
  keywords: [
    "pos system for bakery",
    "pos system for bakeries",
    "best pos system for bakery",
    "best pos system for bakeries",
    "pos for bakery",
    "pos software for bakery",
    "bakery pos system",
    "bakery pos",
    "bakery pos software",
    "bakery point of sale system",
    "pos system for bakery store",
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
