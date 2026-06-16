"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image, { StaticImageData } from "next/image";
import Paragraph from "../typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SubFeaturesHeroProps {
  title?: string;
  description?: string;
  image?: StaticImageData;
  video?: string;
  ctaDesc?: string;
  variant?: "animation1" | "animation2" | "none";
  imageClassName?: string;
  url?: string;
}

const SubFeaturesHero: React.FC<SubFeaturesHeroProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  image,
  video,
  ctaDesc = "Get Started for Free",
  variant = "animation1",
  imageClassName = "",
  url = "",
}) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  useHeaderAnimation();
  useHeroAnimations(variant);

  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const heroLowerRef = useRef<HTMLDivElement>(null);
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
    tl.to(heroLowerRef.current, { opacity: 1, y: 0, duration: 1 }, 1.2);

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
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[30px] lg:rounded-tr-[40px] rounded-tl-[20px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className="owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-0 px-3.5 sm:px-7 bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]"
              style={{ ["--hero-bg" as any]: "url('/assets/home-page-images/hero-bg.webp')" } as React.CSSProperties}
            >
              <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper">
                <div ref={mainHeadingRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
                  <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-['Onest'] lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
                  <Paragraph className="mb-4 text-center mx-auto">
                    {description}
                  </Paragraph>
                </div>

                <div
                  ref={growthBoxRef}
                  style={{ opacity: 0 }}
                  className="flex md:gap-4 gap-2 lg:p-1.5 relative z-[60] owner-inventory-hero__content--buttons"
                >
                  <ButtonSm
                    url="https://app.ownersinventory.com/sign-up?app=OG"
                    text={ctaDesc}
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder
                  />
                </div>

                <div
                  ref={heroLowerRef}
                  style={{ opacity: 0 }}
                  className={`owner-inventory-hero__lower flex items-center justify-center relative w-full wrapper ${url === "pos" ? "p-10" : ""}`}
                >
                  {!video && image ? (
                    <Image
                      src={image}
                      alt={title}
                      width={743}
                      height={460}
                      className={`w-full object-cover rounded-3xl ${imageClassName}`}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 743px, 1000px"
                    />
                  ) : isTablet && image ? (
                    <Image
                      src={image}
                      alt={title}
                      width={743}
                      height={460}
                      className={`w-full object-cover rounded-3xl ${imageClassName}`}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 743px, 1000px"
                    />
                  ) : video ? (
                    <video
                      className="w-full object-cover rounded-3xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubFeaturesHero;
