import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Thrift Store POS — UnifiedPlatform Section ──────────────────────────
export const THRIFT_STORE_UNIFIED_HEADING = "Challenges Faced by Today’s Thrift Stores";

export const THRIFT_STORE_UNIFIED_PARAGRAPH = "Generic retail systems do not necessarily meet the needs of owners of thrift stores. These problems can impact profitability and customer satisfaction, ranging from the management of one-of-a-kind products to the quick changes in stock.";

export const THRIFT_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Constantly Changing Inventory",
    description: "Thrift stores frequently accept secondhand items and donations, unlike conventional retail shops. Inventory gets more complex and time-consuming with the constant stream of new products.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Unique and One-of-a-Kind Products",
    description: "Many items found in thrift stores are one of a kind and only a single item will be available. To prevent discrepancies in inventory and sale errors, it is crucial to accurately track these products.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Pricing Management Difficulties",
    description: "There are times when thrifts must be able to offer some flexibility in the pricing of the items available, depending on the condition, the brand, the age, the demand, the promotion, or any other factor. Managing these variations manually creates inconsistencies.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Slow Checkout Process",
    description: "In the absence of a structured POS system, cashiers might be forced to invest additional time looking for product information and manually inputting prices, which can lead to longer customer queues.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Limited Inventory Visibility",
    description: "Without real-time data, store owners have no clear visibility into which products are selling quickly and which have been sitting unsold for extended periods.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Disconnected Store Operations",
    description: "Having a disjointed approach of managing donations, inventory, sales and reporting using separate systems can lead to inefficiencies and less operational visibility.",
  },
];

export const THRIFT_STORE_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory Tracking",
    description: "All items donated, consigned or purchased are accounted for in the system, providing accurate stock visibility and eliminating the likelihood of loss, damage, or misplacement.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Unique Item Management",
    description: "Individual product tracking is possible which simplifies the management of one of a kind products, vintage items, collectibles and specialty products.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Flexible Pricing Controls",
    description: "Store owners can easily set a custom price, offer discounts, create promotions and update pricing strategies as necessary due to stock flow and customer demand.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Faster Checkout Experience",
    description: "The use of barcode scanning and automated billing streamlines transactions, minimizing waiting time and enhancing the shopping experience.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Sales and Inventory Insights",
    description: "Detailed reporting enables sellers to determine which categories are selling well, what items are moving the fastest, and to buy and price the items accordingly.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Centralized Store Management",
    description: "From a single platform sales transactions and inventory records, donations, price lists, customer information and business reports are managed for greater operational efficiency.",
  },
];

export const THRIFT_STORE_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales Integration for Thrift Stores",
    description: "All sales channels are integrated in a single system. Every in-store, online thrift store and integrated marketplace transaction automatically updates the inventory and reports accurately.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription: "All sales made at the checkout counter of the thrift store are tracked in real time. Automatic updates happen after each transaction to help keep inventory accurate and to minimize manual data entry for employees.",
      },
      {
        listheading: "Online and In-Store Order Sync",
        listdescription: "Online and offline sales utilize the same up-to-the-minute inventory when connected to an eCommerce system. This avoids over selling, maintains accurate stock levels and ensures that there is a consistent shopping experience for all channels.",
      },
      {
        listheading: "Unified Sales Dashboard",
        listdescription: "The owners of the store can track everything that occurred during the sale from one dashboard, from in-store sales, online orders, special promotions to bulk sales. This gives full visibility of business performance, without having to switch between different systems.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description: "Get a detailed view of sales trends, inventory turns, product performance and customer purchasing habits. Owners of stores can find out what items are selling best, what items are not selling well, and make more informed merchandising decisions.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const THRIFT_STORE_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Unique Item Inventory Management",
    description: "Incorporate product detail, custom categories, SKU assignments and bar code support to accurately track donated, consigned, vintage, and second hand items.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Flexible Pricing and Tag Management",
    description: "Set item-specific prices based on condition, brand, demand, or category.  Quickly generate price labels and change product prices as needed.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Custom Discount Management",
    description: "Automatically apply store-wide, seasonal sales, clearance discounts or category specific sales during checkout without manual calculations.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Accurate Sales Processing",
    description: "Process one-of-a-kind products, multiple item sales, and special promotions accurately with transaction and inventory processing.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Donation and Inventory Tracking",
    description: "Log all donated items, monitor stock received and keep all items received organized to have total transparency of stock movements.",
    imageSrc: "/assets/industries-pages/thrift-store-pos/key-features-section/key-feature-card5.webp",
  },
];

