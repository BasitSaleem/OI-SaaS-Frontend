import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallHeading from "@/components/pages/typography/SmallHeading";
import SubHeading from "@/components/pages/typography/SubHeading";
import BlogWorkflowIcon from "@/components/icons/blogDetailIcons";
import { BlogSection, BlogBlock } from "@/constant/blogData/blogData";
import MediumHeading from "../typography/MediumHeading";

interface BlogContentSectionProps {
  section: BlogSection;
}

const renderFormattedText = (text: string) => {
  if (!text) return text;

  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="font-bold text-[#231F20] hover:underline"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const BlockRenderer: React.FC<{ block: BlogBlock; itemCounters: { numbered: number } }> = ({
  block,
  itemCounters,
}) => {
  if (block.type === "paragraph") {
    return (
      <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal">
        {renderFormattedText(block.content)}
      </p>
    );
  }

  if (block.type === "smallHeading") {
    // Sub-label within a section (e.g. plan tiers) — smaller than the section
    // heading so the hierarchy reads clearly.
    return (
      <h3 className="text-lg md:text-xl font-semibold font-['Onest'] text-[#231F20] mt-2">
        {block.content}
      </h3>
    );
  }

  if (block.type === "numberedList") {
    return (
      <ol className="flex flex-col gap-5">
        {block.items.map((item, i) => {
          const n = itemCounters.numbered + i + 1;
          return (
            <li key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <BlogWorkflowIcon n={n} />
              </div>
              <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal pt-2">
                {item}
              </p>
            </li>
          );
        })}
      </ol>
    );
  }

  if (block.type === "bulletList") {
    return (
      <ul className="flex flex-col gap-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-[7px] w-2.5 h-2.5 rounded-full bg-[#1AD1B9] flex-shrink-0" />
            <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal">
              {item}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    const success = block.variant === "success";
    return (
      <div
        className={[
          "rounded-2xl p-5 md:p-6 flex flex-col gap-2",
          success
            ? "bg-[#EAFBF4] border border-[#1AD1B9]/40"
            : "bg-[#F3F4F6]",
        ].join(" ")}
      >
        {block.title && (
          <p className={`text-base md:text-lg font-semibold font-['Onest'] ${success ? "text-[#0F8A73]" : "text-[#231F20]"}`}>
            {block.title}
          </p>
        )}
        <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal">
          {block.content}
        </p>
      </div>
    );
  }

  if (block.type === "budgetCards") {
    return (
      <div className="flex flex-col gap-4">
        {block.cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#F3F4F6] rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6"
          >
            <div className="lg:w-[26%] flex-shrink-0">
              <p className="text-base md:text-lg font-semibold font-['Onest'] text-[#231F20]">
                {card.title}
              </p>
              {card.subtitle && (
                <p className="text-sm font-['Onest'] text-[#666] mt-0.5">{card.subtitle}</p>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              {card.metrics.map((m, j) => (
                <div key={j} className="flex flex-col gap-1">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.5px] font-medium font-['Onest'] text-[#999]">
                    {m.label}
                  </span>
                  <span
                    className={`text-sm md:text-[15px] font-medium font-['Onest'] ${
                      m.highlight ? "text-[#795CF5]" : "text-[#555]"
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "detailList") {
    const isNumber = block.marker === "number";
    return (
      <div className="flex flex-col gap-6">
        {block.items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            {isNumber ? (
              <BlogWorkflowIcon n={i + 1} className="flex-shrink-0" />
            ) : (
              <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-[#F1ECFD] text-[#795CF5] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
            )}
            <div className="flex flex-col gap-1.5">
              <p className="text-base md:text-lg font-semibold font-['Onest'] text-[#231F20]">
                {item.title}
              </p>
              <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="w-full overflow-x-auto rounded-2xl border border-[#E5E7EB]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E5E7EB]">
              {block.columns.map((col, i) => (
                <th
                  key={i}
                  className="px-5 py-4 text-sm md:text-base font-semibold font-['Onest'] text-[#231F20] whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r} className="border-b border-[#F3F4F6] last:border-b-0">
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className="px-5 py-4 text-sm md:text-base leading-[1.6] font-['Onest'] text-[#555] font-normal"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

const BlogContentSection: React.FC<BlogContentSectionProps> = ({ section }) => {
  let numberedCount = 0;

  return (
    <div id={section.id} className="flex flex-col gap-6 scroll-mt-28">
      {section.mainHeading ? (
        <SubHeading>{section.heading}</SubHeading>
      ) : (
        <MediumHeading>{section.heading}</MediumHeading>
      )}
      {section.blocks.map((block, i) => {
        const counter = { numbered: numberedCount };
        if (block.type === "numberedList") numberedCount += block.items.length;
        return <BlockRenderer key={i} block={block} itemCounters={counter} />;
      })}
      {section.image && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-2">
          <Image
            src={section.image}
            alt={section.heading}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      )}
    </div>
  );
};

export default BlogContentSection;
