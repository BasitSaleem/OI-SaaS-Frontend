import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Resource Management System | Owners Inventory",
  description: "Manage employees, attendance, payroll, roles, and performance in one system. Owners Inventory HR tools help streamline workforce tasks and improve productivity.",
  keywords: ["HR management software", "Human resource software", "Employee management system", "Workforce management tool", "Staff attendance software"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownersinventory.com/features/hr",
  },
};

export default function HrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
