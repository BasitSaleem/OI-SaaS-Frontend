"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface CustomSwiperProps<T> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  onVisibleChange?: (payload: { visibleIndices: number[] }) => void;
}

export default function CustomSwiper<T>({
  slides,
  renderSlide,
  onVisibleChange,
}: CustomSwiperProps<T>) {
  const emitVisible = (swiper: any) => {
    if (!onVisibleChange) return;


    if (Array.isArray(swiper.visibleSlides) && swiper.visibleSlides.length) {
      const visibleIndices = swiper.visibleSlides
        .map((slideEl: HTMLElement) =>
          Number(slideEl.getAttribute("data-swiper-slide-index"))
        )
        .filter((i: number) => !Number.isNaN(i));

      if (visibleIndices.length) {
        onVisibleChange({ visibleIndices });
        return;
      }
    }

    // ✅ Fallback (initial render)
    const slidesPerView =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : swiper.slidesPerViewDynamic?.() ?? 1;

    const start = swiper.realIndex ?? 0;

    const fallbackIndices = Array.from(
      { length: slidesPerView },
      (_, i) => (start + i) % slides.length
    );

    onVisibleChange({ visibleIndices: fallbackIndices });
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
        renderBullet: (_, className) =>
          `<span class="${className} custom-swiper-bullet"></span>`,
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
      className="mySwiper flex items-stretch"
      onSwiper={emitVisible}
      onSlideChange={emitVisible}
    >
      {slides.map((slide, i) => (
        <SwiperSlide
          key={i}
          className="flex items-stretch pb-[60px]"
        >
          <div className="flex flex-col h-full w-full">
            {renderSlide(slide, i)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
