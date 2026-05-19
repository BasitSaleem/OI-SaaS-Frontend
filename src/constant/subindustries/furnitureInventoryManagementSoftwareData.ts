import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Furniture Inventory Management — UnifiedPlatform Section ─────────────
export const FURNITURE_INVENTORY_UNIFIED_HEADING =
  "Challenges Furniture Businesses Face Today";

export const FURNITURE_INVENTORY_UNIFIED_PARAGRAPH =
  "When processes are not automated, furniture businesses have to cope with daily operational difficulties that influence efficiency, profitability, and accuracy of inventory.";

export const FURNITURE_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Stock Mismanagement",
    description:
      "Lack of an appropriate furniture inventory management system can cause stock errors. The problem of overstocking, understocking and misplaced items is common in businesses, and it affects the sales and customer satisfaction.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow Billing Process",
    description:
      "The conventional ways of billing may delay the process, particularly when the business is busy. Waiting lines creates bad customer experience and can result in loss of sales.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Multi-Location Complexity",
    description:
      "Furniture companies have a tendency to work in showrooms and warehouses. Lack of a centralized system makes it hard to manage stock across the locations, which results in a lack of consistent data and confusion.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Real-Time Insights",
    description:
      "It is hard to monitor the movement of inventory and sales trends without real-time data. This restricts making informed business decisions.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Product Variations and Pricing Errors",
    description:
      "Furniture pieces are available in various sizes, materials, and finishes. Handling pricing may lead to variations and errors in products and regional pricing.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Online Integration",
    description:
      "Furniture companies that lack integrated online systems are losing a chance to increase their coverage. Online and offline sales management in isolation are inefficient.",
  },
];

export const FURNITURE_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory Tracking",
    description:
      "The system automatically updates inventory with each sale, return, or restocking. This helps to maintain the right stock and to eliminate manual tracking.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Fast and Efficient Billing",
    description:
      "Billing is more convenient and fast with the help of barcodes and smart searches. This saves time and enhances efficiency in checkout.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Automated Price Management",
    description:
      "Immediately update product prices, discounts and offers in all locations. This guarantees uniformity and eradicates pricing mistakes.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Data-Driven Insights",
    description:
      "Get access to sales, stock movement, and product performance reports. These are insights that can be used to enhance decision-making and profitability.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Online Sales Integration",
    description:
      "Manage showroom and online sales in a single system. Real-time updating of inventory on all platforms.",
  },
];

export const FURNITURE_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-channel and Sales Integration",
    description:
      "Furniture companies conduct business in showrooms, online, and on mobile platforms. The control of these channels involves a coherent system that keeps the inventory, prices, and orders.",
    subDescription:
      "The integrated system enables the business to trace stock wherever it is sold.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Production and Inventory Management",
        listdescription:
          "The system eases furniture manufacturing tracking and inventory management. It provides employees with full access to raw materials, work in progress, and finished furniture products. This will facilitate the process of production and management of stocks in all operations.",
      },
      {
        listheading: "Supply Chain Operations and Order Processing",
        listdescription:
          "Manufacturers of furniture are able to manage the orders of suppliers, track the usage of materials and handle the production orders. The system assists in ensuring that the stock is maintained at optimum levels and delays in production are avoided. This helps in regular production and stable growth of business.",
      },
      {
        listheading: "Single Multi-Process Control",
        listdescription:
          "Inventory, production and overall performance of all operations can be tracked by the manufacturers in real time. Full visibility and control is achieved through a centralized dashboard. This eases the operations and enhances the efficiency of workflow. It also enhances coordination between departments. ",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "The system offers advanced reporting tools. These give an understanding of production efficiency, flow of inventory and cost-effectiveness. This allows the manufacturers to make good decisions regarding procurement, production planning, and cost management.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      {
        listheading:
          "Real-time production and inventory data can be analyzed by manufacturers",
      },
      {
        listheading:
          "They are able to predict demand and make material purchases",
      },
      {
        listheading:
          "They are able to detect inefficiencies and save on the cost of operations",
      },
      {
        listheading:
          "Evidence-based information will help in making superior business decisions",
      },
    ],
  },
];

