import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Owners Inventory",
  description: "Learn about Owners Inventory's mission to simplify business operations through innovative inventory and POS solutions.",
  keywords: ["about us", "business operation", "inventory solution", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/company/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
