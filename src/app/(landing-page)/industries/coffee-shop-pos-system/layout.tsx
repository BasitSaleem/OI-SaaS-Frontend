import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Shop POS System for Order and Ingredient Management",
  description: "Streamline your coffee shop operations with our all-in-one POS system. Manage orders, ingredients, payments, and customer loyalty in real time.",
  keywords: ["coffee shop pos system", "cafe management software", "pos system for coffee shops", "coffee shop inventory software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/coffee-shop-pos-system",
  },
};

export default function CoffeeShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
