import React, { useMemo, useState } from "react";
import MainHeading from "../typography/MainHeading";
import Image from "next/image";
import SmartTools from "../landing-page/SmartTools";
import CustomSwiper from "@/components/slider/CustomSwiper";
import Paragraph from "../typography/Paragraph";

interface TestimonialSlide {
  name: string;
  title: string;
  image: string;
  text: string;
  icon: string;
  color: string; // kept for data completeness, no longer used for accent
}

interface FeaturesTestimonialsProps {
  testimonials?: TestimonialSlide[];
  heading?: string;
  paragraph?: string;
  showSmartTools?: boolean;
  gradientBackground?: string;
  secondHeading?: string;
  secondDescription?: string;
}

/* ✅ Restored default gradient background */
const DEFAULT_GRADIENT_BACKGROUND = `
  linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.98) 18%,
    rgba(255, 255, 255, 0.85) 35%,
    rgba(255, 255, 255, 0.00) 50%,
    rgba(255, 255, 255, 0.00) 100%
  ),
  radial-gradient(900px 650px at 12% 8%,
    rgba(207, 181, 249, 0.55) 0%,
    rgba(207, 181, 249, 0.18) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.55) 0%,
    rgba(160, 215, 255, 0.18) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    135deg,
    rgba(210, 185, 255, 0.75) 0%,
    rgba(175, 205, 255, 0.70) 45%,
    rgba(160, 230, 245, 0.65) 100%
  )
`;

const PURPLE = "#795CF5";
const GREEN = "#1AD1B9";
const INACTIVE_ACCENT = "#9CA3AF";

const FeaturesTestimonials = ({
  testimonials = [],
  heading = "What Clients Say About Us?",
  paragraph,
  secondHeading = "Stay Ahead with Smart Tools",
  secondDescription,
  showSmartTools = true,
  gradientBackground = DEFAULT_GRADIENT_BACKGROUND,
}: FeaturesTestimonialsProps) => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([0]);

  // ✅ Guarded update to prevent render loops
  const updateVisibleIndices = (next: number[]) => {
    setVisibleIndices((prev) => {
      if (
        prev.length === next.length &&
        prev.every((v, i) => v === next[i])
      ) {
        return prev;
      }
      return next;
    });
  };

  const visibleSet = useMemo(
    () => new Set(visibleIndices),
    [visibleIndices]
  );

  return (
    <div
      className="w-full py-[60px] rounded-t-[40px] mt-[90px] lg:mt-[130px]"
      style={{ background: gradientBackground }}
    >
      <section className="wrapper">
        <MainHeading className="text-center mb-10">
          {heading}
        </MainHeading>

        {paragraph && <Paragraph className="mb-10">{paragraph}</Paragraph>}

        <CustomSwiper
          slides={testimonials}
          onVisibleChange={({ visibleIndices }) =>
            updateVisibleIndices(visibleIndices)
          }
          renderSlide={(slide, i) => {
            const isVisible = visibleSet.has(i);

            // ✅ POSITIONAL COLORING (FIGMA RULE)
            const visiblePosition = visibleIndices.indexOf(i);

            const accentColor =
              visiblePosition === 0
                ? PURPLE
                : visiblePosition === 1
                ? GREEN
                : INACTIVE_ACCENT;

            return (
              <div
                className={[
                  "testimonial-card flex flex-col h-full bg-white relative",
                  "shadow-[0px_0px_20px_rgba(0,0,0,0.05)]",
                  "rounded-[30px] p-6 transition-all duration-300",
                  isVisible ? "opacity-100" : "opacity-80",
                ].join(" ")}
              >
                <div className="absolute top-6 right-6">
                  <Image
                    src={slide.icon}
                    alt="Quote icon"
                    width={26}
                    height={26}
                  />
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2"
                    style={{ borderColor: accentColor }}
                  />

                  <div>
                    <h4 className="font-semibold text-xl">
                      {slide.name}
                    </h4>
                    <p
                      className="font-medium"
                      style={{ color: accentColor }}
                    >
                      {slide.title}
                    </p>
                  </div>
                </div>

                <p className="text-base leading-[170%] flex-grow">
                  {slide.text}
                </p>
              </div>
            );
          }}
        />

        {showSmartTools && (
          <SmartTools
            title={secondHeading}
            description={secondDescription}
          />
        )}
      </section>
    </div>
  );
};

export default FeaturesTestimonials;
