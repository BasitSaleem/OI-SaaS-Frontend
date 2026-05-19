import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Clothing Store Inventory Management — UnifiedPlatform Section ──────────────────────────────
export const CLOTHING_INVENTORY_UNIFIED_HEADING =
  "Challenges Holding Back Clothing Stores";

export const CLOTHING_INVENTORY_UNIFIED_PARAGRAPH =
  "Clothing stores face daily challenges that slow down growth and reduce profits. Below are some of the most common issues retailers deal with.";

export const CLOTHING_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Stock Confusion",
    description:
      "Managing different sizes, colors, and designs of clothing items can be really challenging when it comes to keeping track of inventory. Sometimes clothing items get miscounted, which leads to losses. When you do things manually, it is hard to keep track of how many clothing items you have in stock.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow Billing",
    description:
      "When there are lines at the checkout, it slows everything down. This happens because it takes time to enter information and find clothing products. During busy times this can be really frustrating for customers and it can even affect how many clothing products you sell.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Supplier Misalignment",
    description:
      "Dealing with vendors, seasonal collections and restocking timelines can be tough. If you do not work together well you might end up with few or too many items, which can affect how well your clothing store does.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Data Guesswork",
    description:
      "Without reports, owners of clothing stores have to make guesses. It becomes hard to figure out which clothes are selling well, which ones are not selling and what are your profit margins. This can lead to decisions that affect your clothing business.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Price Inconsistency",
    description:
      "It can be hard to manage discounts, sales and price changes for clothes. If you make mistakes with prices it can lead to billing errors and unhappy customers who purchase from your store.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Lack of Online Visibility",
    description:
      "Many clothing stores miss out on sales because they do not have a website or social media. If you do not have a website then you are limiting your chances of growing your customer base and reaching people who might be interested in your clothes.",
  },
];

export const CLOTHING_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Stock Accuracy",
    description:
      "The inventory gets updated after every sale, return, or purchase of clothes. This way you always know what is in stock including sizes, color, and styles of clothes.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Faster & Smoother Billing",
    description:
      "Using barcode scanning and a smart search for products makes checkout faster. Billing becomes quick and easy during busy hours, when selling clothing products.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Intelligent Supplier Management",
    description:
      "You can manage vendor orders and deliveries for clothing items. The system also sends alerts when the stock is low so you can restock them on time.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Centralized Price Control",
    description:
      "You can update the prices and discounts offered for all the clothing items at once. This ensures that the prices are consistent across your store without any mistakes.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Data-Driven Decision Making",
    description:
      "You can access the reports in real-time to find out which clothing items are selling and which ones are slow-moving and how much profit you are making from the clothing items.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Stronger Online Presence",
    description:
      "You can connect your store to the online platforms to sell the clothing items online. The system keeps your inventory of clothing items synced so you can manage both the in-store and online sales of clothing items from one place.",
  },
];

export const CLOTHING_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our system connects all your sales channels. This includes stores, ecommerce platforms, and mobile apps. Store owners can manage in-store and online sales from one dashboard. The inventory is synchronized across all channels.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Management",
        listdescription:
          "The system makes billing easy. It gives staff visibility into stock levels and real-time store analytics. This helps everything run smoothly and accurately at the counter.",
      },
      {
        listheading: "Ecommerce Operations and Sales Online",
        listdescription:
          "Store owners can accept secure payments. They can run promotions and process orders efficiently. This helps them grow their clothing business beyond physical stores.",
      },
      {
        listheading: "Single Multichannel Control",
        listdescription:
          "Store owners can track stock, sales and performance across all channels in real time. They have visibility and control over their business from a single dashboard.",
        listSubDescription:
          "This helps store owners run their business efficiently. It also gives customers a seamless shopping experience across all channels.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "The system gives store owners reporting tools. These tools provide insights into sales performance, inventory movement and profitability. This helps store owners make decisions about buying, pricing and stock optimization.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    // listVariant: "accordion",
    list: [
      {
        listheading:
          "Store owners can analyze sales and inventory in real time",
      },
      { listheading: "They can predict demand and plan reorders" },
      {
        listheading:
          "They can identify areas where they are losing money and improve profitability",
      },
    ],
  },
];

