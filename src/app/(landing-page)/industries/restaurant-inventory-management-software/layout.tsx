import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Inventory Management Software | Owners Inventory",
  description: "Manage restaurant ingredients, recipes, and orders in real time. Automate prep and keep stock accurate with Owners Inventory's restaurant inventory management software.",
  keywords: ["restaurant inventory management software", "inventory management system for restaurant", "food service inventory management", "restaurant ingredient tracking", "kitchen inventory software", "restaurant management system"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/restaurant-inventory-management-software",
  },
};

export default function RestaurantInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
