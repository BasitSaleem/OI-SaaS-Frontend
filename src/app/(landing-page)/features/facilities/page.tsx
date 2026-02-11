"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/facilities-herobanner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/facilities-whychose.webp";
import {
  FACILITIES_FAQS,
  FACILITIES_FEATURES_CARDS,
  FACILITIES_INDUSTRIES,
  FACILITIES_TESTIMONIALS,
  FACILITIES_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/facilitiesData";
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
        title="Smart Facilities, Seamless Operations"
        description="Owners Inventory will give you complete control of all stores, warehouses and work areas. Whether it is the management of various locations or the monitoring of stock and employee performance, our platform maintains the entire operation running smoothly all through a single user-friendly dashboard."
        imageClassName="max-w-[1000px]"
        image={heroBanner}
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Brands That Trust Us"
        paragraph="Owners Inventory empowers leading brands like Al-Asif to streamline operations, monitor performance, and expand efficiently  building lasting partnerships founded on trust and results."
      />
      <KeyHighlights
        heading="Key Features"
        features={FACILITIES_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location."
        cards={FACILITIES_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Facility Management Built for Every Industry"
          paragraph="Owners Inventory simplifies facility management by connecting warehouses and retail floors under one smart dashboard. Track operations, inventory, and staff in real time. Keep all locations efficient, connected, and ready to perform."
          buttonText="Explore All Industries"
          industries={FACILITIES_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Take Control of Every Facility Today"
        description="Unify your operations, track performance, and manage all locations effortlessly with Owners Inventory. Get the visibility and control your business deserves — all in one platform."
      />
      <FeaturesTestimonials
        testimonials={FACILITIES_TESTIMONIALS}
        heading="Voices of Our Partners"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Tools"
        secondDescription="Everything you need to manage your locations, monitor operations, and stay connected with your team efficiently."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know"
          paragraph="There is no need to complicate the management of various facilities. Owners Inventory allows you to track all the locations, streamline operations and make better decisions using a single connected facility management dashboard. Here are the most important questions answered for your ease to start the process of facility management."
          faqs={FACILITIES_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
