"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/tools-hero.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/tools-whychose.webp";
import {
  TOOLS_FAQS,
  TOOLS_FEATURES_CARDS,
  TOOLS_INDUSTRIES,
  TOOLS_TESTIMONIALS,
  TOOLS_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/toolsData";
import { POS_LAYOUT_PATTERNS } from "@/constant/subfeatures/posData";

import TrustedBySection from "@/components/common-components/TrustedBySection";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";
import FeaturesTestimonials from "@/components/pages/features-page/FeaturesTestimonials";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubFeaturesHero from "@/components/pages/features-page/SubFeaturesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";

const Page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="General Tools: Simplify Your Inventory Management"
        description="Take control of your inventory with smart, easy-to-use tools designed for efficiency. From quick edits to bulk updates, General Tools help you save time, reduce errors, and keep your inventory organized effortlessly."
        image={heroBanner}
        imageClassName="lg:my-14 my-11 max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Valued Clients"
        paragraph="Owners Inventory helps businesses like Al-Asif and Bright Home manage inventory smarter and more efficiently. It simplifies operations, increases visibility, and improves decision making driving their success."
      />
      <KeyHighlights
        heading="Key Highlights"
        features={TOOLS_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Our Tools?"
        paragraph="Our tools are designed to help inventory management be more intelligent, quicker, and simpler. They are created with accuracy and performance in mind allowing you to save time, minimize errors and keep full control of your business activities."
        cards={TOOLS_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Empower"
          paragraph="General Tools are meant to help ease inventory management in a vast array of industries. These tools aid businesses in maintaining order, efficiency, and control of operations, including tracking of fast-moving products as well as maintaining complex stock records."
          buttonText="Explore All Industries"
          industries={TOOLS_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Supercharge Your Workflow"
        description="Handle updates, track actions, and manage stock changes in seconds without any confusion. Step into a faster, cleaner, and more controlled way of working with tools built to keep you ahead, always."
      />
      <FeaturesTestimonials
        testimonials={TOOLS_TESTIMONIALS}
        heading="What Our Clients Say"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart General Tools"
        secondDescription="Everything you need to manage everyday operations, simplify workflows, and keep your business running smoothly with essential tools."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQs"
          paragraph="The following are some of the typical inquiries that businesses have with regard to our General Tools. These responses will guide you in learning how the feature operates and how it can assist in making inventory management smoother, faster, and more precise."
          faqs={TOOLS_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;