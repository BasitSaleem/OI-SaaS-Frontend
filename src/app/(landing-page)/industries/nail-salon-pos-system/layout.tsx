import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Salon POS System for Scheduling and Commission Tracking",
  description: "Nail salon POS system to manage client appointments, automate technician commission splitting, track retail polish or gel inventory, and run multi-location salons.",
  keywords: ["nail salon pos system", "salon billing software", "appointment scheduling pos", "technician commission tracker"],
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
