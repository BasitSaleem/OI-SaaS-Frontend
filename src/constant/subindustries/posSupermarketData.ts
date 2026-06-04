import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Supermarket POS — UnifiedPlatform Section ──────────────────────────────
export const SUPERMARKET_UNIFIED_HEADING =
  "Challenges Holding Back Supermarkets";

export const SUPERMARKET_UNIFIED_PARAGRAPH =
  "Supermarkets face challenges every day that can slow down growth and increase costs. Some of these challenges include:";

export const SUPERMARKET_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Stock Mismanagement",
    description:
      "This happens when you have to handle thousands of products and it is hard to keep track of them. You might make mistakes when you track things by hand which can cost your business up to 20% each year.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow Checkout Lines",
    description:
      "Long lines during peak hours can frustrate customers. This can reduce sales. The Owners Inventory POS System can help reduce checkout lines.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Supplier Coordination Issues",
    description:
      "It can be hard to keep track of suppliers and deliveries without a centralized system. The Owners Inventory POS System can help with supplier coordination issues.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Sales Insights",
    description:
      "Without the reports, supermarket owners have to guess which items are selling well and which are not. The Owners Inventory POS System can help with lack of sales insights.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Frequent Price Changes",
    description:
      "Prices at supermarkets change all the time and updating them by hand can lead to mistakes. The Owners Inventory POS System can help with price changes.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Online Presence",
    description:
      "Many supermarkets miss out on online sales because they do not have digital integration. The Owners Inventory POS System can help with online presence.",
  },
];

export const SUPERMARKET_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Stock Accuracy",
    description:
      "The inventory changes right away after every sale and purchase, which reduces mistakes and keeps stock levels accurate.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Faster & Smoother Billing",
    description:
      "Scanning barcodes and using search make checkout faster which keeps lines short even during busy times. With us your billing becomes smoother and faster",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Intelligent Supplier Management",
    description:
      "You can keep monitoring your suppliers, handle purchase orders and get alerts when your stock is low to avoid running out.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Centralized Price Control",
    description:
      "You can update prices on all products and in all branches at once to make sure that billing is always correct and consistent.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Data-Driven Decision Making",
    description:
      "Live reports show which products are selling well and which ones are not which helps you set prices and make the right purchases.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Stronger Online Presence",
    description:
      "The Owners Inventory POS System works with ecommerce systems so supermarkets can sell online and keep their inventory up to date in real time.",
  },
];

export const SUPERMARKET_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our system connects all the places where people buy things from your supermarket like the store, the website and the mobile app into one simple system. You can manage in-store and online sales from one place.",
    imageSrc: "/assets/industries-pages/supermarket-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Management",
        listdescription:
          "We ensure that the checkout process is made easy, you can keep track of the stock in real time and be able to retrieve precise sales information about your store.",
        listSubDescription:
          "This assists supermarkets to run smoothly, minimize mistakes and have a better control of day to day operations and general performance. It also enhances customer experience by minimizing waiting time at billing counters, and processing all transactions fast and properly.",
      },
      {
        listheading: "Ecommerce Operations and Sales Online",
        listdescription:
          "Accept secure online payments, manage digital promotions, and process orders smoothly to expand your supermarket beyond the physical store.",
      },
      {
        listheading: "Single Multi-Channel Control",
        listdescription:
          "You can see what is in stock, what is selling and how the supermarket is doing in time. This gives you a view and control of your business.",
        listSubDescription:
          "This way you can run the supermarket efficiently. Make sure the customers have a good experience everywhere they shop.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "Our system gives you numbers and insights into what is selling, what is in stock and how much money the supermarket is making. This helps you make decisions about what to buy, how to price things and what to keep in stock.",
    imageSrc: "/assets/industries-pages/supermarket-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "See what is selling and what is not" },
      { listheading: "Know when to order things" },
      {
        listheading:
          "Find out where money is being lost and improve profitability",
      },
    ],
  },
];

