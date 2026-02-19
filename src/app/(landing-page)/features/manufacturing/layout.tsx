import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Production Control Software | Owners Inventory",
  description: "Streamline manufacturing with BOMs, work orders, production tracking, cost control, and real-time inventory sync to improve efficiency and output.",
  keywords: ["manufacturing software", "production control system", "bill of materials (BOM) management", "work order tracking", "manufacturing workflow tools", "production cost optimization", "inventory & production sync"],
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
