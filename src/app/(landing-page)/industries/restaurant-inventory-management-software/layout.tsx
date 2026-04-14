import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Inventory Management Software | Owners Inventory",
  description: "Restaurant inventory management software to track ingredients, control food costs, reduce waste, and manage stock in real time for better kitchen efficiency.",
  keywords: ["restaurant inventory management software", "restaurant inventory system", "inventory management software for restaurants", "restaurant stock management software"],
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
