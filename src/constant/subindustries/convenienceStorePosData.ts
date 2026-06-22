import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Convenience Store POS — UnifiedPlatform Section ──────────────────────────
export const CONVENIENCE_STORE_UNIFIED_HEADING =
  "Challenges Convenience Stores Face Daily";

export const CONVENIENCE_STORE_UNIFIED_PARAGRAPH =
  "These problems are not generic. They are the specific issues that reduce your gross margin, slow your staff, and leave gaps in your records every single day.";

export const CONVENIENCE_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Shrinkage With No Clear Source",
    description:
      "Convenience stores operate on small profit, and inventory shrinkage lowers their profit further. When a cashier processes an unusual amount of cancelled transactions, there is often no record attached to those actions. Cash differences build up across shifts, and without proper records, finding the source becomes nearly impossible.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Age-Restricted Products at Checkout",
    description:
      "Tobacco, alcohol, and lottery tickets all require an ID check at the point of sale. Doing this manually during a busy counter service period slows the line and increases the chance of a missed check. A single rule violation can put your license at risk, and without a transaction log attached to each age-restricted sale, it becomes hard to prove you followed the rules during an audit. ",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Stockouts on Fast-Selling Products",
    description:
      "Popular products sell out faster than expected in a busy convenience store. Without live stock tracking, there is no warning when an item is about to run out. Slow-selling products remain unsold and waste money that could have been spent on stock that is actually in demand. ",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Cash Gaps at Shift Change ",
    description:
      "Cash gaps appear at the end of a shift when there is no record of which transactions the cashier handled or when the drawer was opened.  Without a cash report connected to each employee ID, accountability disappears with every shift change.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Remote Store Visibility",
    description:
      "Most convenience store owners cannot be on-site at all times. Without remote store monitoring, decisions about stock, staff performance, and daily sales are made on old information. By the time a shift report reaches an absent owner, the opportunity to act on it has already passed.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "No Control Over Pricing Errors",
    description:
      "Price changes often happen in a convenience store. Without a central price management system, overcharging and undercharging both happen regularly, and both go unnoticed until the numbers stop making sense. ",
  },
];

export const CONVENIENCE_STORE_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Track Every Transaction by Employee",
    description:
      "Every sale, refund, cancelled transaction, and drawer open is recorded under a specific employee ID and time. When something looks out of the ordinary, the system flags it automatically, so you always have a clear and up-to-date record across every shift. ",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Fast Billing, Faster Checkout",
    description:
      "Barcode scanning processes each item in seconds and pulls the correct price directly from your product catalog. The checkout terminal calculates totals, applies active discounts, and generates a receipt without manual input from the cashier, keeping lines short even during your busiest hours. ",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Low-Stock Alerts",
    description:
      "Stock levels update with every sale. When a product crosses its reorder point, you get a low-stock alert before it runs out, so your shelves stay stocked without relying on manual counting between shifts.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Full Shift Accountability",
    description:
      "At the end of every shift, the system produces a daily sales summary that breaks down sales by each employee. Cash differences are flagged automatically, and every handover is recorded. If something does not add up, you know exactly where to look. ",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Manage Your Store Remotely",
    description:
      "Your sales data, stock level visibility, and shift reports are accessible from any device in real time. Whether you manage one store or several, multi-location management brings everything into a single view so you can check what is selling, what is running low, and how each shift performed without being on-site.",
  },
];

export const CONVENIENCE_STORE_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Centralized Sales and Billing",
    description:
      "Every sale at the counter, every purchase order in the back office, and every supplier transaction runs through the same centralized dashboard. Real-time sync means the front and back of the store always reflect the same numbers. For owners with multiple locations, pricing updates and stock transfers apply from a single point.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    list: [
      { listheading: "POS Sales Management" },
      { listheading: "Supplier and Purchase Order Control" },
      { listheading: "Unified Multi-Location View" },
    ],
  },
  {
    id: "2",
    title: "Sales and Inventory Reports, In Real Time",
    description:
      "The reporting dashboard pulls together daily sales summaries, product performance reports, and profit margin reports into one continuously updated view. Top-selling products and slow-moving inventory are easy to compare so purchasing decisions are based on actual sales velocity. Peak hour analysis shows when the store is busiest so staffing and stock levels can be planned around real demand rather than guesswork.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Real-time sales and stock level data" },
      { listheading: "Product performance and margin tracking" },
      { listheading: "Peak hour and demand forecasting" },
    ],
  },
];

