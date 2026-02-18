import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Accounting | Owners Inventory",
  description: "Manage your business finances and accounting with integrated tools.",
  keywords: ["finance", "accounting", "ledger", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/finance",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
