import LandingPageClientWrapper from "@/components/wrappers/LandingPageClientWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management Software for Businesses | Owners Inventory",
  description: "Manage sales, inventory, purchases, and reporting in one powerful platform built for retail, wholesale, manufacturing, and ecommerce growth with Owners Inventory.",
  keywords: ["inventory management solutions", "inventory management system software", "inventory management systems", "inventory system software", "inventory management system", "inventory management software", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com",
  },
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingPageClientWrapper>{children}</LandingPageClientWrapper>;
}