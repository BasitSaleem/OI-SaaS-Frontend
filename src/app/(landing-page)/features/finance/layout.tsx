import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting and Finance Software | Owners Inventory",
  description: "Manage sales, expenses, cash flow, and financial reports in real time with integrated POS accounting and finance tools for smarter business decisions.",
  keywords: ["accounting and finance software", "financial management software", "POS accounting system", "business finance software", "integrated finance and POS software"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/accounts-and-finance",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
