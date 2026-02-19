
"use client"; 

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import MainHeading from "@/components/pages/typography/MainHeading";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";

import { PRIVACY_POLICY_DATA } from "@/constant/privacyData";

const PrivacyPolicyPage = () => {
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
          <h1 className="text-center text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-['Onest'] font-semibold text-[#231F20]">
            Privacy Policy
          </h1>

           <div  className="flex flex-col gap-6 md:gap-8 pb-10">
                <SubHeading>
                 Introduction and Our Commitment to Privacy
                </SubHeading>
                
                <div className="flex flex-col gap-8 lg:gap-10">
                    <div  className="flex flex-col"> 
                       <Paragraph
                          
                          className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20] mb-4 last:mb-0"
                        >
                          Owners Inventory (we, our, or us) values your privacy and is dedicated to keeping your personal information safe. This Privacy Policy describes the information we gather, its use, sharing, and the options you have about your data. Through our Services, you consent to the practices outlined in this Privacy Policy.
                        </Paragraph>
                    </div>
               
                </div>
              </div>

          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
            {PRIVACY_POLICY_DATA.map((part: any, pIndex: number) => (
              <div key={pIndex} className="flex flex-col gap-6 md:gap-8 border-b border-gray-200 pb-10 last:border-0 last:pb-0">
                <SubHeading>
                  {part.partTitle}
                </SubHeading>
                
                <div className="flex flex-col gap-8 lg:gap-10">
                  {part.sections.map((section: any, sIndex: number) => (
                    <div key={sIndex} className="flex flex-col">
                      <h3 className="xl:text-2xl text-xl font-semibold text-[#231F20] font-['Onest'] mb-4">
                        {section.title}
                      </h3>
                      {section.content.map((para: string, idx: number) => (
                        <Paragraph
                          key={idx}
                          className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20] mb-4 last:mb-0"
                        >
                          {para}
                        </Paragraph>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoActionBottom />
    </>
  );
};

export default PrivacyPolicyPage;
