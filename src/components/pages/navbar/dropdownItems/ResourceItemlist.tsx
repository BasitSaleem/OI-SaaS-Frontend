export interface ResourceItem {
  title: string;
  icon: string;
  key: string;
}

export const resourcesItems = [
  {
    key: 'blog',
    title: 'Blog',
    icon: '/assets/header-dropdown-images/resources-dropdown/blog.svg',
  },
];


export const resourcesDetailsMap: Record<string, string[]> = {};

export const resourcesRightColumn = {
  heading: 'Resources',
};

