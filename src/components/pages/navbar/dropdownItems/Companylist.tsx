export interface CompanyItem {
  key: string;
  title: string;
  icon: string;
}

export const companyItems: CompanyItem[] = [
  {
    key: 'about',
    title: 'About Us',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/company-dropdown/about.svg',
  },
  {
    key: 'contact',
    title: 'Contact Us',
    icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/company-dropdown/testimonial.svg',
  },
  // {
  //   title: 'News',
  //   icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/company-dropdown/news.svg',
  // },
  // {
  //   title: 'Referrals',
  //   icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/company-dropdown/referals.svg',
  // },
  // {
  //   title: 'Partner Program',
  //   icon: 'https://d2qlv5xtew5ayb.cloudfront.net/assets/header-dropdown-images/company-dropdown/testimonial.svg', 
  // },
];
