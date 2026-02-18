import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchases & Procurement | Owners Inventory",
  description: "Simplify your procurement process and track purchase orders from suppliers.",
  keywords: ["purchases", "procurement", "PO tracking", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/purchases",
  },
};

export default function PurchasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
