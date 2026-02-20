"use client";

import React from "react";
import {
  CONTACT_CARDS,
  CONTACT_HERO_CONTENT,
  CONTACT_SUPPORT_CARDS,
} from "@/constant/contactData";

import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import ContactHero from "@/components/pages/contact-us/contactHero";
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
