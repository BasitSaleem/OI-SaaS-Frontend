import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales & Order Management Software – Owners Inventory",
  description: "Manage sales, quotes, orders & invoices with real-time tracking, dashboards, exports & workflow tools. Centralize sales for retail, wholesale, restaurants & more.",
  keywords: ["sales and order management software", "sales tracking dashboard", "manage invoices & orders", "real-time sales monitoring", "export sales data", "workflow order statuses", "POS sales integration", "sales solution for retail & wholesale"],
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
