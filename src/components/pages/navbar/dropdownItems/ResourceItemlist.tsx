export interface ResourceItem {
  title: string;
  icon: string;
  key: string;
}

export const resourcesItems = [
  {
    key: 'blog',
    title: 'Blog',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/blog.svg',
  },
  {
    key: 'events',
    title: 'Event/Webinars',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/event-webinar.svg',
  },
  {
    key: 'help',
    title: 'Help Center',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/help-center.svg',
  },
  {
    key: 'compare',
    title: 'Compare',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/compare.svg',
  },
  {
    key: 'guides',
    title: 'Guides (Setup & User)',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/guides.svg',
  },
  {
    key: 'learning',
    title: 'Learning',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/resources-dropdown/learning.svg',
  },
];


export const resourcesDetailsMap: Record<string, string[]> = {
  learning: ['Videos'],
};

export const resourcesRightColumn = {
  heading: 'Resources',
};

