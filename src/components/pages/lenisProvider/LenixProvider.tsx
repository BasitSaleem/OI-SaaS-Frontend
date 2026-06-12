"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useScrollLock } from "@/context/ScrollLockContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LenisInstance = { raf: (t: number) => void; destroy: () => void };

export default function LenisProvider({ children }: { children: ReactNode }) {
  const { isLocked } = useScrollLock();
  const lenisRef = useRef<LenisInstance | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLocked) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    // Dynamic import keeps Lenis off the critical-path JS bundle.
    // The scroll effect kicks in after the page is already interactive.
    let destroyed = false;
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      if (destroyed) return;

      const lenis = new Lenis({
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        }
      }

      rafRef.current = requestAnimationFrame(raf);
    });

    return () => {
      destroyed = true;
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isLocked]);

  return <>{children}</>;
}
