"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../public/assets/features-page/hero-section-banners/purchases-banner.webp";
import whyChoseBanner from "../../../../../public/assets/about-us/why-chose-banner.webp";
import WhoWeAre from "@/components/pages/about-us/whoWeAre";
import PhilosophyIcons from "@/components/icons/philosophyIcons";

// 🔥 Dynamic Imports

const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction"),
);

const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"),
);

const MapComponent = dynamic(
  () => import("@/components/pages/about-us/MapComponent"),
  { ssr: false },
);

const AboutHero = dynamic(
  () => import("@/components/pages/about-us/aboutHero"),
);
const OurPhilosophy = dynamic(
  () => import("@/components/pages/about-us/ourPhilosophy"),
);

const WhoWeServe = dynamic(
  () => import("@/components/pages/about-us/whoWeServe"),
);


const Page = () => {

  return (
    <div>
      <AboutHero
        title="Empowering Businesses with Complete Inventory Control"
        description="Owners Inventory integrates POS, eCommerce, and inventory management into one system, streamlining operations and giving retailers confidence, clarity, and control."
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* Fixed: Using capitalized component name */}
      <WhoWeAre />

      <OurPhilosophy
        heading="Our Philosophy"
        paragraph="At Owners Inventory, we are of the opinion that visibility and control are the real owners. Business owners can make smarter decisions, minimize inefficiencies, and scale with confidence when they have a clear picture of what is going on in their business. We have a couple of principles that our platform is based on."
        cards={[
          {
            icon: <PhilosophyIcons name="complication" size={40} />,
            title: "Power without complication",
            description:
              "Power without being complicated: Simple to operate, yet able to perform complicated tasks.",
          },
          {
            icon: <PhilosophyIcons name="centralized" size={40} />,
            title: "Reliable & Centralized",
            description:
              "Reliable updates and centralized data can be trusted by businesses to make informed decisions.",
          },
          {
            icon: <PhilosophyIcons name="scalabilityExpension" size={40} />,
            title: "Scalability for Expansion",
            description:
              "Built to scale grow from a single store to multi-location operations with Owners Inventory.",
          },
          {
            icon: <PhilosophyIcons name="ownerControl" size={40} />,
            title: "Owner Control",
            description:
              "Power squarely in the hands of the business owners: Flexibility to run operations at your own will.",
          },
        ]}
      />

      <FeaturesCallToAction
        title="Looking Ahead"
        description="The retail landscape is ever-evolving, and so are we. We are committed to continuous innovation, developing forward-looking tools that help you navigate changes in consumer behavior and technology. With Owners Inventory, you aren't just managing today's sales; you are preparing for tomorrow's growth."
        ctaDesc="Get Started Now"
      />

      <WhyChoosePOS
        heading="What We Do"
        paragraph="Owners Inventory offers a single platform that simplifies business operations for retailers, wholesalers, distributors, manufacturers, and eCommerce sellers, integrating inventory management, purchasing and POS into one system."
        cards={[
          {
            icon: "/assets/about-us/why-chose/stock-levels.svg",
            title: "Accurate Stock Levels",
            description:
              "Eliminate over-selling and stockout with precise, real-time tracking.",
          },
          {
            icon: "/assets/about-us/why-chose/simplified-perchasing.svg",
            title: "Simplified Purchasing",
            description:
              "Streamlined PO creation and vendor management to keep inventory flowing.",
          },
          {
            icon: "/assets/about-us/why-chose/real-time-insights.svg",
            title: "Real-time Insights",
            description:
              "Performance analytics that help you view, manage, and optimize margins.",
          },
          {
            icon: "/assets/about-us/why-chose/growth-management.svg",
            title: "Growth Management",
            description:
              "Tools designed to help you expand locations without expanding complexity.",
          },
        ]}
        mainImage={whyChoseBanner}
      />

      <WhoWeServe
        heading="Who We Serve"
        paragraph="Our platform offers the flexibility needed for various retail models. From single storefronts to complex warehouse networks, we provide the operational backbone."
        cards={[
          {
            icon: <PhilosophyIcons name="cashCarry" size={40} />,
            title: "Cash & Carry",
            description:
              "Fast-paced environments requiring instant checkout and stock updates.",
          },
          {
            icon: <PhilosophyIcons name="multiLocation" size={40} />,
            title: "Multi-Location",
            description:
              "Retailers managing stock transfers and unified reporting across branches.",
          },
          {
            icon: <PhilosophyIcons name="centralizedWarehouses" size={40} />,
            title: "Centralized Warehouses",
            description:
              "Distributors needing robust picking, packing, and shipping logic.",
          },
        ]}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <MapComponent />
      </div>
    </div>
  );
};

export default Page;
