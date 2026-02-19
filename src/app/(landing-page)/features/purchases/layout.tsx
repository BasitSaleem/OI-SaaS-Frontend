import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owners Inventory Software for Purchase Management",
  description: "Simplify purchasing with purchase orders, vendor tracking, cost control, approvals, and real-time inventory updates. Manage procurement workflows easily.",
  keywords: ["purchase management software", "procurement tracking system", "vendor and supplier management", "purchase order workflow", "cost tracking and receiving", "inventory procurement automation", "approval workflows", "purchasing solution for business"],
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
