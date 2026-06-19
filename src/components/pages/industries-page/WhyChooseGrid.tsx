import React, { useRef } from "react";
import { useEqualizeHeadings } from "@/hooks/useEqualizeHeadings";
import SectionHeading from "../typography/SectionHeading";
import WhyChooseCard from "./WhyChooseCard";
import IndustryIcon, { IndustryIconSet } from "@/components/icons/IndustryIconRegistry";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode | string;
}

interface WhyChooseGridProps {
  whyChooseTitle: string;
  whyChooseDescription: string;
  features: Feature[];
  iconSet?: IndustryIconSet | IndustryIconSet[];
}

const WhyChooseGrid = ({
  whyChooseTitle,
  whyChooseDescription,
  features,
  iconSet,
}: WhyChooseGridProps) => {
  const whyChooseGridRef = useRef<HTMLDivElement>(null);
  useEqualizeHeadings(whyChooseGridRef, "[data-why-heading]", []);

  return (
    <div className="mt-24">
      <div className="text-center mx-auto mb-16">
        <SectionHeading
          heading={whyChooseTitle}
          description={whyChooseDescription}
          headingClassName="mb-6"
        />
      </div>

      <div ref={whyChooseGridRef} className="grid grid-cols-12 gap-6">
        {features.map((feature, index) => {
          let colSpanClass = "col-span-12"; // Mobile default

          if (features.length === 8) {
            // If there are exactly 8 cards, show 4 cards per row on desktop (col-span-3)
            colSpanClass += " md:col-span-6 lg:col-span-3";
          } else if (features.length === 6) {
            // If there are exactly 6 cards, show 3 cards per row on desktop (col-span-4)
            colSpanClass += " md:col-span-6 lg:col-span-4";
          } else if (features.length === 5) {
            // If there are exactly 5 cards:
            // Desktop: 3 cards (col-span-4), 2 cards (col-span-6)
            // Tablet: 4 cards (col-span-6), 1 card (col-span-12)
            if (index < 3) {
              colSpanClass += " md:col-span-6 lg:col-span-4";
            } else if (index === 3) {
              colSpanClass += " md:col-span-6 lg:col-span-6";
            } else {
              colSpanClass += " md:col-span-12 lg:col-span-6";
            }
          } else if (index < 4) {
            // First four cards: col-span-3 (desktop), col-span-6 (tablet)
            colSpanClass += " md:col-span-6 lg:col-span-3";
          } else if (index < 6) {
            // Next two cards: col-span-4 (desktop), col-span-6 (tablet)
            colSpanClass += " md:col-span-6 lg:col-span-4";
          } else {
            // Last card: col-span-4 (desktop), col-span-12 (tablet)
            colSpanClass += " md:col-span-12 lg:col-span-4";
          }

          return (
            <div key={index} className={colSpanClass}>
              <WhyChooseCard
                title={feature.title}
                description={feature.description}
                icon={
                  typeof feature.icon === "string" ? (
                    <IndustryIcon set={iconSet} name={feature.icon} size={44} />
                  ) : (
                    feature.icon
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseGrid;
