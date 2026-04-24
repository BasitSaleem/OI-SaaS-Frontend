import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Salon POS System for Appointment and Inventory Control",
  description: "Advanced Beauty Salon POS system to manage appointments, inventory, services, and client data in real time. Optimize your salon operations and billing efficiency.",
  keywords: ["beauty salon pos system", "salon management software", "pos system for beauty salon", "beauty salon inventory software"],
  alternates: {
    canonical: "https://ownersinventory.com/industries/beauty-salon-pos-system",
  },
};

export default function BeautySalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
