import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Inventory Management Software for Small Business",
  description: "Manage stock, track orders, and streamline daily operations with Owners Inventory's inventory management software built for small businesses. Start free today.",
  keywords: [
    "inventory management software for small business",
    "small business inventory software",
    "inventory tracking software for small business",
    "best inventory software for small business"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/small-businesses-inventory-management-software"
  }
}

export default function SmallBusinessInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
