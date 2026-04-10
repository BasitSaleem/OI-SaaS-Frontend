"use client";

import React from "react";
import IndustriesFeatureCard from "./IndustriesFeatureCard";

export interface FeatureCardData {
  id?: string | number;
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
  list?: string[] | { listheading: string; listdescription?: string }[];
  listVariant?: "list" | "accordion";
}

interface IndustriesFeaturesSectionProps {
  features: FeatureCardData[];
}

export default function IndustriesFeaturesSection({ features }: IndustriesFeaturesSectionProps) {
  return (
    <div className="industries-gradient-shadow-right">
      <section className="wrapper">
        {features.map((feature, index) => (
          <IndustriesFeatureCard key={index} index={index} {...feature} />
        ))}
      </section>
    </div>
  );
}
