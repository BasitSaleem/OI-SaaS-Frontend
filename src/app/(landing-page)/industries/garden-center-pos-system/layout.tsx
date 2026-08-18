import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Center POS System | Owners Inventory",
  description: "Track seasonal stock, plant variants, and bulk inventory with POS software built for garden centers and nurseries. Real-time sync. Start free trial.",
  keywords: ["garden center pos systems", "best pos system for garden center", "garden centre pos software", "garden point of sale", "garden center point of sale", "pos for garden center", "garden center pos", "garden center pos system", "garden pos", "garden center point of sale systems", "garden center management software", "nursery point of sale", "nursery pos"],
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
