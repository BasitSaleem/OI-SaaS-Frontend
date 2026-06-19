"use client";

import { useRef, useEffect } from "react";
import globalGsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  globalGsap.registerPlugin(ScrollTrigger);
}

/**
 * Owns the home hero (HeroSection2) entrance timeline: heading/paragraph fade,
 * the clip-path reveal of the hero shell, and the staggered float-in of every
 * decorative badge/icon. Creates and returns all the DOM refs the markup wires
 * up. Includes the 2500ms safety fallback that force-reveals the hero if GSAP
 * never runs. Behaviour is identical to the original in-component effect.
 */
export function useHeroEntranceAnimation() {
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const productsImageRef = useRef<HTMLImageElement>(null);
  const advanceReportImageRef = useRef<HTMLImageElement>(null);
  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const inventorySystemImageRef = useRef<HTMLImageElement>(null);
  const reportsImageRef = useRef<HTMLImageElement>(null);
  const fastServiceImageRef = useRef<HTMLImageElement>(null);
  const fastServiceDescRef = useRef<HTMLImageElement>(null);
  const safeSecureDescRef = useRef<HTMLImageElement>(null);
  const safeSecureImageRef = useRef<HTMLImageElement>(null);
  const inventoryBlurIconRef = useRef<HTMLImageElement>(null);
  const inventoryIconRef = useRef<HTMLImageElement>(null);
  const growthBoxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const heroEl = homeHeroSecRef.current;
    const fallbackTimer = setTimeout(() => {
      if (heroEl && heroEl.style.clipPath !== "inset(0% 0% 0% 0%)") {
        heroEl.style.clipPath = "inset(0% 0% 0% 0%)";
      }
    }, 2500);

    const ctx = globalGsap.context(() => {
      const tl = globalGsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states for floating decorative elements (heading/paragraph/hero use CSS initial states)

      globalGsap.set(productsImageRef.current, {
        opacity: 0,
        rotation: 45,
        scale: 0.5,
        x: 60,
        y: 60,
      });
      globalGsap.set(advanceReportImageRef.current, {
        opacity: 0,
        rotation: 45,
        scale: 0.5,
        x: 60,
        y: -60,
      });
      globalGsap.set(inventorySystemImageRef.current, {
        opacity: 0,
        rotation: -45,
        scale: 0.5,
        x: -60,
        y: 60,
      });
      globalGsap.set(reportsImageRef.current, {
        opacity: 0,
        rotation: -45,
        scale: 0.5,
        x: -60,
        y: -30,
      });
      globalGsap.set(fastServiceImageRef.current, { opacity: 0, x: 60, y: 30 });
      globalGsap.set(fastServiceDescRef.current, { opacity: 0, x: 200 });
      globalGsap.set(safeSecureImageRef.current, { opacity: 0, x: 60, y: 30 });
      globalGsap.set(safeSecureDescRef.current, { opacity: 0, x: -200 });
      globalGsap.set(inventoryBlurIconRef.current, { opacity: 0, scale: 0.8 });
      globalGsap.set(inventoryIconRef.current, { opacity: 0, scale: 0.8 });
      globalGsap.set(growthBoxRef.current, { opacity: 0, y: 100 });

      // Animations
      tl.to(mainHeadingRef.current, { opacity: 1, y: 0, duration: 0.8 }, "0");
      tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.8 }, "0");

      tl.to(
        homeHeroSecRef.current,
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
        "0.2"
      );
      tl.to(
        [
          productsImageRef.current,
          advanceReportImageRef.current,
          inventorySystemImageRef.current,
          reportsImageRef.current,
          fastServiceImageRef.current,
          fastServiceDescRef.current,
          safeSecureImageRef.current,
          safeSecureDescRef.current,
          inventoryBlurIconRef.current,
          inventoryIconRef.current,
        ],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          stagger: 0.1,
        },
        "0.4"
      );
      tl.to(
        growthBoxRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "0.6"
      );
    });

    return () => {
      clearTimeout(fallbackTimer);
      ctx.revert();
    };
  }, []);

  return {
    mainHeadingRef,
    paragraphRef,
    productsImageRef,
    advanceReportImageRef,
    homeHeroSecRef,
    inventorySystemImageRef,
    reportsImageRef,
    fastServiceImageRef,
    fastServiceDescRef,
    safeSecureDescRef,
    safeSecureImageRef,
    inventoryBlurIconRef,
    inventoryIconRef,
    growthBoxRef,
  };
}

export type HeroEntranceRefs = ReturnType<typeof useHeroEntranceAnimation>;
