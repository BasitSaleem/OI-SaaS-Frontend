// ourPhilosophy.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ReactNode, useState } from "react";
import PhilosophyIcons from "@/components/icons/philosophyIcons";

interface CardItem {
  icon?: string | StaticImageData | ReactNode;
  iconName?: string;
  title: string;
  description: string;
}

interface OurPhilosophyProps {
  heading: string;
  paragraph?: string;
  cards: CardItem[];
  //   mainImage: string | StaticImageData;
}

export default function OurPhilosophy({
  heading,
  paragraph,
  cards,
  //   mainImage,
}: OurPhilosophyProps) {
  return (
    <section className="lg:mt-[100px] md:mt-28 mt-20">
      <div className="wrapper">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center">
          <MainHeading className="mb-6 text-center">{heading}</MainHeading>
          {paragraph && (
            <Paragraph className="mb-[60px] text-center">{paragraph}</Paragraph>
          )}
        </div>

        {/* Content Grid */}

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {cards.map((card, index) => (
            <PhilosophyCard key={index} card={card} />
          ))}
        </div>

        {/* Main Image Container */}
        {/* <div className="xl:col-span-7 col-span-6">
              <div className="relative rounded-[20px] flex align-center justify-center overflow-hidden">
                <Image
                  src={mainImage}
                  alt="Modern POS system interface showing sales analytics and transaction processing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div> */}
      </div>
    </section>
  );
}

const PhilosophyCard = ({ card }: { card: CardItem }) => {
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
      <div
        className="
          bg-white rounded-[20px]
          transition-all duration-300 ease-in-out
          flex flex-col
          px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6
          h-full
        "
      >
        {/* Icon */}
        <div className="flex-shrink-0 mb-6">
          <div className="h-12 w-12 bg-[#F8F8F8] flex items-center justify-center rounded-xl">
            {card.iconName ? (
              <PhilosophyIcons
                name={
                  isHovered
                    ? (`${card.iconName}Hover` as any)
                    : (card.iconName as any)
                }
                size={24}
              />
            ) : typeof card.icon === "string" ||
              (card.icon && typeof card.icon === "object" && "src" in card.icon) ? (
              <Image
                src={card.icon as string | StaticImageData}
                alt={card.title}
                width={24}
                height={24}
                className="h-6 w-6"
              />
            ) : (
              <div className="h-6 w-6 flex items-center justify-center">
                {card.icon as ReactNode}
              </div>
            )}
          </div>
        </div>

        {/* Heading container */}
        <div className="flex-1 mb-2">
          <h3 className="font-medium text-[var(--text-dark)] font-['Onest'] text-lg leading-[140%]">
            {card.title}
          </h3>
        </div>

        <p className="text-sm leading-[170%] font-normal font-['Onest'] text-[var(--text-grey)]">
          {card.description}
        </p>
      </div>
    </div>
  );
};
