import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Tools for Inventory & Operations | Owners Inventory",
  description: "Boost efficiency with smart business tools for inventory, reporting, operations, and workflow automation that support your POS and multi-location management.",
  keywords: ["business tools for inventory", "inventory management tools", "operations tools software", "POS support tools", "general tools for business systems"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/tools",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
