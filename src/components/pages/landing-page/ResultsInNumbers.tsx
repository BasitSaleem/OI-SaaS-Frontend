"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionHeading from "../typography/SectionHeading";
import Footer from "../footer/Footer";
import StatCard, { ResultMetric } from "./StatCard";

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
    rgba(207, 181, 249, 0.45) 0%,
    rgba(207, 181, 249, 0.15) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.45) 0%,
    rgba(160, 215, 255, 0.15) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    135deg,
    rgba(175, 205, 255, 0.50) 0%,
    rgba(160, 230, 245, 0.70) 30%,
    rgba(210, 185, 255, 0.70) 70%
  )
`;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ResultsInNumbersProps {
  title?: string;
  badge?: string;
  description?: string;
  metrics?: ResultMetric[];
  gradientBackground?: string;
}

const ResultsInNumbers: React.FC<ResultsInNumbersProps> = ({
  title = "How Their Operational Efficiency Increased",
  badge,
  description = "The implementation of Owners Inventory POS transformed manual friction into high-performance digital operations.",
  metrics = [],
  gradientBackground,
}) => {
  const statRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const bg = gradientBackground || DEFAULT_GRADIENT_BACKGROUND;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (metrics.length === 0) return;

      ScrollTrigger.create({
        trigger: ".stats-container",
        start: "top 85%",
        once: true,
        onEnter: () => {
          statRefs.current.forEach((el, index) => {
            if (!el || !metrics[index]) return;

            const numberSpan = el.querySelector(".number");
            if (!numberSpan) return;

            const rawValue = metrics[index].value;
            const numericPart = rawValue.replace(/[^0-9]/g, "");
            const targetValue = parseInt(numericPart, 10) || 0;
            const isLeadingZero =
              numericPart.startsWith("0") && numericPart.length > 1;

            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetValue,
              duration: 1.5,
              ease: "power3.out",
              onUpdate: () => {
                let formatted = Math.floor(obj.val).toLocaleString();
                if (isLeadingZero) {
                  formatted = formatted.padStart(numericPart.length, "0");
                }
                numberSpan.textContent = formatted;
              },
            });
          });
        },
      });
    });

    return () => ctx.revert();
  }, [metrics]);

  return (
    <section
      className="relative overflow-hidden pt-20"
      style={{ background: bg }}
    >
      <div className="md:wrapper relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="p-[1px]  rounded-full bg-gradient-to-r from-[#1AD1B9] to-[#795CF5] inline-block mb-3">
          <span className="py-2 px-6 text-base lg:text-lg leading-[170%] font-['onest'] text-[#231F20] font-normal bg-[#F3F4F6] rounded-full backdrop-blur-sm block text-center">
            {badge}
          </span>
        </div>

        {/* Heading & Description */}
        <SectionHeading heading={title} headingClassName="md:px-0 px-4 text-center mb-6" description={description} descriptionClassName="md:px-0 px-4 text-center mb-16 text-gray-600" />

        {/* Stats Grid */}
        <div className="md:px-0 px-4 grid grid-cols-1 md:grid-cols-12 w-full gap-6 stats-container">
          {metrics.map((metric, index) => {
            let colSpanClass = "col-span-1"; // Mobile default

            // On md and above we use 12 columns
            if (metrics.length === 8) {
              colSpanClass = "md:col-span-6 lg:col-span-3";
            } else if (metrics.length === 6) {
              colSpanClass = "md:col-span-6 lg:col-span-4";
            } else if (metrics.length === 5) {
              if (index < 3) {
                colSpanClass = "md:col-span-6 lg:col-span-4";
              } else if (index === 3) {
                colSpanClass = "md:col-span-6 lg:col-span-6";
              } else {
                colSpanClass = "md:col-span-12 lg:col-span-6";
              }
            } else {
              // Default logic (e.g. 7 cards)
              if (index < 4) {
                colSpanClass = "md:col-span-6 lg:col-span-3";
              } else if (index < 6) {
                colSpanClass = "md:col-span-6 lg:col-span-4";
              } else {
                colSpanClass = "md:col-span-12 lg:col-span-4";
              }
            }

            return (
              <div key={index} className={colSpanClass}>
                <StatCard metric={metric} index={index} statRefs={statRefs} />
              </div>
            );
          })}
        </div>

        {/* Integrated Footer with White Box */}
        <div className="w-full">
          <Footer gradientBackground="transparent" />
        </div>
      </div>
    </section>
  );
};

export default ResultsInNumbers;
