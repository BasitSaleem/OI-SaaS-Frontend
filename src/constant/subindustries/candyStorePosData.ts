import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Candy Store POS — UnifiedPlatform Section ──────────────────────────
export const CANDY_STORE_UNIFIED_HEADING =
  "Challenges Faced by Today's Candy Stores";

export const CANDY_STORE_UNIFIED_PARAGRAPH =
  "Candy store owners deal with problems that generic retail systems cannot handle. From bulk candy tracking to seasonal demand swings, these are the gaps that quietly affect revenue over time.";

export const CANDY_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Untracked Bulk Inventory",
    description:
      "Selling bulk candy by weight without a specialized POS system, stock levels are never fully accurate. Stock movements remain unrecorded throughout the day, making reordering decisions unreliable and leaving shelves empty.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Seasonal Stock Gaps",
    description:
      "Demand for sweet treats spikes unpredictably around key seasons. Without real-time inventory management, candy store owners overbuy slow-selling items and run short on popular products before peak trading periods.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Slow Counter Operations",
    description:
      "A candy shop handling busy counters without an efficient point-of-sale system for candy stores turns checkout into a time-consuming procedure. Slow processing during busy hours frustrates buyers and damages the brand's reputation.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Missing Sales Intelligence",
    description:
      "Without analytics tracking individual SKUs and product categories, candy store owners restock on assumptions. Customer preferences stay invisible, and bulk products keep taking valuable shelf space.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Loyalty Structure",
    description:
      "Running a candy shop without a built-in loyalty program means repeat customers leave without any reason to return, which lowers the chances of repeat business.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Disconnected Store Operations",
    description:
      "Online orders, in-store purchases, and bulk inventory managed across separate tools create constant data mismatches. It becomes difficult to make decisions that can actually grow your business.",
  },
];

export const CANDY_STORE_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Accurate Product Tracking",
    description:
      "It seamlessly tracks bulk candy and individual items together inside the same candy store POS software. Candy inventory is tracked accurately, which helps identify best-selling items and flavors, improving restocking decisions.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Real-time Inventory Control",
    description:
      "The candy store point-of-sale gives real-time visibility into stock movements. It shows which items are low in stock and which ones are taking up extra shelf space. It provides accurate stock availability data.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Faster Checkout",
    description:
      "The system simplifies checkout processes. Cashiers use barcode scanning and automatic billing features to handle each payment efficiently. It improves customer satisfaction and ensures that your candy store counter is organized.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Valuable Sales Features",
    description:
      "The analytics of our software provide store owners with valuable insights into products that perform well or underperform. It helps candy stores stay stocked with items that customers buy.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Built-in Loyalty Program",
    description:
      "Our candy store POS services include a loyalty program that tracks rewards automatically for every customer loyalty profile. It ensures that customers coming back are recognized instantly.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Single Platform for All Operations",
    description:
      "The system brings sales and inventory together across all channels into a single platform. It ensures that pricing and inventory stay aligned without reconciling figures from separate tools.",
  },
];

