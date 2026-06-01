import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Ice Cream Shops & Parlors | Owners Inventory",
  description: "Speed up counter queues at your dessert parlor with our Ice Cream Shop POS system. Manage toppings, ice cream tub inventory, split bills, and track cashier shifts in real time.",
  keywords: [
    "POS system for ice cream shops",
    "ice cream shop POS system",
    "ice cream parlor POS software",
    "best POS for ice cream shop",
    "gelato shop POS system",
    "dessert shop POS software",
    "owners inventory",
    "ice cream truck POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/ice-cream-shop-pos-system",
  },
};

export default function IceCreamShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
