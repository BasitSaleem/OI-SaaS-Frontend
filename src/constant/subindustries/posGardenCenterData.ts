import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Garden Center POS — UnifiedPlatform Section ──────────────────────────
export const GARDEN_CENTER_UNIFIED_HEADING =
  "Challenges Garden Centers Face";

export const GARDEN_CENTER_UNIFIED_PARAGRAPH =
  "Seasonal demand cycles, perishable inventory, and heavy reliance on supplier relationships makes nursery point of sale operations harder to manage than most retail systems can handle.";

export const GARDEN_CENTER_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Seasonal Inventory Swings",
    description:
      "Spring can push a garden center from 400 SKUs to 1,200 in under six weeks, then back down again in fall. Most owners feel that swing in their gut before they see it in a report. Without a way to track it, next year's purchasing decisions will be made from memory instead of data.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Perishable Plants Tracked Like Durable Goods",
    description:
      "A flat of annuals that arrives Monday can be unsellable by Friday if it isn't watered or moved indoors. Generic POS systems track a 4\" petunia the same way they track a bag of mulch, so write-offs show up at month's end with no record of when or why the loss happened.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Orders Disconnected From Sales",
    description:
      "Most garden centers work with four to eight nursery suppliers a season, often ordering by gut feel instead of SKU-level data. Without purchase history tied to sales, you over-order on what didn't move and under-order on what sold out fast.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "No Variant Tracking on Plants and Supplies",
    description:
      "A tomato plant comes in a 4\" pot, a 1-gallon container, and a 3-gallon. Fertilizer comes in four bag sizes. When the system can't separate these variants, stock counts are unreliable and staff end up counting shelves instead of helping customers.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Customer Purchase Records",
    description:
      "A customer who bought a specific rose variety last spring and wants it again has no way of reminding your staff what she bought. She'll try to describe the tag. Your staff will guess. Without a purchase history on her profile, your team is relying on her memory.",
  },
];

export const GARDEN_CENTER_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Seasonal Catalog Management",
    description:
      "The product catalog supports bulk CSV import, so you can bring in a full spring catalog in one upload. When the season ends, you archive inactive products without losing their sales history.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Shrinkage Tracking by Product",
    description:
      "Stock adjustments let you log damaged or unsellable units with a reason code. Pull adjustment reports by date range and category to see which plant lines carried the most shrinkage and which supplier's deliveries were consistently short.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Sales-Based Purchase Orders",
    description:
      "The purchasing module generates purchase orders from inside the same system tracking your sales. Pull a SKU-level movement report, identify what sold fastest in the past 30 days, and send orders to your nursery suppliers without switching tools.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Variant-Level Stock for Plants and Hardscape",
    description:
      "Each container size or product variation gets its own SKU and stock count. A 1-gallon Japanese maple and a 5-gallon are tracked separately with independent reorder alerts, so you won't order more 4\" pots when you're low on gallons.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Customer Profiles With Purchase History",
    description:
      "Every customer gets a profile with their full purchase history. When they come back in spring asking what rose variety they bought two seasons ago, the staff can pull it up at the register.",
  },
];

export const GARDEN_CENTER_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Selling for Garden Centers",
    description:
      "Your garden center point of sale system, online store, and dashboard all run off the same stock numbers, so nothing gets oversold.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter",
        listdescription:
          "The POS terminal handles in-store sales, plant returns, and gift cards, including bulk soil and mulch sold by the bag or yard. It works offline too, so a connectivity drop during a busy Saturday sale won't stop checkout.",
      },
      {
        listheading: "Online Store Sync",
        listdescription:
          "Online orders from Shopify, WooCommerce, or the built-in store pull from the same inventory pool as your register. If a customer buys a 3-gallon Japanese maple online right as a walk-in grabs the last one, the system catches it before it becomes a refund.",
      },
      {
        listheading: "Unified Dashboard",
        listdescription:
          "In-store revenue, online orders, stock levels across your retail floor and greenhouse, and supplier order status all show up from one login, so you can check whether this week's nursery delivery arrived without leaving the checkout screen.",
      },
    ],
  },
  {
    id: "2",
    title: "Sales and Inventory Reporting for Nursery POS Systems",
    description:
      "Sales reports show revenue by product category and date range, so you can compare spring performance year over year. Inventory reports track stock movement, including adjustments, received shipments, and transfers between locations. For purchasing, you can see what was ordered from each supplier, at what cost, and whether the delivery matched the invoice. If your 4\" annual herbs sold out the first weekend of May three years running, that's in the data before this April's order goes out.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [],
  },
];

