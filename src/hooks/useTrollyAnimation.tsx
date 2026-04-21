"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const useTrollyAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const p1Ref = useRef<HTMLParagraphElement>(null);
    const p2Ref = useRef<HTMLParagraphElement>(null);
    const p3Ref = useRef<HTMLParagraphElement>(null);
    const p4Ref = useRef<HTMLParagraphElement>(null);
    const cartImgRef = useRef<HTMLImageElement>(null);
    const mobileIconRef = useRef<HTMLImageElement>(null);
    const starIconRef = useRef<HTMLImageElement>(null);
    const cartsIconsRef = useRef<HTMLDivElement>(null);
    const cartIcon1Ref = useRef<HTMLImageElement>(null);
    const cartIcon2Ref = useRef<HTMLImageElement>(null);
    const cartIcon3Ref = useRef<HTMLImageElement>(null);
    const cartIcon4Ref = useRef<HTMLImageElement>(null);
    const cartIcon5Ref = useRef<HTMLImageElement>(null);
    const arrowRef = useRef<HTMLImageElement>(null);
    const graphRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isDesktop: "(min-width: 1280px)",
                    isLaptop: "(min-width: 1024px) and (max-width: 1279px)",
                    isMobile: "(max-width: 1023px)",
                },
                (context) => {
                    const { isDesktop, isLaptop } = context.conditions as {
                        isDesktop: boolean;
                        isLaptop: boolean;
                    };

                    // Initial States
                    gsap.set(
                        [
                            cartImgRef.current,
                            mobileIconRef.current,
                            starIconRef.current,
                            cartsIconsRef.current,
                            arrowRef.current,
                            graphRef.current,
                        ],
                        { opacity: 0 },
                    );
                    gsap.set(
                        [
                            p1Ref.current,
                            p2Ref.current,
                            p3Ref.current,
                            p4Ref.current,
                        ],
                        { opacity: 0, y: 5, filter: "blur(8px)" },
                    );
                    gsap.set(cartImgRef.current, { scale: 0.8 });
                    gsap.set(graphRef.current, {
                        clipPath: "inset(100% 100% 0 0)",
                    });

                    // Initial Cart Positions
                    if (isDesktop) {
                        gsap.set(cartIcon1Ref.current, { x: 0 });
                        gsap.set(cartIcon2Ref.current, { x: -56 });
                        gsap.set(cartIcon3Ref.current, { x: -112 });
                        gsap.set(cartIcon4Ref.current, { x: -168 });
                        gsap.set(cartIcon5Ref.current, { x: -224 });
                    } else if (isLaptop) {
                        gsap.set(cartIcon1Ref.current, { x: 0 });
                        gsap.set(cartIcon2Ref.current, { x: -40 });
                        gsap.set(cartIcon3Ref.current, { x: -80 });
                        gsap.set(cartIcon4Ref.current, { x: -120 });
                        gsap.set(cartIcon5Ref.current, { x: -160 });
                    } else {
                        gsap.set(cartIcon1Ref.current, { x: 0 });
                        gsap.set(cartIcon2Ref.current, { x: -26 });
                        gsap.set(cartIcon3Ref.current, { x: -52 });
                        gsap.set(cartIcon4Ref.current, { x: -78 });
                        gsap.set(cartIcon5Ref.current, { x: -104 });
                    }

                    const tl = gsap.timeline({
                        repeat: -1,
                        repeatDelay: 1,
                        paused: true,
                    });

                    // Interval 0
                    tl.to(p1Ref.current, {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.5,
                        ease: "power3.out",
                    }, 0);
                    tl.to(cartImgRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out",
                    }, 0);

                    // Interval 1
                    tl.to(mobileIconRef.current, { opacity: 1, duration: 0.1 }, 1);
                    tl.fromTo(
                        mobileIconRef.current,
                        { rotation: -30 },
                        { rotation: 30, duration: 0.2, yoyo: true, repeat: 1 },
                    ).to(mobileIconRef.current, { rotation: 0, duration: 0.2 });

                    // Interval 2
                    tl.to(p2Ref.current, {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.5,
                        ease: "power3.out",
                    }, 2);
                    tl.to(starIconRef.current, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power3.out",
                    }, 2);
                    tl.to(
                        starIconRef.current,
                        {
                            scale: 0.5,
                            duration: 0.2,
                            yoyo: true,
                            repeat: 1,
                        },
                    ).to(starIconRef.current, { scale: 1, duration: 0.2 }, 2);

                    // Interval 3
                    tl.to(p3Ref.current, {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.6,
                        ease: "power3.out",
                    }, 3);
                    tl.to(cartsIconsRef.current, {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                    }, 3);

                    // Interval 4
                    if (isDesktop || isLaptop) {
                        tl.to(cartIcon1Ref.current, { x: 0, duration: 0.4 }, 4);
                        tl.to(cartIcon2Ref.current, { x: -12, duration: 0.4 }, 4);
                        tl.to(cartIcon3Ref.current, { x: -24, duration: 0.4 }, 4);
                        tl.to(cartIcon4Ref.current, { x: -36, duration: 0.4 }, 4);
                        tl.to(cartIcon5Ref.current, { x: -48, duration: 0.4 }, 4);
                    } else {
                        tl.to(cartIcon1Ref.current, { x: 0, duration: 0.4 }, 4);
                        tl.to(cartIcon2Ref.current, { x: -6, duration: 0.4 }, 4);
                        tl.to(cartIcon3Ref.current, { x: -12, duration: 0.4 }, 4);
                        tl.to(cartIcon4Ref.current, { x: -18, duration: 0.4 }, 4);
                        tl.to(cartIcon5Ref.current, { x: -24, duration: 0.4 }, 4);
                    }

                    // Interval 5
                    tl.to(p4Ref.current, {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.4,
                        ease: "power3.out",
                    }, 4);

                    // Interval 6
                    tl.to(arrowRef.current, { opacity: 1, duration: 0.3 });
                    tl.to(graphRef.current, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.6,
                        ease: "power2.out",
                    }, 5);

                    ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: "top 95%",
                        onEnter: () => tl.play(),
                        once: true,
                    });
                },
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return {
        containerRef,
        p1Ref,
        p2Ref,
        p3Ref,
        p4Ref,
        cartImgRef,
        mobileIconRef,
        starIconRef,
        cartsIconsRef,
        cartIcon1Ref,
        cartIcon2Ref,
        cartIcon3Ref,
        cartIcon4Ref,
        cartIcon5Ref,
        arrowRef,
        graphRef,
    };
};
