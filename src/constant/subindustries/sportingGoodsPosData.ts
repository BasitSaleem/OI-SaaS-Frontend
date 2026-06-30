import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Sporting Goods POS — UnifiedPlatform Section ──────────────────────────
export const SPORTING_GOODS_UNIFIED_HEADING =
  "Challenges Sporting Goods Stores Face Today";

export const SPORTING_GOODS_UNIFIED_PARAGRAPH = "Sporting goods retail deals with inventory complexity that generic point-of-sale systems cannot handle. These challenges affect stock levels, customer experience, and profitability across every selling season.";

export const SPORTING_GOODS_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Variant Stock Gaps",
    description: "Sporting goods stores carry products with different sizes and colors. Without structured inventory tracking inside the store, figures for individual variants become unreliable.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Seasonal Inventory Mismanagement",
    description: "Seasonal inventory demands shift dramatically between sporting seasons. Lack of real-time data causes retailers to overbuy slow-selling items. It also causes them to run out of high-demand items.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Disconnected Ecommerce",
    description:
      "Retailers selling through an online store alongside their physical counter without unified inventory management software face stock discrepancies.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Manual Inventory Process",
    description:
      "A large sporting goods inventory spanning equipment, apparel, and footwear becomes difficult to manage. Staff spend hours on manual inventory control, which causes inefficiencies.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Loyalty Structure",
    description:
      "Without loyalty programs, retailers miss opportunities to reward returning customers. Repeat visits go unrecognized, and it causes sporting businesses to lose sales.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Procurement Blind Spots",
    description: "Placing purchase orders without accurate inventory levels and sales data consistently misallocates purchasing budgets. Popular product lines run out before reorders arrive, and slow-moving items accumulate season after season.",
  },
];

export const SPORTING_GOODS_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Structured Variant Control",
    description:
      "Every product inside the sporting goods POS software is tracked by size, color, and model. Stock levels update with each transaction, so figures for all variants stay accurate across the entire inventory.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Seasonal Demand Visibility ",
    description:
      "Real-time sales reports show which product moves fastest before and during each season. Store owners use this data to ensure the right stock is available before peak period.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Seamless Channel Integration",
    description:
      "In-store and online inventory draw from the same live stock levels. The system updates product listings instantly, preventing overselling across eCommerce and physical channels.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Automated Stock Updates",
    description:
      "Inventory levels update automatically across every sold product and variant without staff entering figures manually. It helps staff spend their time on the floor delivering a better customer experience instead of handling stock levels.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Built-In Loyalty Program",
    description:
      "Customer profiles track purchase history and customer loyalty points automatically. Repeat customers are rewarded at checkout, which builds repeat business and boosts customer retention.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Data-Backed Purchasing",
    description:
      "Purchase orders are raised against confirmed inventory levels and sales data showing exactly which products drive revenue and which take extra space. The POS helps control the budget and drive strong revenue each season.",
  },
];

