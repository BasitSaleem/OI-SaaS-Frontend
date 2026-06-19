"use client";
import React from "react";
import { useSafariDetector } from "@/hooks/useSafariDetector";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";
import FeatureAccordionList from "./FeatureAccordionList";
import FeatureBulletList from "./FeatureBulletList";

interface IndustriesFeatureCardProps {
  title: string;
  description: string;
  subDescription?: string;
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
  list?: string[] | { listheading: string; listdescription?: string; listSubDescription?: string }[];
  listVariant?: "list" | "accordion";
}

const IndustriesFeatureCard: React.FC<IndustriesFeatureCardProps> = ({
  title,
  description,
  subDescription,
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
  const { shouldShowImage } = useSafariDetector();
  const isEven = index % 2 === 0;

  return (
    <div className="lg:my-[100px] md:my-28 my-20">
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
                <img src={imageSrc} alt={title} width={743} height={460} className="w-full" />
              ) : null}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`flex flex-col ${isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
            }`}
        >
          <SubHeading className=" mb-4 min-h-[50px]">
            {title}
          </SubHeading>

          <Paragraph className={`flex-1 mb-6`}>{description}</Paragraph>
          {subDescription && <Paragraph className="flex-1 mb-6">{subDescription}</Paragraph>}

          {list &&
            list.length > 0 &&
            (listVariant === "accordion" ? (
              <FeatureAccordionList list={list} />
            ) : (
              <FeatureBulletList list={list} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesFeatureCard;
