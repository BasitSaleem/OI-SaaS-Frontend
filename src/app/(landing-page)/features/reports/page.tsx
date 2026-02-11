"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/reports-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/reports-whychose.webp";
import {
  REPORTS_FAQS,
  REPORTS_FEATURES_CARDS,
  REPORTS_INDUSTRIES,
  REPORTS_TESTIMONIALS,
  REPORTS_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/reportsData";
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
        title="Turn Data into Decisions with Inventory Management Reports"
        description="Transform data into actionable insights by using powerful inventory management reports and point of sale reporting systems, all at one location."
        image={heroBanner}
        imageClassName="lg:mt-14 mt-11 max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Brands"
        paragraph="Leading brands like Al-Asif trust Owners Inventory to manage sales, stock, and performance with smart insights that boost efficiency and reduce waste. Join the businesses using our advanced inventory system for clearer decisions and sustainable growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={REPORTS_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Our Reporting Feature?"
        paragraph="Automated, integrated reporting designed to give you clear insights, better visibility, and full control over your daily operations."
        cards={REPORTS_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Serve"
          paragraph="Each business has a different story to tell so should your reports. Owners' Inventory provides inventory management reports and point of sale system reports that are tailored to your industry. Gain valuable insights, smarter analytics, and clear data visualization that enable you to make decisive business choices."
          buttonText="Explore All Industries"
          industries={REPORTS_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Make Every Report Count"
        description="Stop guessing and start knowing. With Owners Inventory’s inventory management reporting and point of sale report system, every decision is backed by real data."
      />
      <FeaturesTestimonials
        testimonials={REPORTS_TESTIMONIALS}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Reporting Tools"
        secondDescription="Everything you need to analyze performance, track insights, and make data-driven decisions with clear and actionable reports."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Your Reporting Questions, Answered"
          paragraph="Gain the clarity you require regarding the powerful inventory management reporting tools of Owners Inventory. We have also addressed the most frequently asked questions, so you can make the most of your point of sale reporting system, from setup to insights."
          faqs={REPORTS_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
