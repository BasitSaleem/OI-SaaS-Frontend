"use client";

import React from "react";
import IndustriesFeatureCard from "./IndustriesFeatureCard";

interface FeatureCardData {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  buttonLabel: string;
  buttonHref: string;
  buttonColor: string;
  containerWidth?: string;
  containerHeight?: string;
  containerBorderColor?: string;
  containerBackgroundColor?: string;
  containerShadow?: boolean;
  scale?: number;
  list?: string[];
}

interface IndustriesFeaturesSectionProps {
  features: FeatureCardData[];
}

export default function IndustriesFeaturesSection({ features }: IndustriesFeaturesSectionProps) {
  return (
    <div className="finance-reporting-shadow">
      <section className="wrapper">
        {features.map((feature, index) => (
          <IndustriesFeatureCard key={index} index={index} {...feature} />
        ))}
      </section>
    </div>
  );
}
