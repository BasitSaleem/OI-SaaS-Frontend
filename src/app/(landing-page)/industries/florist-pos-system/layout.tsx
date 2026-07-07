import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florist POS System for Fresh Stem and Bouquet Control",
  description: "Florist POS system to manage perishables, track fresh stem counts, schedule deliveries, and handle custom arrangements. Optimize seasonal orders and reduce waste.",
  keywords: ["florist pos system", "pos system for florist", "flower shop management software", "perishable inventory tracking"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/florist-pos-system",
  },
};

export default function FloristLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
