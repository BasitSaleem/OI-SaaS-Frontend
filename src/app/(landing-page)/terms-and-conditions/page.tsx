
"use client"; 

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";

import { TERMS_AND_CONDITIONS_DATA } from "@/constant/termsData";

const TermAndConditionPage = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let heroBreak = gsap.matchMedia();

    // Mobile
    heroBreak.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
      tl.to("header", { y: -30, duration: 1 }, 1);
    });

    // Tablet
    // heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scroller: "body",
    //       start: "top top",
    //       end: "+=" + window.innerHeight * 1,
    //       trigger: ".pinned-section-1",
    //       scrub: 2,
    //     },
    //   });

    //   tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
    //   tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
    //   tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
    //   tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);

    //   tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
    //   tl.to(".owner-inventory-hero", { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" }, 0);
    //   tl.to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1);
    //   tl.to(".owner-inventory-hero__video", { y: -100, duration: 2, ease: "power2.out" }, 1);
    // });

    // Desktop
    heroBreak.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
      tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
      tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);

      tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
      tl.to(".owner-inventory-hero", { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1);
      tl.to(".owner-inventory-hero__video", { y: -300, duration: 2, ease: "power2.out" }, 1);
    });

    return () => {
      heroBreak.revert(); 
    };
  }, []);

  return (
    <>
      <div className="pinned-section-1">
        <div className="md:h-6 h-8"></div>
      </div>

      <section className="mt-20 md:mt-28 lg:mt-40">
        <div className="wrapper">
          <h3 className="text-center text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-['Onest'] font-semibold text-[#231F20]">
            Terms and Condition
          </h3>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {TERMS_AND_CONDITIONS_DATA.map((section: any, index: number) => (
              <div key={index} className="flex flex-col">
                <h4 className="xl:text-2xl text-xl font-semibold text-[#231F20] font-['Onest'] mb-4">
                  {section.title}
                </h4>
                {section.contentType === "list" ? (
                  <ul className="list-disc ml-6 flex flex-col gap-2">
                    {section.content.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content.map((para: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20] mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoActionBottom />
    </>
  );
};

export default TermAndConditionPage;
