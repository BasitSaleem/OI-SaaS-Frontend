"use client";
import React, { useState } from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";
import IndustryIcon, {
  IndustryIconSet,
} from "@/components/icons/IndustryIconRegistry";
import { Outcome } from "@/constant/caseStudiesData/caseStudiesData";

interface CaseStudyOutcomesProps {
  badge?: string;
  heading: string;
  description: string;
  outcomes: Outcome[];
  iconSet?: IndustryIconSet;
  bottomImage?: string;
}

const DEFAULT_GRADIENT_BACKGROUND = `
 
  linear-gradient(
    to bottom,
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
     rgba(175, 205, 255, 0.70) 0%,
     rgba(160, 230, 245, 0.70) 30%,
    rgba(210, 185, 255, 0.90) 70%
  )
`;

const CaseStudyOutcomes: React.FC<CaseStudyOutcomesProps> = ({
  badge,
  heading,
  description,
  outcomes,
  iconSet,
  bottomImage,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="overflow-hidden lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] lg:mt-[100px] md:mt-28 mt-20"
      style={{ background: DEFAULT_GRADIENT_BACKGROUND }}
    >
      <div className="wrapper relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          {badge && (
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#1AD1B9] to-[#795CF5] inline-block mb-3">
              <span className="py-2 px-6 text-base lg:text-lg leading-[170%] font-['onest'] text-[#231F20] font-normal bg-[#F3F4F6] rounded-full backdrop-blur-sm block text-center">
                {badge}
              </span>
            </div>
          )}
          <MainHeading className="mb-4">{heading}</MainHeading>
          <Paragraph className="">{description}</Paragraph>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome) => (
            <div
              key={outcome.id}
              className="p-[1px] rounded-[30px] transition-all duration-300"
              style={{
                background:
                  hoveredId === outcome.id
                    ? "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)"
                    : "rgba(226, 226, 226, 0.5)",
              }}
            >
              <div
                className="group p-8 rounded-[30px] h-full bg-white backdrop-blur-xl flex flex-col items-start transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                onMouseEnter={() => setHoveredId(outcome.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="w-14 h-14 rounded-xl bg-[#F8F8F8] border border-[#E2E2E2] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-transparent">
                  <IndustryIcon
                    set={iconSet}
                    name={
                      hoveredId === outcome.id
                        ? `${outcome.icon}Hover`
                        : outcome.icon
                    }
                    size={32}
                    className="flex items-center justify-center"
                  />
                </div>

                <h3 className="text-xl md:text-2xl leading-[140%] md:leading-[135%] font-medium text-[var(--text-dark)] mb-3 font-['Onest']">
                  {outcome.title}
                </h3>

                <p className="text-sm leading-[170%] font-normal text-[var(--text-grey)] leading-relaxed font-['Onest']">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Illustration */}
        {bottomImage && (
          <div className="flex items-center justify-center mx-auto w-full max-w-[1000px] mt-[45px]">
            <Image
              src={bottomImage}
              alt="Transformation Results"
              width={1000}
              height={600}
              className="w-full h-auto rounded-t-[20px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyOutcomes;
