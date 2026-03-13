"use client";
import React, { useState, useEffect, useRef } from "react";
import FeatureCard from "../FeatureCard";
import MainHeading from "../../typography/MainHeading";
import { ArrowDown } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id?: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  listItems?: string[];
}

interface LayoutPattern {
  className?: string;
  mediaClassName?: string;
  paddingClass?: string;
}

interface KeyHighlightsProps {
  heading?: string;
  features: Feature[];
  layoutPatterns?: LayoutPattern[];
}

const getDefaultLayoutPatterns = (cardCount: number): LayoutPattern[] => {
  switch (cardCount) {
    case 2:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    case 4:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className:
            "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    default:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
  }
};

const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  heading = "Key Highlights",
  features,
  layoutPatterns,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeLayoutPatterns = layoutPatterns || getDefaultLayoutPatterns(features.length);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleToggleShowAll = () => {
    const willShowAll = !showAll;
    setShowAll(willShowAll);

    if (!willShowAll) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 300);
    }
  };

  // Calculate visible features
  const visibleFeatures = showAll
    ? features
    : features.slice(0, isMobile ? 3 : 6);

  return (
    <section ref={sectionRef} className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center lg:mt-[100px] md:mt-28 mt-20">
        <MainHeading className="xl:mb-10 lg:mb-6 mb-5 text-center w-full">
          {heading}
        </MainHeading>
      </div>

      {/* Cards */}
      <div className="relative w-full">
        <div className="w-full absolute top-0 left-0 right-0 bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] h-[163px]"></div>

        <div className="grid grid-cols-12 xl:auto-rows-auto h-auto items-stretch gap-6">
          <AnimatePresence>
            {visibleFeatures.map((feature, i) => {
              const pattern = activeLayoutPatterns[i % activeLayoutPatterns.length];
              return (
                <motion.div
                  key={feature.id ?? i}
                  className={`${pattern?.className || ""} h-full`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <FeatureCard {...feature} {...pattern} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="w-full absolute bottom-0 left-0 right-0 bg-[linear-gradient(0deg,#FFFFFF_5%,rgba(255,255,255,0)_100%)] h-[70px]"></div>
      </div>

      {/* See More/Less Button */}
      {(features.length > 6 || (isMobile && features.length > 3)) && (
        <div className="md:mt-7 mt-5 flex items-center justify-center">
          <button
            onClick={handleToggleShowAll}
            className="text-sm md:text-base leading-[100%] font-medium font-['Onest'] text-[var(--text-grey)] flex gap-1 items-center justify-center cursor-pointer"
          >
            {showAll ? "See Less" : "See All"}
            <span
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            >
              <ArrowDown size={24} />
            </span>
          </button>
        </div>
      )}

      <div className="md:mt-7 mt-5 flex items-center justify-center">
        <ButtonSm
          url="https://app.ownersinventory.com/"
          text="Book a Free Demo"
          bgColor="[#1AD1B9]"
          textColor="white"
          isBorder
        />
      </div>
    </section>
  );
};

export default KeyHighlights;
