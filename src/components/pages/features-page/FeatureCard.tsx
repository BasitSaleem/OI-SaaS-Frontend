import Link from "next/link";
import React from "react";
import CardHeading from "../typography/CardHeading";
import CardDesc from "../typography/CardDesc";
import { useSafariDetector } from "@/hooks/useSafariDetector";

interface FeatureCardProps {
  title: string;
  description?: string;
  videoSrc?: string;
  imageSrc?: string;
  authorName?: string;
  className?: string;
  mediaClassName?: string;
  paddingClass?: string;
  buttonLabel?: string;
  buttonHref?: string;
  heightClass?: string;
  truncateTitle?: boolean;
  maxTitleLength?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description = "",
  videoSrc,
  imageSrc,
  authorName = "",
  className = "",
  mediaClassName = "",
  paddingClass = "px-[24px] pt-4",
  buttonLabel,
  buttonHref,
  heightClass = "h-full",
  truncateTitle = false,
  maxTitleLength = 50,
}) => {
  const { shouldShowImage } = useSafariDetector();
  const displayedTitle =
    truncateTitle && title.length > maxTitleLength
      ? title.slice(0, maxTitleLength) + "..."
      : title;

  return (
    <div
      className={`p-[1px] rounded-[30px] features-core-opretions__cards 
        bg-[linear-gradient(90deg,#1AD1B9_32.74%,#38ACCC_52.46%,#5588DF_76.39%,#795CF5_100%)] 
        ${heightClass} ${className} h-full`}
    >
      <div className="bg-white w-full rounded-[30px] h-full p-2 lg:p-4 flex flex-col">
        <div className="flex flex-col flex-1">
          {/* Media */}
          <div
            className={`w-full ${paddingClass} pb-0 production-banner 
              bg-[linear-gradient(90deg,rgba(26,209,185,0.2)_32.74%,rgba(56,172,204,0.2)_52.46%,rgba(85,136,223,0.2)_76.39%,rgba(121,92,245,0.2)_100%)] 
              rounded-[20px]`}
          >

            <img
              src={imageSrc}
              alt={title}
              className={`w-full rounded-[20px] ${mediaClassName}`}
            />

          </div>

          {/* Text Content */}
          <div className="mt-5 flex flex-col flex-1">
            <div data-card-heading className="mb-4">
              <CardHeading className="flex self-stretch">
                {displayedTitle}
              </CardHeading>
            </div>

             <CardDesc className={`flex-1 ${authorName || buttonLabel ? "mb-6" : ""}`}>
              {description}
            </CardDesc>

            {authorName && (
              <p className="xl:text-base text-base leading-6 font-bold font-['Onest'] text-[#795CF5] mt-3 lg:mt-4">
                {authorName}
              </p>
            )}

            {buttonLabel && (
              <Link
                href={buttonHref || "#"}
                className="xl:text-base text-sm font-bold font-['Onest'] text-[#795CF5] mt-4 xl:mt-6 cursor-pointer inline-block"
              >
                {buttonLabel} &gt;&gt;&gt;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
