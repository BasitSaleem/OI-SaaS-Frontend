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
  list?: string[] | { listheading: string; listdescription?: string }[];
  listVariant?: "list" | "accordion";
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
  listVariant = "list",
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
          <h2 className="font-['Onest'] font-semibold text-[var(--text-dark)] text-[32px] sm:text-4xl md:text-[40px] xl:text-5xl leading-9 sm:leading-[48px] xl:leading-[60px] mb-4 min-h-[50px]">
            {title}
          </h2>

          <Paragraph className="flex-1 mb-6">{description}</Paragraph>

          {list &&
            list.length > 0 &&
            (listVariant === "accordion" ? (
              <div className="flex flex-col gap-3 mb-8">
                {(list as any[]).map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className={`rounded-[20px] transition-all duration-300 ${
                        openIndex === idx
                          ? "border-3 border-white shadow-[inset_0px_17px_29px_0px_#FFFFFF40] backdrop-blur-[10.45px]"
                          : "border-3 border-transparent bg-transparent"
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
                          {typeof item === "string" ? item : item.listheading}
                        </span>

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
                        {typeof item === "string" ? "" : item.listdescription}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <ul className="flex flex-col gap-3 mb-8">
                {(list as any[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 min-w-[18px] h-[18px] flex items-center justify-center">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.67434 11.9995L0.80626 2.39758C0.518635 1.68002 0.86115 0.862661 1.57126 0.572036C2.01292 0.391286 2.49353 0.455646 2.86243 0.703614L17.897 10.8318C18.5352 11.2617 18.7077 12.1331 18.2822 12.778C18.1761 12.9392 18.0377 13.0767 17.8757 13.1816L2.86243 23.2953C2.22428 23.7253 1.36196 23.551 0.936478 22.9061C0.657713 22.4836 0.635682 21.9638 0.833166 21.5347L4.67434 11.9995Z"
                          stroke="#E5E5E5"
                          strokeWidth="1.40626"
                          strokeMiterlimit="22.9256"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.14067 18.37L14.597 11.9997L5.14062 5.62939L7.70689 11.9997L5.14067 18.37Z"
                          fill="url(#paint0_linear_4867_6573)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_4867_6573"
                            x1="8.23628"
                            y1="11.9997"
                            x2="14.597"
                            y2="11.9997"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#1AD1B9" />
                            <stop offset="0.293269" stopColor="#38ACCC" />
                            <stop offset="0.649038" stopColor="#5588DF" />
                            <stop offset="1" stopColor="#795CF5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="font-['Onest'] text-[var(--text-dark)] text-base md:text-xl lg:text-2xl  leading-[150%] lg:leading-[135%]">
                      {typeof item === "string" ? item : item.listheading}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesFeatureCard;
