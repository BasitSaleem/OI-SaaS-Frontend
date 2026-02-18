import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Tools | Owners Inventory",
  description: "Versatile business tools designed to help you organize and scale your operations effortlessly.",
  keywords: ["business tools", "productivity", "management", "Owners Inventory"],
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
