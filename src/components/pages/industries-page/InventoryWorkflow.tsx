import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import WorkflowCard from "./WorkflowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDevice } from "@/hooks/useDevice";
import { type Swiper as SwiperType } from "swiper";
import "swiper/css";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

interface InventoryWorkflowProps {
  heading: string;
  paragraph: string;
  steps: WorkflowStep[];
}

const InventoryWorkflow = ({ heading, paragraph, steps }: InventoryWorkflowProps) => {
  const { isDesktop, isMounted } = useDevice();
  const [progress, setProgress] = React.useState(0);
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!sectionRef.current || !swiperInstance) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperInstance.autoplay.start();
        } else {
          swiperInstance.autoplay.stop();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [swiperInstance]);

  const handleProgress = (swiper: SwiperType) => {
    const total = steps.length;
    const slidesPerView =
      swiper.params.breakpoints &&
      swiper.currentBreakpoint &&
      swiper.params.breakpoints[Number(swiper.currentBreakpoint)]?.slidesPerView !== undefined
        ? Number(swiper.params.breakpoints[Number(swiper.currentBreakpoint)].slidesPerView)
        : typeof swiper.params.slidesPerView === "number"
          ? swiper.params.slidesPerView
          : 1;

    const current = swiper.activeIndex + slidesPerView;
    const calculatedProgress = Math.min((current / total) * 100, 100);
    setProgress(calculatedProgress);
  };



  return (
    <section ref={sectionRef} className="wrapper py-16 lg:py-24 overflow-hidden">
      <div className=" mx-auto text-center mb-16 lg:mb-20">
        <MainHeading className="mb-6">{heading}</MainHeading>
        <Paragraph className="text-lg opacity-80">{paragraph}</Paragraph>
      </div>

      {/* Progress Bar */}
      <div className="max-w-full md:max-w-[400px] lg:hidden block h-1.5 bg-[var(--primary-purple)]/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--primary-purple)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isMounted && (
        <Swiper
          key="inventory-swiper"
          onSwiper={setSwiperInstance}
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={1}
          loop={false}
          onInit={(swiper) => {
            handleProgress(swiper);
            swiper.autoplay.stop(); 
          }}
          onSlideChange={handleProgress}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="!h-auto flex items-stretch">
              <WorkflowCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default InventoryWorkflow;
