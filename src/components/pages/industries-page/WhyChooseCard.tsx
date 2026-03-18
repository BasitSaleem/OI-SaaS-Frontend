"use client";

import React from "react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseCard = ({ title, description, icon }: WhyChooseCardProps) => {
  return (
    <div className="bg-white bg-[linear-gradient(90deg,#FFFFFF00_0%, #FFFFFF_100%)] rounded-[24px] p-6 flex flex-col items-center text-center shadow-[inset_0px_17px_29px_0px_rgba(255,255,255,0.25)] transition-all duration-300 h-full border border-gray-50">
      <div className="mb-6 flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl leading-[140%] font-semibold text-[var(--text-dark)] mb-4 font-['onest'] min-h-[58px] lg:min-h-[70px]">
        {title}
      </h3>
      <p className="text-[var(--text-grey)] text-sm leading-[170%] font-['onest']">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;
