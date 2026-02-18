import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce Integration | Owners Inventory",
  description: "Seamlessly connect your online store with Owners Inventory for unified stock management.",
  keywords: ["ecommerce", "online store", "sync", "Owners Inventory"],
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
