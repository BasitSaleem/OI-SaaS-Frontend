import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Appliance Store POS — UnifiedPlatform Section ──────────────────────────
export const APPLIANCE_STORE_UNIFIED_HEADING = "Challenges That Appliance Store Owners Face Today";

export const APPLIANCE_STORE_UNIFIED_PARAGRAPH = "Operating an appliance store without a dedicated POS system creates daily operational problems. These are some of the most frequently encountered problems that appliance retailers encounter.";

export const APPLIANCE_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Inaccurate Inventory Tracking",
    description: "Many appliance stores carry a wide range of products, such as refrigerators, washing machines, air conditioners, microwaves, and other household appliances making inventory tracking more complex.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Difficulty Managing Large Product Catalogs",
    description: "Appliance retailers typically carry several different brands, models, sizes and product variants. This information is hard to manage and track manually for accurate availability, pricing, and product specifications.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Slow Sales and Checkout Process",
    description:
      "Manual billing and product lookups can slow down customer transactions. Long waiting times at checkout can negatively affect the customer experience and reduce sales efficiency.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Warranty and Service Tracking Challenges",
    description:
      "Most appliances come with a manufacturer's warranty and associated after-sale service requirements. Managing warranty records manually can lead to missing information, customer complaints, and service delays.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Stock Replenishment Issues",
    description: "If not managed correctly, businesses can end up with low-demand products overstocked or high-demand products understocked. This affects the customer's satisfaction and profitability.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Business Reporting and Insights",
    description: "When it comes to analyzing sales trends, product performance, profit margins and inventory movement, appliance store owners find it much more challenging to plan their businesses without real-time data.",
  },
];

export const APPLIANCE_STORE_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory Management",
    description:
      "The system automatically updates the inventory levels when the products are purchased, returned, transferred and received. Real-time tracking of inventory helps avoid stockouts, overstocking, and inventory inaccuracies.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Centralized Product Management",
    description:
      "Store owners can easily manage product catalogs containing brands, models, specifications. This guarantees that the information on the product is correct in all stores’ activities.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Faster Checkout and Billing",
    description:
      "The Quick Product Search, Barcode Scanning, and Auto-Billing features simplify  the sales process. Staff can make transactions quicker, which helps to boost customer satisfaction and also lessens checkout delay. ",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Warranty and Service Management",
    description: "All the warranty data, purchase data, and customer information are collected and stored in a single location. When warranty claims are required, staff will have quick access to the warranty information and the ability to deliver an improved after sales service.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Automated Stock Replenishment",
    description:
      "Inventory alerts notify managers when inventory levels reach predetermined limits. This enables businesses to reorder stock on time and maintain optimal inventory levels.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-Time Reports and Business Insights",
    description: "The system offers comprehensive reports on sales performance, inventory value, profit margin, customer purchase history, and stock movement.",
  },
];

export const APPLIANCE_STORE_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel Inventory and Appliance Store Integration",
    description: "Owners Inventory integrates all aspects of appliance store business in one place. All inventory movement, sales, supplier orders, warranty registrations, and stock transfers are updated in real-time on a single dashboard. All products are synced and accurate, whether received from suppliers, moved between store locations, sold in-store or ordered online.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Inventory Receiving and Stock Entry",
        listdescription: "When new stock arrives, items can be received directly into the system against an existing purchase order. Each product is scanned or entered by SKU, and inventory levels update immediately upon confirmation. Discrepancies between ordered and received quantities are flagged automatically, so stock records stay accurate from the moment goods arrive at the store.",
      },
      {
        listheading: "Sales Processing and Order Management",
        listdescription: "One system can be used for all customer ordering, special orders, ordering online and product reservations. Staff in the store can check the product's availability, make an invoice, process payments and complete a sale in just a few seconds and with a few clicks.",
        listSubDescription: "Products sold, reserved, exchanged, returned and delivered are automatically updated on the POS system, with the result that stock records are always accurate."
      },
      {
        listheading: "Unified Multi-Location Store Dashboard",
        listdescription: "Companies with multiple appliance stores or storage centers can manage all the stores through a single dashboard. All inventory, stock transfers, sales activities, supplier deliveries, customer orders and product returns can be tracked in real-time without having to switch between systems.",
        listSubDescription: "Business owners or managers know precisely how their businesses are performing and can keep a tight grip on their inventory across all sales channels and locations."
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description: "The Appliance Store Point of Sale Software translates the daily operations of your business into detailed reports providing useful data about your business sales, inventory changes, most successful products, profits, warranties, customer purchases and stock turnover.",
    subDescription: "Managers can be alerted to high-demand products, they can monitor the slow moving inventory, they can make better purchase decisions and they can improve their store performance as well. These learnings can reduce over stocking costs, prevent stockouts and improve profitability.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const APPLIANCE_STORE_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Real-Time Inventory Tracking",
    description:
      "Inventory is automatically updated when products are purchased, returned, transferred or received. With real-time inventory tracking, you can avoid running low on stock, overstocking, and inventory discrepancies.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Barcode Scanning Support",
    description:
      "Barcode scanning is supported on the POS system, which allows for quicker product look up, billing, stock count and inventory management. This helps in increasing the accuracy and speeds up store's operations.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Multi-Location Inventory Management",
    description:
      "For companies that have more than one store or storage facility, they will be able to track inventory, transfers, and stock levels from a single dashboard. The system gives full visibility of all locations.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Sales Processing and Billing Management",
    description:
      "Automate customer transactions and payment processing, and speed up product searches and billing. The system assists in minimizing checkout time and improving the overall shopping experience.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Supplier and Purchase Order Management",
    description:
      "Purchase orders may be created, supplier transactions tracked, inventory received and procurement activities managed from a single platform, ensuring efficient stock replenishment.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Warranty and Service Tracking",
    description:
      "Centralize warranty records, purchase and service history. Staff can easily access the customer and product information, so they can provide efficient after-sales service.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Role-Based Employee Access",
    description:
      "The appliance store POS system enables managers to set permissions for each employee according to their role. The business owner will have complete control over inventory, report, pricing, and settings.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Mobile-Friendly Store Interface",
    description:
      "The mobile-friendly interface enables access to inventory data from anywhere, helps managers manage sales, product management, and business performance. This flexibility helps in making better decisions and makes the operations more efficient.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Automated Stock Alerts",
    description:
      "The system will automatically alert managers when inventory falls below a pre-defined level.  This enables businesses to place orders when needed and prevents the loss of sales.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Detailed Sales and Inventory Reporting",
    description:
      "Monitor store performance using detailed reports that show you sales trends, inventory value, best sellers, profit margins, customer buying habits, and performance of the business.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card10.webp",
  },
   {
    id: 11,
    title: "Centralized Business Management",
    description:
      "To enhance productivity and streamline the operations in an appliance store, manage all the inventory, suppliers, warranties, customers, employees and reporting from one platform.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/key-features-section/key-feature-card11.webp",
  },
];

