import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym POS System for Memberships, Billing & Retail",
  description: "Manage memberships, recurring billing, and retail sales from one gym POS system. Recover failed payments and run your front desk faster. Free trial available.",
  keywords: [
    "gym POS system",
    "gym POS software",
    "POS system for gyms",
    "gym membership POS system",
    "fitness studio POS system",
    "best POS for gyms"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/gym-pos-system",
  },
};

export default function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
