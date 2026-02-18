'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useHeroAnimations = (variant: "animation1" | "animation2" | "none" = "animation1") => {
  useEffect(() => {
    if (variant === "none") return;

    const ctx = gsap.context(() => {
      let heroBreak = gsap.matchMedia();

      if (variant === "animation1") {
        // Mobile < 1024px
        heroBreak.add('(max-width: 1023px)', () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scroller: 'body',
              start: 'top top',
              end: '+=' + window.innerHeight * 1,
              trigger: '.pinned-section-1',
              scrub: 2,
            },
          });

          tl.to('.mobile-iventory', { width: '100%', duration: 1 }, 0);
          tl.to('header', { y: -30, duration: 1 }, 1);
        });

        // Desktop >= 1024px
        heroBreak.add('(min-width: 1024px)', () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scroller: 'body',
              start: 'top top',
              end: '+=' + window.innerHeight * 0.5,
              pin: '.pinned-section-1',
              scrub: 2,
            },
          });

          gsap.set('.owner-inventory-hero__content', { y: 0, force3D: true });
          gsap.set('.owner-inventory-hero__video', { y: 0, force3D: true });

          tl.to('header', { y: -20, duration: 1.5, ease: 'power2.out' }, 0);
          tl.to('.inventory-menu', { width: '100%', duration: 1 }, 0);
          tl.to('.header-right-col', { x: '0%', duration: 1 }, 0);
          tl.to('.header-left-col', { x: '0%', duration: 1 }, 0);
          tl.to('.top-section', { autoAlpha: 0, duration: 1 }, 0);
          tl.to(
            '.owner-inventory-hero',
            { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: 'power2.out' },
            0
          );
          tl.to('.owner-inventory-hero__content', { y: -800, duration: 1, ease: 'power2.out' }, 0);
          tl.to('.owner-inventory-hero__video', { y: -300, duration: 1, ease: 'power2.out' }, 0);
        });
      } else if (variant === "animation2") {
        // Mobile < 1024px
        heroBreak.add('(max-width: 1023px)', () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scroller: 'body',
              start: 'top top',
              end: '+=' + window.innerHeight * 0.3,
              trigger: '.pinned-section-1',
              scrub: 2,
            },
          });

          tl.to('.mobile-iventory', { width: '100%', duration: 1 }, 0);
          tl.to('header', { y: -30, duration: 1 }, 1);
        });

        // Desktop >= 1024px
        heroBreak.add('(min-width: 1024px)', () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scroller: 'body',
              start: 'top top',
              end: '+=' + window.innerHeight * 0.3,
              trigger: '.pinned-section-1',
              scrub: 2,
            },
          });

          gsap.set('.owner-inventory-hero__content', { y: 0, force3D: true });
          gsap.set('.owner-inventory-hero__video', { y: 0, force3D: true });

          tl.to('header', { y: -20, duration: 1.5, ease: 'power2.out' }, 0);
          tl.to('.inventory-menu', { width: '100%', duration: 1 }, 0);
          tl.to('.header-right-col', { x: '0%', duration: 1 }, 0);
          tl.to('.header-left-col', { x: '0%', duration: 1 }, 0);
          tl.to('.top-section', { autoAlpha: 0, duration: 1 }, 0);
          tl.to(
            '.owner-inventory-hero',
            { y: -30, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: 'power2.out' },
            0
          );
        });
      }

      // Force refresh after a short delay to ensure all layout/content is settled
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, [variant]);
};
