"use client";

import React, { useState, useEffect, useCallback } from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IndustryCard from "./IndustryCard";

export interface IndustryItem {
  id?: string | number;
  title: string;
  gradient: string;
  description: string;
  image: string;
  mobileImage?: string;
  
}

// Define the props interface
interface IndustryPosShowcaseProps {
  industries: IndustryItem[];
  mainHeading?: string;
  paragraph?: string;
  buttonText?: string;
}

const IndustryPosShowcase = ({
  industries,
  mainHeading = "",
  paragraph = "",
  buttonText = "Explore All Industries",
}: IndustryPosShowcaseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [translationPercentage, setTranslationPercentage] = useState(100);

  // Handle responsive settings
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlidesPerView(1);
        setIsMobile(true);
        setIsTablet(false);
        setTranslationPercentage(106);
        setActiveCard(null); 
      } else if (width < 1024) {
        setSlidesPerView(2);
        setIsMobile(false);
        setIsTablet(true);
        setTranslationPercentage(103);
      } else {
        setSlidesPerView(3);
        setIsMobile(false);
        setIsTablet(false);
        setTranslationPercentage(102);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(industries.length / slidesPerView);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setActiveCard(null); 
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    setActiveCard(null); 
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setActiveCard(null); 
  };

  // Handle card interaction based on device
  const handleCardInteraction = useCallback(
    (relativeIndex: number) => {
      if (isTablet) {
        if (activeCard === relativeIndex) {
          setActiveCard(null);
        } else {
          setActiveCard(relativeIndex);
        }
      }
    },
    [isTablet, activeCard]
  );

  // Close expanded card when clicking outside on tablet
  useEffect(() => {
    if (!isTablet || activeCard === null) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isCard = target.closest("[data-industry-card]");

      if (!isCard) {
        setActiveCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isTablet, activeCard]);

  // Determine if a card should be expanded
  const isCardExpanded = (relativeIndex: number) => {
    return activeCard === relativeIndex;
  };

  return (
    <div className="wrapper px-4 ">
      <div className="w-full flex justify-between items-end mb-10">
        <div className="flex flex-col items-start justify-center w-full max-w-full md:max-w-[70%]">
          <MainHeading className="mb-4 text-[#333333]">
            {mainHeading}
          </MainHeading>
          <Paragraph className="text-[#666666]">
            {paragraph}
          </Paragraph>

          
          <button className="mt-6 bg-[#7B61FF] text-white px-[63px] py-5 rounded-full font-medium hover:bg-[#634AE2] transition-colors cursor-pointer">

            {buttonText}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#1AD1B9]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * translationPercentage}%)`,
          }}
        >
          {industries.map((industry, index) => {
            const normalWidth = `calc((100% / ${slidesPerView}) - ${
              (24 * (slidesPerView - 1)) / slidesPerView
            }px)`;
            const startIdx = currentSlide * slidesPerView;
            const endIdx = startIdx + slidesPerView;
            const isVisible = index >= startIdx && index < endIdx;
            const relativeIndex = index - startIdx;

            const isExpanded = isCardExpanded(relativeIndex);

            
            let expandAmount = 0;
            if (isVisible && activeCard !== null && !isMobile) {
              if (activeCard === slidesPerView - 1) {
                if (relativeIndex < activeCard) {
                  expandAmount = -190;
                } else if (relativeIndex === activeCard) {
                  expandAmount = -190;
                }
              } else if (activeCard < slidesPerView - 1 && activeCard < relativeIndex) {
                expandAmount = 10;
              }
            }

            return (
              <div
                key={index}
                data-industry-card
                className="transition-all duration-300 ease-in-out"
                style={{
                  width: isVisible && isExpanded && !isMobile ? "560px" : normalWidth,
                  flexShrink: 0,
                  transform: !isMobile ? `translateX(${expandAmount}px)` : "none",
                }}
                onMouseEnter={() => !isTablet && !isMobile && isVisible && setActiveCard(relativeIndex)}
                onMouseLeave={() => !isTablet && !isMobile && setActiveCard(null)}
                onClick={(e) => {
                  if (isTablet && isVisible && !isMobile) {
                    e.stopPropagation();
                    handleCardInteraction(relativeIndex);
                  }
                }}
                role={isTablet ? "button" : undefined}
                aria-expanded={isTablet && isExpanded}
                aria-label={
                  isTablet && !isMobile
                    ? `${industry.title} - Click to ${
                        isExpanded ? "collapse" : "expand"
                      }`
                    : undefined
                }
                tabIndex={isTablet && !isMobile ? 0 : undefined}
                onKeyDown={(e) => {
                  if (
                    isTablet &&
                    !isMobile &&
                    isVisible &&
                    (e.key === "Enter" || e.key === " ")
                  ) {
                    e.preventDefault();
                    handleCardInteraction(relativeIndex);
                  }
                }}
              >
                <IndustryCard
                  title={industry.title}
                  gradient={industry.gradient}
                  description={industry.description}
                  imageUrl={industry.image}
                  mobileImage={industry.mobileImage}
                  isHovered={isExpanded}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center gap-4 mt-8 md:mt-0">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide
                  ? "w-8 h-3 bg-[#1AD1B9]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default IndustryPosShowcase;