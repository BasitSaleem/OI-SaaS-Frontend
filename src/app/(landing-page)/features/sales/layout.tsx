import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Management | Owners Inventory",
  description: "Track sales performance and manage transactions with ease.",
  keywords: ["sales", "transaction", "performance", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/sales",
  },
};

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
