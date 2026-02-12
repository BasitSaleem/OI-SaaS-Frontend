"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ReactNode } from "react";
import SubHeading from "../typography/SubHeading";

interface CardItem {
  icon: string | StaticImageData | ReactNode;
  title: string;
  description: string;
}

interface whoWeServeProps {
  heading: string;
  paragraph?: string;
  cards: CardItem[];
}

export default function WhoWeServe({
  heading,
  paragraph,
  cards,
}: whoWeServeProps) {
  return (
    <section className="lg:mt-[100px] md:mt-28 mt-20 w-full overflow-hidden">
      <div className="wrapper">
        {/* Heading Section */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column - Heading & Paragraph */}
          <div className="col-span-12  xl:col-span-4">
            <div className="flex flex-col items-start justify-start">
              <SubHeading className="mb-6 text-left">{heading}</SubHeading>
              {paragraph && (
                <Paragraph className="text-left">{paragraph}</Paragraph>
              )}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="col-span-12  xl:col-span-8">
            {/* Fixed: Added w-full and overflow-hidden to contain grid */}
            <div className="w-full overflow-hidden">
              {/* Fixed: Adjusted grid layout for better responsiveness */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] gap-4 sm:gap-5 xl:gap-x-6 xl:gap-y-0">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-[20px] border border-[#E2E2E2] hover:shadow-md transition-all duration-300 ease-in-out hover:translate-y-[-2px] flex flex-col px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6 mb-6 xl:mb-0 h-full"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 mb-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
