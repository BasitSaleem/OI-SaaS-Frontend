"use client";

import FeatureCard2 from "./FeaturedCard2";
import { FEATURE_CARDS_DATA } from "@/constant/featuresPageData";

export default function FeaturesssSection() {
  return (
    <section className="wrapper">
      {FEATURE_CARDS_DATA.map((feature, index) => (
        <FeatureCard2 key={index} index={index} {...feature} />
      ))}
    </section>
  );
}
