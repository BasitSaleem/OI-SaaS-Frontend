"use client";

import { useState } from "react";
import { blogData } from "@/constant/blogData/blogData";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import BlogCard from "./BlogCard";

const CATEGORIES = [
  "All",
  "Inventory Management",
  "POS System",
  "Retail Operations",
  "E-commerce",
  "Manufacturing",
];

const PAGE_SIZE = 7;

const LatestArticles = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const visibleCategories = showMoreCategories ? CATEGORIES : CATEGORIES.slice(0, 7);
  const hiddenCount = CATEGORIES.length - 7;

  const filtered = blogData.filter((b) =>
    activeCategory === "All" ? true : b.status === "recent"
  );

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

  return (
    <section className="wrapper">

      {/* ── Category filter pills ─────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-10">
        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setShowAll(false); }}
            className={`px-5 py-[11px] rounded-full text-base font-medium font-['Onest'] transition-all duration-200 whitespace-nowrap
              ${activeCategory === cat
                ? "bg-[#795CF5] text-white shadow-[0_4px_12px_0_rgba(121,92,245,0.3)]"
                : "bg-[#F3F4F6] text-[#231F20] hover:bg-[#E0DBF9] hover:text-[#795CF5]"
              }`}
          >
            {cat}
          </button>
        ))}

        {!showMoreCategories && hiddenCount > 0 && (
          <button
            onClick={() => setShowMoreCategories(true)}
            className="flex items-center gap-2 px-5 py-[11px] rounded-full text-base font-medium font-['Onest'] text-[#666] hover:text-[#795CF5] transition-colors duration-200"
          >
            {hiddenCount} More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Heading row ───────────────────────────────── */}
      <div className="mb-8">
        <MainHeading className="mb-2">Latest Articles</MainHeading>
        <Paragraph>{filtered.length} articles found</Paragraph>
      </div>

      {/* ── Article grid ──────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6">
        {visible.map((blog, i) => (
          <div
            key={blog.id ?? i}
            className={i === 0 ? "col-span-12" : "col-span-12 md:col-span-6 lg:col-span-4"}
          >
            <BlogCard
              horizontal={i === 0}
              cardHeading={blog.heading}
              cardDesc={i === 0 ? blog.blogOverview : undefined}
              image={blog.blogImg}
              date={blog.date}
              readTime={blog.totalRead}
              href={`/resources/blog/${blog.id}`}
              showAuthor
              authorName={blog.author}
              alwaysShowButton={i === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Load more ─────────────────────────────────── */}
      {filtered.length > PAGE_SIZE && (
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setShowAll((p) => !p)}
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
