import React from "react";
import dynamic from "next/dynamic";
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

// Above fold — static so useHeaderAnimation runs immediately
import AboutHero from "@/components/pages/about-us/aboutHero";

// Below fold — code-split into separate JS chunks
const WhoWeAre = dynamic(() => import("@/components/pages/about-us/whoWeAre"));
const OurPhilosophy = dynamic(() => import("@/components/pages/about-us/ourPhilosophy"));
const FeaturesCallToAction = dynamic(() => import("@/components/pages/features-page/FeaturesCallToAction"));
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"));
const WhoWeServe = dynamic(() => import("@/components/pages/about-us/whoWeServe"));
const MapComponentDynamic = dynamic(() => import("@/components/pages/about-us/MapComponentDynamic"));

const Page = () => {
  return (
    <div>
      <AboutHero
        title={ABOUT_HERO_CONTENT.title}
        description={ABOUT_HERO_CONTENT.description}
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
        <MapComponentDynamic />
      </div>
    </div>
  );
};

export default Page;
