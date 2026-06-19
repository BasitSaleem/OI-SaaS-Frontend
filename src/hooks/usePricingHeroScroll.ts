"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Pinned-header scroll animation for the pricing hero — collapses the navbar
 * shapes/spacing as the pinned section scrolls. Animates global selectors
 * (.pinned-section-1, header, .inventory-menu, .header-* etc.), so it needs no
 * refs. Identical to the original in-component effect.
 */
export function usePricingHeroScroll() {
  useEffect(() => {
    let heroBreak = gsap.matchMedia();

    // âœ… Mobile
    heroBreak.add("(min-width: 320px)", () => {
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


    // âœ… Desktop
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

      // tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
      tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
      tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);
      tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
      tl.to(
        ".owner-inventory-hero",
        {
          y: -10,
          paddingLeft: 0,
          paddingRight: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );
    });

    return () => {
      heroBreak.revert();
    };
  }, []);
}
