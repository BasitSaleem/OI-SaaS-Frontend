"use client";

import Footer from "@/components/pages/footer/Footer";
import LenisProvider from "@/components/pages/lenisProvider/LenixProvider";
import React from "react";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LenisProvider>{children}</LenisProvider>
      <Footer />
    </>
  );
}