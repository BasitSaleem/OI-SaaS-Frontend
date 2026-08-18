import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics Store POS Software | Owners Inventory",
  description: "Track serials, manage IMEI, and sync stock across locations with POS software built for electronics retailers. Start your free trial today.",
  keywords: ["electronics store pos", "electronics store pos system", "pos software for electronics store70", "electronic store pos​", "electronics store pos software", "pos system for electronics store", "pos for electronic store", "pos system for electronic store", "electronic store pos software"],
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
