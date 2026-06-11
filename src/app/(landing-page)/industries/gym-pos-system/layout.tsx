import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym POS System | Owners Inventory",
  description: "Gym POS system to track membership statuses, recurring drafts, class bookings, personal trainers, and pro shop checkout. Start your free trial today.",
  keywords: [
    "POS system for gyms",
    "gym POS system",
    "gym POS software",
    "best POS for gyms",
    "gym membership management POS",
    "fitness center POS software",
    "owners inventory",
    "health club POS system",
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
