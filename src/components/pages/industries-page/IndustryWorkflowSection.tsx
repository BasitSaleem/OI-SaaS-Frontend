"use client";

import { useRef } from "react";
import SectionHeading from "../typography/SectionHeading";
import { useIndustryWorkflowAnimation } from "@/hooks/useIndustryWorkflowAnimation";
import WorkflowStepItem, { WorkflowItem } from "./WorkflowStepItem";

interface IndustryWorkflowSectionProps {
  title: string;
  miniTitle?: string;
  description: string;
  items: WorkflowItem[];
  gradientBackground?: string;
}

const DEFAULT_GRADIENT = `
  linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%),
  radial-gradient(circle at 0% 0%, rgba(26, 209, 185, 0.05) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(121, 92, 245, 0.05) 0%, transparent 50%)
`;

const IndustryWorkflowSection: React.FC<IndustryWorkflowSectionProps> = ({
  title,
  miniTitle = "Our Approach",
  description,
  items,
  gradientBackground = DEFAULT_GRADIENT,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lineRef, mobileLineRef, stepsRef, stepsWrapperRef } =
    useIndustryWorkflowAnimation();

  return (
    <section
      ref={containerRef}
      className="relative case-study-gradient-shadow-right py-20 lg:py-32 overflow-hidden lg:mt-[100px] md:mt-20 mt-[60px]"
      style={{ background: gradientBackground }}
    >
      <div className="wrapper relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="p-[1px]  rounded-full bg-gradient-to-r from-[#1AD1B9] to-[#795CF5] inline-block mb-3">
            <span className="py-2 px-6 text-base lg:text-lg leading-[170%] font-['onest'] text-[#231F20] font-normal bg-[#F3F4F6] rounded-full backdrop-blur-sm block text-center">
              {miniTitle}
            </span>
          </div>
          <SectionHeading
            heading={title}
            description={description}
            headingClassName="mb-6"
            descriptionClassName="text-[var(--text-grey)]"
          />
        </div>

        {/* Timeline Section */}
        <div
          ref={stepsRef}
          className="relative max-w-[1247px] mx-auto md:pl-0 pl-0 md:overflow-visible overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {/* Vertical Line Container (Desktop Only) */}
          <div className="absolute left-10 top-[76px] bottom-[66px] lg:top-12 lg:bottom-12 w-[3px] bg-[#E2E2E2] z-0 hidden md:block">
            {/* Animated Progress Line */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full origin-top h-full"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, var(--primary-teal), var(--primary-purple) 300px, var(--primary-teal) 600px)",
                willChange: "transform",
              }}
            />
          </div>

          {/* Horizontal Line Container (Mobile Only) */}
          <div
            className="md:hidden absolute left-0 top-[32px] h-[2px] bg-[#E2E2E2] z-0"
            style={{
              width: `${items.length * 225 + (items.length - 1) * 16}px`,
              left: '128.5px'
            }}
          >
            <div
              ref={mobileLineRef}
              className="h-full origin-left w-full"
              style={{
                background:
                  "linear-gradient(to right, var(--primary-teal), var(--primary-purple))",
                willChange: "transform",
                transform: "scaleX(0)",
              }}
            />
          </div>

          <div
            ref={stepsWrapperRef}
            className="flex md:flex-col flex-row gap-4 md:gap-16 pb-8 md:pb-0 px-4 md:px-0 w-max md:w-auto"
          >
            {items.map((item, index) => (
              <WorkflowStepItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWorkflowSection;
