import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Store POS System | Inventory & Sales Management | Owners Inventory",
  description: "Owners Inventory is a POS system that enables you to run your furniture store accurately, fast, and in full control. Order large quantities, manage custom orders, deliveries and payments.",
  keywords: ["furniture pos", "furniture store management", "furniture inventory tracking", "furniture delivery tracking", "Owners Inventory"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/furniture-store-pos-system",
  },
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
