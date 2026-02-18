import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Reports | Owners Inventory",
  description: "Gain deep insights into your business with our comprehensive advanced reporting tools.",
  keywords: ["reports", "analytics", "business intelligence", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/advancereports",
  },
};

export default function AdvanceReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