export const FURNITURE_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Smart Billing System",
    description:
      "Facilitate speedy transactions with barcode scanning and automated billing to provide a smooth customer experience.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Live Inventory Management",
    description:
      "Track furniture in real-time, and with size, material and design variation.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Purchase and Supplier Management",
    description:
      "Manage orders, deliveries by suppliers, and vendor relations in one platform.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Product Categorization",
    description:
      "Categorize furniture in terms of category, type or material to make inventory easier to manage.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Customer and Order Management",
    description:
      "Store customer information, track orders and delivery information.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Cost and Cash Flow Monitoring",
    description:
      "Monitor daily expenses and cash flow to ensure that your business is under financial control.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card6.webp",
  },
  {
    id: 7,
    title: "Multi-Store and Warehouse Management",
    description:
      "Manage different showrooms and warehouses using a centralized dashboard.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card7.webp",
  },
  {
    id: 8,
    title: "Advanced Reporting",
    description:
      "Create sales performance, inventory turnover, and product demand reports.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card8.webp",
  },
  {
    id: 9,
    title: "Role-Based Access Control",
    description:
      "Grant roles and permissions to employees to achieve system security and access control.",
    imageSrc:
      "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card9.webp",
  },
];

export const FURNITURE_INVENTORY_WORKFLOW_DATA = {
  heading: "Workflow of Furniture Inventory Management",
  paragraph:
    "We have a structured workflow that enables the operations to run smoothly and manage inventory in our system.",
  steps: [
    {
      number: 1,
      title: "Inventory Procurement",
      description:
        "Furniture is procured according to the demand and trends. Before adding products into inventory, they are inspected in terms of quality and quantity.",
    },
    {
      number: 2,
      title: "Stock Organization",
      description:
        "Each transaction is automatically updated in the inventory to provide a clear view of available inventory.",
    },
    {
      number: 3,
      title: "Inventory Tracking",
      description:
        "Inventory levels are updated in real-time (sales and returns) and stock records are accurate at all locations.",
    },
    {
      number: 4,
      title: "Order Processing",
      description:
        "Orders are handled effectively and the inventory is adjusted automatically in both showroom and online sales.",
    },
    {
      number: 5,
      title: "Reporting and Analysis",
      description:
        "The system offers information on product performance, sales trends and profitability to assist businesses to make wise decisions.",
    },
  ],
};

export const FURNITURE_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Furniture Inventory System?",
  paragraph: "",
  secondHeading: "Manage Your Furniture Business Efficiently",
  secondDescription:
    "The furniture inventory management software eliminates mistakes, enhances accuracy and streamlines day-to-day operations. A reliable system will help businesses to manage inventory, sales, and orders.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "We offer high-level furniture inventory management software that is meant to streamline operations, enhance production efficiency and give you complete control of your inventory.",
};

export const FURNITURE_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Michael Brown",
    title: "Furniture Showroom Owner",
    image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
    text: "Our process of producing furniture has become much more organized than previously. We are always aware of what materials we have in stock and what we need to order next, which has made our process much less confusing and has helped us plan better.",
  },
  {
    id: "2",
    name: "Jessica Martinez",
    title: "Operations Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
    text: "This system has greatly enhanced our overall efficiency, it has provided us with a well-structured approach to managing the raw materials and finished furniture products and the reports are easy to comprehend and very helpful in planning and decision making.",
  },
  {
    id: "3",
    name: "Amanda Taylor",
    title: "Business Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
    text: "We used to face a lot of problems with stock shortages and mismanagement before installing this system. Now, all the items are well-controlled in real-time, which saves us time and effort and allows us to operate without difficulties.",
  },
];

