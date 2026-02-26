"use client";

import Image from "next/image";
import MainHeading from "../pages/typography/MainHeading";
import BrandsSwiper from "../slider/BrandsSwiper";
import Paragraph from "../pages/typography/Paragraph";

// -------------------------
// ✅ Types
// -------------------------
export interface BrandItem {
  id: number;
  name: string;
  logo: string;
}

interface TrustedBySectionProps {
  heading?: string;
  paragraph?: string;
  brands?: BrandItem[]; 
}


const TrustedBySection: React.FC<TrustedBySectionProps> = ({
  heading = "Preferred to businesses who demand precision and performance",
  paragraph = "",
  brands = [
    { id: 1, name: "ASK Food Industries", logo: "/assets/brands-logo-section/ask-food.svg" },
    { id: 2, name: "Industrial Valco", logo: "/assets/brands-logo-section/industrial-valco.svg" },
    { id: 3, name: "Texas Pipe & Supply", logo: "/assets/brands-logo-section/texas-pipe.svg" },
    { id: 4, name: "Al-Asif", logo: "/assets/brands-logo-section/al-asif.svg" },
    { id: 5, name: "Sportifi", logo: "/assets/brands-logo-section/sportifi.svg" },
  ],
}) => {
  return (
    <section className="mt-28 md:mt-40 lg:mt-[80px] ">
      <div className="wrapper bg-white text-center">

        {/* 🔥 Dynamic heading */}
        <MainHeading className="">
          {heading}
        </MainHeading>

        {/* 🔥 Optional paragraph */}
        {paragraph && (
          <Paragraph className="lg:mt-6 mt-4">
            {paragraph}
          </Paragraph>

          
        )}

        {/* 🔥 Brands Swiper */}
        <div className="xl:mt-12 lg:mt-6 mt-5">
        <BrandsSwiper
          slides={brands}
          renderSlide={(brandItem: BrandItem) => (
            <div className="flex items-center justify-center w-full h-full p-6">
              <div className="relative w-[140px] md:w-[160px] lg:w-[180px] aspect-[2/1] flex items-center justify-center">
               
               <div className="h-10 w-10 rounded bg-[#1AD1B9] -z-10 blur-2xl absolute top-[50%]"></div>
                <Image
                  src={brandItem.logo}
                  alt={brandItem.name}
                  width={200}
                  height={100}
                  className="w-full h-auto max-h-full  object-contain "
                  priority
                />
              </div>
            </div>
          )}
        />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
