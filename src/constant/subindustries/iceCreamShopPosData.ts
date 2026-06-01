import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Ice Cream Shop POS — UnifiedPlatform Section ──────────────────────────
export const ICE_CREAM_SHOP_UNIFIED_HEADING =
  "Challenges Ice Cream Shops Face Daily";

export const ICE_CREAM_SHOP_UNIFIED_PARAGRAPH =
  "Operating a busy dessert parlor presents unique challenges. These specific issues reduce your gross margin, slow down your counter staff, and leave gaps in your sales and inventory records every single day.";

export const ICE_CREAM_SHOP_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Portion Control and Ingredient Shrinkage",
    description:
      "Ice cream shops suffer from hidden shrinkage when staff over-scoop portions or give away extra toppings without recording them. Without accurate tracking for cups, cones, scoops, and mix-ins, cash flow and ingredient margins slowly shrink without a clear record.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow Checkout Lines in Peak Hours",
    description:
      "Ice cream shops experience sudden rushes on hot afternoons, weekends, and evenings. Manually choosing flavors, scoop sizes, and custom toppings on a slow POS slows down checkout, frustrating customers and causing long wait times.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Stockouts of Popular Flavors or Cones",
    description:
      "Running out of best-selling flavors like Vanilla, Chocolate, or Mint Chip—or essential items like waffle cones—during a hot summer day can turn away dozens of customers. Without automated alerts, restocking decisions are left to guesswork.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Cash Gaps at Shift Handover",
    description:
      "With high transaction volumes and multiple cashiers handling the register across different shifts, cash differences appear. Without linking register drawer openings and transactions directly to a specific employee ID, accountability is lost.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Remote Parlor Visibility",
    description:
      "Ice cream shop owners cannot be present during every evening rush. Without remote access to real-time sales reports and inventory levels, it's impossible to check flavor demand, staff performance, or daily cash margins without visiting the shop.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Inconsistent Pricing for Custom Orders",
    description:
      "Pricing multi-scoop cups, specialized toppings, waffle cones, and milkshakes manually leads to pricing errors. Staff may overcharge or undercharge, causing discrepancies and losing customer trust.",
  },
];

export const ICE_CREAM_SHOP_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Track Cashier Handover Accountability",
    description:
      "Every scoop, topping addition, void, and cash drawer open is logged under a unique cashier ID. Shift summaries automatically calculate cash differences, keeping cash registers balanced.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Fast Touchscreen Flavor Selection",
    description:
      "A simplified touchscreen layout lets cashiers select scoop sizes, waffle cones, and toppings in a single tap, processing orders in seconds and reducing long queues.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Ingredient and Tub Alerts",
    description:
      "Keep track of ice cream tubs, toppings, and cone stock levels. The system alerts you when inventory drops below your defined threshold, ensuring you reorder in time.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Shift-Level Performance Tracking",
    description:
      "Review sales metrics, average order size, and cash discrepancies for each employee at the end of their shift. Spot trends and reward high-performing staff.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Manage Multiple Locations Remotely",
    description:
      "Access real-time sales, inventory, and labor reports from your phone or desktop. Monitor operations across multiple parlor branches or mobile ice cream trucks from one dashboard.",
  },
];

export const ICE_CREAM_SHOP_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Centralized Sales and Order Management",
    description:
      "Manage all transactions, custom scoop orders, and inventory additions in a unified dashboard. For multi-location shops or kiosks, update prices, synchronize flavor catalogs, and track stock transfers from one central system.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    list: [
      { listheading: "Touchscreen Order Management" },
      { listheading: "Ingredient and Tub Stock Sync" },
      { listheading: "Multi-Location Catalog Control" },
    ],
  },
  {
    id: "2",
    title: "Real-Time Sales and Expiry Reports",
    description:
      "The reporting system provides live summaries of best-selling flavors, daily margins, and employee performance. Expiration date tracking for milk, cream, and fruits helps you maintain high food safety standards and reduce waste.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Live flavor sales tracking" },
      { listheading: "Ingredient margin and waste analysis" },
      { listheading: "Peak hour customer traffic reports" },
    ],
  },
];

