import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florist POS System | Owners Inventory",
  description: "Manage flower stock, custom orders, and delivery scheduling with POS software built for florists. Real-time inventory tracking. Start free trial.",
  keywords: ["florist POS system", "flower shop point of sale", "florist inventory management software", "custom order management for florists", "flower shop inventory tracking", "delivery scheduling software for florists", "florist business management system"],
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
