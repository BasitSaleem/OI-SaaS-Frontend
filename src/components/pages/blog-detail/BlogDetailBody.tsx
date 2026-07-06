import React from "react";
import BlogDetailSidebar from "./BlogDetailSidebar";
import BlogDetailContent from "./BlogDetailContent";
import { BlogData } from "@/constant/blogData/blogData";

interface BlogDetailBodyProps {
  data: BlogData;
}

const BlogDetailBody: React.FC<BlogDetailBodyProps> = ({ data }) => {
  const toc = data.tableOfContents ?? [];
  const sections = data.sections ?? [];

  return (
    <section className="wrapper py-12 lg:py-20">
      {/* Mobile TOC — collapsible, tablet/mobile only */}
      {toc.length > 0 && (
        <div className="lg:hidden mb-8">
          <details className="group border border-[#E5E7EB] rounded-[16px] overflow-hidden">
            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold font-['Onest'] text-[#231F20] list-none select-none">
              Table of Contents
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                className="transition-transform duration-200 group-open:rotate-180"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="px-5 pb-5 pt-2 flex flex-col gap-1">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-['Onest'] font-medium text-[#555] hover:text-[#1AD1B9] py-1.5 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      )}

      {/* Two-column layout — desktop: sticky sidebar (left) + scrollable
          content (right), like the privacy/terms pages. The sidebar column
          itself is sticky so its containing block is the full-height row,
          letting the complete sidebar — table of contents, CTA card, and
          share links — stay pinned together for the whole article. */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left sidebar — sticky (TOC + CTA + share all move together) */}
        <div className="hidden lg:block lg:sticky lg:top-[100px] w-full lg:w-[300px] flex-shrink-0">
          <BlogDetailSidebar
            tableOfContents={toc}
            articleTitle={data.heading}
          />
        </div>

        {/* Right content — scrolls with the page */}
        <div className="min-w-0 flex-1 w-full">
          <BlogDetailContent overview={data.blogOverview} sections={sections} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailBody;
