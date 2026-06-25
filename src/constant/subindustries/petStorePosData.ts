import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Pet Store POS — UnifiedPlatform Section ──────────────────────────
export const PET_STORE_UNIFIED_HEADING = "Challenges Faced by Today’s Pet Stores";

export const PET_STORE_UNIFIED_PARAGRAPH = "Pet store owners face operational challenges that generic retail systems often fail to solve. From managing expiry-sensitive products to handling diverse SKUs, these issues directly impact sales and customer satisfaction.";

export const PET_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Complex Inventory Variety",
    description: "Pet stores carry a large variety of products, such as food, supplements, grooming supplies and accessories. Such a wide range of inventory is hard to keep track of and can lead to errors without a specialized POS system.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Expiry and Stock Rotation Issues",
    description: "Many pet products, especially food and healthcare items, have expiration dates. Without proper tracking and stock rotation, stores risk product waste and customer dissatisfaction.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Inconsistent Stock Levels",
    description: "Some items are in high demand and are sold out right after they get to the shelves, while others that are moving more slowly stay on the shelf and sit unsold. In some cases this causes an imbalance in the inventory planning process.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Slow Checkout Process",
    description: "When dealing with a variety of products at the counter without a streamlined POS, the billing process can become time consuming, particularly during busy periods, resulting in customer dissatisfaction.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Lack of Customer Tracking",
    description: "If the system is not in place, pet stores will have a harder time discerning what customers are buying, which will make it more difficult to make tailored suggestions or create loyalty.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Disconnected Operations",
    description: "If in-store and supplier information is not linked, it will be hard to keep up-to-date stock control and make timely replenishment decisions.",
  },
];

export const PET_STORE_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Smart Inventory Management",
    description: "All pet products from food to toys, medicine, and grooming products are tracked in real time and provide accurate stock visibility and improved reordering decisions.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Expiry Date Tracking",
    description: "Built-in expiry management allows the store owner to keep track of pet food and health products, minimizing waste and stocking only fresh products.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Real-Time Stock Updates",
    description: "Every sale instantly updates inventory levels, helping store owners maintain balanced stock and avoid both shortages and overstocking.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Fast and Simple Checkout",
    description: "The barcode scanning technology and automated billing process helps speed up transactions, even during peak store hours, enhancing the customer experience.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Customer Purchase Insights",
    description: "The system keeps track of purchase history and enables the store owner to see pet owners’ preferences and make better recommendations and targeted promotions.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Unified Store Management",
    description: "All sales, inventory, and supplier information are handled in one system to provide accurate reporting and ease of day-to-day operation.",
  },
];

export const PET_STORE_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel Sales Integration for Pet Stores",
    description:
      "All sales channels are integrated into one system. All transactions are synced in a single system for accurate tracking and reporting, regardless of whether the customer is in-store, on the web or using integrated marketplaces.",
    imageSrc: "/assets/industries-pages/pet-store-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "All the transactions made on the Pet Store counter are reflected in the system in real time. The system automatically updates inventory after each purchase and also records the customer's purchase history, as well as loyalty points, with their profile without having to manually input any data by staff.",
      },
      {
        listheading: "Online and In-Store Order Sync",
        listdescription:
          "Both shop and online sales channels connect to a live inventory when integrated with an online store. This will not oversell and keeps stocks accurate throughout all platforms.",
      },
      {
        listheading: "Unified Sales Dashboard",
        listdescription:
          "This is on a single dashboard and shows all transactions – in store sales, online orders and bulk buying. This enables store owners to keep an eye on real-time performance without having to switch between systems.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "It offers comprehensive information on sales trends, customer behavior, and inventory performance. Owners and managers of pet stores can easily determine what toys are popular, which ones aren't moving and how the store is doing overall throughout the day to make business decisions.",
    imageSrc: "/assets/industries-pages/pet-store-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const PET_STORE_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Multi-Category Product Management",
    description:
      "Organize products by food, accessories, grooming, healthcare, and track everything with detailed SKU and barcode tracking for greater accuracy.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Expiry and Batch Tracking",
    description:
      "Track product batches and expiration dates with ease using built-in expiry and batch management tools. The system helps store owners identify products nearing expiration, follow proper stock rotation practices, and reduce waste.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Custom Discount Management",
    description: "Apply discounts on pet bundles, seasonal offers, or promotional products automatically during checkout without manual calculations.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Subscription and Auto-Ship Orders ",
    description: "Set up recurring orders for food, litter, and treats so loyal customers receive their regular products automatically, building steady repeat revenue with no manual reordering.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Accurate Order Processing",
    description:
      "Handle customized pet product bundles and special customer requests with precise order tracking and fulfillment.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Supplier and Purchase Management",
    description:
      "Create and control purchase orders directly in the system, monitor supplier deliveries and keep a proper record of inflow of stock.",
    imageSrc:
      "/assets/industries-pages/pet-store-pos/key-features-section/key-feature-card6.webp",
  },
];

