import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Owners Inventory | Get in Touch",
  description: "Have questions about Owners Inventory? Contact our team for product support, pricing details, demos, or partnership inquiries.",
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