export const SPORTING_GOODS_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel and Sales Integration",
    description:
      "Owners Inventory connects every sales point into one retail management platform. In-store sales, online transactions, purchase orders, and store locations all feed the same dashboard so sporting goods retailers can manage their entire business without switching between disconnected platforms.",
    subDescription: "It ensures that all the figures remain the same at the end of the day report.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "Every sporting product scanned at the counter is recorded directly into the POS system the moment the transaction closes. Inventory levels adjust instantly, the customer profiles update automatically, and the sales appear in real-time performance data without any additional entry required from staff after the customer completes their purchase.",
      },
      {
        listheading: "Online Store Order Sync",
        listdescription:
          "Sporting goods listed through a connected online store are drawn from the same inventory as the physical counter. When a product sells in store, the eCommerce listing updates immediately across every connected channel, preventing a customer from purchasing something that has already been cleared from the shelf. ",
      },
      {
        listheading: "Unified Retail Dashboard",
        listdescription:
          "All store location activities, sales, stock movements, and purchase orders appear together inside one central management dashboard. Owners can see daily revenue, variant stock levels, and overall business operation performance from a single screen.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "Daily business data is converted into real-time reports. These reports contain structured information about inventory performance, category revenue, sales trends, and stock levels. It helps retailers identify which equipment lines drive more revenue, where apparel categories peak at specific times of year, and where seasonal inventory needs adjusting.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const SPORTING_GOODS_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Barcode and SKU Scanning",
    description:
      "The POS makes products instantly searchable using barcode and SKU scanning. Staff can add items to transactions without browsing large catalogs, which speeds up the checkout process.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Bulk Catalog Import",
    description:
      "Sporting goods stores with thousands of SKUs and products can load their catalogs into the system using Excel or CSV files. It reduces human intervention by eliminating the need for manual data entry.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Multi-Location Dashboard",
    description:
      "Stock levels, sales performance, and store operation data across every location are visible from one centralized dashboard. Owners can monitor inventory data at each branch in real time and restock items instantly.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Ecommerce Integration",
    description:
      "Owners Inventory connects the POS system directly with third-party eCommerce platforms. All product listings, stock levels, and order data sync seamlessly across both channels, which helps avoid overselling.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Email Marketing Integration",
    description:
      "Marketing campaigns and email marketing tools connect directly with sporting goods POS software, helping feed targeted promotions to the right audience at the right time. This builds strong customer relationships.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/sporting-goods-pos/key-features-section/key-feature-card5.webp",
  },

];

export const SPORTING_GOODS_WORKFLOW_DATA = {
  heading: "Workflows of Our Sporting Goods Point-of-Sale System",
  paragraph:
    "Our software follows the complete operational cycle of a sporting goods store from catalog organization and daily transactions to end-of-day performance review. It keeps inventory accurate and store operations visible without manual intervention.",
  steps: [
    {
      number: 1,
      title: "Catalog Organization",
      description:
        "All products are entered in the POS system with their name, size, category, and models. Large inventories are loaded quickly through bulk import. The entire range is organized by category and ready to track from day one without a slow manual entry process holding the sporting store back from opening to serve customers.",
    },
    {
      number: 2,
      title: "Customer Identification",
      description:
        "When a customer reaches a counter, their customer profile pulls up instantly, showing purchase history, preferred product categories, and the current customer loyalty points balance. Staff recognize returning customers and can apply earned loyalty points. It helps deliver a more personalized experience.",
    },
    {
      number: 3,
      title: "Transaction Building",
      description:
        "After adding all products, the transaction is built. The complete total, including taxes and any active promotion, is confirmed before the customer reaches for payment without counter staff calculating anything manually at any stage of the checkout process.",
    },
    {
      number: 4,
      title: "Payment Processing",
      description:
        "The sporting goods POS supports cash, debit card, credit card, and contactless payment options. It also offers a split payment option through one screen. Every payment processing closes in seconds and records against the store’s performance data.",
    },
    {
      number: 5,
      title: "Performance Review",
      description:
        "End-of-day reports show which sporting goods sold across each category, which variants performed strongest, and which items are approaching low stock levels. Owners can use this inventory data to save time on restocking decisions, simplify procurement planning for the next growth period, and grow their sporting business.",
    },
  ],
};

export const SPORTING_GOODS_TESTIMONIALS = [
  {
    id: "1",
    name: "Josephine Harrison",
    title: "Sporting Goods Store Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image53.webp",
    text: "We carry over 2,000 SKUs across sizes and colors. Stock figures used to be wrong every week. Since switching to Owners Inventory, everything matches the shelf accurately.",
  },
  {
    id: "2",
    name: "Rhett Peterson",
    title: "Athletic Wear Retailer",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image54.webp",
    text: "Seasonal restockings used to be pure guesswork. The reports now show exactly what moved fastest last season, and we enter every period properly stocked.",
  },
  {
    id: "3",
    name: "Eleanor Gray",
    title: "Multi-Store General Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image54.webp",
    text: "Online and in-store stock finally stays aligned. Three overselling incidents in one month before switching. Zero since we made the change.",
  },
  {
    id: "4",
    name: "Vivienne Anderson",
    title: "Outdoor Gear Shop Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image55.webp",
    text: "The loyalty program brought customers back more consistently. Repeat purchases from returning athletes went up noticeably within the first two months.",
  },
  {
    id: "5",
    name: "Emmett Shaw",
    title: "Sporting Goods Store Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image55.webp",
    text: "End-of-day reconciliation used to take forty-five minutes. Now the dashboard already has everything calculated the moment we close up each evening.",
  },
  {
    id: "6",
    name: "Slade Collins",
    title: "Athletic Wear Retailer",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image56.webp",
    text: "Setup was faster than we expected. The whole team was processing real-time transactions within hours, and nobody needed formal training to become comfortable.",
  },
  {
    id: "7",
    name: "Genevieve Wood",
    title: "Multi-Store General Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image56.webp",
    text: "Purchase order management changed how we work with suppliers completely. Every delivery updates stock automatically, and procurement records stay accurate without any manual entry.",
  },

];

