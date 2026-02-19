import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Software Integrations | Owners Inventory",
  description: "Connect Shopify, WooCommerce, QuickBooks, payments and marketing tools with Owners Inventory to sync data, reduce errors, and streamline your business processes.",
  keywords: ["Shopify integration", "WooCommerce integration", "QuickBooks integration", "payment gateway integrations", "marketing tool integration", "sync data in real time", "automated integration workflows", "integrated reporting tools"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/integrations",
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
