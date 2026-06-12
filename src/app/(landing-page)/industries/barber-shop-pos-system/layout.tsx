import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barber Shop POS System | Owners Inventory",
  description: "Barber shop POS system to speed up checkout, manage appointments, track retail products, and process payments from one dashboard. Start your free trial today.",
  keywords: ["POS system for barber shops", "barber shop POS system", "barber shop POS software", "POS software for barber shops", "grooming POS system", "grooming POS software", "best POS system for barber shops", "POS for barber shops", "hair salon POS system"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/barber-shop-pos-system",
  },
};

export default function BarberShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
