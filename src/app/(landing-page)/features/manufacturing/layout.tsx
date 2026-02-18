import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Solutions | Owners Inventory",
  description: "Optimize your production lines and raw material tracking with our manufacturing tools.",
  keywords: ["manufacturing", "production", "raw materials", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/manufacturing",
  },
};

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
