import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Store POS System | Tracking High-Value Inventory | Owners Inventory",
  description: "Owners Inventory provides a specialized POS system for jewelry stores to manage high-value items, track repairs, and automate billing based on live metal rates.",
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
