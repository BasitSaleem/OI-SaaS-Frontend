"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface IndustryUnifiedPlatformCard {
  icon: string;
  title: string;
  description: string;
}

interface IndustryUnifiedPlatformProps {
  heading: string;
  paragraph: string;
  cards: IndustryUnifiedPlatformCard[];
  textAlign?: "center" | "left";
  /** Pass your page-specific icons component here (e.g. PosHardwarePageIcons or PosBakeryPageIcons) */
  IconsComponent?: React.ComponentType<{ name: any; size?: number; className?: string }>;
}

export default function IndustryUnifiedPlatform({
  heading,
  paragraph,
  cards,
  textAlign = "left",
  IconsComponent,
}: IndustryUnifiedPlatformProps) {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Calculate visible features - default to 4
  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div
      className="relative w-full"
      aria-label="Unified Platform Section"
    >
      <section ref={sectionRef} className="wrapper">
        <div className="flex flex-col items-center justify-center gap-10 py-10 sm:py-20 xl:py-16 px-4 sm:px-10 xl:px-8 rounded-[20px] lg:rounded-[40px] bg-[var(--background-halfwhite)]">
          {/* Text Column */}
          <div className="w-full order-1">
            <div className="flex flex-col items-center justify-center">
              <MainHeading className="text-center mb-4">{heading}</MainHeading>
              <Paragraph className="text-center mb-6">{paragraph}</Paragraph>
            </div>
          </div>
          {/* Cards Column */}
          <div className="order-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <AnimatePresence>
                {visibleCards.map((card, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full p-6 rounded-[30px] border border-gray-100 shadow-[0px_0px_20px_0px_#00000005] bg-white"
                  >
                    <div className="w-fit p-[11px] flex items-center justify-center mb-[18px] md:mb-5 lg:mb-10 rounded-xl border-5 border-[var(--background-halfwhite)]">
                      {card.icon.startsWith("/") ? (
                        <Image
                          src={card.icon}
                          alt={`${card.title} Icon`}
                          width={56}
                          height={56}
                          className="h-9 w-9 lg:w-11 lg:h-11"
                        />
                      ) : IconsComponent ? (
                        <IconsComponent
                          name={card.icon as any}
                          size={56}
                          className="h-9 w-9 lg:w-14 lg:h-14 child-svg-full"
                        />
                      ) : null}
                    </div>
                    <h3 className="text-xl lg:text-2xl leading-8 lg:leading-10 mb-3 lg:mb-4 font-['onest'] font-semibold text-[var(--text-dark)]">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base font-['onest'] leading-6 text-[var(--text-grey)]">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* See More/Less Button */}
            {cards.length > 4 && (
              <div className="md:mt-10 mt-6 flex items-center justify-center">
                <button
                  onClick={handleToggleShowAll}
                  className="text-sm md:text-base leading-[100%] font-medium font-['Onest'] text-[var(--text-grey)] flex gap-1 items-center justify-center cursor-pointer transition-colors hover:text-[var(--text-dark)]"
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
          </div>
        </div>
      </section>
    </div>
  );
}

