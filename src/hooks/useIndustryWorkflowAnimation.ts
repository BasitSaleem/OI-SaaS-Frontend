"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Sets up the scroll-scrubbed timeline animation for the industry workflow
 * timeline (vertical progress line on desktop, horizontal on mobile, plus the
 * per-step circle/card reveals). Returns the refs the section wires into its
 * line containers and steps wrapper.
 */
export function useIndustryWorkflowAnimation() {
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.config({ force3D: true });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!lineRef.current || !stepsRef.current) return;

      // Animate the vertical line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.5,
          },
        },
      );

      // Animate each step for desktop
      const steps = gsap.utils.toArray<HTMLElement>(".workflow-step");
      steps.forEach((step) => {
        const circle = step.querySelector(".step-circle");
        const card = step.querySelector(".step-card");
        const horizontalFill = step.querySelector(".horizontal");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
            end: "top 50%",
            scrub: 0.2,
          },
        });

        tl.fromTo(
          circle,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "power2.inOut" },
          "0",
        )
          .fromTo(
            horizontalFill,
            { scaleX: 0, scaleY: 1 },
            { scaleX: 1, scaleY: 1, duration: 0.4, ease: "power2.inOut" },
            "0",
          )
          .fromTo(
            card,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "0",
          );
      });
    });

    mm.add("(max-width: 767px)", () => {
      if (!mobileLineRef.current || !stepsRef.current) return;

      // Animate the horizontal line on mobile
      gsap.fromTo(
        mobileLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsWrapperRef.current,
            scroller: stepsRef.current,
            horizontal: true,
            start: "left left",
            end: "right right",
            scrub: 0.5,
          },
        },
      );

      // Animate each step for mobile
      const steps = gsap.utils.toArray<HTMLElement>(".workflow-step");
      steps.forEach((step) => {
        const circle = step.querySelector(".step-circle");
        const connectorFill = step.querySelector(".connecter");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            scroller: stepsRef.current,
            horizontal: true,
            start: "left 80%",
            end: "left 20%",
            scrub: 0.5,
          },
        });

        tl.fromTo(
          circle,
          { scale: 1, opacity: 1 },
          { scale: 1, opacity: 1, duration: 0.4 }
        ).fromTo(
          connectorFill,
          { scaleY: 0, scaleX: 1 },
          { scaleY: 1, scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          "0"
        );

        // Card remains static as requested (opacity 1, y: 0)
      });
    });

    return () => mm.revert();
  }, []);

  return { lineRef, mobileLineRef, stepsRef, stepsWrapperRef };
}
