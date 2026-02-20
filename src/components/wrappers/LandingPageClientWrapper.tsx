"use client";

import Footer from "@/components/pages/footer/Footer";
import LenisProvider from "@/components/pages/lenisProvider/LenixProvider";
import { usePathname } from "next/navigation";

export default function LandingPageClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <LenisProvider>
        <div key={pathname}>
          {children}
        </div>
      </LenisProvider>
      <Footer />
    </>
  );
}
