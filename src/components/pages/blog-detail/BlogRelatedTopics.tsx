import React from "react";
import BlogCard from "@/components/pages/blog/BlogCard";
import { blogData } from "@/constant/blogData/blogData";

interface BlogRelatedTopicsProps {
  relatedTopicIds: string[];
  currentId: string;
}

const BlogRelatedTopics: React.FC<BlogRelatedTopicsProps> = ({ relatedTopicIds, currentId }) => {
  const related = blogData
    .filter((b) => relatedTopicIds.includes(b.id) && b.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="wrapper py-16 lg:py-24">
      <div className="mb-8">
        <h2 className="lg:text-[40px] md:text-[32px] text-[26px] font-semibold font-['Onest'] text-[#231F20] leading-tight mb-2">
          Related Articles
        </h2>
        <p className="text-base font-['Onest'] text-[#666]">
          Continue exploring inventory management insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((blog) => (
          <BlogCard
            key={blog.id}
            cardHeading={blog.heading}
            image={blog.blogImg}
            date={blog.date}
            readTime={blog.totalRead}
            href={`/blog/${blog.id}`}
            showAuthor
            authorName={blog.author}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogRelatedTopics;
