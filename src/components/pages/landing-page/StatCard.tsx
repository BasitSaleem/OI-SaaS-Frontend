import React from "react";

export interface ResultMetric {
  heading: string;
  value: string;
  label: string;
}

interface StatCardProps {
  metric: ResultMetric;
  index: number;
  statRefs: React.MutableRefObject<Array<HTMLParagraphElement | null>>;
}

const StatCard: React.FC<StatCardProps> = ({ metric, index, statRefs }) => {
  const sign = metric.value.replace(/[0-9]/g, "");
  
  return (
    <div className="flex flex-col items-center justify-start p-6 bg-white/12 border border-white/50 rounded-[30px] backdrop-blur-[22px] shadow-[0px_4px_4px_0px_#00000021] text-center h-full transition-transform duration-300 hover:scale-[1.02]">
      <p
        className="text-[32px] lg:text-[42px] leading-[130%] lg:leading-[100%] font-semibold font-['Onest'] text-[var(--text-black)]  mb-2"
        ref={(el) => {
          statRefs.current[index] = el;
        }}
      >
        <span className="number">0</span>
        {sign && <span className="text-[32px] lg:text-[42px] leading-[130%] lg:leading-[100%] ml-1">{sign}</span>}
      </p>
      <span className="text-2xl lg:text-[28px] leading-[135%] lg:leading-[30px] font-medium text-[var(--text-dark)] mb-2 font-['Onest']">
        {metric.heading}
      </span>
      <p className="text-base leading-[170%] text-[var(--text-grey)] font-normal font-['Onest']">
        {metric.label}
      </p>
    </div>
  );
};

export default StatCard;
