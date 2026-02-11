"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  ABOUT_HERO_CONTENT,
  PHILOSOPHY_CARDS,
  WHAT_WE_DO_CARDS,
  WHO_WE_SERVE_CARDS,
} from "@/constant/aboutData";
import WhoWeAre from "@/components/pages/about-us/whoWeAre";

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
        title={ABOUT_HERO_CONTENT.title}
        description={ABOUT_HERO_CONTENT.description}
        ctaDesc={ABOUT_HERO_CONTENT.ctaDesc}
        variant={ABOUT_HERO_CONTENT.variant}
      />

      {/* Fixed: Using capitalized component name */}
      <WhoWeAre />

      <OurPhilosophy
        heading="Our Philosophy"
        paragraph="At Owners Inventory, we are of the opinion that visibility and control are the real owners. Business owners can make smarter decisions, minimize inefficiencies, and scale with confidence when they have a clear picture of what is going on in their business. We have a couple of principles that our platform is based on."
        cards={PHILOSOPHY_CARDS}
      />

      <FeaturesCallToAction
        title="Looking Ahead"
        description="The retail landscape is ever-evolving, and so are we. We are committed to continuous innovation, developing forward-looking tools that help you navigate changes in consumer behavior and technology. With Owners Inventory, you aren't just managing today's sales; you are preparing for tomorrow's growth."
        ctaDesc="Get Started Now"
      />

      <WhyChoosePOS
        heading="What We Do"
        paragraph="Owners Inventory offers a single platform that simplifies business operations for retailers, wholesalers, distributors, manufacturers, and eCommerce sellers, integrating inventory management, purchasing and POS into one system."
        cards={WHAT_WE_DO_CARDS}
        mainImage={"/assets/about-us/why-chose-banner.webp"}
      />

      <WhoWeServe
        heading="Who We Serve"
        paragraph="Our platform offers the flexibility needed for various retail models. From single storefronts to complex warehouse networks, we provide the operational backbone."
        cards={WHO_WE_SERVE_CARDS}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <MapComponent />
      </div>
    </div>
  );
};

export default Page;
