import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Management | Owners Inventory",
  description: "Streamline human resources and employee tracking in one platform.",
  keywords: ["HR", "employee management", "payroll", "Owners Inventory"],
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
