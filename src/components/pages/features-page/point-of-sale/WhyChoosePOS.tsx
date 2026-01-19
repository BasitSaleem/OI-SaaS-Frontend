"use client";

import Image, { StaticImageData } from "next/image";
import MainHeading from "../../typography/MainHeading";
import Paragraph from "../../typography/Paragraph";
import CardHeading from "../../typography/CardHeading";

interface CardItem {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

interface WhyChoosePOSProps {
  heading: string;
  paragraph?: string;
  cards: CardItem[];
  mainImage: string | StaticImageData;
}

export default function WhyChoosePOS({
  heading,
  paragraph,
  cards,
  mainImage,
}: WhyChoosePOSProps) {
  return (
    <section className="lg:mt-[100px] md:mt-28 mt-20">
      <div className="finance-reporting-shadow">
        <div className="wrapper">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center">
            <MainHeading className="mb-6 text-center">{heading}</MainHeading>
            <Paragraph className="mb-[60px] text-center">{paragraph}</Paragraph>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-[60px]">
            {/* Cards Container */}
            <div className="xl:col-span-5 col-span-6 flex flex-col gap-4 sm:gap-5 xl:gap-6">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="
                    bg-white rounded-[20px]
                    shadow-sm hover:shadow-md
                    transition-all duration-300 ease-in-out hover:translate-y-[-2px]
                    flex flex-col md:flex-row
                    items-start md:items-start
                    gap-4 sm:gap-5 md:gap-6
                    px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6
                  "
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div className="h-10 w-10">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <CardHeading>{card.title}</CardHeading>
                    <p className="text-base leading-[170%] font-normal font-['Onest'] text-[var(--text-grey)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="xl:col-span-7 col-span-6">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src={mainImage}
                  alt="Modern POS system interface showing sales analytics and transaction processing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
