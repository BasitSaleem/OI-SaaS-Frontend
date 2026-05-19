import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Coffee Shop POS — UnifiedPlatform Section ──────────────────────────────
export const COFFEE_SHOP_UNIFIED_HEADING =
  "Challenges Faced by Coffee Shops Today";

export const COFFEE_SHOP_UNIFIED_PARAGRAPH =
  "Modern coffee shops and cafes struggle to handle workflows, different order specifications, and payment delays. This makes daily processes harder. Without a proper POS, it becomes difficult to satisfy customers.";

export const COFFEE_SHOP_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Slow Counter Operations",
    description:
      "During the morning rush, busy counter staff have to process multiple customer orders. It causes delays in serving and affects overall operational efficiency in high-demand coffee shops.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Order Errors",
    description:
      "Manual order taking in coffee shops often results in mistakes. The process may become complicated when it involves changing the drink or using the required ingredients to make the coffee, which often causes order errors.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Payment Hold-Ups",
    description:
      "Different ways of payment handling, including card, cash, and other methods, become a problem without a POS. It disrupts revenue monitoring and transaction flow.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Inventory Issues",
    description:
      "Without proper inventory tracking, coffee shops face shortages or overstock situations, especially in ingredients like coffee beans and milk, which leads to unnecessary expenses or waste.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Inconsistent Coordination",
    description:
      "Some coffee shop businesses have difficulties managing online orders, deliveries, and pickups due to an inefficient synchronization system. Failure to synchronize creates problems with coordination among the staff members.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Inefficient Operations",
    description:
      "Without structured software, tracking inventory, shop activities, order details, and operation statuses becomes difficult, which results in inefficient management of overall coffee shop operations.",
  },
];

export const COFFEE_SHOP_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Smart POS Integration",
    description:
      "Our POS system helps coffee shop staff manage orders, payments, and customer flows with complete control. It provides an all-in-one setup that enables cafes to streamline tasks.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Order Automation",
    description:
      "The software automatically handles every order from the counter to the kitchen. It reduces manual errors in shops while providing faster service during the busiest hours of the day.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Inventory Management",
    description:
      "Using the system's real-time inventory management with intelligent AI capabilities makes it easier to track stock levels, which minimizes the wastage of ingredients. Our software enhances overall operational accuracy.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Seamless Payment Handling",
    description:
      "Integrated payment options, including debit cards, card processing, and contactless payments, make transactions faster, improve the customer experience, and streamline checkout flow on every counter in busy coffee shops.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Order Synchronization",
    description:
      "Our system manages orders from different channels accurately, which prevents mismatched order servings and confusion. It improves visibility and efficiency in operations.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Workflow Management",
    description:
      "The software has an embedded workflow management tool that monitors employee activities and enhances workflows, which ultimately aids coffee business owners in improving overall efficiency and saving costs.",
  },
];

