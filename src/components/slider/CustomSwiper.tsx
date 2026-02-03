// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { ReactNode } from "react";
// import "swiper/css";
// import "swiper/css/pagination";

// interface CustomSwiperProps<T> {
//   slides: T[];
//   renderSlide: (slide: T, index: number) => ReactNode;
//   onVisibleChange?: (payload: { visibleIndices: number[] }) => void;
// }

// export default function CustomSwiper<T>({
//   slides,
//   renderSlide,
//   onVisibleChange,
// }: CustomSwiperProps<T>) {
//   const emitVisible = (swiper: any) => {
//     if (!onVisibleChange) return;

//     if (Array.isArray(swiper.visibleSlides) && swiper.visibleSlides.length) {
//       const visibleIndices = swiper.visibleSlides
//         .map((slideEl: HTMLElement) =>
//           Number(slideEl.getAttribute("data-swiper-slide-index"))
//         )
//         .filter((i: number) => !Number.isNaN(i));

//       if (visibleIndices.length) {
//         onVisibleChange({ visibleIndices });
//         return;
//       }
//     }

//     // ✅ Fallback (initial render)
//     const slidesPerView =
//       typeof swiper.params.slidesPerView === "number"
//         ? swiper.params.slidesPerView
//         : swiper.slidesPerViewDynamic?.() ?? 1;

//     const start = swiper.realIndex ?? 0;

//     const fallbackIndices = Array.from(
//       { length: slidesPerView },
//       (_, i) => (start + i) % slides.length
//     );

//     onVisibleChange({ visibleIndices: fallbackIndices });
//   };

//   return (
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       slidesPerView={1}
//       spaceBetween={20}
//       loop
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       pagination={{
//         clickable: true,
//         renderBullet: (_, className) =>
//           `<span class="${className} custom-swiper-bullet"></span>`,
//       }}
//       breakpoints={{
//         768: { 
//           slidesPerView: 1.5,
//           // ✅ Enable autoHeight for equal heights
//           autoHeight: true,
//         },
//         1024: { 
//           slidesPerView: 2,
//           autoHeight: true,
//         },
//       }}
//       // ✅ IMPORTANT: Add these classes
//       className="mySwiper !pb-[80px]" // Added !pb for pagination space
//       // ✅ Enable equal heights
//       autoHeight={true} // This makes all slides same height
//       // ✅ Force equal height behavior
//       onSwiper={(swiper) => {
//         emitVisible(swiper);
//         // Force equal heights on init
//         setTimeout(() => {
//           swiper.updateAutoHeight(300); // 300ms transition
//         }, 100);
//       }}
//       onSlideChange={(swiper) => {
//         emitVisible(swiper);
//         // Update heights on slide change
//         swiper.updateAutoHeight(300);
//       }}
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide
//           key={i}
//           // ✅ Add these important classes
//           className="flex items-stretch h-auto"
//           style={{ height: 'auto' }}
//         >
//           <div className="h-full w-full">
//             {renderSlide(slide, i)}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ReactNode, useCallback, useRef } from "react";
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
  // Use ref to track last emitted indices to prevent unnecessary calls
  const lastEmittedIndices = useRef<number[]>([]);
  
  // Throttle the emitVisible function
  const emitVisible = useCallback((swiper: any) => {
    if (!onVisibleChange) return;

    let visibleIndices: number[] = [];

    // Try to get visible slides from swiper
    if (Array.isArray(swiper.visibleSlides) && swiper.visibleSlides.length) {
      visibleIndices = swiper.visibleSlides
        .map((slideEl: HTMLElement) =>
          Number(slideEl.getAttribute("data-swiper-slide-index"))
        )
        .filter((i: number) => !Number.isNaN(i));
    }

    // If no visible slides found or empty array, use fallback
    if (!visibleIndices.length) {
      const slidesPerView =
        typeof swiper.params.slidesPerView === "number"
          ? swiper.params.slidesPerView
          : swiper.slidesPerViewDynamic?.() ?? 1;

      const start = swiper.realIndex ?? 0;
      visibleIndices = Array.from(
        { length: slidesPerView },
        (_, i) => (start + i) % slides.length
      );
    }

    // Only emit if indices have changed
    if (
      lastEmittedIndices.current.length !== visibleIndices.length ||
      !lastEmittedIndices.current.every((val, idx) => val === visibleIndices[idx])
    ) {
      lastEmittedIndices.current = [...visibleIndices];
      onVisibleChange({ visibleIndices });
    }
  }, [onVisibleChange, slides.length]);

  // Use ref to avoid creating new functions on each render
  const swiperRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSlideChange = useCallback((swiper: any) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Debounce the emitVisible call
    timeoutRef.current = setTimeout(() => {
      emitVisible(swiper);
    }, 50); // 50ms debounce
  }, [emitVisible]);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false,
        waitForTransition: true // Add this to wait for transition
      }}
      pagination={{
        clickable: true,
        renderBullet: (_, className) =>
          `<span class="${className} custom-swiper-bullet"></span>`,
      }}
      breakpoints={{
        768: { 
          slidesPerView: 1.5,
          autoHeight: true,
        },
        1024: { 
          slidesPerView: 2,
          autoHeight: true,
        },
      }}
      className="mySwiper !pb-[80px]"
      autoHeight={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        emitVisible(swiper);
        
        // Force equal heights on init
        setTimeout(() => {
          swiper.updateAutoHeight(300);
        }, 100);
      }}
      onSlideChange={handleSlideChange}
      onSlideChangeTransitionStart={(swiper) => {
        // Only update heights during transition
        swiper.updateAutoHeight(300);
      }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide
          key={i}
          className="flex items-stretch h-auto"
          style={{ height: 'auto' }}
        >
          <div className="h-full w-full">
            {renderSlide(slide, i)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}