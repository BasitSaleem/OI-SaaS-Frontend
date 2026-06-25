import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optical Lab Management Software for Eyewear Labs",
  description: "Optical lab management software to process prescriptions accurately, track lens and frame stock, and cut costly remakes. Test Owners Inventory free today.",
  keywords: [
    "optical lab management software",
    "optical lab software",
    "lab management software for optical",
    "optical lab management system",
    "optical lab production software",
    "best optical lab software"
  ],
  alternates: {
    canonical: "https://ownersinventory.com/industries/optical-lab-inventory-management-software"
  }
}

export default function OpticalLabInventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
