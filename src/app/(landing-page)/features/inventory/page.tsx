"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/operation-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/inventory-operations-page/why-chose-banner.webp";
import {
  INVENTORY_FAQS,
  INVENTORY_FEATURES_CARDS,
  INVENTORY_INDUSTRIES,
  INVENTORY_TESTIMONIALS,
  INVENTORY_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/inventoryData";

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

const getLayoutPatterns = (cardCount: number) => {
  switch (cardCount) {
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
  const layoutPatterns = getLayoutPatterns(INVENTORY_FEATURES_CARDS.length);

  return (
    <div>
      <SubFeaturesHero
        title="Smart Product Management for Smarter Sales"
        description="Easily manage and organize your catalog with a single, intuitive POS console. Transform chaos into clarity for faster, smarter product management."
        image={heroBanner}
        imageClassName="max-w-[1050px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Trusted by Leading Businesses"
        paragraph="We work with trusted brands like Al-Asif, and many growing companies to help them manage products, generate reports, and improve overall performance with fast, reliable tools."
      />
      <KeyHighlights
        heading="Key Highlights"
        features={INVENTORY_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Take full control of your inventory with Owners' Inventory. Our POS system makes product management easy, accurate, and efficient, helping your business grow smarter and faster."
        cards={INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry That Sells Smarter"
          paragraph="Whether it is inventory product management software or flexible catalog tools, Owners Inventory makes it easier to add, organize, and manage products in any industry."
          buttonText="Explore All Industries"
          industries={INVENTORY_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Simplify. Scale. Sell Smarter."
        description="Feel the convenience of inventory products management software that adds order, speed, and precision to each sale. On retail counters, in warehouses, store each product where it belongs, under your watch."
      />
      <FeaturesTestimonials
        testimonials={INVENTORY_TESTIMONIALS}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Inventory Operations"
        secondDescription="Everything you need to track stock, manage inventory workflows, and maintain accuracy across locations for smooth business operations."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Managing Products in POS"
          paragraph="Find the most frequently asked questions regarding how to use Owners Inventory to organize, track, and grow your business using smart product management in POS system tools."
          faqs={INVENTORY_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;