export const PET_STORE_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory for Pet Stores",
  paragraph:
    "The system is designed to mirror the day-to-day operations of a pet store. Each step will help in precise inventory control, quicker checkout, comprehensive visibility into operations while minimizing manual work for employees.",
  steps: [
    {
      number: 1,
      title: "Catalog Setup and Organization",
      description:
        "Pet products are added into the system with all the relevant information: name, SKU, category, price, and expiry (if any). Categories may include pet food, grooming implements, toys, medicines and accessories. The bulk import options allow large product catalogs to be easily organized in the POS.",
    },
    {
      number: 2,
      title: "Customer Identification at the Counter",
      description:
        "When the customer arrives at the counter, the cashier will have access to the customer's profile. Their pets' purchase history, preferences, and loyalty points appear on screen.",
    },
    {
      number: 3,
      title: "Transaction Building and Pricing",
      description: "Pet products are scanned by staff either via barcodes or by picking from the product system including variations like size, brand or formula type. Discounts, bundles and promotional pricing can all be applied within the same interface.",
    },
    {
      number: 4,
      title: "Seamless Payment Processing",
      description: "The POS enables several payment options such as cash, card, mobile wallets, and split payment. A fast and simple way to complete transactions without switching between tools. ",
    },
    {
      number: 5,
      title: "Performance Review and Restocking",
      description:
        "At the end of the day, the dashboard offers an easy-to-understand view of sales activity and stock turnover. Pet store owners can view the top-selling products, slow-moving items, and items that are running low.",
    },
  ],
};

export const PET_STORE_TESTIMONIALS = [
  {
    id: "1",
    name: "Madeline James",
    title: "Pet Store Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image57.webp",
    text: "Previously, it was a headache to manage the expiry dates of pet food, but with the system, we are getting alerted automatically and there is a lot less waste!",
  },
  {
    id: "2",
    name: "Zane Watson",
    title: "Pet Supply Retailer",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image57.webp",
    text: "It used to be difficult to keep track of various products for pets such as food, toys, grooming products, and more. Now they're all in one place and easy to keep track of.",
  },
  {
    id: "3",
    name: "Caroline Watson",
    title: "Multi-Store General Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image58.webp",
    text: "Before Owners Inventory, we used to experience stockouts on our best sellers, but since the change we are always prepared to order the items that are selling out in our store.",
  },
  {
    id: "4",
    name: "Mackenzie Kelly",
    title: "Pet Boutique Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image59.webp",
    text: "When customers used to purchase lots of pet items, checkout would be quite slow, but now we have the barcodes to scan and bill quickly and smoothly, even during peak hours.",
  },
  {
    id: "5",
    name: "Crew James",
    title: "Pet Store Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image58.webp",
    text: "We now truly know what our customers are purchasing for their pets and the sales information enabled us to tweak our offerings and make sales better.",
  },
  {
    id: "6",
    name: "Tanner Wood",
    title: "Pet Supply Retailer",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image59.webp",
    text: "Managing multiple pet store locations used to be confusing. Now we can see all branches in one dashboard without switching systems.",
  },
  {
    id: "7",
    name: "Gage Brooks",
    title: "Multi-Store General Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image60.webp",
    text: "The loyalty feature actually made a difference for us. Pet owners come back more often because their rewards are tracked automatically.",
  },
];

