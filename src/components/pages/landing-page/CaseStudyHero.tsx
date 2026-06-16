"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Paragraph from "../typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudyHeroProps {
  title?: string;
  subTitle?: string;
  description?: string;
  variant?: "animation1" | "animation2" | "none";
  heroStats?: { percentage: string; description: string }[];
  primaryColor?: string;
  secondaryColor?: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  subTitle,
  description,
  variant = "animation1",
  heroStats,
  primaryColor = "#1AD1B9",
  secondaryColor = "#795CF5",
}) => {
  useHeaderAnimation();
  useHeroAnimations(variant);

  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const growthBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl = homeHeroSecRef.current;
    const fallbackTimer = setTimeout(() => {
      if (heroEl && heroEl.style.clipPath !== "inset(0% 0% 0% 0%)") {
        heroEl.style.clipPath = "inset(0% 0% 0% 0%)";
      }
    }, 2500);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0);
    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
    tl.to(heroEl, { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, 0.5);
    tl.to(growthBoxRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div ref={homeHeroSecRef} style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8"></div>

        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
          {/* SHAPE HEADER */}
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className="owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-16 px-3.5 md:px-7 bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]"
              style={{ ["--hero-bg" as any]: "url('/assets/home-page-images/hero-bg.webp')" } as React.CSSProperties}
            >
              <div className="relative z-[10] owner-inventory-hero__content overflow-hidden grid grid-cols-12 items-center justify-center w-full wrapper p-3 md:p-4 lg:p-8 rounded-[30px] bg-white">
                <div
                  className="absolute bottom-6 z-[-1] right-6 md:top-[284px] lg:right-8 lg:top-[50px] blur-[190px] md:blur-[230px] w-[230px] md:w-[400px] lg:w-[448px] h-[300px] md:h-[400px] lg:h-[406px] rounded-full"
                  style={{ backgroundColor: secondaryColor }}
                />
                <div
                  className="absolute bottom-[60px] z-[-2] right-[60px] md:top-[284px] md:right-[300px] lg:right-[370px] lg:top-[87px] blur-[220px] md:blur-[200px] h-[270px] w-[180px] lg:h-[277px] lg:w-[278px] rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />

                <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                  <div className="p-[1px] rounded-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--primary-purple)] inline-block mb-3">
                    <span className="py-2 px-6 text-base lg:text-lg leading-[170%] font-['onest'] text-[#231F20] font-normal bg-[#F3F4F6] rounded-full backdrop-blur-sm block text-center">
                      Case Study
                    </span>
                  </div>

                  <div ref={mainHeadingRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
                    <h1 className="text-center xl:text-[64px] md:text-5xl text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-['Onest'] xl:mb-8 lg:mb-6 mb-5 text-left">
                      {title}:{" "}
                      <span className="text-[var(--primary-purple)]">{subTitle}</span>
                    </h1>
                  </div>

                  <div ref={paragraphRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
                    <Paragraph className="mb-4 lg:text-start text-center mx-auto">
                      {description}
                    </Paragraph>
                  </div>

                  <div
                    ref={growthBoxRef}
                    style={{ opacity: 0 }}
                    className="flex md:gap-4 gap-2 lg:p-1.5 relative z-[60] owner-inventory-hero__content--buttons"
                  />
                </div>

                {heroStats && heroStats.length > 0 && (
                  <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-6 mt-10 lg:mt-0 lg:pl-10">
                    {heroStats.map((stat, i) => (
                      <div
                        key={i}
                        className={`${i < 2
                            ? "col-span-12 md:col-span-4 lg:col-span-6"
                            : "col-span-12 md:col-span-4 lg:col-span-12"
                          } flex items-center justify-center p-[3px] bg-[linear-gradient(360deg,rgba(255,255,255,0.4)_20.11%,rgba(255,255,255,0)_82.07%)] rounded-[24px]`}
                      >
                        <div className="bg-white/50 backdrop-blur-lg rounded-[24px] w-full h-full p-6 flex flex-col items-center">
                          <span className="text-[32px] lg:text-[42px] leading-[130%] lg:leading-[100%] font-semibold text-[var(--text-dark)] leading-none mb-2 font-['Onest']">
                            {stat.percentage}
                          </span>
                          <p className="text-lg leading-[170%] lg:text-xl lg:leading-[30px] font-medium text-[var(--text-dark)] text-center font-['Onest']">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyHero;
