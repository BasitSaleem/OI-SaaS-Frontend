"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/hr-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/hr-whychose.webp";
import {
  HR_FAQS,
  HR_FEATURES_CARDS,
  HR_INDUSTRIES,
  HR_TESTIMONIALS,
  HR_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/hrData";
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
        title="Smarter HR for Growing Businesses"
        description="Change the way you deal with people using the best HR management software of 2026. Combine performance, payroll, and hiring in a single robust HR managerial system. Empower your company with an employee management software that is designed to expand as your business does."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Trusted by Businesses that Grow with Us"
        paragraph="We’re proud to partner with forward-thinking companies like Al-Asif and Bright Home, using Owners Inventory to automate payroll, organize HR tasks, and drive employee efficiency and growth."
      />
      <KeyHighlights
        heading="Features that Set Us Apart"
        features={HR_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location."
        cards={HR_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Powering People Across Every Industry"
          paragraph="Any business thrives on its people, and Owners Inventory provides you with the means to handle them with ease. Our Human Resource feature is easily adaptable to various industries to help you automate daily operations, keep things under control, and make teams stronger."
          buttonText="Explore All Industries"
          industries={HR_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Build Stronger Teams, Smarter"
        description="Take control of your workforce with tools that simplify hiring, attendance, and payroll — all in one place. Empower your people and let your business grow with confidence."
      />
      <FeaturesTestimonials
        testimonials={HR_TESTIMONIALS}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart HR Tools"
        secondDescription="Everything you need to manage employees, track attendance, streamline payroll, and support efficient workforce management."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything you Should Know About Owners Inventory HR"
          paragraph="We understand that deciding on the appropriate HR system is a huge decision; this is why we have simplified it. These are the answers to the most frequently asked questions of our Human Resource feature, so that you know exactly how it helps your business run more smoothly and intelligently."
          faqs={HR_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
