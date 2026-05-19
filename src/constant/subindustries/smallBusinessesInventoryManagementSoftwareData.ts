import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Small Business Inventory Management — UnifiedPlatform Section ─────────────
export const SMALL_BUSINESS_INVENTORY_UNIFIED_HEADING =
  "Challenges Small Businesses Face in Inventory Management";

export const SMALL_BUSINESS_INVENTORY_UNIFIED_PARAGRAPH =
  "Managing inventory in a small business becomes difficult when systems are not connected. Without a reliable inventory management system, the day-to-day operations slow down, and the chances of errors increase.";

export const SMALL_BUSINESS_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Lack of Real-Time Tracking",
    description:
      "Small business owners struggle to track stocks due to the absence of real-time inventory visibility. Lack of efficient management tools leads to poor operational performance.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Manual Processes",
    description:
      "Full reliance on spreadsheets and manual methods makes inventory management difficult and increases errors in records. This affects overall business processes such as inaccurate stock data, billing errors, and inefficient reporting.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Managing Multiple Sales Channels",
    description:
      "Selling across multiple channels makes it hard to manage inventory consistently, resulting in inconsistent stock updates after sales, purchases, or returns. It increases confusion across channels.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Overstocking and Cash Flow Issues",
    description:
      "Without inventory software, it becomes difficult to know the actual stock levels. It results in excess stock, blocks cash flow, and reduces profitability.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Delayed Order Fulfillment",
    description:
      "Small businesses can't monitor inventory frequently if the essential items are near the end of the inventory. This leads to stock shortages and delayed order fulfillment, which makes customers unhappy.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Complex Workflows",
    description:
      "Manual workflow handling slows down the business operations. This complicates workflows, which makes the team struggle to efficiently complete tasks.",
  },
];

export const SMALL_BUSINESS_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-time Visibility",
    description:
      "The real-time visibility feature of Owners Inventory helps businesses track inventory accurately. Each movement updates stock levels, which helps managers make better decisions for restocking without confusion.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Automated Processes",
    description:
      "The software uses automated AI features to enhance the overall operational efficiency of businesses. With automated and structured workflows, businesses can handle billing, reporting, and stock management without errors.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Seamless Integration",
    description:
      "Owners Inventory supports integration across multiple sales channels, making sure that inventory levels stay accurate and stocks are managed without discrepancies across platforms.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Optimized Inventory",
    description:
      "The system helps optimize stock levels by analyzing patterns. This improves cash flow, reduces excess stocking, and ensures that small businesses invest in those items that they actually need.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Smart Alerts",
    description:
      "It uses built-in alerts to help businesses monitor inventory and avoid stock shortages, which ensures that products are restocked before they impact order fulfillment and cause delays.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Simplified and Efficient Workflows",
    description:
      "Our software offers an easy-to-use and intuitive system that helps staff use it without complicated training. This helps streamline workflows and handle business operations efficiently.",
  },
];

