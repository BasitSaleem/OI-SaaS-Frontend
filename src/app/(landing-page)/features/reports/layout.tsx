import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Reports | Owners Inventory",
  description: "Generate detailed business reports to stay on top of your inventory, sales, and performance.",
  keywords: ["business reports", "inventory reports", "sales analytics", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/reports",
  },
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
