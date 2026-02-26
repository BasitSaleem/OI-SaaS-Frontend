"use client";
import "../globals.css";
import React from "react";
import Image from "next/image";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";

import HeroSection2 from "@/components/common-components/HeroSection2";
import TrustedBySection from "@/components/common-components/TrustedBySection";
import dynamic from "next/dynamic";

const TurningChaos = dynamic(() => import("@/components/pages/landing-page/TurningChaos"), { ssr: true });
const CaseStudies = dynamic(() => import("@/components/pages/landing-page/CaseStudy"), { ssr: true });
const FeaturesTabSection = dynamic(() => import("@/components/pages/landing-page/FeaturesTabSection"), { ssr: true });
const SmartWaytoSyncndSellSection = dynamic(() => import("@/components/pages/landing-page/SmartWaytoSyncndSellSection"), { ssr: true });
const UnifiedPlatform = dynamic(() => import("@/components/pages/landing-page/UnifiedPlatform"), { ssr: true });
const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const IndustryPosShowcase = dynamic(() => import("@/components/pages/landing-page/IndustryPosShowcase"), { ssr: true });
const PosIconsSection = dynamic(() => import("@/components/pages/landing-page/Smartway"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const SmartTools = dynamic(() => import("@/components/pages/landing-page/SmartTools"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const CalltoActionBottom = dynamic(() => import("@/components/pages/landing-page/CalltoActionBottom"), { ssr: true });

import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_PAGE_CONTENT,
} from "@/constant/landingPageData";



export default function Home() {
  return (
    <>
      <div className="font-onest overflow-x-hidden">
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
