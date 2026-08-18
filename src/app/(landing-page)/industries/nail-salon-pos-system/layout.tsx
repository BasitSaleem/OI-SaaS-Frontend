import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Salon POS System | Owners Inventory",
  description: "Manage bookings, inventory, and technician schedules with POS software built for nail salons. Real-time stock tracking. Start your free trial.",
  keywords: [" nail salon pos system", "best pos system for nail salon", "salon pos software", "nail salon point of sale", "pos for nail salon", "nail salon booking software", "nail salon inventory management", "salon appointment scheduling software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/nail-salon-pos-system",
  },
};

export default function NailSalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
