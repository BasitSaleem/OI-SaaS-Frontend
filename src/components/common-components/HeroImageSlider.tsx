"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface HeroImageSliderProps {
  images: string[];
  backgrounds?: string[];
  className?: string;
}

const HeroImageSlider: React.FC<HeroImageSliderProps> = ({
  images,
  backgrounds = [],
  className,
}) => {
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const imgRef1 = img1Ref.current;
      const imgRef2 = img2Ref.current;
      const imgRef3 = img3Ref.current;
      const imgRef4 = img4Ref.current;
      const imgRef5 = img5Ref.current;

      const refs = [imgRef1, imgRef2, imgRef3, imgRef4, imgRef5];

     
      // Initial states for all images
      gsap.set(refs, {
        position: "absolute",
        scale: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
      });
      
      gsap.set(imgRef1, { opacity: 1, scale: 1.1 });
      
      gsap.set(containerRef.current, { background: backgrounds[0] });

      const tl = gsap.timeline({ repeat: -1, delay: 2 });

      tl.to(containerRef.current, { background: backgrounds[1], duration: 0.1, ease: "power3.inOut" }, 0);
      tl.to(imgRef1, { opacity: 0, duration: 2, scale: 1.3, ease: "power3.inOut" }, 0);
      tl.to(imgRef2, { opacity: 1, duration: 2, scale: 1, ease: "power3.inOut" }, 0);
      tl.to(containerRef.current, { background: backgrounds[2], duration: 0.1, ease: "power3.inOut" }, 2);
      tl.to(imgRef2, { opacity: 0, duration: 2, scale: 1.3, ease: "power3.inOut" }, 2);
      tl.to(imgRef3, { opacity: 1, duration: 2, scale: 1, ease: "power3.inOut" }, 2);

      tl.to(containerRef.current, { background: backgrounds[3], duration: 0.1, ease: "power3.inOut" }, 4);
      tl.to(imgRef3, { opacity: 0, duration: 2, scale: 1.3, ease: "power3.inOut" }, 4);
      tl.to(imgRef4, { opacity: 1, duration: 2, scale: 1, ease: "power3.inOut" }, 4);

      tl.to(containerRef.current, { background: backgrounds[4], duration: 0.1, ease: "power3.inOut" }, 6);
      tl.to(imgRef4, { opacity: 0, duration: 2, scale: 1.3, ease: "power3.inOut" }, 6);
      tl.to(imgRef5, { opacity: 1, duration: 2, scale: 1, ease: "power3.inOut" }, 6);

      tl.to(containerRef.current, { background: backgrounds[0], duration: 0.1, ease: "power3.inOut" }, 8);
      tl.to(imgRef5, { opacity: 0, duration: 2, scale: 1.3, ease: "power3.inOut" }, 8);
      tl.to(imgRef1, { opacity: 1, duration: 2, scale: 1.1, ease: "power3.inOut" }, 8);
      

     
    }, containerRef);

    return () => ctx.revert();
  }, [backgrounds]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full rounded-[40px] relative overflow-hidden ${className}`}
      style={{ background: backgrounds[0] }}
    >
      
      <div ref={img1Ref} className="w-full h-full absolute top-0 left-0" style={{ opacity: 1 }}>
        <Image src="/assets/home-page-images/hero-animation/animation-img1.webp" priority alt="Hero Animation 1" fill className="object-cover w-full h-full" />
      </div>

      <div ref={img2Ref} className="w-full h-full absolute top-0 left-0" style={{ opacity: 0 }}>
        <Image src="/assets/home-page-images/hero-animation/animation-img2.webp" priority alt="Hero Animation 2" fill className="object-cover w-full h-full" />
      </div>

      <div ref={img3Ref} className="w-full h-full absolute top-0 left-0" style={{ opacity: 0 }}>
        <Image src="/assets/home-page-images/hero-animation/animation-img3.webp" priority alt="Hero Animation 3" fill className="object-contain w-full h-full" />
      </div>

      <div ref={img4Ref} className="w-full h-full absolute top-0 left-0" style={{ opacity: 0 }}>
        <Image src="/assets/home-page-images/hero-animation/animation-img4.webp" priority alt="Hero Animation 4" fill className="object-cover w-full h-full" />
      </div>

      <div ref={img5Ref} className="w-full h-full absolute top-0 left-0" style={{ opacity: 0 }}>
        <Image src="/assets/home-page-images/hero-animation/animation-img5.webp" priority alt="Hero Animation 5" fill className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default React.memo(HeroImageSlider);
