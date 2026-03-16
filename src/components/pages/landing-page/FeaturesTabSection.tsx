"use client";

import MainHeading from "../typography/MainHeading";
import { LANDING_FEATURES } from "@/constant/landingPageData";
import Image from "next/image";

export default function FeaturesTabSection() {
  const features = LANDING_FEATURES.slice(0, 4);

  return (
    <section className="features-tab-section overflow-hidden relative mt-20 md:mt-28 lg:mt-[100px] py-10 md:py-10 z-20 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[var(--text-dark)] z-11">
      <div className="absolute top-[-150px] right-[-0px] z-[300]">
        <div className="bg-[var(--primary-purple)] h-[200px] lg:h-[300px] w-[200px] lg:w-[300px] blur-[400px] lg:blur-[300px] rounded-full"></div>
      </div>
      <div className="wrapper relative z-[400]">
        <MainHeading className="max-w-[800px] leading-tight text-[var(--white-color)] lg:mb-16 md:mb-12 mb-8 text-left">
          Powerful Features Built for Growing Businesses
        </MainHeading>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-center">
          {/* IMAGE SECTION */}
          <div className="w-full lg:w-[55%] xl:w-[60%] flex items-center justify-center relative">
            <Image
              src="/assets/home-page-images/animations/screen1-tab.webp"
              alt="Platform Features"
              width={800}
              height={600}
              className="w-full h-auto object-contain z-10 drop-shadow-2xl"
              priority
            />
          </div>

          {/* FEATURES GRID */}
          <div className="w-full lg:w-[45%] xl:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="flex flex-col items-start justify-center p-6 lg:p-7 rounded-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] min-h-[160px] lg:min-h-[180px] shadow-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300"
              >
                <div className="flex items-center justify-start mb-5 h-[34px]">
                  <Image
                    src={feature.icon}
                    width={feature.iconWidth || 34} 
                    height={feature.iconHeight || 34} 
                    className="w-auto h-auto max-w-[34px] max-h-[34px] object-contain"
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-['Onest'] text-[var(--white-color)] opacity-90 text-[15px] lg:text-[16px] font-medium leading-[1.5]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