export const APPLIANCE_STORE_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory POS for Appliance Stores",
  paragraph:
    "With an integrated appliance store POS system, you can handle a vast product catalog, optimize sales workflows, and ensure precise inventory tracking. The system provides the appliance retailers with a more efficient system and improves customer experience.",
  steps: [
    {
      number: 1,
      title: "Add and Organize Appliance Inventory",
      description:
        "Quickly add products, brands, models, categories, barcodes, supplier information, specifications, and warranty information. Sort stock for easy access and efficient stock management.",
    },
    {
      number: 2,
      title: "Manage Incoming and Outgoing Inventory",
      description:
        "Keep a running tally of all stock received and all sales made. Product inventory is automatically updated whenever products are received, sold, transferred, or returned.",
    },
    {
      number: 3,
      title: "Process Sales and Customer Orders",
      description:
        "Sales orders, invoices, payments processing and customer transactions can be managed from one dashboard by the store staff. The system assists in minimizing billing errors and increases the transaction speed.",
    },
    {
      number: 4,
      title: "Fast Barcode Scanning and Product Lookup",
      description:
        "Employees can use barcode scanners to quickly find products, check stock levels, and process customer transactions quickly and efficiently, minimizing wait times during peak hours.",
    },
    {
      number: 5,
      title: "Secure Billing and Transaction Management",
      description:
        "The system can be used to create invoices, track payments, manage customer accounts, and keep financial records. Any transaction information is stored securely and is readily accessible if needed.",
    },
    {
      number: 6,
      title: "Monitor Inventory and Store Performance",
      description:
        "Store owners can get real-time updates on stock, low stock alerts, fast selling products, sales performance, pending orders and business growth. Automated insights help improve inventory planning and profitability.",
    },
  ],
};

export const APPLIANCE_STORE_TESTIMONIALS = [
  {
    id: "1",
    name: "Sutton Blake",
    title: "Appliance Store Chain Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image64.webp",
    text: "Managing appliance inventory used to be difficult, especially with multiple brands and models. This system keeps our stock accurate and organized at all times.",
  },
  {
    id: "2",
    name: "Juniper Hayes",
    title: "Multi-Branch Operations Director",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image65.webp",
    text: "We can see product availability and stock levels instantly. We no longer worry about running out of stock, and our customer service has improved as a result.",
  },
  {
    id: "3",
    name: "Beau Chandler",
    title: "Electronics & Appliance Retailer",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image64.webp",
    text: "Billing is much quicker these days, and our salespeople can now complete transactions quickly even during the busy shopping season too.",
  },
  {
    id: "4",
    name: "Lincoln Hayes",
    title: "Appliance Store Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image65.webp",
    text: "Our staff quickly learned how to use the system, and setup was simple, making product and sales management easier.",
  },
  {
    id: "5",
    name: "Silas Grant",
    title: "Showroom Sales Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image66.webp",
    text: "We have a few appliance store locations and this system keeps our inventory synchronized and visible across all of them from one place.",
  },
  {
    id: "6",
    name: "Marlowe Pierce",
    title: "Operations Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image66.webp",
    text: "Warranty tracking is now much more organized and we have the ability to easily access customer purchase records and offer improved after-sales service.",
  },
  {
    id: "7",
    name: "Rowan Fletcher",
    title: "Appliance Showroom Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image67.webp",
    text: "This appliance store POS system is an ideal solution for our needs, as it is reliable, user-friendly, and allows us to track our inventory and sales more efficiently.",
  },
];

