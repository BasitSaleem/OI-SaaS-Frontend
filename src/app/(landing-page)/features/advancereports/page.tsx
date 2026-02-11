"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  ADVANCE_REPORTS_FAQS,
  ADVANCE_REPORTS_FEATURES_CARDS,
  ADVANCE_REPORTS_INDUSTRIES,
  ADVANCE_REPORTS_TESTIMONIALS,
  ADVANCE_REPORTS_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/advanceReportsData";
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
        title="See Beyond the Numbers"
        description="Transform everyday transactions into meaningful insights. Our POS Advance Reporting System helps you track, analyze, and grow with precision."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
        ctaDesc="Get Started for Free"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Growing Businesses"
        paragraph="Businesses of all sizes from local retailers to enterprises like Al-Asif trust Owners Inventory to manage inventory, sales, and reports with ease. We help every client achieve smarter control, productive workflows, and measurable growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={ADVANCE_REPORTS_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Our Advanced Reporting"
        paragraph="Owners Inventory transforms your sales data into smart insights that help you plan better, sell smarter, and grow faster."
        cards={ADVANCE_REPORTS_WHY_CHOOSE_CARDS}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Serve"
          paragraph="Regardless of whether you are a manufacturer, distributor or retailer, our Advanced Reporting feature will enable you to transform business data into valuable insights. The best POS system with advanced reports will allow you to monitor performance, identify trends, and make a confident decision in any industry."
          buttonText="Explore All Industries"
          industries={ADVANCE_REPORTS_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Turn Data Into Decisions"
        description="Your data holds the answers, we help you uncover them. Experience the best POS system with advanced reports and make every number count."
      />
      <FeaturesTestimonials
        testimonials={ADVANCE_REPORTS_TESTIMONIALS}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Contact us to find out how Owners Inventory will make your business easier and larger. Complete the form below, and our team will follow up to book a free demo and address any questions that you have. Together, let's create smarter, faster, and more connected sales."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQs About Advanced Reporting"
          paragraph="With our sophisticated reporting, you can monitor inventory, sales, and make better business decisions. The following are some of the frequently asked questions by our users:"
          faqs={ADVANCE_REPORTS_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
