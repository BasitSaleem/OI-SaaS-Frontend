import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Gym POS — UnifiedPlatform Section ──────────────────────────
export const GYM_UNIFIED_HEADING = "Challenges That Modern Gyms and Fitness Studios Face";

export const GYM_UNIFIED_PARAGRAPH = "Running a gym without a proper gym POS system creates friction at every level of the operation. Payments get delayed, membership records fall out of sync, and retail stock runs short without warning.";

export const GYM_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Membership Freezes That Break Billing Cycles ",
    description: "A member requests a freeze mid-cycle because of an injury or travel. The billing date does not adjust, the next charge still processes, and now there is a dispute at the front desk. Freeze requests handled outside the POS create billing errors that are tedious to reverse and easy to miss until a member brings them up in person.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Class Access Conflicts at the Front Desk",
    description: "A member on a limited-access plan tries to book a class that their tier does not cover. Without the POS connected to class entitlements, front desk staff either turn members away without a clear reason or accidentally allow access that was not paid for. Both outcomes create friction that affects how members feel about the facility.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Day Passes and Guest Visits Outside the Membership Record",
    description:
      "A member brings a guest who pays a day pass. That transaction happens separately from the membership system, is recorded nowhere against the member's profile, and produces no data on how often guests convert to paid memberships. The revenue exists but the record does not. ",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Locker and Towel Charges Handled Off-System",
    description:
      "Locker rentals and towel service fees collected at the front desk often go unrecorded because the gym POS does not support them as separate transaction types. Staff log them manually, or not at all. By the end of the day, the cash count does not match what was actually processed.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Billing Issues at Renewal",
    description: "Recurring membership billing depends on cards staying current and payment cycles running without errors. When a card declines and nobody follows up, that member quietly slips away. Failed payments account for nearly half of all subscription cancellations across fitness businesses.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Untracked Retail Stock",
    description: "Supplements, branded gear, water bottles, and accessories sit on shelves between the entrance and the front desk. Without gym point of sale systems that connect retail stock to each sale, reordering becomes guesswork. Staff sells the last unit of a product, nobody logs it, and the shelf sits empty for two weeks.",
  },
   {
    id: "7",
    icon: "UnifiedIcon7",
    title: "No Visibility into Revenue Patterns",
    description: "Gym owners running day-to-day operations rarely have time to pull reports from multiple systems or cross-reference membership revenue against retail sales. Identifying which class types or membership tiers are actually driving profitability requires more bandwidth than most owners have mid-week.",
  },
];

export const GYM_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Faster Front-Desk Transactions",
    description: "The gym point of sale system processes membership renewals, class pack sales, and retail purchases from the same screen. Staff do not switch between tools to complete a sale. Each transaction is automatically recorded, so the billing history stays current without any manual entry.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Automated Recurring Billing",
    description: "Membership billing runs on configured cycles without requiring staff to initiate each charge. When a payment fails, the system flags it immediately and triggers a follow-up sequence. Gym owners can see exactly which accounts have outstanding balances and act on them before those members stop showing up.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Retail Inventory Connected to Every Sale",
    description: "Every product sold at the front desk reduces the stock count in real time. When any item reaches its minimum level, the system sends a restocking alert before the shelf empties. Your retail operation stays stocked without anyone needing to manually count inventory in storage.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Unified Member Profiles",
    description: "Each member's billing history, active membership type, class attendance record, retail purchase history, and loyalty points sit inside one profile. When a member calls about a charge or needs their membership adjusted, the answer is available immediately without digging through separate systems.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Clear Revenue and Sales Reporting",
    description:
      "The gym pos software compiles transaction data into reports that show membership revenue by type, retail sales by product category, payment failure rates, and revenue trends over any selected period. You can see which membership tiers perform best, which retail products move fastest, and where billing gaps are costing you income.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Consistent Multi-Method Payment Handling",
    description: "Cash, card, mobile wallet, and split payments all process through the same gym billing system without separate workflows for each method. Discount codes and loyalty point redemptions apply at checkout without requiring manual calculation.",
  },
];