export const SUPERMARKET_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Fast & Accurate Billing",
    description:
      "Barcode scanning for quick checkout keeps customers moving smoothly even during busy times. The Owners Inventory POS System is great for accurate billing.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Live Inventory Management",
    description:
      "Stock updates itself after each sale so the inventory is always correct. The Owners Inventory POS System is great for inventory management.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Purchases Management",
    description:
      "You can make purchase orders quickly, keep track of deliveries and manage suppliers well. The Owners Inventory POS System is great for purchases management.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Multi-Unit & Variant Support",
    description:
      "You can easily deal with items that come in sizes, weights, and types of packaging. The Owners Inventory POS System is great for multi-unit and variant support.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Customer & Loyalty Management",
    description:
      "Track customer information and purchase history is easy. Give loyal customers discounts and special deals. The Owners Inventory POS System is great for customer and loyalty management.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Expense & Cash Flow Control",
    description:
      "You can keep track of your expenses and cash flow to maintain financial transparency. The Owners Inventory POS System is great for expense and cash flow control.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Online Commerce",
    description:
      "You can sell groceries online with synced inventory and real-time updates. The Owners Inventory POS System is great for online commerce.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Unified Branches",
    description:
      "With control, you can manage multiple supermarket branches from one dashboard. The Owners Inventory POS System is great for branches.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Smart Sales & Stock Reports",
    description:
      "Sales trends, profits and stock movement can help you make smart choices. The Owners Inventory POS System is great for sales and stock reports.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Staff Permissions and User Roles",
    description:
      "You can control access for cashiers, managers and admins to ensure data security. The Owners Inventory POS System is great for staff permissions and user roles.",
    imageSrc:
      "/assets/industries-pages/supermarket-pos/key-features-section/key-feature-card10.webp",
  },
];

export const SUPERMARKET_WORKFLOW_DATA = {
  heading: "Inventory Workflow of Owners Inventory",
  paragraph:
    "Our POS system automates inventory so that it is easier in our supermarket. It assists in real time monitoring of stock, real time updates of sales, and proper control of inventory in all operations.",
  steps: [
    {
      number: 1,
      title: "Inventory Acquisition",
      description:
        "Suppliers send products based on customer demand. We check each item. Add it to our system to track it.",
    },
    {
      number: 2,
      title: "Stock Organization & Storage",
      description:
        "We store things in a way that makes them easy to find and manage.",
    },
    {
      number: 3,
      title: "Inventory Tracking",
      description:
        "We efficiently track inventory and update. We update sales, returns and transfers in time.",
    },
    {
      number: 4,
      title: "Supplier & Purchasing",
      description:
        "We keep track of deliveries, manage suppliers and restock items on time.",
    },
    {
      number: 5,
      title: "Order Fulfillment",
      description:
        "Picking, packing and billing products correctly reduces mistakes. Makes things run smoothly.",
    },
    {
      number: 6,
      title: "Reporting & Analysis",
      description:
        "Our reports show sales performance, stock movement and revenue in detail. Our supermarket POS system simplifies tasks, reduces errors and improves efficiency. Change your supermarket's operations today.",
    },
  ],
};

export const SUPERMARKET_TESTIMONIALS = [
  {
    id: "1",
    name: "Zoey Scott",
    title: "Supermarket Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "Our system has made billing and inventory more accurate. The daily work is now easy and stress-free.",
  },
  {
    id: "2",
    name: "Tyler Mitchell",
    title: "Grocery Store Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "This is the system we have used. It keeps everything organized. Helps us make better decisions. The checkout is now faster.",
  },
  {
    id: "3",
    name: "Brandon Scott",
    title: "Retail & Supermarket Owner​",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We used to have trouble managing thousands of items. Now everything is tracked perfectly. The staff can use the system easily.",
  },
  {
    id: "4",
    name: "Aisha Malik",
    title: "Supermarket Franchise Owner​",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "We used to have stock errors and delays. Now everything is accurate. It saves time and makes the supermarket more efficient.",
  },
];

