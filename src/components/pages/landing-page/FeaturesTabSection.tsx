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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* IMAGE SECTION */}
          <div className=" lg:col-span-6 xl:col-span-6 lg:order-1 order-2 flex items-center justify-center relative">
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
          <div className="lg:col-span-6 order-1 lg:order-2 xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative flex flex-col items-start justify-start p-6 rounded-[20px] min-h-[100px]"
                style={{
                  boxShadow: "0px 0px 24px 0px rgba(51, 51, 51, 0.4)",
                  backdropFilter: "blur(60px)",
                  WebkitBackdropFilter: "blur(60px)",
                  background: "linear-gradient(315deg, rgba(255, 255, 255, 0.0675) 3.15%, rgba(255, 255, 255, 0) 95.22%)",
                }}
              >
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    padding: "1px",
                    background: index % 2 === 1 
                      ? "linear-gradient(239.84deg, #795CF5 7.92%, rgba(26, 209, 185, 0.4) 40.44%, rgba(26, 209, 185, 0) 60.44%)"
                      : "linear-gradient(135.32deg, #795CF5 0%, rgba(26, 209, 185, 0.4) 40.44%, rgba(26, 209, 185, 0) 60.44%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                
                <div className="flex items-center justify-start mb-5 relative z-10">
                  <Image
                    src={feature.icon}
                    width={feature.iconWidth || 44}
                    height={feature.iconHeight || 44}
                    className="w-6 h-6 sm:w-11 sm:h-11 object-contain"
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-['Onest'] text-[var(--white-color)] opacity-90 text-base sm:text-lg xl:text-xl font-medium leading-[150%] sm:leading-[167%] xl:leading-[172%] relative z-10">
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
