import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Owners Inventory",
  description: "Explore the powerful features of Owners Inventory, from real-time tracking to advanced analytics.",
  keywords: ["inventory features", "real-time tracking", "analytics", "business tools"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
