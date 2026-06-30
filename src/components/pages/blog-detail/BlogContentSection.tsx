import React from "react";
import Image from "next/image";
import SmallHeading from "@/components/pages/typography/SmallHeading";
import SubHeading from "@/components/pages/typography/SubHeading";
import BlogWorkflowIcon from "@/components/icons/blogDetailIcons";
import { BlogSection, BlogBlock } from "@/constant/blogData/blogData";

interface BlogContentSectionProps {
  section: BlogSection;
}

const BlockRenderer: React.FC<{ block: BlogBlock; itemCounters: { numbered: number } }> = ({
  block,
  itemCounters,
}) => {
  if (block.type === "paragraph") {
    return (
      <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#555] font-normal">
        {block.content}
      </p>
    );
  }

  if (block.type === "smallHeading") {
    return <SmallHeading className="mt-2">{block.content}</SmallHeading>;
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

  return null;
};

const BlogContentSection: React.FC<BlogContentSectionProps> = ({ section }) => {
  let numberedCount = 0;

  return (
    <div id={section.id} className="flex flex-col gap-6 scroll-mt-28">
      {section.mainHeading ? (
        <SubHeading>{section.heading}</SubHeading>
      ) : (
        <SmallHeading>{section.heading}</SmallHeading>
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
