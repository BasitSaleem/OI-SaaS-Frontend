import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ice Cream Shop POS System | Owners Inventory",
  description: "Ice cream shop POS system to speed up counter orders, track flavors and toppings, manage inventory, and process payments. Start your Owners Inventory free trial.",
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
