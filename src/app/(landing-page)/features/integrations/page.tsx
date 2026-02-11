"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/integration-page/integration-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/integration-page/why-chose-banner.webp";
import {
  INTEGRATION_FAQS,
  INTEGRATION_FEATURES_CARDS,
  INTEGRATION_TESTIMONIALS,
  INTEGRATION_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/integrationData";
import { POS_LAYOUT_PATTERNS } from "@/constant/subfeatures/posData";

// 🔥 Dynamic Imports
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection")
);
const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction")
);
const FeaturesTestimonials = dynamic(
  () => import("@/components/pages/features-page/FeaturesTestimonials")
);
const KeyHighlights = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/KeyHighlights")
);
const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS")
);
const SubFeaturesHero = dynamic(
  () => import("@/components/pages/features-page/SubFeaturesHero")
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection")
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase")
);

const Page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Connect Businesses through Smart Integrations"
        description="Integrate operations with smooth third-party platforms and tools to unify your business with Owners Inventory’s Integration Module. Accounting, payments and marketing are all connected together by our integration-ready service."
        image={heroBanner}
        imageClassName="mt-11 max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Companies"
        paragraph="Owners Inventory helps brands like Al-Asif, Sportify, and ASK Food Industries connect their stores, manage inventory, and streamline financial processes, enabling them to scale smoothly with powerful integrations."
      />
      <KeyHighlights
        heading="Why Integrations Matters"
        features={INTEGRATION_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Owners Inventory Integration?"
        paragraph="Automated, integrated reporting designed to give you clear insights, better visibility, and full control over your daily operations."
        cards={INTEGRATION_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <FeaturesCallToAction
        title="Elevate Businesses Through Our Integration"
        description="With Owners Inventory, integrate all platforms, optimize data, and simplify daily tasks. Our integration module unifies marketing, sales, accounting, and payments for full team visibility."
      />
      <FeaturesTestimonials
        testimonials={INTEGRATION_TESTIMONIALS}
        heading="Clients’ Voices"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Integrations"
        secondDescription="Everything you need to connect your tools, sync data seamlessly, and streamline operations through powerful and reliable integrations."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Should Know About Owners Inventory Integration"
          paragraph="Gain the clarity you require regarding the powerful inventory management reporting tools of Owners Inventory. We have also addressed the most frequently asked questions, so you can make the most of your point of sale reporting system, from setup to insights."
          faqs={INTEGRATION_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;