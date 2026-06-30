"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { BlogCalendarIcon, BlogClockIcon, BlogEyeIcon } from "@/components/icons/blogDetailIcons";

interface BlogDetailHeroProps {
  title: string;
  publishDate: string;
  readingTime: string;
  views: string;
  authorName: string;
  authorAvatar: string;
  authorRole: string;
}

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({
  title,
  publishDate,
  readingTime,
  views,
  authorName,
  authorAvatar,
  authorRole,
}) => {
  useHeaderAnimation();
  useHeroAnimations("animation2");

  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const fallback = setTimeout(() => {
      if (heroEl && heroEl.style.clipPath !== "inset(0% 0% 0% 0%)") {
        heroEl.style.clipPath = "inset(0% 0% 0% 0%)";
        [headingRef, metaRef, authorRef].forEach((r) => {
          if (r.current) {
            r.current.style.opacity = "1";
            r.current.style.transform = "none";
          }
        });
      }
    }, 2500);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(heroEl, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power2.inOut" }, 0);
    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.75 }, 0.4);
    tl.to(metaRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.58);
    tl.to(authorRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.72);

    return () => { clearTimeout(fallback); tl.kill(); };
  }, []);

  return (
    <div ref={heroRef} style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8" />
        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-full z-50">
          {/* Corner shapes */}
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className="owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-10 md:py-[76px] lg:py-16 px-3.5 md:px-7 bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]"
              style={{ ["--hero-bg" as any]: "url('/assets/home-page-images/hero-bg.webp')" } as React.CSSProperties}
            >
              <div className="relative z-[2] flex flex-col items-center justify-center w-full wrapper gap-6 md:gap-8">
                <h1
                  ref={headingRef}
                  style={{ opacity: 0, transform: "translateY(50px)" }}
                  className="text-center xl:text-[56px] lg:text-5xl md:text-[38px] text-[30px] xl:leading-[68px] lg:leading-[58px] leading-[42px] font-semibold text-[#231F20] font-['Onest'] max-w-4xl"
                >
                  {title}
                </h1>

                <div
                  ref={metaRef}
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                  className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
                >
                  <span className="flex items-center gap-2 text-sm md:text-base font-medium font-['Onest'] text-[#555]">
                    <BlogCalendarIcon />
                    {publishDate}
                  </span>
                  <span className="w-px h-4 bg-[#D1D5DB]" />
                  <span className="flex items-center gap-2 text-sm md:text-base font-medium font-['Onest'] text-[#555]">
                    <BlogClockIcon />
                    {readingTime}
                  </span>
                  <span className="w-px h-4 bg-[#D1D5DB]" />
                  <span className="flex items-center gap-2 text-sm md:text-base font-medium font-['Onest'] text-[#555]">
                    <BlogEyeIcon />
                    {views}
                  </span>
                </div>

                <div
                  ref={authorRef}
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#795CF5]/30 flex-shrink-0">
                    <Image src={authorAvatar} alt={authorName} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold font-['Onest'] text-[#231F20]">{authorName}</p>
                    <p className="text-xs font-medium font-['Onest'] text-[#795CF5]">{authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetailHero;
