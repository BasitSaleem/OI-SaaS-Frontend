import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics POS System for Inventory and Serial Tracking",
  description: "Electronics store POS system to manage high-value inventory, serial numbers, warranties, and multi-branch operations. Streamline checkout and reduce leakage.",
  keywords: ["electronics pos system", "pos system for electronics store", "electronics retail software", "serial number tracking pos"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/electronics-pos-system",
  },
};

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
