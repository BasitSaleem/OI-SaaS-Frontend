"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ReactNode, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CustomSwiperProps<T> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  swiperOptions?: Record<string, unknown>;
  showPagination?: boolean;
  slidesPerView?: number;
  breakpoints?: Record<number, { slidesPerView: number; slidesPerGroup: number }>;
}

export default function FeaturesMainSwiper<T>({
  slides,
  renderSlide,
  swiperOptions = {},
  showPagination = true,
  slidesPerView = 1.5,
  breakpoints,
}: CustomSwiperProps<T>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultBreakpoints = {
    768: {
      slidesPerView: Math.min(2, slides.length),
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: Math.min(3, slides.length),
      slidesPerGroup: 1,
    },
  };

  if (!isMounted) return null;
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      //   renderBullet: (index, className) =>
      //     `<span class="${className}"></span>`,
      // }}
      pagination={
        showPagination
          ? {
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"></span>`,
            }
          : false // Disable pagination when false
      }
      breakpoints={breakpoints || defaultBreakpoints}
      className="mySwiper overflow-x-hidden"
      {...swiperOptions}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="h-auto xl:pb-5 pb-[60px]">
          {renderSlide(slide, i)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 