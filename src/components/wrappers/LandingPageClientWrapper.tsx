"use client";

import Footer from "@/components/pages/footer/Footer";
import LenisProvider from "@/components/pages/lenisProvider/LenixProvider";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import FullPageLoader from "@/components/common-components/FullPageLoader";

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
          {/* <Suspense fallback={<FullPageLoader />}>{children}</Suspense> */}
          <Suspense fallback={null}>{children}</Suspense>
        </div>
      </LenisProvider>
      <Footer />
    </>
  );
}
