// ourPhilosophy.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ReactNode } from "react"; // Add this import

interface CardItem {
  icon: string | StaticImageData | ReactNode; // Add ReactNode type
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
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                          bg-white rounded-[20px]
                          border border-[#E2E2E2] hover:shadow-md
                          transition-all duration-300 ease-in-out hover:translate-y-[-2px]
                          flex flex-col
                          px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6
                          mb-6 xl:mb-0
                          h-full
                        "
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-6">
                <div className="h-10 w-10">
                  {/* Check if icon is a string/StaticImageData or ReactNode */}
                  {typeof card.icon === "string" ||
                  (card.icon &&
                    typeof card.icon === "object" &&
                    "src" in card.icon) ? (
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
              </div>

              {/* Heading container with flex-1 to take equal space */}
              <div className="flex-1 mb-2">
                <h3 className="font-medium text-[var(--text-dark)] font-['Onest'] text-lg leading-[140%]">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm leading-[170%] font-normal font-['Onest'] text-[var(--text-grey)]">
                {card.description}
              </p>
            </div>
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