export const ICE_CREAM_SHOP_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Flavor and Size Configurations",
    description:
      "Configure multiple variants for your menu, including cup sizes, cone options, single/double/triple scoop pricing, and dynamic topping selections with automatic cost calculations.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Shift Reconciliation Reports",
    description:
      "Generate detailed shift reports showing total card, cash, and digital sales per cashier. Identify cash discrepancies immediately upon shift handover.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Role-Based Access Controls",
    description:
      "Assign permissions to scoopers, supervisors, and managers. Control who can issue refunds, apply discounts, or open the register drawer without a sale.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Split Payments & Digital Wallet Tap",
    description:
      "Accept all modern payment methods, including credit cards, Apple Pay, Google Pay, and cash. Automatically split bills for groups and families.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Visual Menu Grid & Custom Modifiers",
    description:
      "Cashiers can easily browse a visual layout of flavors, dairy-free alternatives, and toppings, allowing quick customization for custom milkshakes and sundaes.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Spoilage and Waste Tracking",
    description:
      "Record inventory adjustments for melted tubs, broken cones, or expired ingredients with specific reasons to accurately calculate net margins.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Bulk Menu Updates",
    description:
      "Upload and update your entire menu, including seasonal flavors, toppings, and prices, via Excel or CSV. Apply updates instantly across all counters.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Inter-Branch Stock Transfers",
    description:
      "Easily request and monitor inventory transfers between multiple parlors or from your central warehouse, ensuring no location runs out of raw materials.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card8.webp",
  },
];

export const ICE_CREAM_SHOP_WORKFLOW_DATA = {
  heading: "Inventory Workflow for Ice Cream Parlors",
  paragraph:
    "Our Ice Cream Shop POS system automates ingredient and tub tracking, from raw material receipt in cold storage to final customer checkout.",
  steps: [
    {
      number: 1,
      title: "Receiving Cold Supplies",
      description:
        "Verify raw materials, milk, cream, packaging, and ice cream tubs against supplier orders. Record expiration dates on delivery.",
    },
    {
      number: 2,
      title: "Menu & Variant Setup",
      description:
        "Organize products by category (tubs, cones, sundaes, beverages). Group variants by flavor profiles and cup/cone sizes for quick entry.",
    },
    {
      number: 3,
      title: "Real-Time Ingredient Deduction",
      description:
        "Deduct tubs, cones, and toppings in real time at checkout. Low-stock alerts notify you when essential ingredients are running dry.",
    },
    {
      number: 4,
      title: "Supplier Ordering",
      description:
        "Generate purchase orders directly from the dashboard when stock drops. Track supplier fulfillment status and delivery history.",
    },
    {
      number: 5,
      title: "Shift Stock Auditing",
      description:
        "Compare sold scoops against physical tub levels at shift change. Track portions and waste to audit cashier accuracy.",
    },
    {
      number: 6,
      title: "Sales & Margin Analysis",
      description:
        "Analyze flavor popularity, hourly peak sales, and menu margins. Drive profitability by focusing on high-velocity, high-margin desserts.",
    },
  ],
};

export const ICE_CREAM_SHOP_TESTIMONIALS = [
  {
    id: "1",
    name: "Marcus G.",
    title: "Gelato Parlor Owner",
    image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
    text: "Portion control was a massive issue before. Now, with accurate waste tracking and checkout logs, we slashed ingredient shrinkage by 15% in our first month.",
  },
  {
    id: "2",
    name: "Elena K.",
    title: "Ice Cream Parlor Manager",
    image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
    text: "During summer rushes, lines go out the door. The simple touchscreen setup lets cashiers punch in double scoops with toppings in a single tap. It's incredibly fast.",
  },
  {
    id: "3",
    name: "Rayan S.",
    title: "Dessert Shop Operator",
    image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
    text: "I manage three kiosks from my phone. I get real-time sales reports and know exactly when a location is running low on waffle cones without being there.",
  },
  {
    id: "4",
    name: "Maya L.",
    title: "Multi-Location Shop Owner",
    image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
    text: "Deploying seasonal summer menu updates used to take forever across our four shops. Now, I edit prices and push new flavors in just one click.",
  },
];