export const GARDEN_CENTER_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Variant-Level Inventory Tracking",
    description:
      "Plants, supplies, and hardscape items are tracked with full variant support, including container size and species variant. Each variation carries its own SKU, stock count, and low-stock threshold, so purchasing decisions come from variant-level data, not a blended count across sizes.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Bulk Import and Seasonal Catalogs",
    description:
      "Spring catalogs often run to hundreds of new SKUs. Bulk CSV import loads an entire supplier catalog in one step. Seasonal deactivation preserves the product record and sales history without cluttering your active catalog.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Purchase Order Management",
    description:
      "Your nursery suppliers and hardscape vendors are managed inside the purchases module. Purchase orders are generated from the same interface where you review stock movement. When stock arrives, receiving it against the purchase order updates counts immediately and flags any shortfall.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Real-Time Inventory Sync",
    description:
      "Every in-store sale reduces the online count in real time. A customer who buys your last 5-gallon hydrangea at the register won't find it available on your website five minutes later. This applies whether you're selling through Shopify, WooCommerce, or the built-in store.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Staff Access Controls",
    description:
      "Limit who can process returns, apply discounts, or adjust stock counts. A seasonal hire can ring up sales without being able to mark down a rack of overwintered perennials, and every action is logged to a specific user and timestamp, so you can trace who applied a clearance discount and when.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Shift Reports by Category",
    description:
      "The end-of-day shift report shows revenue by product category, payment type, and staff member. Which departments pulled the most revenue this weekend? It's in the report, not a spreadsheet you have to build yourself.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card6.webp",
  },
];

export const GARDEN_CENTER_WORKFLOW_DATA = {
  heading: "Workflow of the Owners Inventory Garden Center POS",
  paragraph:
    "Here's how a typical spring day runs, from opening stock checks through end-of-day reporting.",
  steps: [
    {
      number: 1,
      title: "Starting the Day",
      description:
        "The manager opens the dashboard and checks stock alerts. Two varieties flagged overnight: 4-inch herbs are below reorder threshold, and a premium soil blend has four bags left. A purchase order is ready to send before the first customer walks in, based on the movement report from the past two weekends.",
    },
    {
      number: 2,
      title: "Customer Check-In and Product Lookup",
      description:
        "A customer comes in asking for the specific tomato variety she planted two years ago. The staff member searches her profile by name or phone number, pulls up her purchase history, and locates the variety in under a minute. It's in stock in the 1-gallon size.",
    },
    {
      number: 3,
      title: "Mixed Transaction at Checkout",
      description:
        "She picks up two tomato plants, a bag of fertilizer, and a set of garden stakes. The cashier processes one transaction covering all four items across three product categories. Tax rates apply correctly per category. Inventory updates for each SKU the moment the sale closes.",
    },
    {
      number: 4,
      title: "Receiving Supplier Stock",
      description:
        "An afternoon delivery arrives from the wholesale nursery. The receiving team opens the pending purchase order, confirms quantities received, and logs the shipment. Stock counts update immediately. Any line item short on delivery is flagged against the original order.",
    },
    {
      number: 5,
      title: "End-of-Day Reporting",
      description:
        "The shift report takes about two minutes to close. It shows total revenue by product category, refunds processed, payment types, and any stock adjustments made during the day. Weekend movement data is ready to inform Monday's purchasing decisions.",
    },
  ],
};

