import React from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import WorkflowCard from "./WorkflowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
  return (
    <section className="wrapper py-16 lg:py-24 overflow-hidden">
      <div className=" mx-auto text-center mb-16 lg:mb-20">
        <MainHeading className="mb-6">{heading}</MainHeading>
        <Paragraph className="text-lg opacity-80">{paragraph}</Paragraph>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        loop={steps.length > 3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
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
    </section>
  );
};

export default InventoryWorkflow;
