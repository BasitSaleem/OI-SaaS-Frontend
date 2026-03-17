import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookstore POS Systems for Inventory and Sales Management",
  description:
    "Bookstore POS systems to manage book inventory, sales, billing, and stock tracking in one platform. Improve checkout speed and keep bookstore records organized.",
  keywords: [
    "bookstore pos systems",
    "bookstore pos software",
    "pos systems for bookstores",
    "bookstore inventory management system",
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/industries/bookstore-pos-system",
  },
};

export default function BookstorePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
