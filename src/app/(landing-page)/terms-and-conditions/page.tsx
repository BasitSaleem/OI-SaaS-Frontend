import React from "react";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import { TERMS_AND_CONDITIONS_DATA } from "@/constant/termsData";
import PageScrollAnimation from "@/components/common-components/PageScrollAnimation";

const TermAndConditionPage = () => {

  return (
    <>
      <PageScrollAnimation />
      <div className="pinned-section-1">
        <div className="md:h-6 h-8"></div>
      </div>

      <section className="mt-20 md:mt-28 lg:mt-40">
        <div className="wrapper">
          <h1 className="text-center text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-['Onest'] font-semibold text-[#231F20]">
            Terms and Condition
          </h1>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {TERMS_AND_CONDITIONS_DATA.map((section: any, index: number) => (
              <div key={index} className="flex flex-col">
                <h2 className="xl:text-2xl text-xl font-semibold text-[#231F20] font-['Onest'] mb-4">
                  {section.title}
                </h2>
                {section.contentType === "list" ? (
                  <ul className="list-disc ml-6 flex flex-col gap-2">
                    {section.content.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content.map((para: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20] mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoActionBottom />
    </>
  );
};

export default TermAndConditionPage;
