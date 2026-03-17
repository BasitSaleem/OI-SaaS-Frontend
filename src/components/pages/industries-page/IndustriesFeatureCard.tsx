"use client";
import React from "react";
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
  list?: string[];
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
  const { shouldShowImage } = useSafariDetector();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`lg:my-40 md:my-28 my-20 grid grid-cols-1 lg:grid-cols-2 items-center xl:gap-[170px] gap-12`}
    >
      {/* Media Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div
          className={`px-3 py-4 flex items-center justify-center lg:max-w-full md:max-w-[600px] mx-auto rounded-[30px] `}
          style={{
            width: containerWidth,
            height: containerHeight,
            // border: `2px solid ${containerBorderColor}`,
            // backgroundColor: containerBackgroundColor,
          }}
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
      <div className={`flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <h3 className="font-['Onest'] font-semibold text-[var(--text-dark)] text-[32px] sm:text-4xl md:text-[40px] xl:text-5xl leading-9 sm:leading-[48px] xl:leading-[60px] mb-4 min-h-[50px]">
          {title}
        </h3>

        <Paragraph className="flex-1 mb-6">{description}</Paragraph>

        {list && list.length > 0 && (
          <ul className="flex flex-col gap-3 mb-8">
            {list.map((item, i) => (
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.67434 11.9995L0.80626 2.39758C0.518635 1.68002 0.86115 0.862661 1.57126 0.572036C2.01292 0.391286 2.49353 0.455646 2.86243 0.703614L17.897 10.8318C18.5352 11.2617 18.7077 12.1331 18.2822 12.778C18.1761 12.9392 18.0377 13.0767 17.8757 13.1816L2.86243 23.2953C2.22428 23.7253 1.36196 23.551 0.936478 22.9061C0.657713 22.4836 0.635682 21.9638 0.833166 21.5347L4.67434 11.9995Z"
                      stroke="#E5E5E5"
                      stroke-width="1.40626"
                      stroke-miterlimit="22.9256"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                        <stop stop-color="#1AD1B9" />
                        <stop offset="0.293269" stop-color="#38ACCC" />
                        <stop offset="0.649038" stop-color="#5588DF" />
                        <stop offset="1" stop-color="#795CF5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-['Onest'] text-[var(--text-dark)] text-base md:text-xl xl:text-2xl  leading-[150%] xl:leading-[135%]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* <Link
          href={buttonHref}
          className="inline-block w-fit px-6 md:px-6 lg:px-12 py-3 md:py-2.5 lg:py-[17px] text-base md:text-xs lg:text-xl leading-none font-['onest'] font-semibold text-white border border-transparent hover:bg-transparent mb-3 rounded-full transition-colors duration-300"
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "transparent";
            (e.target as HTMLElement).style.color = buttonColor;
            (e.target as HTMLElement).style.borderColor = buttonColor;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = buttonColor;
            (e.target as HTMLElement).style.color = "#fff";
            (e.target as HTMLElement).style.borderColor = "transparent";
          }}
        >
          {buttonLabel}
        </Link> */}
      </div>
    </div>
  );
};

export default IndustriesFeatureCard;
