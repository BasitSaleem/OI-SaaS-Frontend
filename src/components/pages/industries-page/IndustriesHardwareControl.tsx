"use client";
import React from "react";
import "../../../app/globals.css";
import ButtonSm from "@/components/button/ButtonSm";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

interface IndustriesHardwareControlProps {
  title?: string;
  description?: string;
  ctaDesc?: string;
}

const IndustriesHardwareControl: React.FC<IndustriesHardwareControlProps> = ({
  title = "Sell Smarter. Run Your Business Better",
  description = "Get a POS system to make your business smooth and trouble-free in practice by having complete control of sales, inventory, and operations.",
  ctaDesc = "Contact Sales",
}) => {
  return (
    <div className="">
      <div className="wrapper">
        <section
          className="backdrop-blur-[60px] bg-[linear-gradient(105.91deg,_rgba(121,92,245,0.76)_5.38%,_rgba(26,209,185,0.76)_94.62%)] lg:mt-[100px] md:mt-28 mt-20 flex items-center justify-center rounded-[20px] lg:rounded-[40px] w-[100%] relative z-[100]"
          
        >
          <div className="">
            <div className="flex flex-col items-center justify-center w-full mx-auto lg:py-[100px] md:py-20 py-9 lg:px-8 md:px-6 px-3 text-center">
              <MainHeading className="text-[var(--white-color)] lg:mb-10 md:mb-6 mb-5">
                {title}
              </MainHeading>

              <Paragraph className="text-[var(--white-color)] mb-6">
                {description}
              </Paragraph>

              <div className="flex gap-6 flex-col w-full md:flex-row items-center justify-center">
                <ButtonSm
                  url="https://app.ownersinventory.com/"
                  text={ctaDesc}
                  className="w-full md:w-fit"
                  bgColor="white"
                  textColor="text-[var(--text-dark)]"
                  paddingLg="md:px-[38px] lg:px-[38px] lg:py-4"
                  isBorder
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustriesHardwareControl;
