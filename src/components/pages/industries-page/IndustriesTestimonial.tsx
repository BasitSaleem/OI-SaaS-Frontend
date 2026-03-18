"use client";

import React, { useMemo, useState, useCallback } from "react";
import MainHeading from "../typography/MainHeading";
import Image from "next/image";
import SmartTools from "../landing-page/SmartTools";
import CustomSwiper from "@/components/slider/CustomSwiper";
import Paragraph from "../typography/Paragraph";
import WhyChooseCard from "./WhyChooseCard";
import { 
  Package, 
  BarChart3, 
  Users, 
  ClipboardCheck, 
  Settings2, 
  Pointer, 
  AppWindow 
} from "lucide-react";

interface TestimonialSlide {
  name: string;
  title: string;
  image: string;
  text: string;
  icon?: string;
  color?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode | string;
}

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
  /** Pass your page-specific icons component here (e.g. PosHardwarePageIcons or PosBakeryPageIcons) */
  IconsComponent?: React.ComponentType<{ name: any; size?: number; className?: string }>;
}

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
  ),
  linear-gradient(
    135deg,
     rgba(160, 230, 245, 0.65) 0%,
    rgba(175, 205, 255, 0.70) 45%,
    rgba(210, 185, 255, 0.75) 100%
  )
`;

const PURPLE = "#795CF5";
const GREEN = "#1AD1B9";
const PURPLE_ICON = "/assets/review-section/double-coma-icon.svg";
const GREEN_ICON = "/assets/review-section/coma-green.svg";

const DEFAULT_FEATURES: Feature[] = [
  
];

const IndustriesTestimonial = ({
  testimonials = [],
  heading = "What Clients Say About Us?",
  paragraph,
  secondHeading = "Stay Ahead with Smart Tools",
  secondDescription,
  showSmartTools = true,
  gradientBackground = DEFAULT_GRADIENT_BACKGROUND,
  whyChooseShow = true,
  whyChooseTitle = "Why Choose Our System?",
  whyChooseDescription = "Our POS system for Hardware stores ensures transparent control, fast billing, and accurate inventory, making daily operations seamless.",
  features = DEFAULT_FEATURES,
  IconsComponent,
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

  const renderTestimonialSlide = useCallback((slide: TestimonialSlide, i: number) => {
    const isVisible = visibleSet.has(i);
    const isOdd = i % 2 === 0;
    const accentColor = isOdd ? PURPLE : GREEN;
    const icon = isOdd ? PURPLE_ICON : GREEN_ICON;

    return (
      <div
        className={[
          "testimonial-card bg-white relative",
          "shadow-[0px_0px_20px_rgba(0,0,0,0.05)]",
          "rounded-[30px] p-6 transition-all duration-300",
          "flex flex-col h-full",
          isVisible ? "opacity-100" : "opacity-80",
        ].join(" ")}
      >
        <div className="absolute top-6 right-6">
          <Image
            src={icon}
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
            className="rounded-full border-2 w-[48px] h-[48px] "
            style={{ borderColor: accentColor }}
          />

          <div className="">
            <p className="font-semibold text-xl font-['onest']">
              {slide.name}
            </p>
            <p
              className="font-medium font-['onest']"
              style={{ color: accentColor }}
            >
              {slide.title}
            </p>
          </div>
        </div>

        <p className="text-base leading-[170%] flex-1 font-['onest']">
          {slide.text}
        </p>
      </div>
    );
  }, [visibleSet]);

  return (
    <div
      className="industriestest-gradient-shadow-right w-full py-[80px] lg:py-[100px] rounded-t-[40px] mt-[90px] lg:mt-[130px]"
      style={{ background: '#ffffff' }}
    >
      <section className="wrapper">
       
        <div className="mb-10">
          <MainHeading className="text-center mb-10">
            {heading}
          </MainHeading>

          {paragraph && <Paragraph className="mb-10">{paragraph}</Paragraph>}

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
          <div className="mt-24">
            <div className="text-center mx-auto mb-16">
              <MainHeading className="mb-6">
                {whyChooseTitle}
              </MainHeading>
              <Paragraph >{whyChooseDescription}</Paragraph>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {features.map((feature, index) => {
                let colSpanClass = "col-span-12"; // Mobile default
                
                if (features.length === 8) {
                  // If there are exactly 8 cards, show 4 cards per row on desktop (col-span-3)
                  colSpanClass += " md:col-span-6 lg:col-span-3";
                } else if (features.length === 6) {
                  // If there are exactly 6 cards, show 3 cards per row on desktop (col-span-4)
                  colSpanClass += " md:col-span-6 lg:col-span-4";
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
                          IconsComponent ? (
                            <IconsComponent name={feature.icon as any} size={44} />
                          ) : null
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
        )}

      </section>
    </div>
  );
};

export default IndustriesTestimonial;
