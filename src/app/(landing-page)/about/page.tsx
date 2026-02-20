"use client";

import React from "react";
import {
  ABOUT_HERO_CONTENT,
  PHILOSOPHY_CARDS,
  WHAT_WE_DO_CARDS,
  WHO_WE_SERVE_CARDS,
  PHILOSOPHY_CONTENT,
  LOOKING_AHEAD_CONTENT,
  WHAT_WE_DO_CONTENT,
  WHO_WE_SERVE_CONTENT,
} from "@/constant/aboutData";

import WhoWeAre from "@/components/pages/about-us/whoWeAre";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import MapComponent from "@/components/pages/about-us/MapComponent";
import AboutHero from "@/components/pages/about-us/aboutHero";
import OurPhilosophy from "@/components/pages/about-us/ourPhilosophy";
import WhoWeServe from "@/components/pages/about-us/whoWeServe";

const Page = () => {
  return (
    <div>
      <AboutHero
        title={ABOUT_HERO_CONTENT.title}
        description={ABOUT_HERO_CONTENT.description}
        ctaDesc={ABOUT_HERO_CONTENT.ctaDesc}
        variant={ABOUT_HERO_CONTENT.variant}
      />

      <WhoWeAre />

      <OurPhilosophy
        heading={PHILOSOPHY_CONTENT.heading}
        paragraph={PHILOSOPHY_CONTENT.paragraph}
        cards={PHILOSOPHY_CARDS}
      />

      <FeaturesCallToAction
        title={LOOKING_AHEAD_CONTENT.title}
        description={LOOKING_AHEAD_CONTENT.description}
        ctaDesc={LOOKING_AHEAD_CONTENT.ctaDesc}
      />

      <WhyChoosePOS
        heading={WHAT_WE_DO_CONTENT.heading}
        paragraph={WHAT_WE_DO_CONTENT.paragraph}
        cards={WHAT_WE_DO_CARDS}
        mainImage={WHAT_WE_DO_CONTENT.mainImage}
      />

      <WhoWeServe
        heading={WHO_WE_SERVE_CONTENT.heading}
        paragraph={WHO_WE_SERVE_CONTENT.paragraph}
        cards={WHO_WE_SERVE_CARDS}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <MapComponent />
      </div>
      </div>
  );
};

export default Page;