export const CONVENIENCE_STORE_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Barcode and SKU Billing",
    description:
      "Every product has a unique barcode or SKU attached to it that the system reads at checkout. The system instantly finds the correct price, applicable taxes, and any ongoing deals or discounts, in a single scan.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Shift-Based Sales Reports",
    description:
      "The system captures a complete shift report covering each employee's sales, any differences in the cash amount, and a complete summary of the cashier's transactions at the end of every shift. Shift-level reporting builds accountability on a daily basis rather than leaving it for end-of-week review.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Role-Based Access and Staff Tracking",
    description:
      "User permissions are assigned by role, so a cashier only accesses what is needed at the counter. The system records every sale under a specific employee ID, and staff performance reports show transaction history, shift hours, and sales activity for each team member. ",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Cash, Card, and Digital Payments",
    description:
      "The system accepts all major payment methods, including cash, credit and debit cards, and tap-to-pay. Security standards for card payments are built into the system, ensuring transactions are safe and follow the required rules. Customers can also pay with multiple payment methods simultaneously, and the system automatically splits the payment without any manual calculations.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Product and Category Filters",
    description:
      "Cashiers can search for any product by its name or category directly on the screen during busy hours, even if the barcode is missing or damaged. The search pulls up results from the product list within seconds, so the checkout process keeps moving without any delays or holdups.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Stock Adjustment and Correction",
    description:
      "When damaged goods are received or a quantity mismatch is found, the system records the stock adjustments with a reason, reference, and date. Every adjustment is saved and tracked, so your stock count stays accurate, and your records remain organised and ready if an official check or audit is ever needed.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Bulk Product Imports",
    description:
      "You can add a large number of products to your catalog all at once by uploading an Excel or CSV file. Whether you are adding new products, updating prices, or changing product descriptions, everything is applied across the system in a single upload without individual manual entries.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Stock Transfer",
    description:
      "You can move products from one location to another using transfer orders that keep track of every step of the process. If you manage more than one store, you can start and monitor stock transfers between branches from one central dashboard, without having to manually match or reconcile records between locations.",
    imageSrc:
      "/assets/industries-pages/convenience-store-pos/key-features-section/key-feature-card8.webp",
  },
];

export const CONVENIENCE_STORE_WORKFLOW_DATA = {
  heading: "Inventory Workflow for Convenience Stores",
  paragraph:
    "Our convenience store POS system tracks every stock movement automatically, from the moment products arrive to the moment they leave the shelf, so your inventory count is always accurate and up to date.",
  steps: [
    {
      number: 1,
      title: "Stock Receiving",
      description:
        "Incoming deliveries are matched against the original purchase order. Quantities are verified on arrival and added to the stock count immediately, so stock level visibility is accurate from the moment goods enter the store.",
    },
    {
      number: 2,
      title: "Shelf Organization and Categorization",
      description:
        "Products are organized by category inside the system, making it easy for staff to locate items using category filters or by searching the product code at checkout. Age-restricted products such as tobacco and alcohol are stored in their own separate category, and every sale of these items is automatically recorded to ensure the rules and regulations are being followed.",
    },
    {
      number: 3,
      title: "Real-Time Inventory Tracking",
      description:
        "Stock level visibility updates with every transaction processed at the counter. You get a low-stock alert automatically if the stock is running low, before it runs out. The system also compares inventory variances between your physical stock and system records, and highlights any differences before it becomes a loss.",
    },
    {
      number: 4,
      title: "Supplier and Purchase Orders",
      description:
        "When stock runs low, purchase orders can be created directly from the dashboard and sent to the relevant supplier. Supplier records, pricing history, and expected delivery times are all stored in one place, making restocking faster and more consistent compared to handling them all manually.",
    },
    {
      number: 5,
      title: "Shift-Based Stock Accountability",
      description:
        "At every shift handover, stock movements are checked against the sales that were recorded during that time. Inventory differences between the physical stock and the system record are flagged immediately so that the issue can be addressed and resolved on the same day.",
    },
    {
      number: 6,
      title: "Reporting and Analysis",
      description:
        "Product reports and daily sales summaries show you which items are selling the most, which ones are not selling at all, and which ones are making the most profit. Peak hour analysis and predicting future demand can help store owners make smarter purchasing decisions on actual sales data, rather than by guessing.",
    },
  ],
};

export const CONVENIENCE_STORE_TESTIMONIALS = [
  {
    id: "1",
    name: "Gavin Walker",
    title: "Convenience Store Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image17.webp",
    text: "Shift handovers used to take 20-30 minutes of sorting out discrepancies. Now the reconciliation report is ready the moment a shift ends, and cash variances are visible instantly. It takes under five minutes.",
  },
  {
    id: "2",
    name: "Nora Hall",
    title: "Mini Mart Manager",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image18.webp",
    text: "We carry 400+ SKUs and keep running out of fast-moving items with zero warning. Since turning on low-stock alerts, we caught 3 critical items running low in the first week and haven't had a full stockout since.",
  },
  {
    id: "3",
    name: "Austin Bell",
    title: "Corner Store Operator",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image18.webp",
    text: "I run the store remotely. I check sales and shift reports from my phone in under a minute. Last month, I spotted a cash discrepancy at 9 pm and had it resolved before closing, without stepping foot in the store.",
  },
  {
    id: "4",
    name: "Aurora Young",
    title: "Multi-Location C-Store Owner ",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image19.webp",
    text: "Pricing updates and stock transfers across two locations used to take half my morning. Now I can handle both from one dashboard in under 15 minutes.",
  },
];

