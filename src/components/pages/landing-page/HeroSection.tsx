"use client";

import { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ButtonSm from "@/components/button/ButtonSm";
import InputField from "@/components/form-fields/InputField";
import ButtonLg from "@/components/button/ButtonLg";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  title?: string;
  description?: string;
  video?: string;
  image?: string;
  showButtons?: boolean;
  showSubscribe?: boolean;
  children?: ReactNode;
  heroHeight?: string;
  heroOverflow?: string;
  variant?: "animation1" | "animation2" | "none";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Grow Faster with Smarter Inventory Tools",
  description,
  video,
  image,
  showButtons = true,
  showSubscribe = false,
  heroHeight = "lg:h-[920px]",
  heroOverflow = "overflow-y-hidden",
  children,
  variant = "animation1",
}) => {
  const [isTablet, setIsTablet] = useState(false);

  // Detect tablet screen size
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
  return (
    <div className="pinned-section-1">
      <div className="top-section md:h-6 h-8"></div>
      <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-[100%] z-50">
        {/* SHAPE HEADER */}
        <div className=" owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
          {/* Left Shape (only visible on md+) */}
          <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[var(--background-halfwhite)] rounded-tl-[40px] owner-inventory-hero__border-left-top">
            <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
          </div>

          {/* Right Shape */}
          <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[var(--background-halfwhite)] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
            <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
          </div>
        </div>

        {/* HERO BODY */}
        <div className="md:py-[1px] bg-[var(--background-halfwhite)]  rounded-[20px] lg:rounded-[40px]">
           <div
              className={`owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-0 px-6 lg:px-[100px] bg-[var(--background-halfwhite)] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]`}
              style={
                {
                  // background image is painted in CSS ::before using this variable
                  ["--hero-bg" as any]:
                    "url('/assets/home-page-images/hero-bg.webp')",
                } as React.CSSProperties
              }
            >
            {/* Heading */}
            <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full">
              <h1 className="owner-inventory-hero__content--title text-4xl md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-['Onest'] font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[var(--text-dark)]">
                {title}
              </h1>

              {description && !showButtons && (
                <p className="font-['Onest'] text-xl leading-9 font-normal text-[var(--text-dark)] text-center w-full max-w-4xl mt-16">
                  {description}
                </p>
              )}

              {showButtons && (
                <div className="inline-flex p-1 lg:p-1.5 mt-10 xl:mt-20 rounded-full bg-white owner-inventory-hero__content--buttons">
                  <ButtonSm
                    url="#"
                    text="Book Free Demo"
                    bgColor="var(--primary-teal)"
                    textColor="white"
                    isBorder
                  />
                  <ButtonSm
                    url="#"
                    text="View Pricing Plans"
                    bgColor="white"
                    textColor="var(--text-dark)"
                    isBorder={false}
                  />
                </div>
              )}
              {showSubscribe && (
                <div className="mt-10 relative xl:mt-20 w-full max-w-xl mx-auto">
                  <div className="flex  items-center bg-white sm:px-2 rounded-full overflow-hidden shadow-sm">
                    <InputField
                      placeholder="Enter email"
                      type="email"
                      rounded="left"
                      py="py-3 sm:py-4"
                      px="px-4 sm:px-8"
                    />
                    <div className="absolute bottom-[-45px] left-0 w-full sm:relative sm:bottom-0 sm:w-auto">
                      <ButtonSm
                        url="#"
                        text="Subscribe"
                        bgColor="var(--primary-purple)"
                        textColor="white"
                        isBorder
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Extra flexibility */}
              {children}
            </div>

            {/* Video */}
            <div className="owner-inventory-hero__video relative z-[2]  w-full mt-10 md:mt-10 xl:mt-10 mb-10 sm:max-w-lg md:max-w-xl lg:max-w-4xl">
              {/* <video
                className="w-full object-cover rounded-3xl lazy-video feature-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
              </video> */}

              {!video && image ? (
                <Image
                  src={image}
                  alt={title}
                  width={743}
                  height={460}
                  className="w-full h-full object-contain overflow-hidden bg-transparent"
                  priority
                />
              ) : isTablet && image ? (
                <Image
                  src={image}
                  alt={title}
                  width={743}
                  height={460}
                  className="w-full h-full object-contain overflow-hidden bg-transparent"
                  priority
                />
              ) : video ? (
                <video
                  className="w-full object-cover rounded-3xl lazy-video feature-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
