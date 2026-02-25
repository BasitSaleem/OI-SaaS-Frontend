"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLg from "@/components/button/ButtonLg";
import Image from "next/image";
import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    icon: "/assets/unified-platform/unified-operations.svg",
    title: "Unified Operations",
    description:
      "Smartly process inventory, POS, e-commerce, customer data all in one place. No longer having to carry around various tools.",
  },
  {
    icon: "/assets/unified-platform/real-time-reporting.svg",
    title: "Real-Time Reporting",
    description:
      "Keep up with real-time sales data, inventory data, and performance dashboards that enable better-informed and swift decisions.",
  },
  {
    icon: "/assets/unified-platform/cost-effection.svg",
    title: "Cost-Efficient Operations",
    description:
      "Automate your operations by integrating several applications into a single smart product. Reduce the cost of software and reduce manual errors.",
  },
  {
    icon: "/assets/unified-platform/built-to-scale.svg",
    title: "Built to Scale with You",
    description:
      "Owners Inventory can easily evolve to meet the needs of your business at any stage, whether it is small or large.",
  },
];

export default function UnifiedPlatform() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionTriggerRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const mmRef = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      
      const mm = gsap.matchMedia();
      mmRef.current = mm;

      // common timeline factory
      const createTimeline = (opts: { start?: string; end?: string }) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionTriggerRef.current,
            start: opts.start ?? "top top",
            end: opts.end ?? "+=200%",
            pin: sectionRef.current,
            scrub: 1,
            anticipatePin: 1.5,
            invalidateOnRefresh: true,
            pinSpacing: true,
            // markers can be turned on while debugging
            markers: false,
          },
        });

        // Entrance animation
        tl.fromTo(contentRef.current, 
          { y: 100, opacity: 0.5 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 }
        );

        // Add a small pause or "pin" state for the revealed content
        tl.to({}, { duration: 0.2 });

        tl.to(".unified-platform-cards", { y: "-50%", ease: "none" });
        return tl;
      };

      // Desktop
      mm.add("(min-width:1024px)", () => {
        // return cleanup function for this matchMedia entry if needed
        const tl = createTimeline({ start: "top top", end: "+=200%" });
        return () => {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        };
      });

      // Tablet
      mm.add("(min-width:768px) and (max-width:1023px)", () => {
        const tl = createTimeline({ start: "top top", end: "+=160%" });
        return () => {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        };
      });

      // Mobile - No pin on small screens; keep it simple
      mm.add("(max-width:767px)", () => {
        // no pin, just subtle entrance if desired
        const cards = sectionRef.current?.querySelectorAll(".unified-platform-cards > *");
        if (cards?.length) {
          gsap.set(cards, { y: 30, opacity: 0 });
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          });
          reveal.to(cards, { y: 0, opacity: 1, stagger: 0.12, ease: "power2.out" });
          return () => {
            reveal.scrollTrigger && reveal.scrollTrigger.kill();
            reveal.kill();
          };
        }
        return;
      });

      // Ensure refresh after matchMedia setup
      ScrollTrigger.refresh();
    }, sectionRef);

    ctxRef.current = ctx;

    // Safe Refresh triggers if needed (ideally handled by GSAP automatically)
    const refresh = () => {
      ScrollTrigger.refresh();
    };

    return () => {
      // revert matchMedia & context
      if (mmRef.current) mmRef.current.revert();
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pinned-section-Unified min-h-[100vh] relative w-full overflow-hidden"
      aria-label="Unified Platform Section"
    >
      <div ref={sectionTriggerRef} className="h-0 absolute top-0 w-full bg-transparent"></div>
      <div className="lg:h-[100px] md:h-28 h-20"></div>
      <section className="wrapper">
        <div ref={contentRef} className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-14 xl:gap-32 py-8 sm:py-20 xl:py-16 px-4 sm:px-10 xl:px-28 rounded-[20px] lg:rounded-[40px] bg-[var(--background-halfwhite)]">
          {/* Cards Column */}
          <div className="md:order-1 order-2 md:w-3/6 lg:w-2/5 md:h-[560px] lg:h-[695px] overflow-hidden">
            <div className="unified-platform-cards flex flex-col items-center justify-start gap-4 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[342px] md:max-w-full py-5 px-4.5 md:p-5 lg:p-8 rounded-[30px] border border-gray-100 shadow-[0px_0px_20px_0px_#00000005] bg-white"
                >
                  <div className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] flex items-center justify-center mb-[18px] md:mb-5 lg:mb-10 rounded-xl bg-[var(--background-halfwhite)]">
                    <Image
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      width={56}
                      height={56}
                      className="h-9 w-9 lg:w-14 lg:h-14"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl leading-8 lg:leading-10 mb-3 lg:mb-4 font-semibold text-[var(--text-dark)]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base leading-6 text-[var(--text-grey)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full order-1 md:order-2 md:w-1/2 lg:w-3/5">
            <div className="flex flex-col items-center justify-center">
              <MainHeading className="text-center mb-4">Why We Stand Out</MainHeading>
              <Paragraph className="text-center mb-6">
                The future of business management is here, quick, integrated, expansionary. Owners Inventory is an automated, scalable, and more intelligent tool that assists you in working smarter, performing faster, and saving more with powerful automation, real-time insights, and streamlined integrations, all in one smart platform.
              </Paragraph>

              {/* <div className="hidden md:flex">
                <ButtonLg url="#" text="View All FAQs" bgColor="var(--primary-teal)" textColor="white" isBorder />
              </div> */}
            </div>
          </div>

          {/* <div className="md:hidden flex order-3">
            <ButtonLg
              url="#"
              text="View All FAQs"
              bgColor="var(--primary-teal)"
              textColor="white"
              isBorder
              className="px-[50px]"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
