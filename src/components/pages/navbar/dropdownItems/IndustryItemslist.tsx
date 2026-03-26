export interface IndustryItem {
  key: string;
  title: string;
  icon: string;
  category: string;
}

export interface IndustryCategory {
  id: string;
  title: string;
}

export const industryCategories: IndustryCategory[] = [
  {
    id: 'retailer',
    title: 'Retailer',
  },
  {
    id: 'wholesale',
    title: 'Wholesale',
  },
  // {
  //   id: 'manufacturing',
  //   title: 'Manufacturing',
  // },
  // {
  //   id: 'distribution',
  //   title: 'Distributor/Wholesaler',
  // },
  // {
  //   id: 'ecommerce',
  //   title: 'Ecommerce',
  // },
  // {
  //   id: 'restaurant',
  //   title: 'Restaurant',
  // },
];

export const industriesItems: IndustryItem[] = [
  // Retailer
  {
    key: 'bakery-pos-system',
    title: 'Bakery POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'hardware-pos-system',
    title: 'Hardware POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'wholesale',
  },
  {
    key: 'bookstore-pos-system',
    title: 'Bookstore POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'retail-store-pos-system',
    title: 'Retail Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'furniture-store-pos-system',
    title: 'Furniture Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'jewelry-store-pos-system',
    title: 'Jewelry Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'grocery-store-pos-system',
    title: 'Grocery Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },
  {
    key: 'clothing-store-pos-system',
    title: 'Clothing Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
    category: 'retailer',
  },

  // {
  //   key: 'hardware-store-pos',
  //   title: 'POS System for Hardware Store',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
  //   category: 'retailer',
  // },
  // {
  //   key: 'furniture-store-pos',
  //   title: 'POS System for Furniture Store',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
  //   category: 'retailer',
  // },

  // Ecommerce
  // {
  //   key: 'bakery-pos',
  //   title: 'Bakery POS Systems',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
  //   category: 'ecommerce',
  // },
  // {
  //   key: 'grocery-ecommerce',
  //   title: 'Grocery Store POS System',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg",
  //   category: 'ecommerce',
  // },

  // Restaurant Types
  // {
  //   key: 'restaurant',
  //   title: 'Restaurant Types',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/restaurant-types.svg",
  //   category: 'restaurant',
  // },

  // Manufacturing
  // {
  //   key: 'manufacturing',
  //   title: 'Manufacturing',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/manufacturing.svg",
  //   category: 'manufacturing',
  // },

  // Distributor/Wholesaler
  // {
  //   key: 'jewelry-distributor',
  //   title: 'POS System for Jewelry Store',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/wholesale.svg",
  //   category: 'distribution',
  // },
  // {
  //   key: 'clothing-distributor',
  //   title: 'POS System for Clothing Store',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/wholesale.svg",
  //   category: 'distribution',
  // },
  // {
  //   key: 'wholesale',
  //   title: 'Wholesale',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/wholesale.svg",
  //   category: 'distribution',
  // },
  // {
  //   key: 'distribution',
  //   title: 'Distribution',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/distribution.svg",
  //   category: 'distribution',
  // },

  // Large Businesses
  // {
  //   key: 'largebusinesses',
  //   title: 'Large Businesses',
  //   icon: "/assets/header-dropdown-images/industries-dropdown/large-bussiness.svg",
  //   category: 'largebusinesses',
  // },
];

export interface IndustryTreeItem {
  title: string;
  children?: IndustryTreeItem[];
}

export const industryDetailsMap: Record<string, IndustryTreeItem[]> = {
  // Keep your existing details
  retail: [
    { title: 'Health and Beauty' },
    { title: 'Clothing' },
    { title: 'Home décor' },
    { title: 'Hardware' },
    { title: 'Jewelry' },
    { title: 'Pet' },
    { title: 'Sporting Goods' },
    { title: 'Toy' },
    { title: 'Vape' },
    { title: 'Multi-store' },
  ],
  restaurant: [
    { title: 'Full Service Restaurant' },
    { title: 'Fine Dining' },
    { title: 'Family Style' },
    { title: 'Quick Service Restaurant' },
    { title: 'Café' },
    { title: 'Hotel' },
    { title: 'Fast Casual' },
    { title: 'Bar & Club' },
    { title: 'Multi Unit' },
  ],
  // Add details for new categories if needed
  'bakery-pos-system': [
    { title: 'Bakery POS System Features' },
    { title: 'Inventory Management for Bakeries' },
    { title: 'Recipe & Ingredient Tracking' },
    { title: 'Custom Cake Orders' },
  ],
  'bookstore-pos-system': [
    { title: 'Bookstore POS System Features' },
    { title: 'Inventory Management for Bookstores' },
    { title: 'ISBN & Title Tracking' },
    { title: 'Pre-Order Management' },
  ],
  'retail-store-pos-system': [
    { title: 'Retail Store POS System Features' },
    { title: 'Inventory Management for Retail Stores' },
    { title: 'Stock & Inventory Control' },
    { title: 'Multi-Branch Management' },
  ],

  'hardware-pos-system': [
    { title: 'Hardware Inventory Management' },
    { title: 'Tool Rental System' },
    { title: 'Contractor Accounts' },
    { title: 'Project Quoting' },
  ],
  'hardware-store-pos': [
    { title: 'Hardware Inventory Management' },
    { title: 'Tool Rental System' },
    { title: 'Contractor Accounts' },
    { title: 'Project Quoting' },
  ],

  
  'furniture-store-pos-system': [
    { title: 'Furniture Inventory Management' },
    { title: 'Custom Order Tracking' },
    { title: 'Delivery Scheduling' },
    { title: 'Showroom Management' },
  ],
  'jewelry-store-pos-system': [
    { title: 'Jewelry Inventory Management' },
    { title: 'Precious Metals Tracking' },
    { title: 'Gemstone Catalog' },
    { title: 'Appraisal Management' },
  ],
  'grocery-store-pos-system': [
    { title: 'Grocery Inventory Management' },
    { title: 'Barcode & SKU Tracking' },
    { title: 'Shelf Life Monitoring' },
    { title: 'Bulk Pricing & Discounts' },
  ],
  'clothing-store-pos-system': [
    { title: 'Clothing Inventory Management' },
    { title: 'Size, Color & Material Tracking' },
    { title: 'Seasonal Collection Management' },
    { title: 'Loyalty & Reward Programs' },
  ],
  'bakery-pos': [
    { title: 'Book Inventory Management' },
    { title: 'ISBN Scanning' },
    { title: 'Author/Track Management' },
    { title: 'Special Orders' },
  ],
  'jewelry-distributor': [
    { title: 'Jewelry Inventory Management' },
    { title: 'Precious Metals Tracking' },
    { title: 'Gemstone Catalog' },
    { title: 'Appraisal Management' },
  ],
  'clothing-distributor': [
    { title: 'Clothing Inventory Management' },
    { title: 'Size/Color Matrix' },
    { title: 'Seasonal Collections' },
    { title: 'Vendor Management' },
  ],
  manufacturing: [
    { title: 'Production Orders' },
    { title: 'Raw Material Tracking' },
    { title: 'Quality Control' },
    { title: 'Batch Processing' },
  ],
  wholesale: [
    { title: 'Bulk Order Management' },
    { title: 'Volume Pricing' },
    { title: 'Distributor Network' },
    { title: 'Drop Shipping' },
  ],
  distribution: [
    { title: 'Warehouse Management' },
    { title: 'Shipping Integration' },
    { title: 'Route Optimization' },
    { title: 'Fleet Management' },
  ],
  largebusinesses: [
    { title: 'Enterprise Resource Planning' },
    { title: 'Multi-location Management' },
    { title: 'Corporate Accounts' },
    { title: 'Advanced Reporting' },
  ],
};

export const IndustryList = ({ items }: { items: IndustryTreeItem[] }) => (
  <ul className="pl-4 space-y-1">
    {items.map((item) => (
      <li key={item.title}>
        <p
          className="text-xs font-normal leading-7 font-['Onest'] text-[var(--text-dark)]"
        >
          {item.title}
        </p>
        {item.children && <IndustryList items={item.children} />}
      </li>
    ))}
  </ul>
);

// // Helper function to group industries by category
export const groupIndustriesByCategory = (): Record<string, IndustryItem[]> => {
  const grouped: Record<string, IndustryItem[]> = {};
  
  industriesItems.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  
  return grouped;
};