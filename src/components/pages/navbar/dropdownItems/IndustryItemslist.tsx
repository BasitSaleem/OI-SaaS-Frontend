export interface IndustryItem {
  key: string;
  title: string;
  icon: string;
  category: string;
  type: 'pos' | 'inventory';
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
];

export const industriesItems: IndustryItem[] = [
  // Retailer
  {
    key: 'bakery-pos-system',
    title: 'Bakery POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/bakeries.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'hardware-pos-system',
    title: 'Hardware POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/hardware-store.svg",
    category: 'wholesale',
    type: 'pos',
  },
  {
    key: 'bookstore-pos-system',
    title: 'Bookstore POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/bookstore.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'retail-store-pos-system',
    title: 'Retail Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/e-commerce.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'furniture-store-pos-system',
    title: 'Furniture Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/furniture.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'jewelry-store-pos-system',
    title: 'Jewelry Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/jewllery.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'grocery-store-pos-system',
    title: 'Grocery Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/grocery.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'clothing-store-pos-system',
    title: 'Clothing Store POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/clothing.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'clothing-inventory-management-software',
    title: 'Clothing Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/clothing.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'retail-store-inventory-management-software',
    title: 'Retail Store Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/e-commerce.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'jewelry-inventory-management-software',
    title: 'Jewelry Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/jewllery.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'auto-parts-inventory-management-software',
    title: 'Auto Parts Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/hardware-store.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'ecommerce-store-inventory-management-software',
    title: 'Ecommerce Store Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/e-commerce.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'supermarket-pos-system',
    title: 'Supermarket POS System',
    icon: "/assets/header-dropdown-images/industries-dropdown/grocery.svg",
    category: 'retailer',
    type: 'pos',
  },
  {
    key: 'restaurant-inventory-management-software',
    title: 'Restaurant Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/restaurant.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'healthcare-inventory-management-software',
    title: 'Healthcare Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/healthcare.svg",
    category: 'retailer',
    type: 'inventory',
  },
  {
    key: 'hotel-inventory-management-software',
    title: 'Hotel Inventory Management',
    icon: "/assets/header-dropdown-images/industries-dropdown/hotel.svg",
    category: 'retailer',
    type: 'inventory',
  },

  
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
  'clothing-inventory-management-software': [
    { title: 'Clothing Inventory Management' },
    { title: 'Size, Color & Material Tracking' },
    { title: 'Seasonal Collection Management' },
    { title: 'Loyalty & Reward Programs' },
  ],
  'retail-store-inventory-management-software': [
    { title: 'Retail Store Inventory Management' },
    { title: 'Variant & Category Tracking' },
    { title: 'Asset & Stock Control' },
    { title: 'Loyalty & Reward Programs' },
  ],
  'jewelry-inventory-management-software': [
    { title: 'Jewelry Inventory Management' },
    { title: 'Precious Metals & Gemstone Tracking' },
    { title: 'Variant & Category Tracking' },
    { title: 'Loyalty & Reward Programs' },
  ],
  'auto-parts-inventory-management-software': [
    { title: 'Auto Parts Inventory Management' },
    { title: 'Make, Model & Year Tracking' },
    { title: 'Supplier & Purchase Management' },
    { title: 'Multi-Branch Management' },
  ],
  'ecommerce-store-inventory-management-software': [
    { title: 'Ecommerce Inventory Management' },
    { title: 'Multi-Platform Stock Sync' },
    { title: 'SKU & Variant Tracking' },
    { title: 'Order Fulfillment Integration' },
  ],
  'supermarket-pos-system': [
    { title: 'Supermarket Inventory Management' },
    { title: 'Barcode & SKU Tracking' },
    { title: 'Shelf Life Monitoring' },
    { title: 'Bulk Pricing & Discounts' },
  ],
  'restaurant-inventory-management-software': [
    { title: 'Restaurant Inventory Management' },
    { title: 'Menu & Ingredient Tracking' },
    { title: 'Order Preparation Sync' },
    { title: 'Supplier & Purchase Management' },
  ],
  'healthcare-inventory-management-software': [
    { title: 'Healthcare Inventory Management' },
    { title: 'Medical Supply & Item Tracking' },
    { title: 'Expiry Date & Batch Management' },
    { title: 'Supplier & Purchase Management' },
  ],
  'hotel-inventory-management-software': [
    { title: 'Hotel Inventory Management' },
    { title: 'Hotel Supply & Item Tracking' },
    { title: 'Expiry Date & Batch Management' },
    { title: 'Supplier & Purchase Management' },
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