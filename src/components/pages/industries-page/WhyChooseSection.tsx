"use client";

import React from "react";
import MainHeading from "../typography/MainHeading";
import WhyChooseCard from "./WhyChooseCard";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhyChooseSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

const WhyChooseSection = ({
  title,
  description,
  features,
}: WhyChooseSectionProps) => {
  return (
    <div className="mb-24">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <MainHeading className="mb-6">{title}</MainHeading>
        <p className="text-[#6B7280] text-lg lg:text-xl font-['onest'] leading-[1.6]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <WhyChooseCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
        {features.slice(4).map((feature, index) => (
          <WhyChooseCard
            key={index + 4}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
