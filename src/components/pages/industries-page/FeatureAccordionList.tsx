"use client";
import React, { useState } from "react";
import Image from "next/image";

export type FeatureListItem =
  | string
  | { listheading: string; listdescription?: string; listSubDescription?: string };

interface FeatureAccordionListProps {
  list: FeatureListItem[];
}

const FeatureAccordionList = ({ list }: FeatureAccordionListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-3">
      {(list as any[]).map(
        (item, idx) => (
          <div
            key={idx}
            className={`rounded-[20px] transition-all duration-300 ${openIndex === idx
                ? "border-3 border-white shadow-[inset_0px_17px_29px_0px_#FFFFFF40] bg-gradient-to-b from-transparent from-[40%] to-white/65 to-[100%] backdrop-blur-[10.45px]"
                : "border-3 border-transparent bg-transparent"
              } overflow-hidden`}
          >
            <button
              type="button"
              className="accordion-toggle flex items-start justify-between w-full p-5 md:px-6 md:py-4 text-left font-medium focus:outline-none rounded-[20px] transition-colors duration-300"
              onClick={() => toggle(idx)}
            >
              <span
                className={`w-full max-w-[90%]  text-base md:text-xl lg:text-2xl  leading-[150%] lg:leading-[135%]  font-['Onest'] font-medium transition-colors duration-300 ${openIndex === idx
                    ? "text-(--text-dark)"
                    : "text-(--text-dark)"
                  }`}
              >
                {typeof item === "string" ? item : item.listheading}
              </span>

              <span
                className={
                  openIndex === idx
                    ? "hidden"
                    : "flex shrink-0 items-center mt-1 justify-center"
                }
              >
                <Image
                  src="/assets/plus-icon.svg"
                  alt="Plus-icon"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                  loading="lazy"
                />
              </span>

              <span
                className={
                  openIndex === idx
                    ? "flex shrink-0 items-center mt-1 justify-center"
                    : "hidden"
                }
              >
                <Image
                  src="/assets/minus-icon.svg"
                  alt="Minus-icon"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                  loading="lazy"
                />
              </span>
            </button>

            <div
              className={`overflow-hidden flex flex-col  font-['Onest'] transition-all duration-300 ease-in-out
                                px-5 md:px-6 text-sm md:text-base leading-[170%] text-(--text-dark)
                                ${openIndex === idx
                  ? "max-h-96 opacity-100 pb-5"
                  : "max-h-0 opacity-0 pb-0"
                }`}
            >
              {typeof item === "string" ? "" : item.listdescription}
              <br /> <br />
              {typeof item === "string" ? item : item.listSubDescription}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FeatureAccordionList;
