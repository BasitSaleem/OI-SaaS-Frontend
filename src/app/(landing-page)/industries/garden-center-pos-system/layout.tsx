import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Center POS System for Nurseries and Bulk Material Sales",
  description: "Garden center POS system to track live plants, manage bulk soil or mulch sales, automate supplier orders, and coordinate landscaper accounts.",
  keywords: ["garden center pos system", "nursery pos software", "plant inventory system", "bulk materials pos"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/garden-center-pos-system",
  },
};

export default function GardenCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