export const SMALL_BUSINESS_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales and Integration",
    description:
      "Owners Inventory connects multiple sales channels that small businesses use into one synchronized system. Stock levels, sales records, and order data stay consistent whether a transaction is performed in-store, online, or through a delivery platform.",
    subDescription:
      "This removes the need to manage separate systems and keeps operations streamlined without confusion.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "Sales processed at the counter are recorded in real time within the system. Real-time stock updates keep the records accurate throughout the sales procedures. It helps staff focus on other business operations instead of managing inventory manually.",
        listSubDescription:
          "This helps keep inventory counting accurate by recording exactly what was sold in the day.",
      },
      {
        listheading: "Delivery and Online Integration",
        listdescription:
          "Orders placed through a website, delivery app, or online marketplace are captured automatically by the system. Inventory is updated when the order is confirmed, which prevents overselling. This reduces the requirement of manual order sync between platforms and the risk of fulfilling an order for an item that is no longer in stock.",
      },
      {
        listheading: "Unified Dashboard",
        listdescription:
          "All inventory management activities appear in one central dashboard. The dashboard helps business owners monitor performance, track stock movements, and manage operations without the need to switch between systems.",
        listSubDescription:
          "It gives a clear understanding of business operations at any point during the day without relying on separate reports or multiple tools.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Analytics and Reporting",
    description:
      "The software converts daily sales and stock data into clear, understandable reports. It helps business owners identify best-selling items, slow-moving products, and sales patterns over time. These insights help businesses make better purchasing decisions, reduce unnecessary stock holding, and maintain consistent growth rates.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const SMALL_BUSINESS_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Inventory Updates",
    description:
      "Real-time inventory updates provide an accurate stock item count after every sale, purchase, or return without delays or manual intervention.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Barcode Scanning",
    description:
      "It uses barcode scanning to handle product tracking more efficiently. It improves accuracy in daily inventory management tasks while minimizing errors.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Warehouse Control",
    description:
      "The software allows small business owners to manage inventory across multiple locations, including warehouses and in-store items. It ensures stocks stay easily accessible and organized.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Billing and Invoicing",
    description:
      "It helps you generate invoices and billing records with built-in tools that are directly connected with the inventory, which ensures that every transaction reflects accurate stock movement.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Reporting and Inventory Insights",
    description:
      "The software keeps business owners updated with accurate reports that contain detailed information on inventory usage and operational performance. This supports better business decision-making.",
    imageSrc:
      "/assets/industries-pages/small-businesses-inventory-management-software/key-features-section/key-features-card5.webp",
  },
];

export const SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA = {
  heading: "Workflows of Small Business Inventory Management Software",
  paragraph:
    "Owners Inventory follows the natural flow of how small businesses buy, manage, and sell products. It connects every workflow step with others to ensure operational accuracy. This gives business owners full visibility of management procedures.",
  steps: [
    {
      number: 1,
      title: "Product Catalog Setup",
      description:
        "You can add products in the system with categorization, such as variants, pricing, and opening stock quantities in the system. Every item is organized in one place. This makes it easy for your staff to find items in the store and manage everything accurately. It speeds up the sales process.",
    },
    {
      number: 2,
      title: "Connect Sales Channels",
      description:
        "It links your POS, online store, and delivery platform to a single inventory system. All channels use the same stock. So sales from any source are recorded instantly without creating separate records, reducing the reliance on manual processes.",
    },
    {
      number: 3,
      title: "Sales Processing and Stock Updates",
      description:
        "The system automatically adjusts inventory levels whenever sales occur. This ensures accurate tracking of inventory stock levels while helping businesses avoid human errors. It keeps operational activities streamlined by managing stock counts precisely while enhancing business growth.",
    },
    {
      number: 4,
      title: "Stock Coordination",
      description:
        "Incoming orders are processed efficiently while inventory is being checked for availability, which helps small businesses fulfill orders on time and maintain proper coordination between stock levels and customer demands.",
    },
    {
      number: 5,
      title: "Performance Review and Restock",
      description:
        "With built-in reports, it shows which products are selling well, which are slow-moving, and where your stock levels stand. It ensures accurate restock decisions and better order planning while helping businesses grow without guesswork and with fewer losses.",
    },
  ],
};

export const SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say?",
  paragraph: "",
  secondHeading: "Bring Structure to Your Daily Operations",
  secondDescription:
    "Switch to our structured inventory management system that keeps everything organized and easy to handle. Our system improves how your business runs without adding complexity.",
  whyChooseTitle: "Why Choose Owners Inventory for Small Business Management?",
  whyChooseDescription:
    "Owners Inventory is built for small business owners who need accurate inventory control without complicated system setups and large IT teams. Our software is reliable, efficient, and designed to support real business operations.",
};

