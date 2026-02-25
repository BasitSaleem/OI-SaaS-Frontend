"use client";

import React from "react";

const features = [
  {
    title: "Point Of Sale",
    desc: "Lorem ipsum dolor sit amet.",
    icon: "/assets/header-dropdown-images/point-of-sale.svg",
    link: "#",
  },
  {
    title: "Point Of Sale",
    desc: "Lorem ipsum dolor sit amet.",
    icon: "/assets/header-dropdown-images/point-of-sale.svg",
    link: "#",
  },
  // add more items here
];

const RelatedFeatures: React.FC = () => {
  return (
    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-5">
      <h3 className="search-record__title xl:text-2xl text-xl leading-100% font-semibold text-[var(--text-dark)] font-['Onest'] mb-3">
        Features related to your search
      </h3>

      {features.map((feature, idx) => (
        <div
          key={idx}
          className="related-features flex items-start justify-start gap-4"
        >
          <div className="w-[60px] h-[60px] p-3 rounded-2xl bg-white flex items-center justify-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]">
            <img src={feature.icon} className="w-full" alt={feature.title} />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h4 className="xl:text-lg text-base leading-100% font-semibold text-[var(--text-dark)] font-['Onest']">
              {feature.title}
            </h4>
            <p className="search-record__desc xl:text-sm text-xs font-normal font-['Onest'] text-[var(--text-dark)]">
              {feature.desc}
            </p>
            <a
              href={feature.link}
              className="xl:text-sm text-xs font-bold font-['Onest'] text-[var(--primary-purple)] cursor-pointer mt-1"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedFeatures;
