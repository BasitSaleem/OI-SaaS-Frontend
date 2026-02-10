// whoWeServe.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ReactNode } from "react"; // Add this import
import SubHeading from "../typography/SubHeading";

interface CardItem {
  icon: string | StaticImageData | ReactNode; // Add ReactNode type
  title: string;
  description: string;
}

interface whoWeServeProps {
  heading: string;
  paragraph?: string;
  cards: CardItem[];
  //   mainImage: string | StaticImageData;
}

export default function whoWeServe({
  heading,
  paragraph,
  cards,
  //   mainImage,
}: whoWeServeProps) {
  return (
    <section className="lg:mt-[100px] md:mt-28 mt-20">
      <div className="wrapper">
        {/* Heading Section */}
        <div className="grid grid-cols-12 gap-12 items-center justify-center">
          <div className="col-span-4 ">
            <div className="flex flex-col items-start justify-start">
              <SubHeading className="mb-6 text-left">{heading}</SubHeading>
              {paragraph && (
                <Paragraph className="text-left">
                  {paragraph}
                </Paragraph>
              )}
            </div>
          </div>

          {/* Content Grid */}

          {/* Cards Container */}
          <div className="col-span-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-[auto_auto_1fr] gap-4 sm:gap-5 xl:gap-x-6 xl:gap-y-0">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className="
                    bg-white rounded-[20px]
                    border border-[#E2E2E2] hover:shadow-md
                    transition-all duration-300 ease-in-out hover:translate-y-[-2px]
                    grid grid-rows-[auto_auto_1fr] xl:grid-rows-subgrid xl:row-span-3
                    items-start
                    gap-4 sm:gap-5 md:gap-6
                    px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6
                    mb-6 xl:mb-0
                  "
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 self-start xl:row-start-1">
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

                  {/* Text */}
                  <h3 className="font-medium text-[var(--text-dark)] font-['Onest'] text-lg leading-[140%] xl:row-start-2">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-[170%] font-normal font-['Onest'] text-[var(--text-grey)] xl:row-start-3">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
