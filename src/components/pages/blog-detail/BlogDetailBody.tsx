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

      {/* Two-column layout — desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left sidebar — col-span-3 */}
        <div className="lg:col-span-3">
          <BlogDetailSidebar
            tableOfContents={toc}
            articleTitle={data.heading}
          />
        </div>

        {/* Right content — col-span-9 */}
        <div className="lg:col-span-9">
          <BlogDetailContent
            overview={data.blogOverview}
            sections={sections}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailBody;
