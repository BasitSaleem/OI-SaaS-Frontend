import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Food Trucks | Owners Inventory",
  description: "Speed up counter queues at your food truck with our Food Truck POS system. Manage modifiers, food ingredients inventory, split bills, and track cashier shifts in real time.",
  keywords: [
    "POS system for food trucks",
    "food truck POS system",
    "food truck POS software",
    "best POS for food truck",
    "mobile food truck POS system",
    "street food POS software",
    "owners inventory",
    "food cart POS system",
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/food-truck-pos-system",
  },
};

export default function FoodTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
