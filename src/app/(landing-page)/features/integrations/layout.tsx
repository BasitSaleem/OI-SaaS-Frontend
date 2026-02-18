import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations Hub | Owners Inventory",
  description: "Connect your favourite business apps and streamline your workflow with our API integrations.",
  keywords: ["integrations", "API", "business apps", "Owners Inventory"],
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