export const GYM_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales and Integration for Gyms and Fitness Studios",
    description: "Owners Inventory connects your front desk transactions with online membership sign-ups and product orders in one system. Every sale, whether processed at the counter or through your website, feeds into the same records. Stock counts, membership statuses, and payment histories stay accurate across both channels automatically.",
    imageSrc: "/assets/industries-pages/gym-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Front Desk Counter Sales",
        listdescription: "Every in-person transaction processes through the gym POS and records immediately. Memberships, class packs, and retail purchases all close from the same screen without a separate reconciliation step at the end of the day.",
        
      },
      {
        listheading: "Online Membership and Order Sync",
        listdescription: "When a member signs up online or buys a class pack through your booking page, the transaction registers in the same system as counter sales. Membership activation, payment confirmation, and stock adjustments all happen automatically.",
      },
      {
        listheading: "Unified Dashboard View",
        listdescription: "All transaction activity from both channels appears in one central dashboard. Revenue, membership movement, and retail performance are visible in real time, not as a delayed batch summary.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Analytics and Reporting",
    description:
      "Owners Inventory organizes your gym's financial data into clear reports that are actually useful for decision-making. Rather than a raw list of transactions, the reporting dashboard presents membership revenue by plan type, retail sales by product category, payment failure rates, and revenue trends over any date range you select. Gym owners can identify which membership tiers bring the strongest retention, which retail products are moving and which are sitting, and where billing failures are creating gaps in monthly recurring revenue. That information supports purchasing decisions, pricing adjustments, and promotional planning without requiring a separate analytics tool.",
    imageSrc: "/assets/industries-pages/gym-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const GYM_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Membership and Plan Management",
    description:
      "The system stores every membership tier, pricing structure, and renewal date in one place. Staff can activate new memberships, upgrade existing plans, apply freeze requests, and process cancellations without leaving the POS screen.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Automated Payment Retry and Dunning",
    description: "When a payment fails, the gym POS system retries the charge at configured intervals and notifies the member to update their payment method. Staff are only looped in after automated recovery has been exhausted. This process alone recovers a significant portion of revenue that would otherwise go unnoticed.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Retail Product Catalog",
    description: "Every physical product sold at your gym is listed with pricing, stock levels, category assignment, and barcode. Staff can search by product name or filter by category during checkout. New products are added in bulk from a spreadsheet upload.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Loyalty Points Tracking",
    description: "Loyalty points accumulate per transaction and apply automatically at checkout. The system tracks each member's point balance and records every redemption against their profile, so the history stays accurate.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Flexible Discount Application",
    description: "Promotional discounts, class pack pricing, referral incentives, and seasonal offers are configured inside the system and applied at checkout without separate calculations. Discounts attach to specific products, membership types, or individual transactions depending on how each offer is structured.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Low Stock Alerts",
    description:
      "When any retail product falls below its set minimum quantity, the system sends an alert before the item sells out. Staff are never in the position of selling a product that is no longer in stock.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Multi-Method Payments",
    description:
      "A member paying part of a transaction with loyalty points and the remainder by card is processed in a single checkout flow. Cash and card combinations, partial gift card redemptions, and promotional credit applications are all completed without requiring manual adjustments between payment screens.",
    imageSrc:
      "/assets/industries-pages/gym-pos/key-features-section/key-feature-card7.webp",
  },
  
];

