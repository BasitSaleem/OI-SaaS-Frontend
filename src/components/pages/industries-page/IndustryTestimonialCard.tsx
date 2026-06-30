import React from "react";
import Image from "next/image";
import IndustryIcon, { IndustryIconSet } from "@/components/icons/IndustryIconRegistry";

export interface TestimonialSlide {
  name: string;
  title: string;
  image: string;
  text: string;
  icon?: string;
  color?: string;
}

interface IndustryTestimonialCardProps {
  slide: TestimonialSlide;
  index: number;
  isVisible: boolean;
  iconSet?: IndustryIconSet | IndustryIconSet[];
}

const PURPLE = "#795CF5";
const GREEN = "#1AD1B9";
const PURPLE_ICON = "https://d2qlv5xtew5ayb.cloudfront.net/assets/review-section/double-coma-icon.svg";
const GREEN_ICON = "https://d2qlv5xtew5ayb.cloudfront.net/assets/review-section/coma-green.svg";

const IndustryTestimonialCard = ({
  slide,
  index,
  isVisible,
  iconSet,
}: IndustryTestimonialCardProps) => {
  const isOdd = index % 2 === 0;
  const accentColor = isOdd ? PURPLE : GREEN;
  const icon = isOdd ? PURPLE_ICON : GREEN_ICON;

  return (
    <div
      className={[
        "testimonial-card bg-white relative",
        "shadow-[0px_0px_20px_rgba(0,0,0,0.05)]",
        "rounded-[30px] p-6 transition-all duration-300",
        "flex flex-col h-full",
        isVisible ? "opacity-100" : "opacity-80",
      ].join(" ")}
    >
      <div className="absolute top-6 right-6">
        <Image
          src={icon}
          alt="Quote icon"
          width={26}
          height={26}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="flex items-center gap-4 mb-5">
        <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full border-2" style={{ borderColor: accentColor }}>
          {slide.image.startsWith("/") || slide.image.startsWith("http") ? (
            <Image
              src={slide.image}
              alt={`${slide.title} Icon`}
              width={56}
              height={56}
              className="h-full w-full rounded-full flex items-center justify-center"
            />
          ) : (
            <IndustryIcon
              set={iconSet}
              name={slide.image}
              size={56}
              className="h-full w-full rounded-full flex items-center justify-center child-svg-full"
            />
          )}
        </div>

        <div className="">
          <p className="font-semibold text-xl font-['onest']">
            {slide.name}
          </p>
          <p
            className="font-medium font-['onest']"
            style={{ color: accentColor }}
          >
            {slide.title}
          </p>
        </div>
      </div>

      <p className="text-base leading-[170%] flex-1 font-['onest']">
        {slide.text}
      </p>
    </div>
  );
};

export default IndustryTestimonialCard;
