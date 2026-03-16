"use client";
import React from "react";
import "../../../app/globals.css";

import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

interface SecurityComplianceProps {
  title?: string;
  description?: string;
  secondDescription?: string;
  ctaDesc?: string;
}

const SecurityCompliance: React.FC<SecurityComplianceProps> = ({
  title = "Sell Smarter. Run Your Business Better",
  description,
  secondDescription,
  ctaDesc = "Contact Sales",
}) => {
  return (
    <div className="">
      <div className="wrapper ">
        <section className="bg-[rgba(121,_92,_245,_0.11)] lg:mt-[100px] md:mt-28 mt-20 px-4 py-6 md:p-6 lg:p-8 flex items-center justify-center rounded-[20px] lg:rounded-[40px] w-[100%] relative z-[100]">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 items-center justify-center w-full  text-center">
              <div className="lg:col-span-6 xl:col-span-5">
                <MainHeading className="text-left lg:mb-10 md:mb-6 mb-5"> 
                  {title}
                
                </MainHeading>
              </div>

              <div className="lg:col-span-6 xl:col-span-7">
                <Paragraph className="text-left mb-8">
                  {description}
                </Paragraph>
                <Paragraph className="text-left">
                  {secondDescription}
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecurityCompliance;
