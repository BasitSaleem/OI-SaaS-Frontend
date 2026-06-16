"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Image, { StaticImageData } from "next/image";
import Paragraph from "../typography/Paragraph";
import Link from "next/link";
import ContactForm from "./contactForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import SupportCard, { CardItem } from "./SupportCard";

interface contactHeroProps {
  title?: string;
  description?: string;
  cards?: CardItem[];
  supportCards?: CardItem[];
  variant?: "animation1" | "animation2" | "none";
}

const ContactHero: React.FC<contactHeroProps> = ({
  title = "Contact Us",
  description,
  cards = [],
  supportCards = [],
  variant = "animation1",
}) => {
  useHeaderAnimation();
  useHeroAnimations(variant);

  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const growthBoxRef = useRef<HTMLDivElement>(null);
  const supportCardsRef = useRef<HTMLDivElement>(null);

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
    tl.to(supportCardsRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.2);

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
              className="owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-6 md:py-[76px] lg:py-16 px-3.5 sm:px-7 bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]"
              style={{ ["--hero-bg" as any]: "url('/assets/home-page-images/hero-bg.webp')" } as React.CSSProperties}
            >
              <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 items-start">
                  <div className="w-full">
                    <div className="flex flex-col items-start justify-start gap-8 w-full">
                      <div className="flex flex-col items-start justify-start gap-6 w-full">
                        <div ref={mainHeadingRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
                          <h1 className="text-left xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest']">
                            {title}
                          </h1>
                        </div>
                        <div ref={paragraphRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
                          <Paragraph className="text-left mx-auto">
                            {description}
                          </Paragraph>
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start gap-6 w-full">
                        <h3 className="lg:text-[32px] sm:text-[28px] text-2xl leading-[130%] font-medium font-['onest'] text-[var(--text-dark)]">
                          Connect with us
                        </h3>

                        <div ref={growthBoxRef} style={{ opacity: 0 }} className="w-full">
                          <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                            {cards.map((card, index) => (
                              <div
                                key={index}
                                className="p-[1px] rounded-[20px]"
                                style={{
                                  background:
                                    "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)",
                                }}
                              >
                                <div className="bg-white rounded-[20px] transition-all duration-300 ease-in-out flex items-start justify-start gap-5 px-5 py-4 md:px-6 md:py-5 h-full w-full">
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

                                  <div className="flex flex-col">
                                    <h3 className="font-medium text-[var(--text-grey)] font-['Onest'] text-sm leading-[160%]">
                                      {card.title}
                                    </h3>
                                    <Link
                                      href={card.url || "#"}
                                      target={card.url?.startsWith("http") ? "_blank" : undefined}
                                      className="text-sm md:text-lg leading-[140%] font-medium font-['Onest'] text-[var(--text-dark)] hover:text-[var(--primary-purple)] transition-colors duration-300"
                                    >
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

                        <div ref={supportCardsRef} style={{ opacity: 0 }} className="w-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 sm:gap-5 xl:gap-6">
                            {supportCards.map((card, index) => (
                              <SupportCard key={index} card={card} />
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