export const GYM_WORKFLOW_DATA = {
  heading: "Workflow of the Owners Inventory Gym POS System",
  paragraph: "Owners Inventory follows the actual transaction path inside a gym, from the moment a member arrives at the front desk to the point where the day's revenue is reconciled, keeping every stage connected and recorded without extra steps from your staff.",
  steps: [
    {
      number: 1,
      title: "Member Check-In and Transaction Start",
      description: "When a member arrives, their profile pulls up immediately by name, membership number, or barcode scan. Staff can see their active plan, outstanding balance, and any notes on the account before the transaction begins. A member purchasing a day pass, renewing a membership, or picking up a retail product starts from the same screen.",
    },
    {
      number: 2,
      title: "Processing the Sale",
      description: "Membership payments, class pack purchases, and retail sales are added to the same transaction. Discount codes apply in the same step. The system calculates the total, applies any loyalty points the member chooses to redeem, and presents the final amount before payment is taken.",
    },
    {
      number: 3,
      title: "Collecting Payment",
      description: "The gym payment software accepts the selected payment method and confirms the transaction. A receipt generates automatically. If a payment fails, the system records the decline, notifies the member, and schedules a retry rather than leaving the balance unresolved.",
    },
    {
      number: 4,
      title: "Updating Membership and Inventory Records",
      description:
        "Every completed transaction updates the relevant records immediately. A membership renewal extends the active period. A product purchase reduces the retail stock count. A class pack sale logs against the member's booking entitlement. Nothing requires a separate update step after the transaction closes.",
    },
    {
      number: 5,
      title: "Monitoring Active Membership Status",
      description: "Between transactions, the system tracks upcoming renewals, flagged payment failures, and members whose plans are due to expire. Alerts surface on the dashboard so staff can reach out proactively rather than discovering lapsed members after the fact.",
    },
    {
      number: 6,
      title: "End-of-Day Reconciliation",
      description: "At the close of a session or business day, the system generates a summary of all transactions, payment method totals, retail sales, and membership activity. Gym owners can review the day's revenue without pulling data from multiple tools, and the report is available to export directly to connected accounting software.",
    },
  ],
};

export const GYM_TESTIMONIALS = [
  {
    id: "1",
    name: "Jasper Holt",
    title: "Gym Franchise Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image68.webp",
    text: "We had three different tools handling memberships, retail, and payments. Switching between them during a busy morning was slowing everything down. After setting up Owners Inventory, the entire front desk runs through one screen. Checkouts are faster, billing errors have dropped significantly, and I can actually see what the business is doing without pulling reports from two places.",
  },
  {
    id: "2",
    name: "Emery Grant",
    title: "Operations Manager, Mid-Size Fitness Club",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image67.webp",
    text: "Failed payments were something we just lived with. By the time we noticed a member had a declined charge, they had already stopped coming in. The automated retry and notification system in Owners Inventory recovered a number of accounts we would have written off completely. The difference in monthly recurring revenue was noticeable within the first billing cycle.",
  },
  {
    id: "3",
    name: "Reese Dalton",
    title: "Owner, Multi-Location Gym",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image68.webp",
    text: "Retail was always an afterthought for us because tracking stock manually was too time-consuming. Products would run out, and nobody would notice until a member asked for something we could not find. The low stock alerts and the fact that every sale updates the count in real time changed how we manage the retail side entirely. We have not had an empty shelf situation since we started using the system.",
  },
  
];

export const GYM_FAQS = [
  {
    id: "1",
    question:
      "Can the gym POS handle membership sales and retail product sales in the same transaction?",
    answer: "A member can pay for a class pack and pick up a supplement in the same checkout. The system processes both within one transaction flow, updates the membership record and the retail stock count simultaneously, and produces a single receipt.",
  },
  {
    id: "2",
    question: "How does the system handle a member whose recurring payment fails?",
    answer: "The gym billing system flags the failed payment immediately, initiates an automated retry sequence, and sends the member a notification with a link to update their card details. Staff is alerted only if the automated process does not resolve the payment within the configured timeframe, so most failures are handled without front desk involvement.",
  },
  {
    id: "3",
    question:
      "Can I manage multiple membership tiers with different billing cycles?",
    answer: "Monthly plans, annual memberships, class packs, and drop-in rates are all configurable as separate membership types with their own pricing and renewal rules. Each membership type can carry a different billing cycle, and the system manages all of them concurrently without mixing records.",
  },
  {
    id: "4",
    question: "Does the system connect with accounting software?",
    answer: "Transaction data, membership revenue, and retail sales sync with QuickBooks, Xero, and other supported platforms. Financial records stay consistent between the gym payment software and the accounting tool without manual data entry on either side.",
  },
  {
    id: "5",
    question:
      "Does the POS system for gym work for boutique studios and smaller operations?",
    answer: "The system scales to the size of the operation. A single-location studio with 80 members uses the same platform as a multi-location gym with several hundred. Pricing and configuration adjust to the scope of the business rather than requiring a minimum scale to justify the cost.",
  },
];

