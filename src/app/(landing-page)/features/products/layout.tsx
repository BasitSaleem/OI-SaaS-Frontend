import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog | Owners Inventory",
  description: "Organize and manage your entire product catalog with advanced categorization and variant tracking.",
  keywords: ["product catalog", "SKU management", "variant tracking", "Owners Inventory"],
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
