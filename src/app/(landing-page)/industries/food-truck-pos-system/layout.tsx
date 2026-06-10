import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Truck POS System | Owners Inventory",
  description: "Food truck POS system for fast mobile ordering, offline billing, real-time inventory, and multi-payment support on the go. Start your Owners Inventory free trial.",
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
