// components/CaseStudies.tsx
"use client";

import { useState } from "react";
import MainHeading from "../typography/MainHeading";
import ButtonOutline from "@/components/button/ButtonOutline";
import CardHeading from "../typography/CardHeading";
import Image from "next/image";
import ButtonSm from "@/components/button/ButtonSm";

import { ArrowUpRight } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

export interface CaseStudy {
  id: string;
  image: string;
  backgroundImage: string;
  ctaText: string;
  slug?: string;
  founderQuote?: {
    authorCompanyName?: string;
    overview: string;
    text: string;
    author: string;
    authorTitle: string;
  };
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  // Limit to first 5 case studies
  const limitedCaseStudies = caseStudies.slice(0, 5);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesPerView = 1;
  const totalSlides = Math.ceil(limitedCaseStudies.length / slidesPerView);

  const getCurrentStudies = () => {
    const start = currentSlide * slidesPerView;
    const end = start + slidesPerView;

    // If we're at the end and need to wrap around
    if (end > limitedCaseStudies.length) {
      const overflow = end - limitedCaseStudies.length;
      return [
        ...limitedCaseStudies.slice(start),
        ...limitedCaseStudies.slice(0, overflow),
      ];
    }

    return limitedCaseStudies.slice(start, end);
  };

  const currentStudies = getCurrentStudies();

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide(totalSlides - 1);
    }
  };

  return (
    <div className="wrapper">
        <div className="flex justify-between gap-x-3 items-end mb-6 lg:mb-[50px]">
          <MainHeading className="w-full max-w-full md:max-w-[65%] lg:max-w-[60%] gradient-text">
            Businesses Thriving with Owners Inventory
          </MainHeading>
          {/* <div className="hidden md:flex">
            <ButtonOutline
              url="#"
              text="View All Case Studies"
              borderColor="var(--primary-purple)"
              textColor="white"
            />
          </div> */}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2">
            <h3 className={`text-2xl font-[200] leading-[100%] text-[var(--text-grey)] ${totalSlides > 1 ? "mb-0" : "mb-8"} `}>
              Case Study:
            </h3>
          </div>
            {totalSlides > 1 && (
              <div className="hidden md:flex justify-end items-center gap-2 mb-6 lg:mb-[10px]">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(var(--text-dark-rgb),0.1)] border transition-colors border-[var(--border-light)] text-[var(--text-grey)] hover:bg-gray-50"`}
                  aria-label="Previous slide"
                >
                  <Image
                    src="/assets/home-page-images/slider-arrow-left.svg"
                    alt="arrow-left"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </button>

                {/* Bullets */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? "w-[34px] h-[15px] bg-[var(--primary-teal)] rounded-[60px]"
                          : "w-[16px] h-[15px] bg-[var(--background-halfwhite)] rounded-[60px]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(var(--text-dark-rgb),0.1)] transition-colors border-[var(--border-light)] text-[var(--text-grey)] hover:bg-gray-50"`}
                  aria-label="Next slide"
                >
                  <Image
                    src="/assets/home-page-images/slider-arrow-right.svg"
                    alt="arrow-right"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            )}
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 mb-8">
          {currentStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              totalSlides={totalSlides}
              currentSlide={currentSlide}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              setCurrentSlide={setCurrentSlide}
              hideNavigation={totalSlides <= 1}
            />
          ))}
        </div>
      </div>
  );
}
