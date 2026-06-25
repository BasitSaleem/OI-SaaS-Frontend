import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliance Store POS System | Owners Inventory",
  description: "Sell appliances faster with a POS that tracks multi-brand stock, manages warranties, and speeds up billing. Start your free trial with Owners Inventory today.",
  keywords: [
    "appliance store POS system",
    "appliance store POS software",
    "POS system for appliance stores",
    "appliance shop POS system",
    "appliance store point of sale",
    "best POS system for appliance stores"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/appliance-store-pos-system",
  },
};

export default function ApplianceStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