export const SUPERMARKET_FAQS = [
  {
    id: "1",
    question: "What is a POS system for a supermarket?",
    answer:
      "A supermarket system helps manage sales, inventory and customers from one place. It makes billing and inventory more accurate.",
  },
  {
    id: "2",
    question: "Can this POS system handle large inventories?",
    answer:
      "Yes, it is designed to manage thousands of products with categories, sizes and variations.",
  },
  {
    id: "3",
    question: "Is it easy for staff to use?",
    answer:
      "Absolutely,  the system is simple and easy to use. The staff can do their jobs quickly without a lot of training.",
  },
  {
    id: "4",
    question: "Does it provide reports and insights?",
    answer:
      "Yes, it gives real-time reports on sales, stock and profits which helps with decision-making.",
  },
  {
    id: "5",
    question: "Is the system secure for multiple users?",
    answer:
      "It is. We have controls in place so that only the right people can access the system. It is safe for different staff roles.",
  },
];

export const SUPERMARKET_KEY_FEATURES = [
  {
    id: "supermarket-billing",
    title: "Supermarket Billing",
    description:
      "Speed up your sales with integrated billing and custom item creation for a smoother client experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "supermarket-stock-control",
    title: "Real-Time Supermarket Stock",
    description:
      "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both store and warehouse.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "supermarket-vendor-mgmt",
    title: "Manufacturer & Supplier Management",
    description:
      "Keep track of all your supermarket manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "supermarket-variants",
    title: "Item & Category Tracking",
    description:
      "Manage different product styles, materials, and categories in one easy-to-navigate catalog system.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "supermarket-loyalty",
    title: "Client & Loyalty Management",
    description:
      "Build relationships with your supermarket clients using integrated CRM tools to track their preferences and order history.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "supermarket-finances",
    title: "Financial Reporting",
    description:
      "Monitor your store’s financial health with detailed reports on sales, deposits, and operating expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "supermarket-ecommerce",
    title: "Online Supermarket Integration",
    description:
      "Sync your physical store with your online supermarket to manage all inventory and orders in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const SUPERMARKET_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "", // Optional paragraph
  secondHeading: "Inventory Management Made Easy",
  secondDescription:
    "You can take full control over your online business inventory by using a system specifically designed for eCommerce. This system helps you grow and stay organized.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our system gives you inventory, fast billing and control of the supermarket.",
};

export const SUPERMARKET_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy Setup",
    description:
      "The system is easily installed and easy to operate and you can be up and running in a short time without interfering with your day to day running of the store. It can be easily learnt even by personnel who have little technical experience.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Reliable Performance",
    description:
      "It is designed in such a way that it can accommodate a lot of customer traffic and a lot of transactions without slacking. This provides hassle free and quick checkout experiences even during the peak periods.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Clear Inventory",
    description:
      "All products are correctly arranged and monitored in real time, providing you with an accurate picture of what is available, what is out of stock and what has to be reordered.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Accurate Reporting",
    description:
      "We give comprehensive sales, stock movement and profit performance reports. These insights can make you make better business decisions and enhance store profitability.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Features",
    description:
      "The system is created to accommodate any supermarket regardless of size, small or big stores or chains. It can easily adapt to your business needs as you grow.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Safe Access",
    description:
      "Effective security measures are in place to ensure that only authorized personnel can gain access to certain aspects of the system. This is to secure your data and ensure safety in operations.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Integration and Addons",
    description:
      "Our system integrates with other tools like barcode scanners, accounting software, online stores and payment systems. We also have features like loyalty programs and supplier integration.",
    icon: "testWhychoseIcon7",
  },
];

export const SUPERMARKET_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our POS integrates with accounting software, eCommerce platforms, CRM systems, and payment gateways. These integrations streamline operations and reduce manual work.",
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
