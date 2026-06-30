export interface BlogCardProps {
  cardHeading: string;
  cardDesc?: string;
  image?: string;
  category?: string;
  date?: string;
  views?: string;
  readTime?: string;
  href?: string;
  horizontal?: boolean;
  showAuthor?: boolean;
  authorName?: string;
  authorDesignation?: string;
  authorImage?: string;
  alwaysShowButton?: boolean;
}
