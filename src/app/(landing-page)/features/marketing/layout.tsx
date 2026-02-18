import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Tools | Owners Inventory",
  description: "Boost your reach with integrated marketing and customer engagement tools.",
  keywords: ["marketing", "SEO", "customer engagement", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/marketing",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
