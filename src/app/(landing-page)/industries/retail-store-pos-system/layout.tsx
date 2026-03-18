import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Store POS Systems for Inventory and Sales Management",
  description:
    "Retail Store POS systems to manage inventory, sales, billing, and stock tracking in one platform. Improve checkout speed and keep records organized.",
  keywords: [
    "retail store pos systems",
    "retail store pos software",
    "pos systems for retail stores",
    "retail inventory management system",
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/retail-store-pos-system",
  },
};

export default function RetailStorePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
