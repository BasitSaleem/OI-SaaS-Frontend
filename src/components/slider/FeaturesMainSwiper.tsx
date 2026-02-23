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
}

export default function FeaturesMainSwiper<T>({
  slides,
  renderSlide,
  swiperOptions = {},
  showPagination = true,
}: CustomSwiperProps<T>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.5}
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
      breakpoints={{
        768: {
          slidesPerView: Math.min(2, slides.length),
          slidesPerGroup: 1
        },
        1280: {
          slidesPerView: Math.min(3, slides.length),
          slidesPerGroup: 1
        },
      }}
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