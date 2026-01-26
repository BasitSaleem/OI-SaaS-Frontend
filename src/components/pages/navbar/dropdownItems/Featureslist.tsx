export interface FeatureItem {
  title: string;
  icon: string;
}

export interface FeatureItem {
  key: string;
  title: string;
  icon: string;
  category: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
}


export const featureCategories: FeatureCategory[] = [
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
  },
  {
    id: 'operations',
    title: 'Inventory & Manufacturing',
  },
  {
    id: 'analytics',
    title: 'Reports & Analytics',
  },
  {
    id: 'finance',
    title: 'Human Resource & Finance',
  },
  {
    id: 'tools',
    title: 'Business Tools',
  },
];



export const featuresItems: FeatureItem[] = [
  // Sales & Marketing
  {
    key: 'pos',
    title: 'Point of Sale',
    icon: '/assets/header-dropdown-images/point-of-sale.svg',
    category: 'sales-marketing',
  },
  {
    key: 'ecommerce',
    title: 'Ecommerce',
    icon: '/assets/header-dropdown-images/ecommerce.svg',
    category: 'sales-marketing',
  },
  {
    key: 'sales',
    title: 'Sales & Orders',
    icon: '/assets/header-dropdown-images/sales-order.svg',
    category: 'sales-marketing',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    icon: '/assets/header-dropdown-images/marketing.svg',
    category: 'sales-marketing',
  },
  
  // Operations
  {
    key: 'facilities',
    title: 'Facilities',
    icon: '/assets/header-dropdown-images/facilitate.svg',
    category: 'operations',
  },
  
  {
    key: 'purchases',
    title: 'Purchases',
    icon: '/assets/header-dropdown-images/perchases.svg',
    category: 'operations',
  },

  {
    key: 'inventory',
    title: 'Inventory Operations',
    icon: '/assets/header-dropdown-images/inventory-operations.svg',
    category: 'operations',
  },
 
  {
    key: 'products',
    title: 'Products',
    icon: '/assets/header-dropdown-images/products.svg',
    category: 'operations',
  },
  
  
  
  // Analytics & Reporting
  {
    key: 'reports',
    title: 'Reports',
    icon: '/assets/header-dropdown-images/reports.svg',
    category: 'analytics',
  },
  {
    key: 'advanceReports',
    title: 'Advance Reports',
    icon: '/assets/header-dropdown-images/advance-reports.svg',
    category: 'analytics',
  },
  
  // Finance
  {
    key: 'finance',
    title: 'Accounts & Finance',
    icon: '/assets/header-dropdown-images/account-finance.svg',
    category: 'finance',
    
  },

  {
    key: 'people',
    title: 'People',
    icon: '/assets/header-dropdown-images/proples.svg',
    category: 'finance',
  },
  {
    key: 'hr',
    title: 'Human Resource',
    icon: '/assets/header-dropdown-images/human-resources.svg',
    category: 'finance',
  },
  
  // Tools & Integrations
  {
    key: 'integrations',
    title: 'Integrations',
    icon: '/assets/header-dropdown-images/integrations.svg',
    category: 'tools',
  },
  {
    key: 'tools',
    title: 'General Tools',
    icon: '/assets/header-dropdown-images/general-tools.svg',
    category: 'tools',
  },
];

export interface FeatureTreeItem {
  title: string;
  children?: FeatureTreeItem[];
}