export const CONVENIENCE_STORE_FAQS = [
  {
    id: "1",
    question: "Can I manage multiple store locations from one account? ",
    answer:
      "Yes, you can monitor stock levels, track sales, and manage stock transfers across all your branches from a single dashboard without any manual updates.",
  },
  {
    id: "2",
    question: "How does the system handle cash accountability at shift change?",
    answer:
      "At the end of every shift, a cashier reconciliation report is generated automatically, covering each employee's sales and any cash differences so nothing goes unrecorded. ",
  },
  {
    id: "3",
    question: "How does Owners Inventory handle age-restricted products?",
    answer:
      "Tobacco, alcohol, and similar products are stored in their own category. Every sale is automatically recorded, giving you a ready compliance report for any audit.",
  },
  {
    id: "4",
    question: "How much does your POS system cost?",
    answer:
      "The system is free to start, with a 3-month trial so you can run it across real shifts before committing. After the trial, pricing is based on your store size and the features you need. Contact us, and we'll send you a quote the same day.",
  },
  {
    id: "5",
    question: "What if a barcode is damaged or missing at checkout?",
    answer:
      "Cashiers can search for any product by name or category directly on the checkout screen, keeping the checkout process moving without any delays.",
  },
  {
    id: "6",
    question: "How quickly can new staff learn the system?",
    answer:
      "Most cashiers are comfortable at the checkout terminal within one shift. Role-based access control means new staff only see what is relevant to their role from day one, which keeps onboarding fast.",
  },
];

export const CONVENIENCE_STORE_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Us",
  paragraph: "", // Optional paragraph
  secondHeading: "Get Control of Your Store",
  secondDescription:
    "Real-time inventory tracking, shift-level cash accountability, and fast barcode scanning checkout in one system built for high-volume retail. Start now and put the whole operation in one place.",
  whyChooseTitle: "Why Choose Owners Inventory for Convenience Stores?",
  whyChooseDescription:
    "Convenience stores run on thin margins and tight schedules. Here is why store owners trust Owners Inventory to keep their operations tight, their staff accountable, and their shelves stocked.",
};

export const CONVENIENCE_STORE_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for High-Volume Retail",
    description:
      "Hundreds of transactions go through a busy c-store every single day. Our system handles that volume without slowing down, freezing, or losing records.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Faster Checkout Every Time",
    description:
      "Barcode scanning finds the price before the customer has put their wallet away.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Auto-Tracked Inventory",
    description:
      "Every sale updates your stock count on its own. When something runs low, you get an alert before it runs out on the shelf. No manual counting needed between shifts.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Shift-Level Accountability",
    description:
      "Nothing floats between handovers with no name attached to it. Cash movements, voids, and transactions are all tied to a specific staff member and time, so if something is unusual, you know exactly who was at the counter.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Quick Staff Onboarding",
    description:
      "New cashiers are confident at the checkout terminal within a single shift. The interface is built for speed, not complexity, which keeps training time short even with high staff turnover.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Remote Store Access",
    description:
      "Your sales numbers, stock levels, and shift summaries are on your phone whenever you need them. You do not have to be in the store to know what is going on or to catch a problem before it gets worse. ",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Budget-Friendly Plans",
    description:
      "Professional-grade features without enterprise-level pricing. Plans are structured around the real costs of running an independent convenience store.",
    icon: "testWhychoseIcon7",
  },
  {
    id: "8",
    title: "Reliable Support",
    description:
      "Our team is available whenever you need help, from initial setup and data migration to a question that comes up mid-shift.",
    icon: "testWhychoseIcon8",
  },
];

export const CONVENIENCE_STORE_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with the accounting and payment tools your business already uses, so sales data, financial records, and inventory levels stay consistent without manual data entry between systems.",
  tools: [
    // {
    //   id: 1,
    //   name: "Shopify",
    //   image: "/assets/home-page-images/tools-section/shopify.svg",
    // },
    // {
    //   id: 2,
    //   name: "WooCommerce",
    //   image: "/assets/home-page-images/tools-section/woocomerce.svg",
    // },
    {
      id: 1,
      name: "QuickBooks",
      image: "/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 2,
      name: "Xero",
      image: "/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 3,
      name: "Stripe",
      image: "/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