export const SMALL_BUSINESS_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Hassan R",
    title: "Business Owner",
    image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
    text: "We were struggling to keep our inventory organized as our business grew. Owners Inventory gave us a structured way to handle stocks without making things complicated. It's simple to use and perfectly supports our operations efficiently.",
  },
  {
    id: "2",
    name: "Anabiya K",
    title: "Operations Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
    text: "Managing inventory across different product categories used to take a lot of time. With Owners Inventory, everything feels more streamlined now.",
  },
  {
    id: "3",
    name: "Rebecca S",
    title: "Business Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
    text: "The system helped us stay organized without adding extra workload. The system just perfectly fits our workflow.",
  },
];

export const SMALL_BUSINESS_INVENTORY_FAQS = [
  {
    id: "1",
    question: "How long does it take to set up inventory management software?",
    answer:
      "The setup time of Owners Inventory depends on your business size. However, it is easy to set up for most businesses. You can quickly add products and categories while tracking other operations.",
  },
  {
    id: "2",
    question: "Can I manage different product types under one system?",
    answer:
      "Yes, our inventory software allows you to organize different product types with categories, making it easier to handle varied items within one system.",
  },
  {
    id: "3",
    question: "Does the software support pricing management for products?",
    answer:
      "Yes, it allows you to update product pricing within the system. It helps maintain pricing consistency across stores and online platforms while ensuring accurate billing during checkout procedures.",
  },
  {
    id: "4",
    question: "How does inventory software help during busy sales periods?",
    answer:
      "The software keeps stocks updated automatically, allowing businesses to handle high transaction volumes without losing track of inventory or creating confusion in records.",
  },
  {
    id: "5",
    question: "Can I customize the system based on my business needs?",
    answer:
      "Our inventory management system offers flexibility. It allows businesses to adjust workflows, categories, and processes based on their unique operational requirements.",
  },
];

export const SMALL_BUSINESS_INVENTORY_KEY_FEATURES = [
  {
    id: "small-business-billing",
    title: "Supply Order Management",
    description:
      "Speed up your procurement with integrated order processing and automatic stock updates for a smoother business experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "small-business-stock-control",
    title: "Real-Time Multi-Location Stock",
    description:
      "Know exactly what's in stock across all areas. Every item used is instantly updated in your inventory.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "small-business-vendor-mgmt",
    title: "Manufacturer & Vendor Management",
    description:
      "Keep track of all your suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "small-business-variants",
    title: "Item & Supply Tracking",
    description:
      "Manage different items, sizes, and categories in one easy-to-navigate catalog across all areas.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "small-business-loyalty",
    title: "Customer & Record Management",
    description:
      "Build better customer care using integrated CRM tools to track history and supply needs.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "small-business-finances",
    title: "Financial & Compliance Reporting",
    description:
      "Monitor your business's financial health with detailed reports on spending, consumption, and operational expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "small-business-integration",
    title: "Multi-Platform Logistics Integration",
    description:
      "Sync your logistics partners to manage all inventory and supply chains in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const SMALL_BUSINESS_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Purpose-Built System",
    description:
      "The system fulfills the daily inventory management needs of small businesses, such as stock tracking, sales recording, and growth tracking.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Quick Setup",
    description:
      "Small businesses can add their product catalogs, connect sales channels, and start tracking inventory. It allows you to carry on with existing operations without disruption.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "All-in-One Platform",
    description:
      "Owners Inventory eliminates the need for separate tools. It manages everything with one connected system, which helps keep business data consistent in one place.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Scalable Platform",
    description:
      "As your business expands from small to enterprise-level, the system provides you with more features, such as handling more products, locations, and sales volumes without compromising accuracy and performance.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Reliable Support",
    description:
      "The system provides operational support to small businesses, which helps them automate routine tasks and focus on main operations that effectively help them grow.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Actionable Reporting",
    description:
      "The software uses advanced AI features for real-time updates of stocks, inventory, and sales management. These reports help business owners get visibility into all operations.",
    icon: "testWhychoseIcon6",
  },
];

export const SMALL_BUSINESS_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory integrates with platforms such as Shopify and WooCommerce. It can also connect with marketing tools, payment gateways, and other essential software required to manage a small business. It allows tools and platforms to work together in a connected system so business owners can manage different operations instantly.",
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
