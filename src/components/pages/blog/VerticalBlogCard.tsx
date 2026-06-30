"use client";

import Image from "next/image";
import { BlogCardProps } from "./BlogCardTypes";
import { CategoryBadge, ReadTimeBadge, DateViews, AuthorBlock, ReadArticleButton } from "./BlogCardParts";

type Props = Required<Pick<BlogCardProps,
  "cardHeading" | "image" | "category" | "readTime" | "href" | "views" |
  "showAuthor" | "authorName" | "authorDesignation" | "authorImage" | "alwaysShowButton"
>> & Pick<BlogCardProps, "cardDesc" | "date">;

const VerticalBlogCard = ({
  cardHeading,
  cardDesc,
  image,
  category,
  date,
  views,
  readTime,
  href,
  showAuthor,
  authorName,
  authorDesignation,
  authorImage,
  alwaysShowButton,
}: Props) => (
  <div className={`p-[1px] rounded-[24px] bg-[linear-gradient(90deg,#1AD1B9_32.74%,#38ACCC_52.46%,#5588DF_76.39%,#795CF5_100%)] h-full`}>
    <div className="group relative flex flex-col bg-white rounded-[24px] p-4 gap-6 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(121,92,245,0.12)] h-full">
      {/* Image */}
      <div className="relative h-[220px] lg:h-[260px] rounded-[20px] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={cardHeading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {category && <CategoryBadge category={category} />}
        <ReadTimeBadge readTime={readTime} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-4">
        {/* data-card-heading lets useEqualizeHeadings sync row heights */}
        <div data-card-heading className="flex flex-col gap-4">
          <h3 className="text-[#231F20] text-[24px] leading-[1.35] font-medium font-['Onest'] group-hover:text-[#795CF5] transition-colors duration-200">
            {cardHeading}
          </h3>
          {cardDesc && (
            <p className="text-[#666] text-[16px] leading-[1.5] font-['Onest'] font-normal">
              {cardDesc}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <DateViews date={date} views={views} />
          {showAuthor && (
            <AuthorBlock
              authorImage={authorImage}
              authorName={authorName}
              authorDesignation={authorDesignation}
            />
          )}
        </div>

        <div className="mt-auto">
          <ReadArticleButton href={href} always={alwaysShowButton} fullWidth />
        </div>
      </div>
    </div>
  </div>
);

export default VerticalBlogCard;