export const GYM_KEY_FEATURES = [
  {
    id: "gym-billing",
    title: "Front Desk Check-in & Retail POS",
    description:
      "Scan member keycards, verify accounts, process retail sales, and book classes from a touchscreen front-desk interface.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "gym-stock-control",
    title: "Pro Shop & Stock Control",
    description:
      "Track active inventories for drinks, supplements, and apparel. Avoid stockout situations with low inventory notifications.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "gym-vendor-mgmt",
    title: "Supplier and Restock POs",
    description:
      "Draft purchase orders for gym accessories and retail supplies, keeping distributor details saved on file.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "gym-variants",
    title: "Membership Tiers & Programs",
    description:
      "Customize membership tiers, entry rules, expiration dates, class passes, and contract agreements.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "gym-loyalty",
    title: "Member History & CRM Profiles",
    description:
      "Access client profiles detailing check-in logs, trainer bookings, billing schedules, and health notes.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "gym-finances",
    title: "Trainer Commissions & Payroll",
    description:
      "Monitor monthly recurring revenues, track class attendance averages, and automate commission payroll for staff.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "gym-ecommerce",
    title: "Online Class Booking Sync",
    description:
      "Integrate your website's member portal. Sync scheduling updates in real-time, register members for classes, and collect online payments.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const GYM_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Prevent Delays in Gym Operations",
  secondDescription: "Use a gym POS system that keeps every transaction organized, speeds up checkout, and gives your team the tools to handle daily operations accurately and consistently.",
  whyChooseTitle: "Why Choose Owners Inventory Gym POS Software",
  whyChooseDescription: "Gyms run on tight schedules and members who expect quick service every time they walk in. Owners Inventory is built to match that pace with a gym membership POS system that is straightforward to operate, reliable under volume, and structured around how fitness businesses actually run.",
};

export const GYM_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Designed for Fitness Business Operations",
    description: "The system accounts for the specific transaction types that gyms deal with daily: recurring memberships, class pack purchases, day passes, retail sales, and loyalty redemptions. These are not adapted from a generic retail POS. They are built into the core workflow of the gym pos software from the start.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Accessible from Any Device",
    description: "Transaction history, membership status, retail stock levels, and daily revenue data are available on any phone, tablet, or desktop in real time. A gym owner checking numbers from outside the facility gets the same current data as the front desk staff on-site.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Fast Setup, No Disruption",
    description: "The system is operational from day one. Your membership catalog, retail products, and pricing structures load from an existing spreadsheet rather than manual entry. Staff can begin processing transactions the same day without an extended onboarding period.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Grows with Your Business",
    description: "Whether your gym operates from one location or expands to multiple, Owners Inventory handles the same workflow without requiring a system change. Adding a new location, a new staff member, or a new membership tier takes minutes rather than weeks of configuration.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Straightforward Pricing",
    description:
      "The best POS for gyms management does not require a long-term contract or an enterprise-level budget. The system is free to start. After the trial period, pricing is structured around your actual usage with no hidden fees attached to integrations or additional payment methods.",
    icon: "testWhychoseIcon5",
  },
   {
    id: "6",
    title: "Support That Stays Available",
    description: "Our support team is reachable through the setup process and throughout everyday use. If something does not work as expected during a busy morning, help is accessible at the point it matters, not only during an initial onboarding window.",
    icon: "testWhychoseIcon6",
  },
];

export const GYM_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph: "Owners Inventory connects with the payment and accounting platforms your gym already uses. Membership fees, retail revenue, and payment records stay consistent across every connected system without manual data entry between them.",
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
