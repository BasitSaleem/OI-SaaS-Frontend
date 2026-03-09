"use client";

import React from "react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseCard = ({ title, description, icon }: WhyChooseCardProps) => {
  return (
    <div className="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0px_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 h-full border border-gray-50">
      <div className="mb-6 flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <h3 className="text-[22px] font-bold text-[#111827] mb-4 font-['onest']">
        {title}
      </h3>
      <p className="text-[#6B7280] text-sm leading-[1.6] font-['onest'] max-w-[280px]">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;