export const SPORTING_GOODS_FAQS = [
  {
    id: "1",
    question:
      "Can Owners Inventory handle products with different sizes and color variants?",
    answer:
      "Every product is tracked individually by variant inside the system. Stock levels update with every transaction, so figures for each size and color combination stay accurate.",
  },
  {
    id: "2",
    question:
      "How does the system manage seasonal inventory fluctuations?",
    answer:
      "Real-time sales reports show which product lines move fastest before each season. Store owners use this data to restock accurately before demand peaks, preventing stock shortages.",
  },
  {
    id: "3",
    question:
      "How does the POS handle large sporting goods catalogs?",
    answer:
      "Large catalogs load through bulk import via CSV and Excel files. Catalogs, cross-equipment, apparel, and footwear are organized effectively so they are ready to sell as the store opens.",
  },
  {
    id: "4",
    question: "Can I manage multiple sporting store locations from a single system?",
    answer:
      "Yes, stock levels, sales performance, and daily operations across every location are visible from one centralized dashboard without switching between separate systems for each branch.",
  },
  {
    id: "5",
    question:
      "How does the system manage purchase order management for sporting goods suppliers?",
    answer:
      "Purchase orders are directly created and tracked inside the system. Incoming stock is verified against supplier orders on arrival, and inventory updates instantly without separate procurement tools.",
  },
];



export const SPORTING_GOODS_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say",
  paragraph: "",
  secondHeading: "Every Season Starts with the Right System",
  secondDescription: "Sporting goods businesses move fast, and the margin for operational errors is thin. Owners Inventory keeps every product tracked, every channel synced, and every customer rewarded so the store performs at its best regardless of what the season demands.",
  whyChooseTitle: "Why Choose Owners Inventory for Your Sporting Goods Business?",
  whyChooseDescription:
    "Owners Inventory gives sporting goods retailers a POS system and inventory management platform that handle requirements of sporting goods stores effectively. Our efficient retail management software handles stocks, financial records, and overall business data with accuracy.",
};

export const SPORTING_GOODS_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy to Set Up",
    description:
      "Our POS software is easy to set up and use, requiring no specific training for staff to handle store operations.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Multi-Channel Handling",
    description:
      "It connects essential eCommerce platforms and marketing tools, allowing owners to manage store operations without needing several separate systems and tools.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "No Long-Term Contracts",
    description:
      "Our software runs on a flexible monthly subscription. Store owners can upgrade, switch, or cancel anytime without being tied to agreements.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Works on Existing Devices",
    description:
      "The system runs on existing hardware without requiring dedicated equipment purchases. Sporting store owners get a fully functional POS without additional investment.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "24/7 Support",
    description:
      "Support is accessible through chat, email, and phone at any time. Sporting goods teams get immediate assistance if they face difficulties when operating anything.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Easy Scalability",
    description:
      "Our software scales as your business expands or shifts to multiple locations. With simple upgrades, sporting businesses get advanced features that support complex operational handling.",
    icon: "testWhychoseIcon6",
  },
];

export const SPORTING_GOODS_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "The software connects essential tools and platforms like WooCommerce and Shopify. It integrates seamlessly with payment gateways and marketing tools. All records stay synchronized across connected platforms, ensuring that daily performance reports are accurate.",
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
