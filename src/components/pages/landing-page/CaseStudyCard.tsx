import Image from "next/image";
import ButtonSm from "@/components/button/ButtonSm";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "./CaseStudy";

interface CaseStudyCardProps {
  study: CaseStudy;
  totalSlides?: number;
  currentSlide?: number;
  prevSlide?: () => void;
  nextSlide?: () => void;
  setCurrentSlide?: (index: number) => void;
  hideCTA?: boolean;
  hideNavigation?: boolean;
}

export default function CaseStudyCard({ 
  study, 
  totalSlides = 0, 
  currentSlide = 0, 
  prevSlide = () => {}, 
  nextSlide = () => {}, 
  setCurrentSlide = () => {},
  hideCTA = false,
  hideNavigation = false
}: CaseStudyCardProps) {
  return (
    <div className="h-full grid grid-col-1 md:grid-cols-12 gap-y-8 md:gap-x-5 justify-center items-center">
      {/* Header */}
      <div className="md:col-span-6 lg:col-span-7 xl:col-span-8 relative z-[10]">
        <h3 className="mb-6 font-semibold text-[var(--text-dark)] lg:text-[60px] md:text-[32px] text-[48px] lg:leading-[100%] leading-[130%] font-['Onest']">
          {study.companyName}
        </h3>
        <div className="flex flex-col items-end">
          <div className={`bg-[var(--background-halfwhite)] rounded-tl-[20px] rounded-bl-[20px] lg:rounded-tl-[28px] lg:rounded-bl-[28px] p-6 ${
            !hideCTA 
              ? "rounded-tr-[20px] lg:rounded-tr-[28px] rounded-br-none lg:rounded-br-none" 
              : "rounded-r-[20px] lg:rounded-r-[28px] "
          }`}>
            {!hideCTA && (
            <p className="text-[var(--primary-teal)] lg:text-[32px] text-2xl lg:leading-[100%] leading-[165%] font-normal font-['Onest'] mb-4">
              Overview
            </p>
            )}
            <p className="text-[var(--text-grey)] font-['Onest'] text-xl leading-[180%] md:text-base lg:text-2xl md:leading-[165%] lg:leading-[52px]">
              {study.founderQuote?.overview}
            </p>
          </div>
          {!hideCTA && (
            <div className="flex justify-between items-stretch gap-x-4 w-full">
              <div className="flex items-center justify-center mt-4 w-full lg:max-w-[40%] xl:max-w-[30%] 2xl:max-w-[25%] h-12">
                <ButtonSm
                  url={`/case-studies/${study.slug}`}
                  text={study.ctaText}
                  bgColor="var(--primary-purple)"
                  textColor="white"
                  isBorder
                  icon={<ArrowUpRight size={18} />}
                />
              </div>
              <div className="relative flex bg-[var(--background-halfwhite)] w-full lg:max-w-[60%] xl:max-w-[70%] 2xl:max-w-[73%] lg:rounded-b-[28px] rounded-b-[20px] ">
                <div className="absolute z-[-100] left-[-5.4rem] md:left-[-5.8rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] rotate-180 shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quote Section */}
      <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
        <div className="relative ">
          <div className="flex items-start lg:items-center gap-x-6">
            <Image
              src="/assets/home-page-images/blue-checker.svg"
              alt="blue-checker"
              width={36}
              height={33}
              className="w-9 h-[33px]"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[32px] lg:text-[32px] font-['Onest']  lg:leading-[100%] leading-[130%] text-[[var(--text-dark)]]">
                {study.founderQuote?.author}
              </p>
              <p className="px-4 py-2 font-medium text-base leading-[150%] text-[var(--primary-purple)] w-fit bg-[var(--background-purple-light)] font-['onest'] rounded-full">
                {study.founderQuote?.authorTitle}
              </p>
            </div>
          </div>

          <div
            className="bg-contain bg-center bg-no-repeat min-h-[550px]"
            style={{
              backgroundImage: `url(${study.backgroundImage})`,
            }}
          >
            <Image
              src={study.image}
              alt={study.founderQuote?.author || "Author"}
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[var(--text-dark)] p-4 lg:p-6 font-['onest'] italic text-xl leading-8 absolute bottom-0 bg-[#FFF7D7] rounded-xl border-[5px] border-white">
            “{study.founderQuote?.text}”
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {!hideNavigation && (
        <div className="md:hidden flex justify-center items-center gap-2 lg:mb-[10px]">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full shadow-[0_4px_6px_-4px_rgba(var(--text-dark-rgb),0.1)] border transition-colors border-[var(--border-light)] text-[var(--text-grey)] hover:bg-gray-50`}
            aria-label="Previous slide"
          >
            <Image
              src="/assets/home-page-images/slider-arrow-left.svg"
              alt="arrow-left"
              width={20}
              height={20}
              className="w-5 h-5"
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
            className={`p-2 rounded-full border shadow-[0_4px_6px_-4px_rgba(var(--text-dark-rgb),0.1)] transition-colors border-[var(--border-light)] text-[var(--text-grey)] hover:bg-gray-50`}
            aria-label="Next slide"
          >
            <Image
              src="/assets/home-page-images/slider-arrow-right.svg"
              alt="arrow-right"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
        </div>
      )}
    </div>
  );
}
