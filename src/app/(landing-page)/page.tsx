"use client";
import "../globals.css";
import React from "react";
import Image from "next/image";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";

import HeroSection2 from "@/components/common-components/HeroSection2";
import TrustedBySection from "@/components/common-components/TrustedBySection";
import TurningChaos from "@/components/pages/landing-page/TurningChaos";
import CaseStudies from "@/components/pages/landing-page/CaseStudy";
import SmartWaytoSyncndSellSection from "@/components/pages/landing-page/SmartWaytoSyncndSellSection";
import UnifiedPlatform from "@/components/pages/landing-page/UnifiedPlatform";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";
import PosIconsSection from "@/components/pages/landing-page/Smartway";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import SmartTools from "@/components/pages/landing-page/SmartTools";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import FeaturesTabSection from "@/components/pages/landing-page/FeaturesTabSection";

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