export const CANDY_STORE_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales Integration for Candy Stores",
    description:
      "Our software connects every sales channel and marketing tool into one connected system. When a customer walks into a candy store, places an online order, or buys through a connected marketplace, every transaction feeds into the same system. This helps keep accurate sales records across all channels.",
    imageSrc: "/assets/industries-pages/candy-store-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales ",
        listdescription:
          "Every product sold at the candy store counter updates inventory the moment the transaction is closed. The cashier does not enter anything manually after sales stock figures adjust automatically, and the customer loyalty profile updates instantly. The transactions appear in the daily performance data without an additional step required from the counter team.",
      },
      {
        listheading: "Online and In-Store Order Sync",
        listdescription:
          "When a candy store connects its physical counter to an online store through Owners Inventory, both channels draw from the same live inventory. Sold products are deducted from inventory immediately. The system ensures that your inventory channels are accurately synchronized.",
      },
      {
        listheading: "Unified Sales Dashboard",
        listdescription:
          "Candy store transactions, counter sales, online orders, and bulk products purchased through wholesale appear together inside one centralized system. It helps owners monitor all store activity from a single dashboard without needing multiple tools or switching screens.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "The software provided detailed reports of the candy shop's performance. It highlights best-selling items, overstocked products, daily sales, and transactions processed. Every purchase order becomes precise when it is made through real-time reports that show valuable insights.",
    imageSrc: "/assets/industries-pages/candy-store-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const CANDY_STORE_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Product Variant and SKU Management",
    description:
      "Every candy product is organized inside the system with its unique barcode, SKU, price, and category. It can manage thousands of SKUs without losing the accuracy of any product line.",
    imageSrc:
      "/assets/industries-pages/candy-store-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Bulk Product Handling",
    description:
      "Staff can load bulk products into the POS, which helps get candy inventory organized and ready to sell from the counter without a slow setup process holding operations back.",
    imageSrc:
      "/assets/industries-pages/candy-store-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Customizable Discounts",
    description:
      "Discounts on seasonal candy, promotional bundles, and clearance sweet treats are applied automatically with each transaction. It handles pricing adjustments without needing the cashier to enter or calculate anything manually.",
    imageSrc:
      "/assets/industries-pages/candy-store-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Accurate Order Capturing",
    description:
      "The software captures custom candy orders accurately, such as gift packs, sizes, candy flavors, and different variants. It makes sure that every customer is served with their specifically ordered sweet items.",
    imageSrc:
      "/assets/industries-pages/candy-store-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Purchase Order Management",
    description:
      "It lets store owners create and track purchase orders for bulk candy suppliers directly inside the system while recording incoming stock precisely, keeping stock levels visible, and organizing supplier transactions.",
    imageSrc:
      "/assets/industries-pages/candy-store-pos/key-features-section/key-feature-card5.webp",
  },
];

export const CANDY_STORE_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory for Candy Stores",
  paragraph:
    "The software fits the natural workflow of running a candy shop. Every step keeps inventory accurate, checkout processes fast, and store operations fully visible without adding manual work to the team.",
  steps: [
    {
      number: 1,
      title: "Catalog Setup and Organization",
      description:
        "Candy products are added to the system with their names, prices, categories, and SKUs, whether they are bulk candy lines, packaged confections, or seasonal treats. With the bulk import feature, large catalogs are handled effectively. They are organized in the POS to start the selling procedure without needing to manually scroll through products.",
    },
    {
      number: 2,
      title: "Customer Identification at the Counter",
      description:
        "When a customer reaches the candy store counter, the cashier pulls up their profile instantly. Purchase history, loyalty rewards balance, and preferences are visible on the screen. Returning customers are recognized, earned discounts are applied automatically, and the interaction feels personal from the very first moment, which enhances the customer experience.",
    },
    {
      number: 3,
      title: "Transaction Building and Pricing",
      description:
        "Staff members scan each product using a barcode, select bulk candy quantities, and apply any active discounts or promotional pricing on the same billing screen. It builds a complete transaction summary in real time. It calculates everything accurately before the payment is completed.",
    },
    {
      number: 4,
      title: "Seamless Payment Processing",
      description:
        "The POS accepts multiple payment methods, including cards, cash, contactless payment, and split payment combinations through one screen. Every transaction closes in seconds without requiring the cashier to switch between tools or record transactions manually.",
    },
    {
      number: 5,
      title: "Performance Review and Restocking",
      description:
        "At the end of the day, the analytics dashboard provides a complete breakdown of sales and inventory. The dashboard shows which candy lines sold fastest, which bulk products are approaching low stock, and which SKUs barely moved throughout the shifts. It helps you make every business decision based on real-time data, helping your business grow faster.",
    },
  ],
};

