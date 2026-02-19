import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People & Staff Management Software | Owners Inventory",
  description: "Manage employees, customers, and vendors with flexible role control, attendance, performance tracking, and centralized profiles in one unified business platform.",
  keywords: ["people management software", "staff management system", "employee and customer management", "workforce management software", "user role management software"],
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
