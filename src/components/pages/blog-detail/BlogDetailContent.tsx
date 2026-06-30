import React from "react";
import BlogOverview from "./BlogOverview";
import BlogContentSection from "./BlogContentSection";
import { BlogSection } from "@/constant/blogData/blogData";

interface BlogDetailContentProps {
  overview: string;
  sections: BlogSection[];
}

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ overview, sections }) => (
  <div className="flex flex-col gap-10 md:gap-14">
    <BlogOverview text={overview} />
    {sections.map((section) => (
      <BlogContentSection key={section.id} section={section} />
    ))}
  </div>
);

export default BlogDetailContent;
