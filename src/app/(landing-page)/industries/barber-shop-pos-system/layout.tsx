import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best POS System for Barber Shops | Owners Inventory",
  description: "Barber shop POS system to manage appointments, stylists, and retail sales, speed up checkout, and sync schedules across branches in real time.",
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
