import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People & HR | Owners Inventory",
  description: "Manage your team efficiently with integrated people management and employee tracking.",
  keywords: ["people management", "team", "HR", "Owners Inventory"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/people",
  },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
