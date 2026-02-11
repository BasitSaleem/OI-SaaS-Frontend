
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroAnimation2 } from "@/hooks/useHeroAnimation2";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image, { StaticImageData } from "next/image";
import Paragraph from "../typography/Paragraph";

gsap.registerPlugin(ScrollTrigger);

interface SubFeaturesHeroProps {
  title?: string;
  description?: string;
  image?: StaticImageData;
  video?: string;
  ctaDesc?: string;
  variant?: "animation1" | "animation2" | "none";
  imageClassName?: string; 
}

const SubFeaturesHero: React.FC<SubFeaturesHeroProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  image,
  video,
  ctaDesc = "Get Started for Free",
  variant = "animation1",
  imageClassName = "",
}) => {
  useHeaderAnimation();
  if (variant === "animation1") {
    useHeroAnimation();
  } else if (variant === "animation2") {
    useHeroAnimation2();
  }

  // Refs
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const heroLowerRef = useRef<HTMLDivElement>(null);
  const growthBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(mainHeadingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
    gsap.set(homeHeroSecRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
    gsap.set(growthBoxRef.current, { opacity: 0, y: 50 });
    gsap.set(heroLowerRef.current, { opacity: 0, y: 50 });

    // Animations
    tl.to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0);
    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
    tl.to(
      homeHeroSecRef.current,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
      0.5
    );
    tl.to(growthBoxRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1);
    tl.to(heroLowerRef.current, { opacity: 1, y: 0, duration: 1 }, 1.2);
  }, []);

  return (
    <div ref={homeHeroSecRef}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8"></div>

        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
          {/* SHAPE HEADER */}
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            {/* Left Shape */}
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>

            {/* Right Shape */}
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-0 px-6 lg:px-[100px] bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]`}
              style={
                {
                  // background image is painted in CSS ::before using this variable
                  ["--hero-bg" as any]:
                    "url('/assets/home-page-images/hero-bg.webp')",
                } as React.CSSProperties
              }
            >
              {/* CONTENT ABOVE BACKGROUND LAYER */}
              <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper">
                <div ref={mainHeadingRef}>
                  <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-['Onest'] lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef}>
                  <Paragraph className="mb-4 text-center mx-auto">
                    {description}
                  </Paragraph>
                </div>

                <div
                  ref={growthBoxRef}
                  className="flex md:gap-4 gap-2 lg:p-1.5 relative z-[60] owner-inventory-hero__content--buttons"
                >
                  <ButtonSm
                    url="https://osglobal.ownersjungle.com/sign-up?app=OG"
                    text={ctaDesc}
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder
                  />
                </div>

                {/* Hero Image */}
                <div
                  ref={heroLowerRef}
                  className="owner-inventory-hero__lower flex items-center justify-center relative w-full wrapper"
                >
                  {video ? (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-cover rounded-3xl"
                    />
                  ) : image ? (
                    <Image
                      src={image}
                      alt="Hero Image"
                      width={1200}
                      height={675}
                      className= {`w-full object-cover rounded-3xl ${imageClassName}`}
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
                      <p className="text-gray-500">No media available</p>
                    </div>
                  )}
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
