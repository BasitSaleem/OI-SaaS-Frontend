import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Inventory Management Insights | Owners Inventory",
  description:
    "Expert strategies, industry trends, and practical tips on inventory management, POS pricing, and retail operations. Read the latest from Owners Inventory.",
  keywords: [
    "inventory management blog",
    "POS system pricing",
    "inventory management tips",
    "retail operations insights",
    "POS system cost",
    "inventory management strategies",
  ],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
