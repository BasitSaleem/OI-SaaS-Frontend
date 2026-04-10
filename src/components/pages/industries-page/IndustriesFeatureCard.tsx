"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSafariDetector } from "@/hooks/useSafariDetector";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";

interface IndustriesFeatureCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  buttonLabel: string;
  buttonHref: string;
  buttonColor: string;
  index: number;
  containerWidth?: string;
  containerHeight?: string;
  containerBorderColor?: string;
  containerBackgroundColor?: string;
  containerShadow?: boolean;
  scale?: number;
  list?: { listheading: string; listdescription: string }[];
}

const IndustriesFeatureCard: React.FC<IndustriesFeatureCardProps> = ({
  title,
  description,
  videoSrc,
  imageSrc,
  buttonLabel,
  buttonHref,
  buttonColor,
  index,
  containerWidth = "100%",
  containerHeight = "420px",
  containerBorderColor = "#FFFFFF",
  containerBackgroundColor = "rgba(255,255,255,0.4)",
  containerShadow = true,
  scale = 1,
  list = [],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const { shouldShowImage } = useSafariDetector();
  const isEven = index % 2 === 0;

  return (
    <div className="lg:my-40 md:my-28 my-20">
      <div
        className={` grid grid-cols-1 lg:grid-cols-2 items-center xl:gap-[170px] gap-12`}
      >
        {/* Media Content */}
        <div
          className={`${isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
        >
          <div
            className={`flex items-center justify-center lg:max-w-full md:max-w-[600px] mx-auto rounded-[30px] h-auto lg:h-[var(--container-height)]`}
            style={
              {
                width: containerWidth,
                "--container-height": containerHeight,
              } as any
            }
          >
            <div className="flex flex-col items-center justify-center w-full h-full ">
              {shouldShowImage && imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  width={743}
                  height={460}
                  className="w-full h-full object-contain overflow-hidden bg-transparent"
                  priority
                />
              ) : !shouldShowImage && videoSrc ? (
                <video
                  className="w-full h-full rounded-[20px]"
                  style={{ transform: `scale(${scale})` }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                >
                  <source src={videoSrc} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : imageSrc ? (
                <img src={imageSrc} alt={title} className="w-full" />
              ) : null}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`flex flex-col ${
            isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
          }`}
        >
          <h3 className="font-['Onest'] font-semibold text-[var(--text-dark)] text-[32px] sm:text-4xl md:text-[40px] xl:text-5xl leading-9 sm:leading-[48px] xl:leading-[60px] mb-4 min-h-[50px]">
            {title}
          </h3>

          <Paragraph className="flex-1 mb-6">{description}</Paragraph>

          <div className="flex flex-col gap-3 mb-8">
            {list.map((item, idx) => (
              
                <div
                  className={`rounded-[20px] transition-all duration-300 ${
                    openIndex === idx
                      ? "border-3 border-white shadow-[inset_0px_17px_29px_0px_#FFFFFF40] backdrop-blur-[10.45px]"
                      : "border-transparent bg-transparent"
                  } overflow-hidden`}
                >
                  <button
                    type="button"
                    className="accordion-toggle flex items-start justify-between w-full p-5 md:px-6 md:py-4 text-left font-medium focus:outline-none rounded-[20px] transition-colors duration-300"
                    onClick={() => toggle(idx)}
                  >
                    <span
                      className={`w-full max-w-[90%] text-base md:text-lg lg:text-xl leading-[170%] md:leading-[170%] lg:leading-[140%] font-['Onest'] font-semibold transition-colors duration-300 ${
                        openIndex === idx
                          ? "text-(--text-dark)"
                          : "text-(--text-dark)"
                      }`}
                    >
                      {item.listheading}
                    </span>

                    {/* ✅ Smaller on mobile */}
                    <span
                      className={
                        openIndex === idx
                          ? "hidden"
                          : "flex shrink-0 items-center mt-1 justify-center"
                      }
                    >
                      <Image
                        src="/assets/plus-icon.svg"
                        alt="Plus-icon"
                        width={18}
                        height={18}
                        className="w-4 h-4"
                        loading="lazy"
                      />
                    </span>

                    <span
                      className={
                        openIndex === idx
                          ? "flex shrink-0 items-center mt-1 justify-center"
                          : "hidden"
                      }
                    >
                      <Image
                        src="/assets/minus-icon.svg"
                        alt="Minus-icon"
                        width={18}
                        height={18}
                        className="w-[18px] h-[18px]"
                        loading="lazy"
                      />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden font-['Onest'] transition-all duration-300 ease-in-out
                            px-5 md:px-6 text-sm md:text-base leading-[170%] text-(--text-dark)
                            ${
                              openIndex === idx
                                ? "max-h-96 opacity-100 pb-5"
                                : "max-h-0 opacity-0 pb-0"
                            }`}
                  >
                    {item.listdescription}
                  </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesFeatureCard;
