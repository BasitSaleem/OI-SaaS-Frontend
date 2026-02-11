"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/acounting-finance-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/acouting-finance-whychose.webp";
import {
  FINANCE_FAQS,
  FINANCE_FEATURES_CARDS,
  FINANCE_INDUSTRIES,
  FINANCE_TESTIMONIALS,
  FINANCE_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/financeData";

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

// Function to get layout patterns based on card count
const getLayoutPatterns = (cardCount: number) => {
  switch (cardCount) {
    case 2:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    case 4:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className:
            "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    default:
      // Return the 4-card layout as default
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
  }
};

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FINANCE_FEATURES_CARDS.length);

  return (
    <div>
      <SubFeaturesHero
        title="Accounting Made Effortless, Finances Made Clear"
        description="Gain control of your business by having an integrated POS and accounting system that monitors every sale, expense, and profit in real-time. Streamline finance, reduce errors, and make smarter financial decisions all in one dashboard."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Our Brands, Our Partners in Growth"
        paragraph="Owners Inventory helps retail brands manage their finances and operations. Trusted by Al-Asif, Brights Home, and others, we support efficiency, transparency, and sustainable growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={FINANCE_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="By choosing Owners Inventory, you are not just adopting software. You are implementing a complete purchasing strategy designed for control and growth. Our platform transforms purchasing from a cost center into a strategic advantage, ensuring every transaction is accurate."
        cards={FINANCE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry That Runs on Numbers"
          paragraph="Sell, serve, supply, whatever you do, proper accounting and finance management will keep your business on the right track. Owners Inventory is flexible and fits all workflows, provides real-time reporting of sales, costs, and performance."
          buttonText="Explore All Industries"
          industries={FINANCE_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Control Your Business Finances"
        description="Simplify your accounting, track every sale, and make smarter financial decisions with one powerful POS system. Join hundreds of growing businesses already managing their money in a smart way."
      />
      <FeaturesTestimonials
        testimonials={FINANCE_TESTIMONIALS}
        heading="What Our Clients Say"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Accounts & Finance Tools"
        secondDescription="Everything you need to manage finances, track transactions, monitor cash flow, and maintain accurate financial records with confidence."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Your Accounting Questions, Clearly Answered"
          paragraph="Running business finances does not need to be stressful. Owners Inventory unites your sales, accounting, and reporting into a single convenient system. Some frequent questions are listed here to help you understand how Owners Inventory simplifies all aspects of your financial management."
          faqs={FINANCE_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;