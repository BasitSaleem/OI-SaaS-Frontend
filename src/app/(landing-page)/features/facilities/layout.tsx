import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities Management | Owners Inventory",
  description: "Efficiently manage your physical assets and facilities in one place.",
  keywords: ["facilities", "asset management", "operations", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/facilities",
  },
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