export const CLOTHING_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Fast & Accurate Billing",
    description:
      "We make the checkout fast, with barcode scanning and a smart search so customers have a smooth experience even when the store is really busy.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Live Inventory Management",
    description:
      "Our system updates stock after every sale so the inventory of clothing items is always accurate and up to date.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Purchase Management",
    description:
      "You can create purchase orders, track when they arrive and manage suppliers for your clothing products. This keeps all your records neat and easy to find.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card3.webp",
  },

  {
    id: 4,
    title: "Multi-Unit & Variant Support",
    description:
      "You can easily manage your clothing products by size, color, designs and materials. This is great for clothing stores that have a lot of items.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Customer & Loyalty Management",
    description:
      "We help you keep track of customer information about what they have bought before. You can even give them discounts or rewards for buying clothing items again.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Expense & Cash Flow Control",
    description:
      "You can track what you spend each day and keep an eye on the money coming in and out of your clothing business so you always know about financial activities.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card6.webp",
  },
  {
    id: 7,
    title: "Online Commerce",
    description:
      "You can sell your clothing items online. Our system will keep track of what you have in stock and update everything in real time. This makes it easy to manage orders.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card7.webp",
  },
  {
    id: 8,
    title: "Unified Branches",
    description:
      "If you have more than one clothing store you can manage all of them from one place. You can keep track of stock, prices and sales for all your stores.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card8.webp",
  },
  {
    id: 9,
    title: "Smart Sales & Stock Reports",
    description:
      "Our system helps you understand what is selling and what is not and how much profit you are making so you can make good decisions to grow your clothing business.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card9.webp",
  },
  {
    id: 10,
    title: "Staff Permissions and User Roles",
    description:
      "You can control what each staff member can do based on their job so you can keep your clothing business safe and running smoothly.",
    imageSrc:
      "/assets/industries-pages/clothing-inventory-management-software/key-features-section/key-features-card10.webp",
  },
];

export const CLOTHING_INVENTORY_WORKFLOW_DATA = {
  heading: "Inventory Workflow of Owners Inventory",
  paragraph:
    "Our clothing inventory management software automatically updates stock levels. This makes inventory control simple and efficient for fashion retailers.",
  steps: [
    {
      number: 1,
      title: "Inventory Acquisition",
      description:
        "Store owners find clothing items from suppliers they trust based on demand and trends. They also think about collections. Every product is checked for quality, correct sizes, and accurate quantities.",
    },
    {
      number: 2,
      title: "Stock Organization & Storage",
      description:
        "The system organizes clothing items by type, size, color or brand. We label everything clearly. Items are arranged in a way that makes sense. This makes it easy for our staff to find products quickly. It cuts down on confusion. This saves time during busy hours.",
    },
    {
      number: 3,
      title: "Inventory Tracking",
      description:
        "Stock levels are updated continuously. This includes when we sell something, when someone returns something and when we move items around. It helps owners keep track of every item. Store owners can always see what is in stock.",
    },
    {
      number: 4,
      title: "Supplier & Purchasing",
      description:
        "Our system is really helpful when we work with clothing suppliers. Store owners can make orders, track when products are being delivered and check on how our suppliers are doing. This helps store owners get items in stock on time.",
    },
    {
      number: 5,
      title: "Order Fulfillment",
      description:
        "When someone purchases from the store, our inventory updates right away. We pick, pack and process orders correctly. This makes our customers happy whether they are shopping in our store or online.",
    },
    {
      number: 6,
      title: "Reporting & Analysis",
      description:
        "The system gives detailed reports that tell them everything they need to know. These reports show owners what is selling well, what is not selling and how much money we are making. This helps store owners determine what to buy and how to price their items.",
    },
  ],
};

export const CLOTHING_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Kirsten Larson",
    title: "Clothing Store Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
    text: "Our daily operations are much easier now. Billing is fast and inventory is always accurate. This system has really improved how our clothing store runs.",
  },
  {
    id: "2",
    name: "Michael R.",
    title: "Interior Decor Owner",
    image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
    text: "We needed a system to manage sizes and styles efficiently. This software does that. It is easy for staff to use and provides clear daily reports.",
  },
  {
    id: "3",
    name: "Linda K.",
    title: "Clothing Store Owner",
    image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
    text: "This is one of the best systems that we have used. It keeps everything organized and helps owners make better decisions. Our checkout process is now much faster.",
  },
  {
    id: "4",
    name: "James T.",
    title: "Home Decor & Clothing Store Owner​",
    image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
    text: "Before using this system, we struggled with stock errors and delays. Now everything is tracked accurately. It saves time and makes managing the store stress-free.",
  },
];

