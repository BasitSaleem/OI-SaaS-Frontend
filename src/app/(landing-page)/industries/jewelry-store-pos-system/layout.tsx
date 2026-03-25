import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Store POS System for Retail and Wholesale",
  description: "Run your jewelry store efficiently with advanced POS software. Manage inventory, sales, billing, and customers with ease and accuracy.",
  keywords: ["jewelry pos", "jewelry store management", "jewelry inventory tracking", "custom jewelry orders", "jewelry billing software", "Owners Inventory"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/jewelry-store-pos-system",
  },
};

export default function JewelryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