export const featuresDetailsMap: Record<string, FeatureTreeItem[]> = {
  pos: [
    { title: 'Barcode & SKU Scanning' },
    { title: 'Product Search & Quick Add' },
    { title: 'Advance Mode Edit' },
    { title: 'Hold Sales' },
    { title: 'Quotations' },
    { title: 'Sample Sales' },
    { title: 'Coupons' },
    { title: 'Orders' },
    { title: 'Return Sales' },
    { title: 'Multiple Payment Methods' },
  ],
   inventory: [
    { title: 'Transfer Orders' },
    { title: 'Stock Issuing' },
    { title: 'Stock Receiving' },
    { title: 'Stock Adjustments' },
  ],
  people: [
  { title: 'Users' },
  { title: 'Customers' },
  { title: 'Suppliers' },
],

hr: [
  { title: 'Departments' },
  { title: 'Designations' },
  { title: 'Payslips' },
],

restaurant: [
  { title: 'Floors' },
  { title: 'Tables' },
  { title: 'Decorations' },
],

purchases: [
  { title: 'Purchase Orders' },
  { title: 'Add Purchase' },
  { title: 'Bulk Purchase' },
],

manufacturing: [
  { title: 'Production Orders' },
  { title: 'Machines' },
],

integrations: [
  { title: 'Shopify Integration' },
  { title: 'CMS Integration' },
  { title: 'Payment Integration' },
  { title: 'Quickbook Integration' },
  { title: 'Marketing Tools Integration' },
],

marketing: [
  { title: 'Coupons' },
  { title: 'Loyalty' },
],
sales: [
  { title: 'Invoices' },
  { title: 'Quotations' },
  { title: 'Sales Orders' },
],


  facilities: [
    {
      title: 'Stores',
      children: [
        {
          title: 'Stores List',
          children: [
            {
              title: 'Add Store',
              children: [
                { title: 'Invoice Notes' },
                { title: 'Display Logo on Ticket' },
                { title: 'Display Product Visuals on POS' },
              ],
            },
          ],
        },
      ],
    },
    { title: 'Warehouses' },
  ],
  products:[
    
     { title: 'Products'},
      {title: 'Add Product '},
      {title: 'Add Raw Material'},
      {title: 'Brands'},
      {title: 'Product Images'}
    
  ],
  reports: [
    {
      title: 'Sales',
      children: [
        { title: 'Products' },
        { title: 'Products 2.0' },
        { title: 'Products 3.0 ' },
        { title: 'Invoice Payments' },
        { title: 'Cashier' },
        { title: 'Credit' },
        { title: 'Daily' },
        { title: 'Monthly' },
      ],
    },
    { title: 'Purchases' },
    {
      title: 'Inventory',
      children: [
        { title: 'Warehouse' },
        { title: 'Store' },
      ],
    },
    { title: 'Shifts' },
    { title: 'Commissions' },
    { title: 'Daily Cash Report' },
  ],

  advanceReports: [
    { title: 'Dashboards' },
    { title: 'Inventory' },
    { title: 'Aging' },
  ],

  finance: [
    { title: 'Chart of Accounts' },
    { title: 'Trial Balance' },
    { title: 'Chart of Accounts 2.0' },
    { title: 'Chart of Accounts 3.0' },
    { title: 'Reports' },
    { title: 'Balance Sheet' },
    { title: 'Journal Entry' },
    { title: 'Journal Report Entry' },
    {
      title: 'Payables & Receivables',
      children: [
        { title: 'Receivable Ledger' },
        { title: 'Payable Report' },
      ],
    },
    {
      title: 'Assets',
      children: [
        { title: 'Parts' },
        { title: 'Allocations' },
      ],
    },
  ],

  ecommerce: [
    {
      title: 'Online Store',
      children: [
        { title: 'Pages' },
        { title: 'Blog Posts' },
        { title: 'Product Groups' },
        { title: 'Category Groups' },
        { title: 'Brand Groups' },
        { title: 'Sliders' },
        { title: 'Banners' },
        { title: 'Workflow' },
        { title: 'FAQs' },
        { title: 'Company Info' },
        { title: 'Maps' },
        { title: 'Contacts' },
        { title: 'Subscribers' },
      ],
    },
    { title: 'Templates & Themes (Owners Jungle)' },
    { title: 'Orders' },
    { title: 'Discounts' },
    { title: 'Payment Methods' },
    { title: 'Shipping Companies' },
  ],

  tools: [
    {
      title: 'Organisation',
      children: [
        { title: 'Information' },
        { title: 'Maintenance Mode' },
        { title: 'Backup' },
      ],
    },
    {
      title: 'General',
      children: [
        { title: 'Currency Symbol' },
        { title: 'Language' },
        { title: 'Thousand Separator' },
        { title: 'Rounding' },
        { title: 'Units' },
        { title: 'Product Columns' },
        { title: 'Date & Time Format' },
        { title: 'Timezone' },
      ],
    },
    {
      title: 'Sales',
      children: [
        {
          title: 'Strings & Serials',
          children: [
            { title: 'Invoice' },
            { title: 'Quotation' },
            { title: 'Ticket' },
            { title: 'Sample' },
            { title: 'Draft' },
          ],
        },
        {
          title: 'Policies',
          children: [
            { title: 'Sales' },
            { title: 'Discount' },
            { title: 'Discount Type' },
          ],
        },
        { title: 'Invoice' },
      ],
    },
    {
      title: 'Purchases',
      children: [
        { title: 'Purchase Order String' },
        { title: 'Purchase Order Serial' },
        { title: 'Make Physical Bill Number Required on PO' },
      ],
    },
    {
      title: 'Inventory',
      children: [
        { title: 'Transfer Order String' },
        { title: 'Transfer Order Serial' },
      ],
    },
    {
      title: 'Marketing',
      children: [{ title: 'Coupons' }],
    },
    {
      title: 'Tax',
      children: [
        { title: 'Taxes' },
        { title: 'Tax Policy' },
      ],
    },
    {
      title: 'Notifications',
      children: [{ title: 'Messages' }],
    },
    { title: 'Roles & Permissions' },
    { title: 'Ecommerce' },
  ],
};


export const  FeatureList = ({ items }: { items: FeatureTreeItem[] }) => (
  <ul className="pl-4 space-y-1">
    {items.map((item) => (
      <li key={item.title}>
        <p
          
          className="text-xs font-normal font-['Onest'] leading-7 text-[#231F20]"
        >
          {item.title}
        </p>
        {item.children && <FeatureList items={item.children} />}
      </li>
    ))}
  </ul>
);

// Group features by category (helper function)
export const groupFeaturesByCategory = (): Record<string, FeatureItem[]> => {
  const grouped: Record<string, FeatureItem[]> = {};
  
  featuresItems.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  
  return grouped;
};


