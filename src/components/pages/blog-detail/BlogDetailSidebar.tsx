import React from "react";
import BlogTableOfContents from "./BlogTableOfContents";
import BlogSocialShare from "./BlogSocialShare";
import { TOCItem } from "@/constant/blogData/blogData";

interface BlogDetailSidebarProps {
  tableOfContents: TOCItem[];
  articleTitle: string;
}

const BlogDetailSidebar: React.FC<BlogDetailSidebarProps> = ({
  tableOfContents,
  articleTitle,
}) => (
  <aside className="hidden lg:flex flex-col">
    <BlogTableOfContents items={tableOfContents} />
    <BlogSocialShare title={articleTitle} />
  </aside>
);

export default BlogDetailSidebar;