export const APPLIANCE_STORE_FAQS = [
  {
    id: "1",
    question: "Can the system track inventory in real time?",
    answer: "Yes, all the activities related to inventory are updated automatically in real-time. Changes to inventory records are updated on the fly for purchases, sales, returns, transfers and when new stock arrives to ensure stock levels are kept up to date.",
  },
  {
    id: "2",
    question: "Does the system support barcode scanning?",
    answer: "Yes, the POS system at the appliance store enables barcode scanning for quick product identification, billing, stocktaking, stock verification and sales.",
  },
  {
    id: "3",
    question: "Can I manage multiple appliance store locations?",
    answer: "Yes, multi-location management is supported. Store owners/managers can view inventory, sales, transfers and store performance for multiple stores from a single dashboard.",
  },
  {
    id: "4",
    question: "How quickly can I set up Owners Inventory for my appliance store?",
    answer: "Most appliance stores can begin using the system within a few hours. Product catalogs, inventory records, supplier information, and customer data can be imported in bulk for a faster setup process.",
  },
  {
    id: "5",
    question: "Can different employees have different access levels?",
    answer: "Yes, role-based permissions allow owners to assign different access levels for salespeople, managers, inventory supervisors, accountants and administrators, which ensures security and control over operations.",
  },
   {
    id: "6",
    question: "Can the system manage product warranties?",
    answer: "Yes, warranties, purchase history and customer information are stored in the POS system so that the warranty tracking and after-sales support are readily available.",
  },
];

export const APPLIANCE_STORE_KEY_FEATURES = [
  {
    id: "appliance-billing",
    title: "Touchscreen Quotes & Billing",
    description:
      "Generate customer invoices and quotes quickly with touchscreen navigation and flexible financing checkouts.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "appliance-stock-control",
    title: "Serial Number Stock Control",
    description:
      "Track individual high-value items, serial numbers, and model variants to prevent stock mismatches.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "appliance-vendor-mgmt",
    title: "Manufacturer and Supplier POs",
    description:
      "Manage procurement workflows directly with brand suppliers and track incoming freight shipments.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "appliance-variants",
    title: "Model & Spec Customization",
    description:
      "Organize appliances by brands, energy ratings, specifications, dimensions, and warranty coverage levels.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "appliance-loyalty",
    title: "Customer & Delivery Profiles",
    description:
      "Link sales records to customer home addresses, delivery preferences, and scheduled installation details.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "appliance-finances",
    title: "Sales Commission Audits",
    description:
      "Monitor sales representative totals, register cash drops, card processing fees, and calculate commissions.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "appliance-ecommerce",
    title: "E-commerce & Showroom Sync",
    description:
      "Link your online store to the physical POS. Sync active inventory counts instantly and manage delivery dispatch queues from a central location.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const APPLIANCE_STORE_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Streamline and Scale Your Appliance Store Operations",
  secondDescription: "Owners Inventory integrates inventory management, sales processing, warranty tracking, supplier management and business reporting into an all-in-one appliance store POS system. It can enhance operational efficiency, decrease manual work, ensure precise inventory management, and boost business expansion.",
  whyChooseTitle: "Why Choose Owners Inventory Appliance Store POS System?",
  whyChooseDescription: "Our software helps appliance store owners to handle inventory, sales, suppliers, customer data, warranties, and reporting without needing to use a number of separate and isolated systems.",
};

export const APPLIANCE_STORE_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Quick Setup",
    description: "There is minimal technical expertise needed and Owners Inventory can be easily configured. Products, models, brands, categories and inventories can be imported in bulk from an Excel or CSV file, enabling stores to be up and running in no time.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "All-in-One Platform",
    description: "The system integrates inventory, billing, warranty, customer management, supplier coordination and business reporting functionality, eliminating the need for multiple applications. All functions related to the appliance store's operation can be managed from a single centralized platform.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "24/7 Support",
    description: "Our support team is on call to help you set up your system, troubleshoot, help you manage your inventory  and answer your operational questions at any hour of the day. Help is on hand whenever necessary, be it in the hectic sales season or during normal business hours.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Actionable Insights",
    description: "The system offers real-time information on inventory status, most popular appliances, sales performance, profit margins, customer purchasing trends, and stock flow. These findings are valuable and can help store owners make decisions and optimize their store performance.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Built for Appliance Retail Operations",
    description:
      "The software is particularly tailored to the needs of appliance stores that hold large inventory, multiple brands and product variations, warranties and high value items. It makes stock management, sales processing and inventory tracking much simpler.",
    icon: "testWhychoseIcon5",
  },
];

export const APPLIANCE_STORE_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph: "All sales, inventory, accounting, customer information and financial records are synced between the connected systems. This not only minimizes manual data entry, but also enhances reporting accuracy, streamlines business operations, and ensures a smooth flow of data between in-store sales, online orders, inventory management, and financial tracking.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
