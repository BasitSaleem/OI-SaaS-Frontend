import React, { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PhilosophyIcons from "@/components/icons/philosophyIcons";

export interface CardItem {
  icon?: string | StaticImageData | ReactNode;
  iconName?: string;
  title: string;
  icon2?: string | StaticImageData | ReactNode;
  url?: string;
  description: string;
}

const SupportCard = ({ card }: { card: CardItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-[1px] rounded-[20px] transition-all duration-300"
      style={{
        background: isHovered
          ? "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)"
          : "#E2E2E2",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-[20px] transition-all duration-300 ease-in-out flex flex-col px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6 mb-6 xl:mb-0 h-full">
        {/* Icon */}
        <div className="flex justify-between items-center w-full mb-6">
          {/* First Icon */}
          <div className="h-10 w-10">
            {card.iconName ? (
              <PhilosophyIcons
                name={
                  isHovered
                    ? (`${card.iconName}Hover` as any)
                    : (card.iconName as any)
                }
                size={40}
              />
            ) : typeof card.icon === "string" ||
              (card.icon && typeof card.icon === "object" && "src" in card.icon) ? (
              <Image
                src={card.icon as string | StaticImageData}
                alt={card.title}
                width={40}
                height={40}
                className="h-10 w-10"
              />
            ) : (
              <div className="h-10 w-10 flex items-center justify-center">
                {card.icon as ReactNode}
              </div>
            )}
          </div>

          {/* Second Icon (icon2) - only render if exists */}
          {card.icon2 && (
            <Link
              href={card.url || "#"}
              className="h-12 w-12 backdrop-blur-sm rounded-full border-2 border-[rgba(255,255,255,0.05)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
            >
              {typeof card.icon2 === "string" ||
              (card.icon2 &&
                typeof card.icon2 === "object" &&
                "src" in card.icon2) ? (
                <Image
                  src={card.icon2 as string | StaticImageData}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="h-12 w-12"
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center">
                  {card.icon2 as ReactNode}
                </div>
              )}
            </Link>
          )}
        </div>

        {/* Heading container with flex-1 to take equal space */}
        <div className="flex-1 mb-2">
          <h3 className="font-medium text-[var(--text-dark)] whitespace-normal font-['Onest'] text-lg leading-[140%]">
            {card.title}
          </h3>
        </div>

        <p className="text-sm leading-[170%] font-normal whitespace-normal font-['Onest'] text-[var(--text-grey)]">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