export const ICE_CREAM_SHOP_FAQS = [
  {
    id: "1",
    question: "Can I customize the POS screen for seasonal flavor changes?",
    answer:
      "Yes. You can edit your menu layout, add seasonal flavors, and adjust toppings options from the central catalog, which updates cashier screens instantly.",
  },
  {
    id: "2",
    question: "How does ingredient tracking work for custom sundaes and scoops?",
    answer:
      "You can link menu items to specific ingredients (e.g. cups, cones, ice cream tubs). The system automatically deducts them from inventory upon checkout.",
  },
  {
    id: "3",
    question: "Can I manage multiple shops or mobile trucks?",
    answer:
      "Yes. Track sales, inventory levels, and transfer stock across multiple parlors, carts, and trucks from one cloud account.",
  },
  {
    id: "4",
    question: "How much does the Ice Cream Shop POS system cost?",
    answer:
      "You can start for free with our 3-month trial to test the system during real shifts. After the trial, flexible plans are based on your shop's size and feature requirements.",
  },
  {
    id: "5",
    question: "Does the system support split bills for families or groups?",
    answer:
      "Yes. The checkout system allows splitting transactions among multiple card, cash, or mobile payments with a single tap.",
  },
  {
    id: "6",
    question: "Is training difficult for seasonal or new staff?",
    answer:
      "Not at all. The interface is visual and highly intuitive. Cashiers can master the billing system in under 15 minutes, reducing onboarding effort.",
  },
];

export const ICE_CREAM_SHOP_KEY_FEATURES = [
  {
    id: "ice-cream-shop-billing",
    title: "Touchscreen Order & Billing",
    description:
      "Process customer scoop and sundae orders quickly with customizable touchscreen menus and instant bill split options.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "ice-cream-shop-stock-control",
    title: "Tub and Cone Inventory Control",
    description:
      "Keep track of active tub count, topping supplies, and waffle cone boxes. Avoid running out of best-sellers during high demand.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "ice-cream-shop-vendor-mgmt",
    title: "Dairy and Ingredient Suppliers",
    description:
      "Manage dairy distributors, track ingredient costs, issue purchase orders, and monitor cold shipment arrivals.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "ice-cream-shop-variants",
    title: "Flavor & Modifier Customization",
    description:
      "Configure scoop sizes, dairy-free alternatives, toppings, and sauces as modifiers attached to base menu items.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "ice-cream-shop-loyalty",
    title: "Customer & Loyalty Programs",
    description:
      "Drive repeat visits with integrated loyalty accounts, digital punch cards, and SMS promotion codes.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "ice-cream-shop-finances",
    title: "Shift Cash and Card Tracking",
    description:
      "Monitor sales summaries, card processing, cash drawer entries, and shift cashier handovers in real time.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "ice-cream-shop-ecommerce",
    title: "Online Ordering and Pickup Sync",
    description:
      "Integrate online pickup orders with your counter terminal, ensuring unified stock levels for both channels.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const ICE_CREAM_SHOP_TESTIMONIAL_DATA = {
  heading: "What Parlor Owners Say About Us",
  paragraph: "",
  secondHeading: "Take Control of Your Parlor",
  secondDescription:
    "Real-time tub inventory tracking, shift-level cash accountability, and rapid touchscreen billing in a POS system built for busy dessert shops. Start today and streamline your entire parlor operation.",
  whyChooseTitle: "Why Choose Owners Inventory for Ice Cream Parlors?",
  whyChooseDescription:
    "Dessert parlors run on fast pace and tight margins. Here is why ice cream shop owners trust Owners Inventory to keep operations smooth, staff accountable, and freezers stocked.",
};

export const ICE_CREAM_SHOP_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for High-Volume Counter Service",
    description:
      "Process hundreds of orders daily without crashes, freezing, or losing transaction details during summer evening rushes.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Speedy Scoop & Topping Modifiers",
    description:
      "Add toppings and custom flavors to orders with simple modifier buttons, generating accurate receipts in seconds.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Automated Stock Level Alerts",
    description:
      "The system updates ingredient and tub counts automatically. Low-stock alerts keep your freezers prepared for hot weekend rushes.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Shift-Level Handover Audit",
    description:
      "Cash movements, scoop entries, and register void transactions are all tied to individual cashier accounts to eliminate drawer gaps.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Fast Staff Training",
    description:
      "Onboard temporary summer staff quickly. The visual touchscreen menu requires zero computer experience to learn in minutes.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Real-Time Remote Access",
    description:
      "Check live sales, tub counts, and cashier reports from your phone, giving you total visibility of your shops from anywhere.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Affordable Pricing Plans",
    description:
      "Premium-grade POS features without the enterprise-level costs, tailored for independent dessert parlors and kiosks.",
    icon: "testWhychoseIcon7",
  },
  {
    id: "8",
    title: "24/7 Dedicated Support",
    description:
      "Our support team is available day and night to assist with initial setup, menu uploads, or any questions that arise mid-shift.",
    icon: "testWhychoseIcon8",
  },
];

export const ICE_CREAM_SHOP_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with accounting, online delivery, and payment tools to sync sales, payouts, and margins without manual work.",
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
