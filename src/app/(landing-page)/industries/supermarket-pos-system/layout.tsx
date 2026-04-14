import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supermarket POS System for Billing and Inventory Control",
  description: "Supermarket POS system to manage billing, inventory, pricing, and stock in real time. Improve checkout speed, reduce errors, and streamline store operations.",
  keywords: ["supermarket pos system", "pos system for supermarket", "supermarket pos software", "supermarket inventory management system"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/supermarket-pos-system",
  },
};

export default function SupermarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
