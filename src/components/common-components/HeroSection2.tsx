"use client";

import { ReactNode } from "react";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import DropdownButtonSm from "../dropdown/DropdownButtonSm";
import Paragraph from "../pages/typography/Paragraph";
import Image from "next/image";
import { useHeroEntranceAnimation } from "@/hooks/useHeroEntranceAnimation";
import HeroShowcase from "./HeroShowcase";

interface HeroSection2Props {
  title?: string;
  video?: string;
  description?: string;
  children?: ReactNode;
  heroHeight?: string;
  heroOverflow?: string;
  variant?: "animation1" | "animation2" | "none";
}

const HeroSection2: React.FC<HeroSection2Props> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  video,
  heroHeight = "",
  heroOverflow = "overflow-y-hidden",
  children,
  variant = "animation1",
}) => {
  useHeaderAnimation();
  useHeroAnimations(variant);

  const refs = useHeroEntranceAnimation();
  const { mainHeadingRef, paragraphRef, homeHeroSecRef } = refs;

  return (
    <div className="" ref={homeHeroSecRef} style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8"></div>
        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-full z-50">
          {/* SHAPE HEADER */}
          <div className=" owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            {/* Left Shape (only visible on md+) */}
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute -left-24 bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>

            {/* Right Shape */}
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[30px] lg:rounded-tr-[40px] rounded-tl-[20px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute -right-24 bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* HERO BODY */}
          <div className="md:py-px bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom relative flex flex-col items-center justify-center  w-full ${heroHeight} ${heroOverflow} pt-10 pb-6 md:py-[76px] lg:py-0  px-3.5 sm:px-7  bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]`}
            >
              {/* Background Image Optimization */}
              <div className="absolute inset-0 z-[-1] pointer-events-none">
                <Image
                  src="https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/hero-bg.webp"
                  alt="Background"
                  fill
                  priority
                  quality={75}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Heading */}
              <div className="owner-inventory-hero__content relative z-10 flex flex-col items-center justify-center w-full">
                <div ref={mainHeadingRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
                  <h1 className="text-center xl:text-[64px] md:text-5xl  text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest'] xl:max-w-5xl lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                    {title}
                  </h1>
                </div>

                <div ref={paragraphRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
                  <Paragraph className="mb-4 text-center mx-auto md:max-w-screen-sm xl:max-w-5xl 2xl:max-w-6xl ">
                    {description}
                  </Paragraph>
                </div>

                <div className="flex md:gap-4 gap-2 lg:p-1.5  relative z-60 owner-inventory-hero__content--buttons">
                  <ButtonSm
                    url="https://app.ownersinventory.com/sign-up?app=OG"
                    text="Get Started for Free"
                    bgColor="[#795CF5]"
                    textColor="white"
                    isBorder
                  />
                  <DropdownButtonSm
                    text="Book a Free Demo"
                    bgColor="[#1AD1B9]"
                    textColor="white"
                    isBorder={true}
                    items={[
                      { label: "Meet With Expert", url: "/contact" },
                      // { label: "View Demo", url: "" },
                    ]}
                  />
                </div>

                {/* Extra flexibility */}
                {children}
                <HeroShowcase refs={refs} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection2;
