import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface IndustryCardProps {
  title: string;
  gradient: string;
  description?: string;
  imageUrl?: string;
  mobileImage?: string;
  className?: string;
  onClick?: () => void;
  isHovered?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  gradient,
  description,
  imageUrl,
  mobileImage,
  className = "",
  onClick,
  isHovered = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const shouldShowDescription = isMobile || isHovered;
  const titleColor = isMobile
    ? "text-[#333333]"
    : isHovered
    ? "text-[#333333]"
    : "text-white";

  return (
    <div
      className={`relative rounded-[30px] shadow-sm overflow-hidden min-h-[400px] md:min-h-[390px] md:h-[390px] w-full cursor-pointer transition-all duration-300 ${className}`}
      style={{
        background: isMobile ? "#F3F3F3" : isHovered ? "#F3F3F3" : gradient,
      }}
      onClick={onClick}
    >
      {/* MAIN CONTENT */}
      <div className="relative w-full h-full p-4 md:p-8 flex flex-col justify-between z-10">
        <div className="flex-1 flex flex-col">
          <h3
            className={`lg:text-[32px] md:text-2xl text-xl font-medium font-['Onest'] lg:leading-[130%] md:leading-[135%] leading-[140%] transition-colors ${
              shouldShowDescription
                ? "font-semibold md:font-semibold"
                : "font-medium"
            } duration-300 ${titleColor}`}
          >
            {title}
          </h3>

          {/* DESCRIPTION AND DESKTOP IMAGE CONTAINER */}
          <div
            className={`mt-6 transition-opacity duration-500 ease-in-out ${
              shouldShowDescription
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              width: isMobile ? "100%" : "510px",
            }}
          >
            <div className="flex md:flex-row flex-col gap-6">
              {description && (
                <div className="md:flex-1 text-[#666666] font-normal text-base font-['Onest'] leading-6">
                  {description}
                </div>
              )}

              {/* DESKTOP IMAGE - Only shown on desktop */}
              {imageUrl && (
                <div className="hidden md:block w-full md:w-[210px] mb-6 md:mb-0 md:flex-shrink-0 md:-mt-12 pr-0 md:pr-5">
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={180}
                    height={250}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE - Placed here to appear at the end */}

        <div className="mt-auto">
        {mobileImage && isMobile && (
          <div className="w-full block md:hidden mb-4 mt-3">
            <Image
              src={mobileImage}
              alt={title}
              width={180}
              height={250}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
        </div>

        {/* READ MORE BUTTON */}
        <div
          className={`bg-white rounded-full h-[60px] hidden md:flex items-center px-2 pl-6 -mt-0 md:-mt-90 transition-all duration-300 ease-in-out ${
            isMobile
              ? "w-full justify-between"
              : isHovered
              ? "w-[180px] justify-between"
              : "w-full justify-between"
          }`}
        >
          <span className="text-[#333333] text-[16px] font-semibold font-['Onest']">
            Read More
          </span>
          <div
            className="w-[48px] h-[48px] bg-[#F3F3F3] rounded-full flex justify-center items-center transition-all duration-300"
            style={{
              background: isMobile
                ? gradient
                : isHovered
                ? gradient
                : "#F3F3F3",
            }}
          >
            <ArrowUpRight
              className={`w-5 h-5 transition-all duration-300 ${
                isMobile || isHovered
                  ? "text-white rotate-45"
                  : "text-[#333333]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* CIRCLES BACKGROUND DECORATIONS */}
      <div
        className={`absolute -left-[50px] bottom-[90px] w-[150px] h-[150px] opacity-20 pointer-events-none transition-opacity duration-300 ${
          isMobile || (isHovered && !isMobile) ? "opacity-0" : "opacity-20"
        }`}
      >
        <div className="absolute inset-0 border-[10px] border-white rounded-full" />
      </div>
      <div
        className={`absolute -left-[45px] bottom-[100px] w-[120px] h-[120px] opacity-10 pointer-events-none transition-opacity duration-300 ${
          isMobile || (isHovered && !isMobile) ? "opacity-0" : "opacity-10"
        }`}
      >
        <div className="absolute inset-0 bg-white rounded-full" />
      </div>

      <div
        className={`absolute -right-[80px] -top-[100px] w-[230px] h-[220px] opacity-20 pointer-events-none transition-opacity duration-300 ${
          isMobile || (isHovered && !isMobile) ? "opacity-0" : "opacity-20"
        }`}
      >
        <div className="absolute inset-0 border-[12px] border-white rounded-full" />
      </div>
    </div>
  );
};

export default IndustryCard;