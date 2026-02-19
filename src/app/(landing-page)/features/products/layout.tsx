import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Products with Inventory Control | Owners Inventory",
  description: "Organize products with categories, variants, SKUs, pricing, labels, and images. Sync product data with inventory operations and sales in real time.",
  keywords: ["product management software", "product catalog control", "SKU & variant management", "pricing rules software", "inventory & product sync", "product attributes dashboard", "real-time product updates"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
