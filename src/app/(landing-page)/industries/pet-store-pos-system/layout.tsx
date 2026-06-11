import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Store POS System | Owners Inventory",
  description: "Pet store POS system to track sizes, flavors, and variants, speed up checkout, and sync inventory across branches and online. Start your free trial today.",
  keywords: [
    "POS system for pet stores",
    "pet store POS system",
    "pet store POS software",
    "best POS for pet store",
    "pet supply retail POS",
    "pet shop POS software",
    "owners inventory",
    "pet supply POS system",
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
