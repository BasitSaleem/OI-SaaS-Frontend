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

  const isCaseStudyDetail = pathname.includes("/case-studies/") && pathname.split("/").length > 2;

  return (
    <>
      <LenisProvider>
        <div key={pathname}>
          {children}
        </div>
      </LenisProvider>
      {!isCaseStudyDetail && <Footer />}
    </>
  );
}