export const COFFEE_SHOP_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Owners Inventory effectively connects coffee shops across in-store, online ordering, and delivery platforms. The software offers a unified platform for these orders. It automatically updates workflows between channels, helping coffee businesses maintain accuracy, reduce human effort, and improve coordination while keeping sales consistent.",
    imageSrc: "/assets/industries-pages/coffee-shop-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "The staff at the counter uses POS to process orders quickly. They capture every order detail precisely, which ensures that customers get the exact coffee or item with their specific requirements. This ensures faster service, reduces long queues at the counter, and boosts customer satisfaction.",
      },
      {
        listheading: "Delivery and Online Integration",
        listdescription:
          "The solution automatically integrates delivery and online ordering platforms so that every order is updated in real-time. This helps coffee shops avoid missed or duplicate transactions. It helps provide accurate inventory adjustments based on the usage of ingredients after order fulfillment. The software keeps the entire workflow managed without manual intervention.",
      },
      {
        listheading: "Unified Multi-Channel Dashboard",
        listdescription:
          "With a centralized dashboard, Owners Inventory helps shop owners track sales across multiple channels and the performance of operational activities. It simplifies monitoring and improves revenue calculation. The software provides easy access to all information and lets staff perform operations within the platform.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Analytics and Reporting",
    description:
      "The tool provides clear insights into orders, customers, and payment trends across coffee shops. It allows owners to analyze peak hours, best-selling items, and revenue patterns. This helps improve pricing control, optimize process flow, and support better business decision-making for seamless long-term growth.",
    imageSrc: "/assets/industries-pages/coffee-shop-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const COFFEE_SHOP_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Role-Based Access",
    description:
      "Coffee shop owners can grant their employees limited access to information depending on their roles in the organization. In this way, they can keep track of all activities in the store while maintaining privacy.",
    imageSrc:
      "/assets/industries-pages/coffee-shop-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Centralized Sales Dashboard",
    description:
      "All activities, including payment, orders, and daily sales, are visible in one dashboard. Owners can track shop performance with real-time visibility.",
    imageSrc:
      "/assets/industries-pages/coffee-shop-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Built-in Receipt System",
    description:
      "With every transaction, digital or printed receipts are generated automatically. This reduces manual errors in billing and ensures that every purchase is recorded precisely.",
    imageSrc:
      "/assets/industries-pages/coffee-shop-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Custom Menu & Price Adjustment",
    description:
      "The software enables owners to customize their menu, set prices, and update their products according to changes in the seasons and promotions.",
    imageSrc:
      "/assets/industries-pages/coffee-shop-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Multi-Location Management",
    description:
      "This software can be very helpful for growing businesses that have multiple shop locations. They can easily manage their inventory and revenue generation processes for all coffee shops through a single dashboard.",
    imageSrc:
      "/assets/industries-pages/coffee-shop-pos/key-features-section/key-feature-card5.webp",
  },
];

export const COFFEE_SHOP_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory POS for Coffee Shops",
  paragraph:
    "Owners Inventory POS manages daily operations by following step-by-step procedures. It supports fast-moving counter activities in cafes and coffee shops while keeping every order and transaction organized and trackable in real time.",
  steps: [
    {
      number: 1,
      title: "Ordering from the Counter",
      description:
        "The customers place orders at the counter in the coffee shops with the help of the POS system. The software helps the staff to capture orders efficiently and quickly with a few clicks. They can create the desired product along with the customization required. This makes order capturing precise while ensuring that the procedure starts easily.",
    },
    {
      number: 2,
      title: "Automatic Order Routing",
      description:
        "After the order is confirmed, it is automatically sent to the correct preparation station. Whether it's coffee brewing or other item preparation, POS ensures each task is assigned precisely to the right person. This removes confusion between staff and improves efficiency.",
    },
    {
      number: 3,
      title: "Preparation Tracking",
      description:
        "The kitchen staff get access to monitor orders placed from the dashboard in real-time. This enables them to keep track of order preparation status and work efficiently. It also improves coordination between counter staff and the preparation team, ensuring smoother processes.",
    },
    {
      number: 4,
      title: "Payment Processing",
      description:
        "The customer completes payments using different methods. The program instantly records the essential transaction data, such as the total cost, date, or time, and updates sales data, which helps maintain accurate sales records and reduces data inconsistencies.",
    },
    {
      number: 5,
      title: "Inventory Data Sync",
      description:
        "Once the order is completed, the tool updates the inventory levels automatically, such as used coffee beans, milk, or bakery items. It helps shop owners view stock levels with enhanced visibility and make better decisions for restocking.",
    },
  ],
};

export const COFFEE_SHOP_TESTIMONIALS = [
  {
    id: "1",
    name: "Ayesha M",
    title: "Coffee Shop Owner",
    image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
    text: "Managing peak morning rush became easier. Orders move faster from counters to the kitchen, and the setup keeps everything organized without confusion.",
  },
  {
    id: "2",
    name: "Amanda K",
    title: "Café Owner",
    image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
    text: "Our payments, orders, and inventory stay in sync. The software helped us reduce manual effort and simplified daily operational management.",
  },
  {
    id: "3",
    name: "Alexander Reed",
    title: "Coffee & Beverage Center Owner​",
    image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
    text: "As our coffee shop expanded, the software scaled smoothly. Managing multiple orders is now much simpler than before.",
  },
];

