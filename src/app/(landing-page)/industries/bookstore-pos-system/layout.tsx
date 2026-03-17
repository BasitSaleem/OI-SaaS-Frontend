import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookstore POS System for Inventory and Title Management",
  description:
    "Bookstore POS system to manage sales, titles, customer pre-orders, and inventory in real time. Improve billing speed and keep bookstore operations organized.",
  keywords: [
    "bookstore pos system",
    "pos system for bookstore",
    "bookstore pos software",
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