export const CLOTHING_INVENTORY_FAQS = [
  {
    id: "1",
    question: "What is clothing inventory management software?",
    answer:
      "It is a tool that helps manage the stock, sales and customers all in one place. It helps keep track of the clothing items, including the sizes and types. It also makes billing process easy.",
  },
  {
    id: "2",
    question: "Can this software handle large inventories?",
    answer:
      "Yes, it can handle thousands of products with sizes, colors and styles. The inventory is updated automatically after every sale.",
  },
  {
    id: "3",
    question: "Is it easy for staff to use?",
    answer:
      "Yes, the clothing inventory management software is easy to use. The staff can do billing, manage inventory and look at reports without needing to be trained.",
  },
  {
    id: "4",
    question: "Does it provide reports and insights?",
    answer:
      "Yes, the clothing inventory management software provides reports on sales, stock and profits in real-time. This helps store owners make decisions.",
  },
  {
    id: "5",
    question: "Can multiple users access the system securely?",
    answer:
      "Yes, the clothing inventory management software has role-based permissions. This means that different staff members can use the software while keeping information safe.",
  },
];

export const CLOTHING_INVENTORY_KEY_FEATURES = [
  {
    id: "clothing-billing",
    title: "Clothing Showroom Billing",
    description:
      "Speed up your showroom sales with integrated billing and custom item creation for a smoother client experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "clothing-stock-control",
    title: "Real-Time Clothing Stock",
    description:
      "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both showroom and warehouse.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "clothing-vendor-mgmt",
    title: "Manufacturer & Supplier Management",
    description:
      "Keep track of all your clothing manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "clothing-variants",
    title: "Style & Material Tracking",
    description:
      "Manage different clothing styles, materials, and variants in one easy-to-navigate catalog software.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "clothing-loyalty",
    title: "Client & Loyalty Management",
    description:
      "Build relationships with your clothing clients using integrated CRM tools to track their preferences and order history.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "clothing-finances",
    title: "Showroom Financial Reporting",
    description:
      "Monitor your showroom’s financial health with detailed reports on sales, deposits, and operating expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "clothing-ecommerce",
    title: "Online Clothing Store Integration",
    description:
      "Sync your physical showroom with your online clothing store to manage all inventory and orders in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const CLOTHING_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory?",
  paragraph: "", // Optional paragraph
  secondHeading: "Manage Your Inventory Efficiently",
  secondDescription:
    "Manage every size, color, and style in real time while improving efficiency and reducing sales losses with Owners Inventory POS today.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our clothing inventory management software ensures stock control, fast billing, and smooth daily operations.",
};

export const CLOTHING_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy Setup",
    description:
      "The system is simple to use and quick to implement. It does not disrupt store operations.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Reliable Performance",
    description:
      "It handles customer traffic and busy hours efficiently. This ensures smooth checkout at all times.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Clear Inventory",
    description:
      "All items are well-organized by size, color and category. This gives store owners full visibility into their stock.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Accurate Reporting",
    description:
      "Store owners get insights into sales, stock value and profits. This supports business decisions.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Features",
    description:
      "The system is designed to support clothing stores of all sizes. It works for boutiques and large retail chains.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Safe Access",
    description:
      "The clothing store staff can only see what they need to see because of user roles and permissions. This keeps the business information safe.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Integration and Addons",
    description:
      "Integrates with accounting applications, eCommerce applications, barcodes, and online payment gateways. Loyalty programs, SMS notifications, multi-branch management, and supplier tracking are some of the add-ons that facilitate easy expansion of the business.",
    icon: "testWhychoseIcon7",
  },
];

export const CLOTHING_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our inventory solution integrates seamlessly with POS systems, accounting software, CRM platforms and ecommerce tools. This allows store owners to manage inventory, sales, finances and customer data from one place. Integrated tools streamline operations which reduces effort and improves overall efficiency across the clothing business.",
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
