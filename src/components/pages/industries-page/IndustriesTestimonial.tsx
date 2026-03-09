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
  icon: React.ReactNode;
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
  )
    
`;

const PURPLE = "#795CF5";
const GREEN = "#1AD1B9";
const PURPLE_ICON = "/assets/review-section/double-coma-icon.svg";
const GREEN_ICON = "/assets/review-section/coma-green.svg";

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "Easy Setup",
    description: "We have developed a user-friendly interface that is simple to learn and operate. Quick installation with minimal disruption to daily operations.",
    icon: <Package className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Reliable Performance",
    description: "The hardware store POS operates consistently when there are rush hours and high workloads. Your billing counters remain quick and steady during the day.",
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Clear Inventory",
    description: "All items remain structured in terms of units, sizes, variants and types. You will always have clean and correct inventory of your store.",
    icon: <Users className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Accurate Reporting",
    description: "Sales, stock value, profits, and the best items are reported in easy formats. It will make your choices more robust as all the details are retained in sight.",
    icon: <ClipboardCheck className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Flexible Features",
    description: "The POS system at the hardware store is compatible with numerous sub-industries and products. Your hardware company gets equipment that suits actual day-to-day requirements.",
    icon: <Settings2 className="w-8 h-8 text-red-400" />,
  },
  {
    title: "Safe Access",
    description: "Cashiers, managers, and admins have their data secured by staff permissions. Your store operates safely with restricted access to all roles.",
    icon: <Pointer className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Integration and Addons",
    description: "Integrates with accounting software, ecommerce, barcode scanners, and payment gateways. Add-ons like loyalty programs, SMS, multi-branch, and supplier for easy scaling.",
    icon: <AppWindow className="w-8 h-8 text-purple-500" />,
  },
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
  whyChooseDescription = "Our POS system for hardware stores ensures transparent control, fast billing, and accurate inventory, making daily operations seamless.",
  features = DEFAULT_FEATURES,
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
          "testimonial-card flex flex-col h-full bg-white relative",
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
      className="w-full py-[80px] lg:py-[100px] rounded-t-[40px] mt-[90px] lg:mt-[130px]"
      style={{ background: gradientBackground }}
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
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <MainHeading className="mb-6">
                {whyChooseTitle}
              </MainHeading>
              <p className="text-[#6B7280] text-lg lg:text-xl font-['onest'] leading-[1.6]">
                {whyChooseDescription}
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
        )}

      </section>
    </div>
  );
};

export default IndustriesTestimonial;