export const THRIFT_STORE_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory for Thrift Stores",
  paragraph: "The system is designed to match the daily operations of a thrift store. Each step helps improve inventory accuracy, streamline sales processes, and increase visibility into store performance.",
  steps: [
    {
      number: 1,
      title: "Catalog Setup and Organization",
      description: "Products are added by relevant attributes, like product name, product category, condition, price, SKU and barcode information. This can include things like clothing, furniture, home decor, books, electronics, accessories, and collectibles.",
    },
    {
      number: 2,
      title: "Item Identification at Checkout",
      description: "Staff can easily locate products at the counter by scanning a bar code or searching for the product. Product details, prices and promotional offers are immediately available, making for accurate transactions.",
    },
    {
      number: 3,
      title: "Transaction Building and Pricing",
      description: "Staff use a scanner to scan the product or they select from the inventory database. Discounts, Promotional pricing, clearance offers, and other special sales events can be automatically applied in the checkout interface.",
    },
    {
      number: 4,
      title: "Seamless Payment Processing",
      description: "The POS offers the flexibility of numerous payment options such as cash, credit and debit cards, mobile wallets, and split payments. There is no need to switch between different systems for transactions.",
    },
    {
      number: 5,
      title: "Performance Review and Inventory Monitoring",
      description: "Store owners can review detailed reports of sales performance, stock turnover, most popular product categories, as well as slow-moving items, at the end of the day. This information can be used to make better pricing decisions and inventory planning.",
    },
  ],
};

export const THRIFT_STORE_TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah L",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image67.webp",
    text: "Previously, tens of thousands of donated and second-hand items were extremely difficult to keep track of. Now they are all organized and accessible in a matter of seconds.",
  },
  {
    id: "2",
    name: "Daniel M",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image68.webp",
    text: "New products comes in daily, and the system lets us know exactly where each piece is at all times, from the time it arrives until the sale.",
  },
  {
    id: "3",
    name: "Ayesha K",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image68.webp",
    text: "Owners Inventory has helped us keep track of any unique items that we had lost before use and inventory discrepancies have been reduced significantly.",
  },
  {
    id: "4",
    name: "Omar R",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image68.webp",
    text: "Checkout used to be very slow on busy weekends, but with barcode scanning and automated pricing it is much quicker, with significantly less time spent waiting.",
  },
  {
    id: "5",
    name: "Jessica P",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image67.webp",
    text: "The reporting tools enabled us to know what works best in the categories and the products that sit on our shelves for too long, which has helped us to make better pricing decisions.",
  },
  {
    id: "6",
    name: "Hassan A",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image68.webp",
    text: "Managing multiple thrift store locations was difficult before. Now we can monitor inventory and sales across all branches from one dashboard.",
  },
  {
    id: "7",
    name: "Michael B",
    title: "Thrift Store Client",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image68.webp",
    text: "The centralized inventory system has saved us countless hours of manual work and made daily operations much more efficient.",
  },
];

