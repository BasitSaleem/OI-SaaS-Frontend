import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce Inventory Management & POS Sync | Owners Inventory",
  description: "Manage ecommerce sales with real-time inventory sync, POS integration, secure checkout, customizable storefront, banners, and product filters by Owners Inventory.",
  keywords: ["ecommerce inventory management software", "ecommerce POS integration", "online store inventory sync", "unified ecommerce platform"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/ecommerce",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