export const COFFEE_SHOP_FAQS = [
  {
    id: "1",
    question: "What makes your POS suitable for coffee shops?",
    answer:
      "Our POS for coffee shops handles fast data entry, custom order details, and quick checkout procedures at the counter. It provides consistent performance during the morning rush hours and keeps the daily tasks of cafes streamlined.",
  },
  {
    id: "2",
    question: "How does the Owners Inventory manage custom coffee orders?",
    answer:
      "It captures every order detail precisely, such as coffee type, milk, size, sugar quantity, and other demands. This helps staff deliver the exact order the customer has asked for, which increases satisfaction.",
  },
  {
    id: "3",
    question: "How does it handle inventory for coffee shops?",
    answer:
      "Owners Inventory effectively manages the inventory operation by providing real-time visibility into stock levels, storing items according to category, and automating stock deduction after each order completion.",
  },
  {
    id: "4",
    question: "How will your POS help my coffee shop grow?",
    answer:
      "Improving process flow, reducing errors, and managing customer data, it helps coffee shops increase efficiency, revenue, and overall growth. The system supports a long-term goal of coffee shops by providing advanced features to handle large volumes of data.",
  },
  {
    id: "5",
    question: "Is it easy for staff to learn and use the system?",
    answer:
      "Yes, our coffee shop POS is well-designed and easy to use. The POS is simple to use, which is why staff do not require any specific technical training to use Owners Inventory.",
  },
];

export const COFFEE_SHOP_KEY_FEATURES = [
  {
    id: "coffee-shop-billing",
    title: "Coffee Shop Billing",
    description:
      "Speed up your sales with integrated billing and custom item creation for a smoother customer experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "coffee-shop-stock-control",
    title: "Real-Time Coffee Shop Stock",
    description:
      "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both store and warehouse.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "coffee-shop-vendor-mgmt",
    title: "Manufacturer & Supplier Management",
    description:
      "Keep track of all your coffee shop manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "coffee-shop-variants",
    title: "Item & Category Tracking",
    description:
      "Manage different product styles, ingredients, and categories in one easy-to-navigate catalog system.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "coffee-shop-loyalty",
    title: "Customer & Loyalty Management",
    description:
      "Build relationships with your coffee shop customers using integrated CRM tools to track their preferences and order history.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "coffee-shop-finances",
    title: "Financial Reporting",
    description:
      "Monitor your store’s financial health with detailed reports on sales, deposits, and operating expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "coffee-shop-ecommerce",
    title: "Online Coffee Shop Integration",
    description:
      "Sync your physical store with your online coffee shop to manage all inventory and orders in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const COFFEE_SHOP_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say?",
  paragraph: "", // Optional paragraph
  secondHeading: "Empowering Modern Coffee Shop Operations",
  secondDescription:
    "Begin your journey with Owners Inventory and explore how a powerful POS can simplify coffee shop operations and orders from day one.",
  whyChooseTitle: "Why Choose Owners Inventory for Your Coffee Shop?",
  whyChooseDescription:
    "Owners Inventory POS fits naturally into how coffee shops operate in daily routines. It is fast at the counter, detailed and focused on order details, and consistent across operations.",
};

export const COFFEE_SHOP_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Real Workflow Fit",
    description:
      "It follows how coffee orders actually move in a shop, keeping the procedures structured to reduce unnecessary steps for staff.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Less Manual Work",
    description:
      "Automatic updates in inventory, orders, and payments reduce the need for manual tracking of everything and save time while increasing precision in tasks.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Complex Order Handling",
    description:
      "It handles complex order variations such as size, milk type, and add-ons without confusion, keeping the counter ready with accurate orders.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Structured Order Flow",
    description:
      "Each order follows a defined workflow from counter to preparation and payment. This reduces dependence on verbal coordination between staff.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Peak Hour Stability",
    description:
      "The platform provides consistent performance even when the counters are busy at peak hours. It speeds up processes and saves customers from waiting for their order fulfillment.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Growth-Ready System",
    description:
      "As your coffee shop grows, the software adapts to its needs while providing advanced features required to handle complex inventory and large-volume data.",
    icon: "testWhychoseIcon6",
  },
];

export const COFFEE_SHOP_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "The software integrates with tools like analytics, CRMs, and payment gateways. It enhances system functionality. Coffee shop owners can easily perform different tasks within the software without opening third-party tools separately. This reduces dependency on multiple platforms, simplifies daily processes, and helps cafes and bakeries manage everything effectively.",
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
