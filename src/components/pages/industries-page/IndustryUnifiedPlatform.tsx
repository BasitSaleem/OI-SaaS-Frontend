"use client";

import Image from "next/image";
import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import PosHardwarePageIcons from "../../icons/posHardwarePageIcons";

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
}

export default function IndustryUnifiedPlatform({
  heading,
  paragraph,
  cards,
  textAlign = "left",
}: IndustryUnifiedPlatformProps) {
  return (
    <div
      className="relative w-full"
      aria-label="Unified Platform Section"
    >
      <section className="wrapper">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-14 xl:gap-32 py-10 sm:py-20 xl:py-16 px-4 sm:px-10 xl:px-8 rounded-[20px] lg:rounded-[40px] bg-[var(--background-halfwhite)]">
          {/* Cards Column */}
          <div className="md:order-1 order-2 md:w-3/6 lg:w-2/5">
            <div className="flex flex-col items-center justify-start gap-4 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[342px] md:max-w-full py-5 px-4.5 md:p-5 lg:p-8 rounded-[30px] border border-gray-100 shadow-[0px_0px_20px_0px_#00000005] bg-white"
                >
                  <div className="w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] flex items-center justify-center mb-[18px] md:mb-5 lg:mb-10 rounded-xl border-4 border-[var(--background-halfwhite)]">
                    {card.icon.startsWith("/") ? (
                      <Image
                        src={card.icon}
                        alt={`${card.title} Icon`}
                        width={56}
                        height={56}
                        className="h-9 w-9 lg:w-14 lg:h-14"
                      />
                    ) : (
                      <PosHardwarePageIcons
                        name={card.icon as any}
                        size={56}
                        className="h-9 w-9 lg:w-14 lg:h-14 child-svg-full"
                      />
                    )}
                  </div>
                  <h3 className="text-xl lg:text-2xl leading-8 lg:leading-10 mb-3 lg:mb-4 font-['onest'] font-semibold text-[var(--text-dark)]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base font-['onest'] leading-6 text-[var(--text-grey)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full order-1 md:order-2 md:w-1/2 lg:w-3/5">
            <div className={`flex flex-col ${
              textAlign === "left"
                ? "items-start justify-start"
                : "items-center justify-center"
            }`}>
              <MainHeading className={`${
                textAlign === "left" ? "text-left" : "text-center"
              } mb-4`}>{heading}</MainHeading>
              <Paragraph className={`${
                textAlign === "left" ? "text-left" : "text-center"
              } mb-6`}>{paragraph}</Paragraph>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