export const THRIFT_STORE_FAQS = [
  {
    id: "1",
    question: "Can I track donated inventory in the system?",
    answer: "Yes, it offers you the ability to track the incoming inventory, manage the merchandise that you have donated and keep a record of it, which is very convenient.",
  },
  {
    id: "2",
    question: "How does the POS handle discounts and promotions?",
    answer: "Discounts, clearance, seasonal offers, special offers can be set up in the system and automatically applied at checkout without the need for manual calculations.",
  },
  {
    id: "3",
    question: "Can I upload my existing inventory all at once?",
    answer: "Yes, you can import product information from an excel or CSV file, which enables you to set up your inventory very fast without having to enter the products manually one by one.",
  },
  {
    id: "4",
    question: "Can the system manage multiple thrift store locations?",
    answer: "Absolutely. The system enables you to track your stock, sales, and performance at various locations in one place.",
  },
  {
    id: "5",
    question: "Does it track sales history and item performance?",
    answer: "The system keeps track of sales activity, and detailed reports on product performance, inventory turnover and popular categories will be produced to help make sound business decisions.",
  },
];

export const THRIFT_STORE_KEY_FEATURES = [
  {
    id: "thrift-store-billing",
    title: "Easy to Use Register POS",
    description: "Easy to use interface keeps lines moving smoothly and minimizes training of new staff members at checkouts.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "thrift-store-stock-control",
    title: "Built for Thrift Store Operations",
    description: "Easy management of unique products, donated stock, fluctuating stock levels and flexible pricing.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "thrift-store-vendor-mgmt",
    title: "No Hardware Dependency",
    description: "Owners Inventory will help you get started with your existing equipment, no big investment required.",
    imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "thrift-store-variants",
    title: "Complete Inventory Visibility",
    description: "The system gives up-to-the-minute visibility of stock levels, item movement, and product availability.",
    imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "thrift-store-loyalty",
    title: "Transparent Pricing Structure",
    description: "No hidden costs for adding products, accessing reports or growing your business.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "thrift-store-finances",
    title: "Grow Alongside Your Business",
    description: "Whether you operate a single thrift store or multiple locations, the system scales with your business.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
];

export const THRIFT_STORE_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Start Managing Your Thrift Store Smarter Today",
  secondDescription: "Every aspect of your inventory, sales, donations, and daily operations is now under your control with the Thrift Store POS system. Efficient workflows, automate repetitive tasks, enhance inventory management and make informed business decisions with real-time data and reports.",
  whyChooseTitle: "Why Choose Owners Inventory for Your Thrift Store?",
  whyChooseDescription: "Owners Inventory is the ideal solution for store owners who require a thrift store POS system tailored to the needs of second-hand retail, donation, and inventory that is in constant flux.",
};

export const THRIFT_STORE_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy to Use",
    description: "We are working with simplicity in mind and staff can easily learn and use our system. Easy to use interface keeps lines moving smoothly and minimizes training of new staff members at checkouts. Support is available whenever it is needed.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Built for Thrift Store Operations",
    description: "The site is specifically geared in the direction of thrift stores, consignment shops, resale retailers and secondhand shops. Easy management of unique products, donated stock, fluctuating stock levels and flexible pricing.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "No Hardware Dependency",
    description: "No expensive hardware installation, long-term contracts are not required. Owners Inventory will help you get started with your existing equipment, no big investment required.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Complete Inventory Visibility",
    description: "The thrift stores are replenished on a regular basis, so inventory monitoring is critical. The system gives up-to-the-minute visibility of stock levels, item movement, and product availability to prevent stock discrepancies.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Transparent Pricing Structure",
    description: "No hidden costs for adding products, accessing reports or growing your business. The cost will be predictable and manageable, only paying for the features that your business needs.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Grow Alongside Your Business",
    description: "Whether you operate a single thrift store or multiple locations, the system scales with your business. Expand your operations without changing software platforms or disrupting existing workflows.",
    icon: "testWhychoseIcon6",
  },
];

export const THRIFT_STORE_TOOLS_DATA = {
  heading: "Integration with Tools",
  paragraph: "The system seamlessly connects with platforms like Shopify, WooCommerce, QuickBooks, and payment gateways and business tools. This eliminates duplicated data entry and ensures that sales, accounting and inventory data is synced up.",
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
