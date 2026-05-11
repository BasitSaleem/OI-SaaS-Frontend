"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import AlAsifIcons from "@/components/icons/alAsifCasestudyIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorkflowItem {
  id: string | number;
  title: string;
  description: string;
}

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
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.config({ force3D: true });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!lineRef.current || !stepsRef.current) return;

      // Animate the vertical line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.5,
          },
        },
      );

      // Animate each step for desktop
      const steps = gsap.utils.toArray<HTMLElement>(".workflow-step");
      steps.forEach((step) => {
        const circle = step.querySelector(".step-circle");
        const card = step.querySelector(".step-card");
        const horizontalFill = step.querySelector(".horizontal");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
            end: "top 50%",
            scrub: 0.2,
          },
        });

        tl.fromTo(
          circle,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "power2.inOut" },
          "0",
        )
          .fromTo(
            horizontalFill,
            { scaleX: 0, scaleY: 1 },
            { scaleX: 1, scaleY: 1, duration: 0.4, ease: "power2.inOut" },
            "0",
          )
          .fromTo(
            card,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "0",
          );
      });
    });

    mm.add("(max-width: 767px)", () => {
      if (!mobileLineRef.current || !stepsRef.current) return;

      // Animate the horizontal line on mobile
      gsap.fromTo(
        mobileLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsWrapperRef.current,
            scroller: stepsRef.current,
            horizontal: true,
            start: "left left",
            end: "right right",
            scrub: 0.5,
          },
        },
      );

      // Animate each step for mobile
      const steps = gsap.utils.toArray<HTMLElement>(".workflow-step");
      steps.forEach((step) => {
        const circle = step.querySelector(".step-circle");
        const card = step.querySelector(".step-card");
        const connectorFill = step.querySelector(".connecter");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            scroller: stepsRef.current,
            horizontal: true,
            start: "left 80%",
            end: "left 20%",
            scrub: 0.5,
          },
        });

        tl.fromTo(
          circle,
          { scale: 1, opacity: 1 },
          { scale: 1, opacity: 1, duration: 0.4 }
        ).fromTo(
          connectorFill,
          { scaleY: 0, scaleX: 1 },
          { scaleY: 1, scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          "0"
        );

        // Card remains static as requested (opacity 1, y: 0)
      });
    });

    return () => mm.revert();
  }, []);

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
          <MainHeading className="mb-6">{title}</MainHeading>
          <Paragraph className="text-[var(--text-grey)]">
            {description}
          </Paragraph>
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
              <div
                key={item.id}
                className="workflow-step relative flex flex-col md:flex-row items-stretch md:items-center md:min-w-0 min-w-[257px] snap-center"
              >
                {/* Number Circle */}
                <div className="relative z-20 flex-shrink-0 w-full flex justify-center md:w-auto md:block">
                  <AlAsifIcons
                    name={`workflowIcon${(index % 7) + 1}` as any}
                    size={80}
                    className="step-circle w-16 h-16 md:w-20 md:h-20 relative z-20 transition-all duration-300 group"
                  />

                  {/* Connector Line (Vertical on Mobile, Horizontal on Desktop) */}
                  <div className="step-connector-line absolute left-1/2 md:left-full top-full md:top-1/2 w-[2px] md:w-20 h-8 md:h-[2px] bg-[#E2E2E2] -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 overflow-hidden z-10">
                    <div
                      className="connecter horizontal absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[var(--primary-teal)] via-[var(--primary-purple)] to-[var(--primary-teal)] origin-top md:origin-left scale-x-1 md:scale-x-0 scale-y-0 md:scale-y-100"
                      style={{ willChange: "transform" }}
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className="step-card h-full md:ml-20 ml-0 mt-8 md:mt-0 flex items-center transition-all duration-500 justify-center p-[1px] bg-[linear-gradient(11.61deg,#FFFFFF_20.11%,rgba(255,255,255,0)_82.07%)] flex-grow md:w-auto w-full rounded-[24px]"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="bg-white md:bg-white/50 p-6 md:p-8 rounded-[24px] min-w-[254px] max-w-[257px] md:min-w-0 md:max-w-none h-full">
                    <h3 className="text-xl leading-[140%] md:text-left text-center lg:text-[32px] lg:leading-[130%] font-semibold lg:font-medium text-[var(--text-dark)] font-['Onest'] md:min-h-auto min-h-[70px] mb-0 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg md:leading-[140%] leading-[170%] text-[var(--text-grey)] text-center md:text-left font-['Onest'] font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWorkflowSection;
