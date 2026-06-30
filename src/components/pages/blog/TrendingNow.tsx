"use client";

import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEqualizeHeadings } from "@/hooks/useEqualizeHeadings";

import { ArrowLeft, ArrowRight } from "lucide-react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import BlogCard from "./BlogCard";
import { blogData } from "@/constant/blogData/blogData";

const TrendingNow = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(blogData.slice(0, 6).length);

  useEqualizeHeadings(sliderRef, "[data-card-heading]", [activeIndex]);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);
  const goToSlide = useCallback((i: number) => swiperRef.current?.slideToLoop(i), []);

  const recalcTotal = () => {
    setTotalSlides(blogData.slice(0, 6).length);
  };

  return (
    <section>
      {/* ── Heading row ─────────────────────────────────── */}
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          {/* Left */}
          <div className="flex flex-col gap-3 max-w-full md:max-w-[60%]">
            <MainHeading>Trending Now</MainHeading>
            <Paragraph>
              The most popular articles our readers are engaging with this week
            </Paragraph>
          </div>

          {/* Right — desktop nav */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-[22px] bg-white/90 backdrop-blur-[4px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1),0_10px_15px_0_rgba(0,0,0,0.1)] flex items-center justify-center text-[#231F20] hover:bg-white hover:shadow-[0_4px_12px_0_rgba(121,92,245,0.2)] transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Pill dots */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-[15px] rounded-[60px] transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === activeIndex ? 34 : 16,
                    backgroundColor: i === activeIndex ? "#795CF5" : "#E0DBF9",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-11 h-11 rounded-[22px] bg-white/90 backdrop-blur-[4px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1),0_10px_15px_0_rgba(0,0,0,0.1)] flex items-center justify-center text-[#231F20] hover:bg-white hover:shadow-[0_4px_12px_0_rgba(121,92,245,0.2)] transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Slider ──────────────────────────────────────── */}
      {/*
        The wrapper provides left margin/padding so cards start aligned with
        the rest of the page. overflow-hidden on this div keeps the right
        edge clean while the partial slide bleeds in from within the padding.
      */}
      <div ref={sliderRef} className="wrapper overflow-hidden">
        <Swiper
          modules={[Navigation]}
          loop
          grabCursor
          breakpoints={{
            0:    { slidesPerView: 1,   spaceBetween: 16 },
            640:  { slidesPerView: 1.5, spaceBetween: 18 },
            768:  { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            recalcTotal();
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBreakpoint={() => recalcTotal()}
          className="!overflow-visible"
        >
          {blogData.slice(0, 6).map((blog, i) => (
            <SwiperSlide key={blog.id ?? i} className="h-auto self-stretch">
              <BlogCard
                cardHeading={blog.heading}
                image={blog.blogImg}
                date={blog.date}
                readTime={blog.totalRead}
                  href={`/resources/blog/${blog.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Mobile nav ──────────────────────────────────── */}
      <div className="wrapper">
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#231F20] hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-[12px] rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === activeIndex ? 28 : 12,
                  backgroundColor: i === activeIndex ? "#795CF5" : "#E0DBF9",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#231F20] hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
