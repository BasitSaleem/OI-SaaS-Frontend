"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  CONTACT_CARDS,
  CONTACT_HERO_CONTENT,
  CONTACT_SUPPORT_CARDS,
} from "@/constant/contactData";

// 🔥 Dynamic Imports

const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction"),
  { ssr: false },
);

const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"),
  { ssr: false },
);

const ContactHero = dynamic(
  () => import("@/components/pages/contact-us/contactHero"),
  { ssr: false },
);
const Page = () => {
  return (
    <div>
      <ContactHero
        title={CONTACT_HERO_CONTENT.title}
        description={CONTACT_HERO_CONTENT.description}
        variant={CONTACT_HERO_CONTENT.variant}
        cards={CONTACT_CARDS}
        supportCards={CONTACT_SUPPORT_CARDS}
      />

    
    </div>
  );
};

export default Page;
