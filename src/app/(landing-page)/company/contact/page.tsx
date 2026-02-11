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

const ContactHero = dynamic(
  () => import("@/components/pages/contact-us/contactHero"),
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
      <ContactHero
        title="Contact Us"
        description="We’re here to help! You can contact us with a question, support, or simply to get to know more about our products, and we are only a message away."
        variant="animation2"
        cards={[
          {
            icon: <PhilosophyIcons name="emailSupport" size={48} />,
            title: "Email Support",
            description: "support@ownersinventory.com",
          },
          {
            icon: <PhilosophyIcons name="locationIcon" size={48} />,
            title: "Visit Us",
            description:
              "4254 Normandy Ct, Fredericksburg, VA 22408, United States",
          },
        ]}
        supportCards={[
          {
            icon: <PhilosophyIcons name="helpCenter" size={40} />,
            icon2: '/assets/about-us/linking-arrow.svg',
            title: "Help Center",
            description: "Browse FAQ and guides",
          },
          {
            icon: <PhilosophyIcons name="documentation" size={40} />,
            icon2: '/assets/about-us/linking-arrow.svg' ,
            title: "Documentation",
            description: "Technical specs and API",
          },
         
        ]}
      />

    
    </div>
  );
};

export default Page;