export const GARDEN_CENTER_TESTIMONIALS = [
  {
    id: "1",
    name: "Rachel Kowalski",
    title: "Owner, Greenfield Nursery, Columbus OH",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "We were placing supplier orders based on what we remembered selling last spring. Switched to Owners Inventory and pulled actual SKU movement reports for the first time. Our overstock on slow-turn perennials dropped by about 30% the first season.",
  },
  {
    id: "2",
    name: "Marcus Obi",
    title: "Manager, Terracycle Garden Center, Portland OR",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "Variant tracking changed how we manage our container inventory. Before, we'd reorder 1-gallon shrubs not realizing we had 40 units of the 3-gallon sitting in the back. Now each size has its own count and its own alert. We haven't had a duplicate overstock issue since we set it up.",
  },
  {
    id: "3",
    name: "Diana Furst",
    title: "Owner, Sunroot Gardens, Denver CO",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "A customer came in asking for the exact heirloom pepper variety she bought from us in 2022. My staff pulled it up in thirty seconds from her profile. She's been back four times this season.",
  },
  {
    id: "4",
    name: "Liam Tran",
    title: "Owner, Westside Plant House, Sacramento CA",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We added an online store through the platform last year. The inventory sync is the part that actually works. When something sells at the register, the website updates before the next customer can add it to their cart. No more apologetic refund emails.",
  },
];

export const GARDEN_CENTER_FAQS = [
  {
    id: "1",
    question: "Can I track different container sizes for the same plant as separate inventory items?",
    answer:
      "Each container size is set up as a variant under the parent product. A 4\" petunia and a 1-gallon petunia carry separate SKUs, stock counts, and reorder thresholds. Low-stock alerts fire at the variant level, so you're reordering the right size rather than a blended total.",
  },
  {
    id: "2",
    question: "How does the system handle seasonal catalog changes between spring and fall?",
    answer:
      "Products can be deactivated at the end of a season without losing their sales history. When the same variety comes back the following year, you reactivate the product and set new opening stock counts. Bulk import handles large catalog additions at the start of each season.",
  },
  {
    id: "3",
    question: "Can I manage purchase orders for multiple nursery suppliers in one place?",
    answer:
      "Each supplier has its own record inside the purchases module. Purchase orders are created per supplier and tied to specific SKUs. When stock is received, it's matched against the open order and inventory updates immediately, with quantity discrepancies flagged before the stock enters your active count.",
  },
  {
    id: "4",
    question: "Does the system support online sales alongside in-store?",
    answer:
      "Your Shopify store, WooCommerce site, or the built-in Owners Inventory online store all pull from the same inventory pool as your register. A sale at the counter reduces the online count in real time, so you can't oversell across channels once the sync is active.",
  },
  {
    id: "5",
    question: "Can I run two garden center locations from one account?",
    answer:
      "All plans support multiple locations. Stock at each site is visible from one dashboard, and transfer orders move inventory between locations with a complete movement record. Customer profiles and purchase history are shared across both sites.",
  },
];

export const GARDEN_CENTER_TESTIMONIAL_DATA = {
  heading: "What Garden Center Owners Say",
  paragraph: "",
  secondHeading: "Don't Let a Stockout Cost You A Peak Weekend",
  secondDescription: "Set up Owners Inventory in a day and run your first shift on accurate data.",
  whyChooseTitle: "Why Garden Centers Choose Owners Inventory",
  whyChooseDescription: "Here's what sets Owners Inventory apart from a generic POS system once you look past the feature list.",
};

export const GARDEN_CENTER_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Mixed Product Operations",
    description:
      "Most generic POS platforms weren't built with perishable, variant-heavy, and bulk product mixes in mind. Garden centers sell perishable plants, bulk materials, hardscape, seasonal decor, and chemical supplies in the same transaction. Owners Inventory handles that mix without workarounds or separate tools for each category.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "30-Day Free Trial, No Contract",
    description:
      "Start on any plan with a free 30-day trial and cancel at any time.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Multi-Location From the Start",
    description:
      "If you run two locations, or a garden center alongside a greenhouse operation, both run from the same account. Stock transfers between sites, shared customer records, and combined reporting are available without a plan upgrade.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Same-Day Setup",
    description:
      "Most garden centers complete the initial setup within a few hours. Bulk product import via CSV handles large spring catalogs without manual SKU entry, and variant structures are built from parent product records.",
    icon: "testWhychoseIcon4",
  },
   {
    id: "5",
    title: "Live Support During Peak Season",
    description:
      "All plans include onboarding and email support. Pro and Enterprise add live chat and phone access. Enterprise includes a dedicated account manager, which matters when you're two weeks into spring rush and something needs fixing before the weekend.",
    icon: "testWhychoseIcon5",
  },
];

export const GARDEN_CENTER_TOOLS_DATA = {
  heading: "Integrations That Connect Your Garden Center",
  paragraph: "",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