export const PET_STORE_FAQS = [
  {
    id: "1",
    question:
      "Can I manage pet food expiry dates in the system?",
    answer:
      "Yes, this is possible in the system, whereby expiry dates and batch numbers can be tracked for effective stock rotation and minimization of product waste.",
  },
  {
    id: "2",
    question:
      "How does the POS handle discounts and promotions?",
    answer:
      "Discounts or special offers are set in the system and applied automatically at checkout as they are calculated correctly without manual calculation. ",
  },
  {
    id: "3",
    question:
      "Can I upload my full pet product catalog at once?",
    answer:
      "Yes, you can import your full product catalog in Excel or CSV file format and get set up quickly and efficiently, without having to manually enter your products.",
  },
  {
    id: "4",
    question: "Can the system manage multiple pet store locations?",
    answer: "Absolutely, it does make it possible to manage the inventory, sales, and performance of each branch from a centralized location.",
  },
  {
    id: "5",
    question: "Does it track customer purchase history for pet products?",
    answer: "Yes, customers' purchasing patterns and preferences are recorded and used to make tailored recommendations to staff, thus enhancing repeat sales.",
  },
];

export const PET_STORE_KEY_FEATURES = [
  {
    id: "pet-store-billing",
    title: "Touchscreen Order & Billing",
    description:
      "Process customer product orders quickly with customizable touchscreen menus and instant bill split options.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "pet-store-stock-control",
    title: "Inventory and Stock Control",
    description:
      "Keep track of active product stock, variants, and bundle packages. Avoid running out of best-sellers during high demand.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "pet-store-vendor-mgmt",
    title: "Distributor and Supplier Management",
    description:
      "Manage pet supply brands, track purchase order costs, issue POs, and monitor warehouse delivery arrivals.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "pet-store-variants",
    title: "Size & Flavor Customization",
    description:
      "Configure product sizes, flavors, species types, and accessories as modifiers attached to base product listings.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "pet-store-loyalty",
    title: "Customer & Loyalty Programs",
    description:
      "Drive repeat visits with integrated loyalty accounts, digital store credit, and email promotion campaigns.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "pet-store-finances",
    title: "Shift Cash and Card Tracking",
    description:
      "Monitor sales summaries, card processing, cash drawer entries, and shift cashier handovers in real time.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "pet-store-ecommerce",
    title: "Online Ordering and Store Sync",
    description:
      "Integrate online store orders with your counter terminal, ensuring unified stock levels for both channels.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const PET_STORE_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Start Managing Your Pet Store Smarter Today",
  secondDescription: "Gain full control of your inventory, sales and day to day business with the Pet Retailer POS system. Simplify workflow, minimize manual effort and make data-informed decisions effortlessly. ",
  whyChooseTitle: "Why Choose Owners Inventory for Your Pet Store?",
  whyChooseDescription:
    "Owners Inventory is the right pet store POS for owners who want a specialized system that handles the unique demands of pet retail.",
};

export const PET_STORE_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy to Use",
    description:
      "Our system is so easy to use that staff can run it with no training. The interface is simple, intuitive and built to maintain continuity of busy counter operations. There is help on hand throughout the store's hours of operation.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Specialized for Pet Retail",
    description:
      "It's programmed to meet the needs of all kinds of pet stores, from food to grooming, toys to supplements, and health care products. It helps to have complex catalogs organized and easy to manage even during the peak sales time.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "No Hardware Dependency",
    description:
      "Our system is not an expensive system which needs hardware set up or any binding contract, it is compatible with your current system. No extra barcode scanners or equipment upgrades required.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Expiry and Stock Awareness",
    description: "There are times when products such as pet food and health care products will expire. The system has a capacity for expiry and batch tracking to enable proper rotation of the stock, reduce the waste and ensure the product quality.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Transparent Pricing Structure",
    description:
      "No hidden fees for adding products, accessing reports or growing your store online. You only pay for the features your business actually uses.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Grow Alongside the Business",
    description: "This system can be scaled to work for a single pet business or an expanding chain. You can scale without changing platforms or re-developing your process.",
    icon: "testWhychoseIcon6",
  },
];

export const PET_STORE_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph: "It seamlessly connects to tools such as Shopify, WooCommerce, QuickBooks, and payment gateways. This allows for seamless data transfer and synchronization with sales, accounting, and marketing tools, eliminating the need for manual data entry and duplication.",
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
