"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ReadTimeBadge = ({ readTime }: { readTime: string }) => (
  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[rgba(51,51,51,0.6)] backdrop-blur-[2px] px-2 py-1 rounded-full">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
      <path d="M12 7V12L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    <span className="text-white text-[12px] font-medium font-['Onest'] uppercase whitespace-nowrap leading-[1.6]">
      {readTime}
    </span>
  </div>
);

export const CategoryBadge = ({ category }: { category: string }) => (
  <div className="absolute top-3 left-3 flex items-center backdrop-blur-[8px] bg-[rgba(224,255,251,0.85)] px-3 py-[6px] rounded-full h-[28px]">
    <span className="text-[#008D6E] text-[14px] font-medium font-['Onest'] whitespace-nowrap leading-[1.6]">
      {category}
    </span>
  </div>
);

export const DateViews = ({ date, views }: { date?: string; views: string }) => (
  <div className="flex items-center gap-2">
    {date && (
      <span className="text-[14px] font-medium font-['Onest'] text-[#666] whitespace-nowrap leading-[1.6]">
        {date}
      </span>
    )}
    {date && <span className="w-[5px] h-[5px] rounded-full bg-[#999] flex-shrink-0" />}
    <div className="flex items-center gap-1">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="#999" strokeWidth="1.5" />
      </svg>
      <span className="text-[14px] font-medium font-['Onest'] text-[#666] whitespace-nowrap leading-[1.6]">
        {views}
      </span>
    </div>
  </div>
);

export const AuthorBlock = ({
  authorImage,
  authorName,
  authorDesignation,
}: {
  authorImage: string;
  authorName: string;
  authorDesignation: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#795CF5]">
      <Image
        src={authorImage}
        alt={authorName}
        width={40}
        height={40}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col min-w-0">
      <span className="font-semibold text-base font-['Onest'] text-[#231F20] leading-[1.4] truncate">
        {authorName}
      </span>
      <span className="font-medium text-xs font-['Onest'] text-[#795CF5] leading-[1.4] truncate">
        {authorDesignation}
      </span>
    </div>
  </div>
);

export const ReadArticleButton = ({
  href,
  always = false,
  fullWidth = false,
}: {
  href: string;
  always?: boolean;
  fullWidth?: boolean;
}) => (
  /* Mobile/tablet: always visible. Desktop: hover-only unless always=true.
     after:absolute after:inset-0 stretches the link to cover the entire card
     (card must have position:relative) so clicking anywhere navigates. */
  <div
    className={[
      "grid transition-all duration-300 ease-in-out",
      always
        ? "grid-rows-[1fr] opacity-100"
        : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100",
    ].join(" ")}
  >
    <div className="overflow-hidden">
      <div className="pt-3">
        <Link
          href={href}
          className={[
            "relative inline-flex items-center justify-center gap-2 px-5 py-[10px] bg-[#795CF5] text-white text-[14px] font-semibold font-['Onest'] rounded-full whitespace-nowrap",
            "after:absolute after:inset-0 after:rounded-[24px]",
            fullWidth ? "w-full" : "",
          ].join(" ")}
        >
          Read Article
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);
