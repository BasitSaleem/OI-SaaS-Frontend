import React from "react";

export interface ResultMetric {
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
  
  // Split label into title and subtitle if possible (heuristic: split at first space or use first word as title)
  const words = metric.label.split(" ");
  const title = words[0];
  const subtitle = words.slice(1).join(" ");

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-white/40 border border-white/60 rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md text-center h-full transition-transform duration-300 hover:scale-[1.02]">
      <p
        className="text-[32px] lg:text-[42px] leading-[130%] lg:leading-[100%] font-semibold font-['Onest'] text-[var(--text-black)]  mb-2"
        ref={(el) => {
          statRefs.current[index] = el;
        }}
      >
        <span className="number">0</span>
        {sign && <span className="text-[32px] lg:text-[42px] leading-[130%] lg:leading-[100%] ml-1">{sign}</span>}
      </p>
      <h3 className="text-2xl lg:text-[28px] leading-[135%] lg:leading-[30px] font-medium text-[var(--text-dark)] mb-2 font-['Onest']">
        {title}
      </h3>
      <p className="text-base leading-[170%] text-[var(--text-grey)] font-normal font-['Onest']">
        {subtitle}
      </p>
    </div>
  );
};

export default StatCard;
