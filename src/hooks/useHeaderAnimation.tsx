"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useHeaderAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        const tlHeader = gsap.timeline({
          delay: 0,
          defaults: { duration: 1, ease: "power1.inOut" },
        });

        // CSS inline styles on the elements set opacity:0 / translateY(-150px) as the
        // initial state, so no gsap.set() is needed here — GSAP animates to the final state.
        tlHeader.to(
          ".inventory-menu, .header-left-col, .header-right-col",
          { y: 0, opacity: 1 },
          0
        );
      } else {
        const tlHeader = gsap.timeline({
          delay: 1,
          defaults: { duration: 1, ease: "power1.inOut" },
        });

        tlHeader.to(".mobile-iventory, .header-left-col", { y: 0, opacity: 1 }, 0);
      }

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, []);
}
