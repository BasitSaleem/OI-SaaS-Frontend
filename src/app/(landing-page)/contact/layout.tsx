import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Owners Inventory",
  description: "Get in touch with Owners Inventory for support, sales, or partnership inquiries.",
  keywords: ["contact us", "support", "sales", "partnership", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
