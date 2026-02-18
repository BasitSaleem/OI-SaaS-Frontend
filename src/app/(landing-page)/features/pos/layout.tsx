import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Point of Sale (POS) | Owners Inventory",
  description: "Efficient and reliable Point of Sale system tailored for your business needs.",
  keywords: ["POS", "Point of Sale", "retail technology", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/pos",
  },
};

export default function PosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
