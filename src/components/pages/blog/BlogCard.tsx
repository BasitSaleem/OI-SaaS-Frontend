"use client";

import { BlogCardProps } from "./BlogCardTypes";
import HorizontalBlogCard from "./HorizontalBlogCard";
import VerticalBlogCard from "./VerticalBlogCard";

export type { BlogCardProps };

const BlogCard: React.FC<BlogCardProps> = ({
  cardHeading,
  cardDesc,
  image = "/assets/blog-images/first-blog.webp",
  category = "Inventory Management",
  date,
  views = "4.5k",
  readTime = "5 min read",
  href = "#",
  horizontal = false,
  showAuthor = false,
  authorName = "John Smith",
  authorDesignation = "Content Writer",
  authorImage = "/assets/blog-images/first-blog.webp",
  alwaysShowButton = false,
}) => {
  const sharedProps = {
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
  };

  return horizontal
    ? <HorizontalBlogCard {...sharedProps} />
    : <VerticalBlogCard {...sharedProps} />;
};

export default BlogCard;
