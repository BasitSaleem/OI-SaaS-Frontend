"use client";

import React, { useState } from "react";

const records = [
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
  {
    title: "Secure Business Email Hosting for your Organization",
    url: "https://universe.ownerspos.org/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste sequi cupiditate quis!",
  },
];

const SearchRecords: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleRecords = showAll ? records : records.slice(0, 4);

  return (
    <div
      className="md:col-span-7 lg:col-span-8 flex flex-col gap-8 lg:gap-10 "
      id="search-records"
    >
      {visibleRecords.map((item, idx) => (
        <div key={idx} className="search-record flex flex-col">
          <h3 className="search-record__title xl:text-2xl text-xl leading-100% font-semibold text-[var(--text-dark)] font-['Onest']">
            {item.title}
          </h3>
          <a
            href={item.url}
            className="xl:text-sm text-xs font-bold font-['Onest'] text-[var(--primary-purple)] cursor-pointer"
          >
            {item.url}
          </a>
          <p className="search-record__desc xl:text-base text-sm font-normal font-['Onest'] text-[var(--text-dark)] mt-4">
            {item.desc}
          </p>
        </div>
      ))}

      {/* Show button only if there are more than 4 records */}
      {records.length > 4 && (
        <div className="md:mt-7 mt-5 flex items-center justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[var(--primary-purple)] text-white border border-transparent hover:bg-transparent hover:border-[var(--primary-purple)] hover:text-[var(--primary-purple)] font-['Onest'] font-semibold text-base px-[60px] py-5 rounded-full transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchRecords;
