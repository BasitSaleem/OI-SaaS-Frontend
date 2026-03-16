import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System for Hardware Store to Manage Sales and Inventory",
  description:
    "POS system for hardware store to manage inventory, billing, suppliers, and stock levels in one system. Improve checkout speed and maintain accurate inventory.",
  keywords: [
    "pos system for hardware store",
    "pos system for hardware stores",
    "best pos system for hardware stores",
    "best pos system for hardware store",
    "pos for hardware store",
    "pos software for hardware store",
    "hardware store pos system",
    "hardware store pos",
    "hardware store pos software",
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/hardware-pos-system",
  },
};

export default function HardwarePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