export const FURNITURE_INVENTORY_FAQS = [
  {
    id: "1",
    question: "What is furniture inventory management software?",
    answer:
      "It is a system that assists in controlling the raw materials, production process, and finished furniture products altogether. It guarantees effective monitoring and control of production.",
  },
  {
    id: "2",
    question: "Can this software handle large-scale furniture manufacturing?",
    answer:
      "Yes, it can handle extensive inventories, a series of production lines, and complicated workflows with real-time updates.",
  },
  {
    id: "3",
    question: "Is it easy for staff to use?",
    answer:
      "Absolutely, the system is easy and convenient. With minimum training, staff can handle production, inventory, and reports.",
  },
  {
    id: "4",
    question: "Does it provide reports and insights?",
    answer:
      "Yes, it provides real-time reports on production, inventory, and costs to enable the manufacturers to make informed decisions.",
  },
  {
    id: "5",
    question: "Can multiple users access the system securely?",
    answer:
      "Yes, role-based permissions enable access to the system by several users and prevent access to sensitive data.",
  },
];

export const FURNITURE_INVENTORY_KEY_FEATURES = [
  {
    id: "furniture-business-billing",
    title: "Supply Order Management",
    description:
      "Speed up your procurement with integrated order processing and automatic stock updates for a smoother business experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "furniture-business-stock-control",
    title: "Real-Time Multi-Location Stock",
    description:
      "Know exactly what's in stock across all areas. Every item used is instantly updated in your inventory.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "furniture-business-vendor-mgmt",
    title: "Manufacturer & Vendor Management",
    description:
      "Keep track of all your suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "furniture-business-variants",
    title: "Item & Supply Tracking",
    description:
      "Manage different items, sizes, and categories in one easy-to-navigate catalog across all areas.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "furniture-business-loyalty",
    title: "Customer & Record Management",
    description:
      "Build better customer care using integrated CRM tools to track history and supply needs.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "furniture-business-finances",
    title: "Financial & Compliance Reporting",
    description:
      "Monitor your business's financial health with detailed reports on spending, consumption, and operational expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "furniture-business-integration",
    title: "Multi-Platform Logistics Integration",
    description:
      "Sync your logistics partners to manage all inventory and supply chains in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const FURNITURE_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Simple and Quick Implementation",
    description:
      "We have created our system to be easy to use. It can be installed within a short period of time without the need for complicated configurations. It can be used by your team with a minimum of training and transitioning to it is easy and painless.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Scalable for Growing Businesses",
    description:
      "Our system fits well with your needs whether it is a small furniture workshop or a large-scale manufacturing unit. The software can keep up with your business, and the larger your business is, the more production volumes, more inventory, and more operations you are able to handle.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Real-Time Visibility and Control",
    description:
      "Gain complete visibility into your inventory, production status, and material usage at any given moment. With real-time updates and a centralized dashboard, you can monitor every stage of the process.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Improved Operational Efficiency",
    description:
      "The system lowers the amount of manual work by automating the most important processes like inventory tracking, order management, and reporting. This reduces mistakes, wastage of time and enables your team to do more significant things.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Reliable and Secure System",
    description:
      "The security of your business data is of utmost importance to us. With role-based access control and secure data management, only authorized personnel can access sensitive information.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Customizable to Your Needs",
    description:
      "Each furniture company operates differently. Our system is flexible and can be customized to suit your workflows, production processes, and inventory needs.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Safe Access",
    description:
      "Role-based access control ensures that only authorized staff can access sensitive business data.",
    icon: "testWhychoseIcon7",
  },
  {
    id: "8",
    title: "Integration and Add-Ons",
    description:
      "The system is integrated with the ERP systems, accounting systems, and supply chain systems. It also facilitates barcode scanning and automation tools. Other features such as supplier management, production planning, and alerts are useful in enhancing the business performance and growth.",
    icon: "testWhychoseIcon8",
  },
];

export const FURNITURE_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our furniture inventory management system can be integrated with ERP systems, accounting software, CRM systems, and supply chain systems. This helps manufacturers to manage manufacturing, inventory, finances and customer information. Combined tools make the workflow smoother, decrease the number of manual operations, and enhance productivity.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
