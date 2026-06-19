"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type GSAPMatchMedia = {
  add: (query: string, context: () => void) => void;
  revert: () => void;
};

/**
 * Owns the GSAP scroll-triggered icon scatter animation, the nav-icon hover
 * bounce, and the mobile tooltip open/close state for the home "Smartway"
 * (Complete Inventory Toolkit) section. Returns the refs and handlers the
 * presentational component wires into its JSX.
 */
export function useSmartwayAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsBreak = useRef<GSAPMatchMedia | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const loopTl = useRef<gsap.core.Tween | null>(null);

  // Hover bounce effect for nav icon
  const handleMouseEnter = () => {
    if (spanRef.current) {
      loopTl.current?.kill();
      loopTl.current = gsap.to(spanRef.current, {
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    loopTl.current?.kill();
    if (spanRef.current) gsap.set(spanRef.current, { scale: 1 });
  };

  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);

  const handleTooltipClick = (e: React.MouseEvent, iconId: string) => {
    // Only handle click for tooltips on mobile/tablet
    if (window.innerWidth < 1024) {
      e.preventDefault();
      e.stopPropagation();
      setActiveTooltipId((prev) => (prev === iconId ? null : iconId));
    }
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveTooltipId(null);
    if (activeTooltipId) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [activeTooltipId]);

  // Animate icons to positions with responsive breakpoints
  const animateIconsToPositions = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    if (iconsBreak.current) iconsBreak.current.revert();
    iconsBreak.current = gsap.matchMedia();

    const small = window.innerWidth < 375;

    iconsBreak.current.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.to("#feature-icon-1", { x: small ? -115 : -136, y: -180, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: small ? 115 : 136, y: -180, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -70, y: -120, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 70, y: -120, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: small ? -115 : -136, y: 240, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 0, y: 240, duration: 1.6 }, 0);
      // tl.to("#feature-icon-7", { x: -70, y: 200, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: small ? -115 : -136, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: 0, y: -180, duration: 1.6 }, 0);
      // tl.to("#feature-icon-9", { x: small ? 115 : 136, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 130, y: 240, duration: 1.6 }, 0);
      // tl.to("#feature-icon-11", { x: 0, y: -180, duration: 1.6 }, 0);
      // tl.to("#feature-icon-12", { x: small ? 115 : 136, y: 240, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: small ? 115 : 136, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 0, y: 80, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: small ? -115 : -136, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: small ? 115 : 136, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: 140, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const tl = gsap.timeline();
      tl.to("#feature-icon-1", { x: -272, y: -230, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: 272, y: -230, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -132, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 132, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -330, y: -140, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 330, y: -140, duration: 1.6 }, 0);
      // tl.to("#feature-icon-7", { x: -340, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: -220, y: 250, duration: 1.6 }, 0);
      // tl.to("#feature-icon-9", { x: 220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 250, duration: 1.6 }, 0);
      // tl.to("#feature-icon-11", { x: -220, y: 250, duration: 1.6 }, 0);
      // tl.to("#feature-icon-12", { x: 340, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -132, y: 130, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 132, y: 130, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -240, y: 170, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 240, y: 170, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: 250, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 1024px) and (max-width: 1199px)", () => {
      const tl = gsap.timeline();
      const xOffset = window.innerWidth >= 1280 ? 400 : 400;
      const yOffset = window.innerWidth >= 1280 ? 240 : 220;
      tl.to("#feature-icon-1", { x: -xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 400, y: -130, duration: 1.6 }, 0);
      // tl.to("#feature-icon-7", { x: -460, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: -400, y: 100, duration: 1.6 }, 0);
      // tl.to("#feature-icon-9", { x: 460, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 0, duration: 1.6 }, 0);
      // tl.to("#feature-icon-11", { x: -400, y: 100, duration: 1.6 }, 0);
      // tl.to("#feature-icon-12", { x: 400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: yOffset, duration: 1.6 }, 0);
    });

    iconsBreak.current.add("(min-width: 1200px)", () => {
      const tl = gsap.timeline();
      const xOffset = window.innerWidth >= 1280 ? 460 : 460;
      const yOffset = window.innerWidth >= 1280 ? 240 : 220;
      tl.to("#feature-icon-1", { x: -xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-2", { x: xOffset, y: -240, duration: 1.6 }, 0);
      tl.to("#feature-icon-3", { x: -160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-4", { x: 160, y: -170, duration: 1.6 }, 0);
      tl.to("#feature-icon-5", { x: -400, y: -130, duration: 1.6 }, 0);
      tl.to("#feature-icon-6", { x: 400, y: -130, duration: 1.6 }, 0);
      // tl.to("#feature-icon-7", { x: -540, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-8", { x: -220, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-9", { x: -400, y: 100, duration: 1.6 }, 0);
      // tl.to("#feature-icon-9", { x: 540, y: 0, duration: 1.6 }, 0);
      tl.to("#feature-icon-10", { x: 220, y: 0, duration: 1.6 }, 0);
      // tl.to("#feature-icon-11", { x: -400, y: 100, duration: 1.6 }, 0);
      // tl.to("#feature-icon-12", { x: 400, y: 100, duration: 1.6 }, 0);
      tl.to("#feature-icon-13", { x: -160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-14", { x: 160, y: 140, duration: 1.6 }, 0);
      tl.to("#feature-icon-15", { x: -460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-16", { x: 460, y: yOffset, duration: 1.6 }, 0);
      tl.to("#feature-icon-17", { x: 0, y: yOffset, duration: 1.6 }, 0);
    });
  };

  // ScrollTrigger effect
  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia(); // matchMedia instance

    // Desktop – start at 30%
    mm.add("(min-width: 1200px)", () => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 45%",
        once: true,
        onEnter: animateIconsToPositions,
      });
    });

    // Tablet – start at 50%
    mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        once: true,
        onEnter: animateIconsToPositions,
      });
    });

    // Mobile – start at 70%
    mm.add("(max-width: 767px)", () => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        once: true,
        onEnter: animateIconsToPositions,
      });
    });

    return () => {
      mm.revert();
      if (iconsBreak.current) iconsBreak.current.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    sectionRef,
    spanRef,
    handleMouseEnter,
    handleMouseLeave,
    activeTooltipId,
    handleTooltipClick,
  };
}
