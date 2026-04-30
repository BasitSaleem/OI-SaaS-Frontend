import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Salon POS Software for Billing, Stock & Bookings",
  description: "Beauty salon POS system to speed up billing, track retail stock, manage bookings, and handle split payments from one connected dashboard built for salons.",
  keywords: ["beauty salon POS system", "beauty salon point of sale system", "salon POS system", "POS system for beauty salons", "beauty salon POS software", "salon POS software", "point of sale system for salons"],
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
