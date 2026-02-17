"use client";
import React from "react";
import Link from "next/link";
import { useSafariDetector } from "@/hooks/useSafariDetector";
import Image from "next/image";

interface FeatureCard2Props {
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
}

const FeatureCard2: React.FC<FeatureCard2Props> = ({
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
}) => {
  const { shouldShowImage } = useSafariDetector();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`${isEven ? "lg:mt-40 md:mt-28 mt-20" : "lg:my-40 md:my-28 my-20"}  grid grid-cols-1 lg:grid-cols-2 items-center xl:gap-[170px] gap-12`}
    >
      {/* Video */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className={`px-3 py-4 flex items-center justify-center lg:max-w-full md:max-w-[600px] mx-auto  ${isEven ? "gradient-shadow" : "gradient-shadow-right"} rounded-[30px] ${
            containerShadow
              ? "shadow-[0px_0px_20px_0px_rgba(121,92,245,0.2)]"
              : ""
          }`}
          style={{
            width: containerWidth,
            height: containerHeight,
            border: `2px solid ${containerBorderColor}`,
            backgroundColor: containerBackgroundColor,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full ">
            {shouldShowImage && imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                width={743}
                height={460}
                className={`w-full h-full object-contain overflow-hidden bg-transparent`}
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
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : imageSrc ? (
              <img src={imageSrc} alt={title} className={`w-full`} />
            ) : null}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="font-['Onest'] font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] xl:text-5xl leading-9 sm:leading-[48px] xl:leading-[60px]  mb-4 min-h-[50px] lg:min-h-[50px]">
          {title}
        </h3>

        <p className="font-['Onest'] font-normal text-[#231F20] text-sm lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 flex-1 mb-6">
          {description}
        </p>

        <Link
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
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard2;
