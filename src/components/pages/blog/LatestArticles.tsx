
"use client";

import { useState } from "react";
import { blogData } from "@/constant/blogData/blogData";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import BlogCard from "./BlogCard";

const CATEGORIES = [
  "All",
  "Inventory Management",
];

const PAGE_SIZE = 7;

interface LatestArticlesProps {
  searchQuery: string;
}

const LatestArticles: React.FC<LatestArticlesProps> = ({
  searchQuery,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const visibleCategories = showMoreCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 7);

  const hiddenCount = CATEGORIES.length - 7;

  // Filter articles based on selected category
  const filtered = blogData.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" ||
      blog.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return matchesCategory;
    }

    const searchableText = [
      blog.heading,
      blog.category,
      blog.tagline,
      blog.subtitle,
      blog.author,
      blog.blogOverview,
      blog.sections
        .flatMap((section) =>
          section.blocks.map((block) => {
            if ("content" in block) return block.content;

            if ("items" in block) {
              return block.items
                .map((item) =>
                  typeof item === "string"
                    ? item
                    : `${item.title} ${item.content}`
                )
                .join(" ");
            }

            if ("cards" in block) {
              return block.cards
                .map((card) => card.title)
                .join(" ");
            }

            return "";
          })
        )
        .join(" "),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  // Show first 7 articles or all articles
  const visible = showAll
    ? filtered
    : filtered.slice(0, PAGE_SIZE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section className="wrapper">
      {/* Category Filter */}
      <div className="flex w-full overflow-x-auto gap-2 mb-10 no-scrollbar py-2">
        {visibleCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-[11px] rounded-full text-base font-medium font-['Onest'] transition-all duration-200 whitespace-nowrap ${activeCategory === category
                ? "bg-[#795CF5] text-white shadow-[0_4px_12px_0_rgba(121,92,245,0.3)]"
                : "bg-[#F3F4F6] text-[#231F20] hover:bg-[#E0DBF9] hover:text-[#795CF5]"
              }`}
          >
            {category}
          </button>
        ))}

        {!showMoreCategories && hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setShowMoreCategories(true)}
            className="flex items-center gap-2 px-5 py-[11px] rounded-full text-base font-medium font-['Onest'] text-[#666] hover:text-[#795CF5] transition-colors duration-200"
          >
            {hiddenCount} More

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Heading */}
      <div className="mb-8">
        <MainHeading className="mb-2">
          Latest Articles
        </MainHeading>

        <Paragraph>
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
        </Paragraph>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-12 gap-6">
        {visible.length > 0 ? (
          visible.map((blog, index) => (
            <div
              key={blog.id}
              className={
                index === 0
                  ? "col-span-12"
                  : "col-span-12 md:col-span-6 lg:col-span-4"
              }
            >
              <BlogCard
                horizontal={index === 0}
                cardHeading={blog.heading}
                cardDesc={
                  index === 0 ? blog.blogOverview : undefined
                }
                image={blog.blogImg}
                date={blog.date}
                readTime={blog.totalRead}
                category={blog.category}
                href={`/blog/${blog.id}`}
                showAuthor
                authorName={blog.author}
                authorImage={
                  blog.authorAvatar ?? blog.blogImg
                }
                authorDesignation={blog.authorRole ?? ""}
                alwaysShowButton={index === 0}
              />
            </div>
          ))
        ) : (
          <div className="col-span-12 py-12 text-center">
            <Paragraph>
              No articles found in this category.
            </Paragraph>
          </div>
        )}
      </div>

      {/* Load More */}
      {filtered.length > PAGE_SIZE && (
        <div className="flex items-center justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            className="px-[60px] py-5 rounded-full text-base font-semibold font-['Onest'] bg-[#795CF5] text-white border border-transparent hover:bg-transparent hover:border-[#795CF5] hover:text-[#795CF5] transition-all duration-300"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestArticles;