export const CANDY_STORE_TESTIMONIALS = [
  {
    id: "1",
    name: "Peyton Coleman",
    title: "Candy Store Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image30.webp",
    text: "Bulk candy tracking used to take two hours every morning. Now it is done automatically. We have not done a manual stock count in three months.",
  },
  {
    id: "2",
    name: "Colton Murphy",
    title: "Candy Store Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image31.webp",
    text: "Reduced seasonal overstock by 35% this Halloween compared to last year. The reports showed exactly what was moving, so we ordered smarter.",
  },
  {
    id: "3",
    name: "Sadie Murphy",
    title: "Dessert Shop Operator",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image31.webp",
    text: "Loyalty program members' repeat visits are up noticeably within the first six weeks. Customer satisfaction has increased significantly.",
  },
  {
    id: "4",
    name: "Dominic Rivera",
    title: "Multi-Location Shop Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image32.webp",
    text: "Checkout time dropped by half during peak hours. The queue that used to build every Saturday afternoon just does not happen anymore.",
  },
  {
    id: "5",
    name: "Camila Rivera",
    title: "Dessert Shop Operator",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image32.webp",
    text: "Online and in-store stock finally matched, and we have not accidentally oversold products since switching to Owners Inventory.",
  },
  {
    id: "6",
    name: "Aria Powell",
    title: "Multi-Location Shop Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image33.webp",
    text: "Identified five underperforming product lines in the first two weeks of using their POS. We replaced them and got a 20% margin improvement in the following month.",
  },
  {
    id: "7",
    name: "Zachary Powell",
    title: "Multi-Location Shop Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image33.webp",
    text: "Pricing errors at checkout dropped after we set our discounts inside the system. Our billing procedures are 2x faster than before.",
  },
];

export const CANDY_STORE_FAQS = [
  {
    id: "1",
    question: "Can I manage seasonal candy stock through the system?",
    answer:
      "Yes, real-time inventory data shows which products are depleting faster, so candy store owners can restock before peak season rather than discovering shortages when demand is already at its highest.",
  },
  {
    id: "2",
    question: "How does the POS handle discounts and promotional pricing?",
    answer:
      "Discounts and promotional pricing are set inside the system and applied automatically at checkout. Every customer receives the correct price without the cashier calculating anything manually.",
  },
  {
    id: "3",
    question: "Can I upload my entire candy product catalog at once?",
    answer:
      "Yes, large candy product catalogs can be uploaded through Excel or CSV files at once. The entire product range is organized and ready to sell without manual entry of every item.",
  },
  {
    id: "4",
    question:
      "How does the system work for a candy shop with multiple locations?",
    answer:
      "The system connects all stores in different locations. It ensures that stock levels, sales data, and daily performance reports across multiple locations are visible across every candy store location from a single dashboard.",
  },
  {
    id: "5",
    question:
      "Can the system track customer preferences for personalized candy store services?",
    answer:
      "Customer profiles store purchase history and preferences automatically. Staff access this information instantly at checkout, delivering a personalized experience for every returning customer.",
  },
];

export const CANDY_STORE_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Start Managing Your Candy Store Smarter Today",
  secondDescription:
    "Take full control of your inventory, sales, and daily operations with a POS system designed specifically for candy retailers. Streamline your workflow, reduce manual effort, and make data-driven decisions with ease.",
  whyChooseTitle: "Why Choose Owners Inventory for Your Candy Store?",
  whyChooseDescription:
    "Owners Inventory is the right candy store POS for owners who want a specialized POS that handles specific operational and customer demands. It reduces the task inefficiencies of candy shops and improves workflow management.",
};

export const CANDY_STORE_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy to Use",
    description:
      "Our system is easy to use for staff with no technical knowledge. The interface is clean, the workflow is logical, and technical support is available whenever a problem comes up during busy hours.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Specialized for Candy Retail",
    description:
      "The software is designed to handle multiple product varieties, slow counters, and inventory levels, which makes it suitable for candy stores.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "No Hardware Dependency",
    description:
      "Unlike other POS systems building expensive sales and barcode scanners into long contracts, our software works with existing equipment without being forced into hardware purchases.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Prepared for Seasonal Sales",
    description:
      "It tracks candy inventory movements across seasons to maintain the availability of high-demand products.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Transparent Pricing Structure",
    description:
      "There is no additional fee attached to adding SKUs, connecting an online store, or accessing analytics. Store owners only pay for features that they actually need.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Grow Alongside the Business",
    description:
      "Whether the candy store operates from a single counter or expands to multiple locations, our POS scales without requiring a platform change or complex upgrades.",
    icon: "testWhychoseIcon6",
  },
];

export const CANDY_STORE_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory seamlessly connects with Shopify, WooCommerce, QuickBooks, marketing tools, and payment gateways. Sales and inventory data flows between every connected platform. It reduces the reliance on several disconnected systems and increases efficiency.",
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
