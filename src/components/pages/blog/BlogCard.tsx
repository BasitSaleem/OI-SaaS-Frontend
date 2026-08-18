"use client";

import { BlogCardProps } from "./BlogCardTypes";
import HorizontalBlogCard from "./HorizontalBlogCard";
import VerticalBlogCard from "./VerticalBlogCard";

export type { BlogCardProps };

const BlogCard: React.FC<BlogCardProps> = ({
  cardHeading,
  cardDesc,
  image = "https://d2qlv5xtew5ayb.cloudfront.net/assets/blog-images/first-blog.webp",
  category = "",
  date,
  views = "4.5k",
  readTime = "5 min read",
  href = "#",
  horizontal = false,
  showAuthor = false,
  authorName = "John Smith",
  authorDesignation = "Content Writer",
  authorImage = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image61.webp",
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
