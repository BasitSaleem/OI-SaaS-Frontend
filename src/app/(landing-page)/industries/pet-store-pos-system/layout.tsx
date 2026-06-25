import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Store POS System Software | Owners Inventory",
  description: "Run your pet store with a POS that tracks expiry dates, manages food and grooming stock, and speeds up checkout. Start your Owners Inventory free trial.",
  keywords: [
    "pet store POS system",
    "pet store POS software",
    "POS system for pet stores",
    "pet shop POS system",
    "pet store point of sale",
    "best POS system for pet stores"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/pet-store-pos-system",
  },
};

export default function PetStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
