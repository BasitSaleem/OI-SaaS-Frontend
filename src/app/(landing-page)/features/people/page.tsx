"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/people-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/people-whychose.webp";
import {
  PEOPLE_FAQS,
  PEOPLE_FEATURES_CARDS,
  PEOPLE_INDUSTRIES,
  PEOPLE_TESTIMONIALS,
  PEOPLE_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/peopleData";
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
        title="Empower Your People, Power Your Business"
        description="Experience the future of business management, quick, unified, and growth-oriented. Powerful automation, real-time insights, and seamless integrations will allow you to work smarter, scale faster, and save more, all within one intelligent platform, with Owners Inventory."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        variant="animation2"
      />

      <TrustedBySection
        heading="Our Trusted Brands"
        paragraph="We take pride in partnering with leading brands like Al-Asif and Bright Home, along with many global retail and service companies. Our platform drives smarter operations, seamless management, and sustainable growth. Together, we’re shaping a future of faster, more efficient businesses."
      />
      <KeyHighlights
        heading="Our Key Features"
        features={PEOPLE_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        cards={PEOPLE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry"
          paragraph="The People feature of Owners Inventory is built to fit the way any business operates, be it a retail store or a restaurant, wholesaler or pharmacy, or a fashion brand. Whatever your business is, Owners Inventory can put your operation in a better place to run smoothly, faster, and smarter."
          buttonText="Explore All Industries"
          industries={PEOPLE_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Turn Teams into Powerhouses"
        description="Start managing your team with data-driven efficiency and effortless control — all through Owners Inventory’s People feature."
      />
      <FeaturesTestimonials
        testimonials={PEOPLE_TESTIMONIALS}
        heading="Words That Inspire Our Work"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Tools"
        secondDescription="Everything you need to organize your staff, set roles, and track performance, all while keeping your business running smoothly."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Were About to Ask"
          paragraph="We have collected the most frequently asked questions regarding People, the workforce management feature of Owners Inventory. Whether you are setting up and automating or tracking performance and analytics, here is all you need to know."
          faqs={PEOPLE_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
