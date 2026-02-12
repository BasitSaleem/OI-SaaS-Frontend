"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroAnimation2 } from "@/hooks/useHeroAnimation2";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image, { StaticImageData } from "next/image";
import Paragraph from "../typography/Paragraph";
import Link from "next/link";
import ContactForm from "./contactForm";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  icon: string | StaticImageData | ReactNode;
  title: string;
  icon2?: string | StaticImageData | ReactNode;
  url?: string;
  description: string;
}

interface contactHeroProps {
  title?: string;
  description?: string;
  ctaDesc?: string;
  cards?: CardItem[];
  supportCards?: CardItem[];
  variant?: "animation1" | "animation2" | "none";
}

const ContactHero: React.FC<contactHeroProps> = ({
  title = "Contact Us",
  description,
  ctaDesc = "Book a Free Demo",
  cards = [],
  supportCards = [],
  variant = "animation1",
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
  const supportCardsRef = useRef<HTMLDivElement>(null); // New ref for support cards

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(mainHeadingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
    gsap.set(homeHeroSecRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
    gsap.set(growthBoxRef.current, { opacity: 0, y: 50 });
    gsap.set(supportCardsRef.current, { opacity: 0, y: 50 }); // Use new ref
    gsap.set(heroLowerRef.current, { opacity: 0, y: 50 });

    // Animations
    tl.to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0);
    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
    tl.to(
      homeHeroSecRef.current,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
      0.5,
    );
    tl.to(growthBoxRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1);
    tl.to(supportCardsRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.2); // Animate support cards separately
    tl.to(heroLowerRef.current, { opacity: 1, y: 0, duration: 1 }, 1.4);
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
          <div className="md:py-[1px] bg-[#F3F4F6]  rounded-[20px] lg:rounded-[40px]">
            <div
              className={`owner-inventory-hero__bottom hero-bg-circle  relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-16 px-6 lg:px-[100px] bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]`}
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
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 items-start">
                <div className="w-full">
                  <div className="flex flex-col items-start justify-start gap-8 w-full">
                    <div className="flex flex-col items-start justify-start gap-6 w-full">
                      <div ref={mainHeadingRef}>
                        <h1 className="text-left xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest']">
                          {title}
                        </h1>
                      </div>
                      <div ref={paragraphRef}>
                        <Paragraph className="text-left mx-auto">
                          {description}
                        </Paragraph>
                      </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-6 w-full">
                      <h3 className="lg:text-[32px] sm:text-[28px] text-2xl leading-[130%] font-medium font-['onest'] text-[var(--text-dark)]">
                        Connect with us
                      </h3>

                      <div ref={growthBoxRef} className="w-full">
                        <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                          {cards.map((card, index) => (
                            <div
                              key={index} // Key should be on the outer div
                              className="p-[1px] rounded-[20px]"
                              style={{
                                background:
                                  "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)",
                              }}
                            >
                              <div className="bg-white rounded-[20px] transition-all duration-300 ease-in-out flex items-start justify-start gap-5 px-5 py-4 md:px-6 md:py-5 h-full w-full">
                                {/* Icon */}
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

                                {/* Heading container with flex-1 to take equal space */}
                                <div className="flex flex-col">
                                  <h3 className="font-medium text-[var(--text-grey)] font-['Onest'] text-sm leading-[160%]">
                                    {card.title}
                                  </h3>

                                  <Link href="" className="text-sm md:text-lg leading-[140%] font-medium font-['Onest'] text-[var(--text-dark)] ">
                                    {card.description}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-6 w-full">
                      <h3 className="lg:text-[32px] sm:text-[28px] text-2xl leading-[130%] font-medium font-['onest'] text-[var(--text-dark)]">
                        Additional Support
                      </h3>

                      <div ref={supportCardsRef} className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 sm:gap-5 xl:gap-6">
                          {supportCards.map((card, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-[20px] border border-[#E2E2E2] hover:shadow-md transition-all duration-300 ease-in-out hover:translate-y-[-2px] flex flex-col px-5 py-4 md:px-6 md:py-5 xl:px-[30px] xl:py-6 mb-6 xl:mb-0 h-full"
                            >
                              {/* Icon */}
                              <div className="flex justify-between items-center w-full mb-6">
                                {/* First Icon */}
                                <div className="h-10 w-10">
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

                                {/* Second Icon (icon2) - only render if exists */}
                                {card.icon2 && (
                                  <Link href={card.url || "#"} className="h-12 w-12 backdrop-blur-sm rounded-full border-2 border-[rgba(255,255,255,0.05)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                                    {typeof card.icon2 === "string" ||
                                    (card.icon2 &&
                                      typeof card.icon2 === "object" &&
                                      "src" in card.icon2) ? (
                                      <Image
                                        src={card.icon2 as string | StaticImageData}
                                        alt={card.title}
                                        width={40}
                                        height={40}
                                        className="h-12 w-12"
                                      />
                                    ) : (
                                      <div className="h-10 w-10 flex items-center justify-center">
                                        {card.icon2 as ReactNode}
                                      </div>
                                    )}
                                  </Link>
                                )}
                              </div>

                              {/* Heading container with flex-1 to take equal space */}
                              <div className="flex-1 mb-2">
                                <h3 className="font-medium text-[var(--text-dark)] whitespace-normal font-['Onest'] text-lg leading-[140%]">
                                  {card.title}
                                </h3>
                              </div>

                              <p className="text-sm leading-[170%] font-normal whitespace-normal font-['Onest'] text-[var(--text-grey)]">
                                {card.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="w-full">
                    <ContactForm />
                 </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactHero;