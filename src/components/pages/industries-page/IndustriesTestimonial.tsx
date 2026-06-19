"use client";

import React, { useMemo, useState, useCallback } from "react";
import SectionHeading from "../typography/SectionHeading";
import SmartTools from "../landing-page/SmartTools";
import CustomSwiper from "@/components/slider/CustomSwiper";
import { IndustryIconSet } from "@/components/icons/IndustryIconRegistry";
import IndustryTestimonialCard, { TestimonialSlide } from "./IndustryTestimonialCard";
import WhyChooseGrid, { Feature } from "./WhyChooseGrid";

interface IndustriesTestimonialProps {
  testimonials?: TestimonialSlide[];
  heading?: string;
  paragraph?: string;
  showSmartTools?: boolean;
  gradientBackground?: string;
  secondHeading?: string;
  secondDescription?: string;
  whyChooseShow?: boolean;
  whyChooseTitle?: string;
  whyChooseDescription?: string;
  features?: Feature[];
  /** The name of the icon set to use (e.g. "bakery", "retail") */
  iconSet?: IndustryIconSet | IndustryIconSet[];
}

const DEFAULT_FEATURES: Feature[] = [];

const IndustriesTestimonial = ({
  testimonials = [],
  heading = "What Clients Say About Us?",
  paragraph,
  secondHeading = "Stay Ahead with Smart Tools",
  secondDescription,
  showSmartTools = true,
  whyChooseShow = true,
  whyChooseTitle = "Why Choose Our System?",
  whyChooseDescription = "Our POS system for Hardware stores ensures transparent control, fast billing, and accurate inventory, making daily operations seamless.",
  features = DEFAULT_FEATURES,
  iconSet,
}: IndustriesTestimonialProps) => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([0]);

  const updateVisibleIndices = useCallback((next: number[]) => {
    setVisibleIndices((prev) => {
      if (
        prev.length === next.length &&
        prev.every((v, i) => v === next[i])
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  const visibleSet = useMemo(
    () => new Set(visibleIndices),
    [visibleIndices]
  );

  const renderTestimonialSlide = useCallback(
    (slide: TestimonialSlide, i: number) => (
      <IndustryTestimonialCard
        slide={slide}
        index={i}
        isVisible={visibleSet.has(i)}
        iconSet={iconSet}
      />
    ),
    [visibleSet, iconSet]
  );

  return (
    <div
      className="industriestest-gradient-shadow-right w-full py-[80px] lg:py-[100px] rounded-t-[40px] mt-[90px] lg:mt-[130px]"
      style={{ background: '#ffffff' }}
    >
      <section className="wrapper">

        <div className="mb-10">
          <SectionHeading
            heading={heading}
            description={paragraph}
            headingClassName="text-center mb-10"
            descriptionClassName="mb-10"
          />

          <CustomSwiper
            slides={testimonials}
            onVisibleChange={({ visibleIndices }) =>
              updateVisibleIndices(visibleIndices)
            }
            renderSlide={renderTestimonialSlide}
          />
        </div>

        {showSmartTools && (
          <SmartTools
            title={secondHeading}
            description={secondDescription}
          />
        )}

        {whyChooseShow && (
          <WhyChooseGrid
            whyChooseTitle={whyChooseTitle}
            whyChooseDescription={whyChooseDescription}
            features={features}
            iconSet={iconSet}
          />
        )}

      </section>
    </div>
  );
};

export default React.memo(IndustriesTestimonial);
