import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management Software for Clothing Stores",
  description: "Advanced inventory management software for clothing stores to manage sizes, colors, inventory, billing, and sales in real time. Keep stock accurate and improve efficiency.",
  keywords: ["inventory management software for clothing store", "clothing store inventory management", "inventory control for clothing retail", "best inventory software for clothing store"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/clothing-inventory-management-software",
  },
};

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
