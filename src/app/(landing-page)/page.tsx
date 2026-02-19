"use client";
import "../globals.css";
import React, { useEffect, Suspense } from "react";
import Image from "next/image";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";
import dynamic from "next/dynamic";


// Lazy load all components
const HeroSection2 = dynamic(
  () => import("@/components/common-components/HeroSection2"),
);
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection"),
);
const TurningChaos = dynamic(
  () => import("@/components/pages/landing-page/TurningChaos"),
);
const CaseStudies = dynamic(
  () => import("@/components/pages/landing-page/CaseStudy"),
);
const SmartWaytoSyncndSellSection = dynamic(
  () => import("@/components/pages/landing-page/SmartWaytoSyncndSellSection"),
);
const UnifiedPlatform = dynamic(
  () => import("@/components/pages/landing-page/UnifiedPlatform"),
);
const VoicesRealBusiness = dynamic(
  () => import("@/components/pages/landing-page/VoicesRealBusiness"),
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase"),
);
const PosIconsSection = dynamic(
  () => import("@/components/pages/landing-page/Smartway"),
);
const ToolsSection = dynamic(
  () => import("@/components/pages/landing-page/ToolsSection"),
);
const SmartTools = dynamic(
  () => import("@/components/pages/landing-page/SmartTools"),
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection"),
);
const CalltoActionBottom = dynamic(
  () => import("@/components/pages/landing-page/CalltoActionBottom"),
);
const FeaturesTabSection = dynamic(
  () => import("@/components/pages/landing-page/FeaturesTabSection"),
);

import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_PAGE_CONTENT,
} from "@/constant/landingPageData";



export default function Home() {
  return (
    <>
      <div className="font-onset overflow-x-hidden">
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
      </div>
    </>
  );
}
