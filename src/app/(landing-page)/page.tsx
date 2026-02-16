"use client";
import "../globals.css";
import React, { useEffect, Suspense } from "react";
import Image from "next/image";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";
import dynamic from "next/dynamic";


// Lazy load all components
const HeroSection2 = dynamic(
  () => import("@/components/common-components/HeroSection2"),
  { ssr: false }
);
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection"),
  { ssr: false }
);
const TurningChaos = dynamic(
  () => import("@/components/pages/landing-page/TurningChaos"),
  { ssr: false }
);
const CaseStudies = dynamic(
  () => import("@/components/pages/landing-page/CaseStudy"),
  { ssr: false }
);
const SmartWaytoSyncndSellSection = dynamic(
  () => import("@/components/pages/landing-page/SmartWaytoSyncndSellSection"),
  { ssr: false }
);
const UnifiedPlatform = dynamic(
  () => import("@/components/pages/landing-page/UnifiedPlatform"),
  { ssr: false }
);
const VoicesRealBusiness = dynamic(
  () => import("@/components/pages/landing-page/VoicesRealBusiness"),
  { ssr: false }
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase"),
  { ssr: false }
);
const PosIconsSection = dynamic(
  () => import("@/components/pages/landing-page/Smartway"),
  { ssr: false }
);
const ToolsSection = dynamic(
  () => import("@/components/pages/landing-page/ToolsSection"),
  { ssr: false }
);
const SmartTools = dynamic(
  () => import("@/components/pages/landing-page/SmartTools"),
  { ssr: false }
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection"),
  { ssr: false }
);
const CalltoActionBottom = dynamic(
  () => import("@/components/pages/landing-page/CalltoActionBottom"),
  { ssr: false }
);
const FeaturesTabSection = dynamic(
  () => import("@/components/pages/landing-page/FeaturesTabSection"),
  { ssr: false }
);

import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_PAGE_CONTENT,
} from "@/constant/landingPageData";

// Full page loading component
const FullPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Owners Inventory...</p>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      try {
        history.scrollRestoration = "manual";
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <div className="font-onset">
        <Suspense fallback={<FullPageLoader />}>
          <HeroSection2
            title={HOME_PAGE_CONTENT.hero.title}
            description={HOME_PAGE_CONTENT.hero.description}
            video={HOME_PAGE_CONTENT.hero.video}
            variant={HOME_PAGE_CONTENT.hero.variant}
          />

          <TrustedBySection heading={HOME_PAGE_CONTENT.trustedBy.heading} />

          <TurningChaos
            title={HOME_PAGE_CONTENT.turningChaos.title}
            miniTitle={HOME_PAGE_CONTENT.turningChaos.miniTitle}
            description={HOME_PAGE_CONTENT.turningChaos.description}
          />

          <CaseStudies caseStudies={caseStudiesData} />

          <FeaturesTabSection />

          <SmartWaytoSyncndSellSection />

          <UnifiedPlatform />

          <VoicesRealBusiness />

          <IndustryPosShowcase
            mainHeading={HOME_PAGE_CONTENT.industryShowcase.mainHeading}
            paragraph={HOME_PAGE_CONTENT.industryShowcase.paragraph}
            buttonText={HOME_PAGE_CONTENT.industryShowcase.buttonText}
            industries={HOME_INDUSTRIES}
          />

          <PosIconsSection />

          <ToolsSection />

          <div className="wrapper">
            <SmartTools />
          </div>

          <div className="lg:pt-[100px] md:pt-40 pt-28">
            <FaqSection faqs={HOME_FAQS} />
          </div>

          <CalltoActionBottom />
        </Suspense>
      </div>
    </>
  );
}
