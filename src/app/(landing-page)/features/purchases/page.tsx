"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/purchases-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/purchases-whychose.webp";
import {
  PURCHASES_FAQS,
  PURCHASES_FEATURES_CARDS,
  PURCHASES_INDUSTRIES,
  PURCHASES_TESTIMONIALS,
  PURCHASES_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/purchasesData";

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
  const layoutPatterns = getLayoutPatterns(PURCHASES_FEATURES_CARDS.length);

  return (
    <div>
      <SubFeaturesHero
        title="Handle All Your Purchases in One Place"
        description="Owners Inventory automates your entire purchasing process, from managing suppliers to generating bills, all in one place. Track, buy, and manage everything with ease through our intelligent Automated Purchase Management system."
        image={heroBanner}
        imageClassName="max-w-[1000px] lg:mt-14 mt-11"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Our Valued Clients"
        paragraph="Businesses like Al-Asif and ASK Food Industries rely on Owners Inventory to automate and simplify their purchasing operations. Our system improves efficiency, reduces manual work, and ensures accuracy throughout the entire process."
      />
      <KeyHighlights
        heading="Key Features"
        features={PURCHASES_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="By choosing Owners Inventory, you are not just adopting software. You are implementing a complete purchasing strategy designed for control and growth. Our platform transforms purchasing from a cost center into a strategic advantage, ensuring every transaction is accurate."
        cards={PURCHASES_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Purchases Tailored for Your Industry"
          paragraph="Whether you operate as a Manufacturer, a Wholesaler or a Retailer, our Purchases Function is specifically designed to manage your unique operations with perfection. Whether you are managing huge bulk supplies or delicate goods, Owners Inventory adapts to your unique purchasing needs."
          buttonText="Explore All Industries"
          industries={PURCHASES_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Buy Smarter. Manage Better. Grow Faster."
        description="Streamline every purchase step with our intelligent Purchase Order Processing System. Using tools that help you stay organized, cost efficient and ready for growth with Owners Inventory."
      />
      <FeaturesTestimonials
        testimonials={PURCHASES_TESTIMONIALS}
        heading="Words That Inspire Us"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Purchasing Tools"
        secondDescription="Everything you need to manage purchases, track suppliers, control costs, and streamline procurement for better business efficiency."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Purchases Management"
          paragraph="Learn how Owners Inventory can simplify procurement and strengthen your business with intelligent purchasing tool."
          faqs={PURCHASES_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;