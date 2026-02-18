import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS System with Inventory Management | Owners Inventory",
  description: "Powerful cloud based POS system by Owners Inventory to manage sales, billing, inventory, and multi location stores with real time updates and smart reporting.",
  keywords: ["POS system with inventory management", "POS system software", "Point of sale software", "Retail POS system", "Cloud based POS system", "POS software for small business", "POS and inventory software", "Business POS system"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/pos",
  },
};

export default function PosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
