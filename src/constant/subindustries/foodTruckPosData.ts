import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Food Truck POS — UnifiedPlatform Section ──────────────────────────
export const FOOD_TRUCK_UNIFIED_HEADING =
  "Challenges Food Truck Owners Run Into Every Day";

export const FOOD_TRUCK_UNIFIED_PARAGRAPH =
  "Food trucks deal with operational problems in every service that affect ingredient costs, cash accuracy, order speed, and location performance when sales and stock are managed without a proper system.";

export const FOOD_TRUCK_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Untracked Ingredient Waste",
    description:
      "Food trucks target a food cost percentage between 28% and 35%, and most never hit it consistently. When prep quantities are estimated rather than measured, and ingredients are used without being tied to a specific order, the loss builds up quietly across every service. By the end of the week, the numbers are off, but there is no record to show where they went.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Orders That Slow Service",
    description:
      "A busy lunch stop can bring 50 to 60 customers through in under an hour. When orders are taken manually or through a system that is not connected to the cooking station, mistakes happen, and the line slows down. A wrong order during peak service means a remake, a longer wait, and sometimes a refund that comes straight out of the day's margin.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "No Mid-Service Stock Alerts",
    description:
      "Running out of a core ingredient mid-service is one of the fastest ways to lose a customer permanently. Without real-time ingredient tracking, there is no alert, no time to adjust, and no way to stop it from happening again at the next stop.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Cash Gaps at End of Day",
    description:
      "A typical food truck runs with two to four people handling orders, cooking, and payments during the same service window. When no system records which staff member processed which transaction, tracing a cash gap at the end of the day becomes a guessing exercise. A gap of even a few hundred dollars with no transaction record attached to it is nearly impossible to investigate.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Record of Stop Performance",
    description:
      "Food trucks rotate between fixed lunch spots, weekend markets, private events, and festivals. Without location-tagged sales records, comparing a Tuesday corner stop against a Saturday market is not possible. Most operators make scheduling decisions based on instinct rather than numbers, which means unprofitable stops stay on the rotation longer than they should.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Menu Prices Behind Real Costs",
    description:
      "Supplier prices change with every order, but most food truck menus stay the same for months. When the cost of a key ingredient goes up, and the menu price stays flat, the margin on that item shrinks without any visible warning.",
  },
];

export const FOOD_TRUCK_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Ingredient Usage Tracked Per Order",
    description:
      "Every menu item is linked to the ingredients it uses and the exact quantity per portion. When an order is placed, ingredient quantities deduct automatically. If any ingredient drops below your set minimum, an alert goes out before it runs out. ",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Faster Order Entry",
    description:
      "Orders are entered through a tablet or mobile POS at the window. Price, taxes, and modifiers apply the moment an item is selected, and your cooking station receives the order instantly. The gap between taking payment and starting preparation is reduced to seconds, with fewer verbal handoffs and fewer mistakes. ",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Stock Visible During Service",
    description:
      "Ingredient quantities update with each order processed. When an ingredient approaches your set minimum, a low-stock alert gives you time to stop taking affected orders or pull from backup before the queue builds.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Transactions Recorded by Staff",
    description:
      "Each payment is recorded under the staff member who handled it, with an exact timestamp. Cash, card, and contactless payments are logged separately. When the session closes, a reconciliation report compares cash expected against cash recorded, so any gap is visible immediately.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Sales Separated by Location",
    description:
      "Each session opens with a location tag, so every order is attached to that stop automatically. The end-of-day report shows performance by location without any manual sorting, making it straightforward to identify which stops are worth returning to.",
  },
  {
    id: "6",
    icon: "whychoseIcon5",
    title: "Menu Costs Reflect Supplier Changes",
    description:
      "Ingredient purchase prices are stored alongside your supplier records. When a supplier price increases, updating the ingredient cost triggers an automatic recalculation of food cost across every affected menu item, so low-margin items are visible before the next service.",
  },
];

export const FOOD_TRUCK_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Centralized Sales and Billing for Food Trucks",
    description:
      "Every order processed at the service window, every ingredient purchase logged against a supplier, and every session report generated at the close of service runs through the same dashboard. Your sales records and stock records stay in sync automatically, so the numbers on the screen always reflect what actually happened during that service.",
    imageSrc: "/assets/industries-pages/food-truck-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Order and Payment Tracking",
        listdescription:
          "Every transaction processed during service is recorded instantly with a full breakdown of items sold, payment method used, and the time it was completed. Nothing is entered manually after the fact.",
      },
      {
        listheading: "Supplier and Purchase History",
        listdescription:
          "Every ingredient purchase is stored with the supplier name, quantity ordered, price paid, and delivery date. When a supplier invoice arrives above the previously agreed price, the difference is visible immediately against the purchase history, so it can be queried before payment is made.",
      },
      {
        listheading: "Multi-Truck Sales View",
        listdescription:
          "All your trucks sit on one dashboard. Daily sales, ingredient levels, session summaries, and staff activity across every vehicle are visible from a single login, so managing two trucks does not require two separate systems or twice the administrative work.",
      },
    ],
  },
  {
    id: "2",
    title: "Reporting and Accounting Integration",
    description:
      "The reporting dashboard pulls together daily service summaries, menu item sales performance, food cost data, and payment breakdowns into one view that updates as transactions are processed. High-margin items and low-margin items are easy to compare across services, so pricing decisions are based on real cost data rather than estimates. Session reports filtered by location show which stops generate consistent revenue and which ones are not worth returning to.",
    imageSrc: "/assets/industries-pages/food-truck-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    listVariant: "accordion",
    list: [
      {
        listheading: "Live Sales and Stock Data",
        listdescription:
          "Numbers update as each order is placed, so the stock count and revenue figures you see during service reflect what is actually happening, not what was recorded at the start of the shift.",
      },
      {
        listheading: "Menu Item Performance and Food Cost Tracking",
        listdescription:
          "Each menu item is tracked by revenue, ingredient cost, and margin. You can see exactly which items are profitable and which ones are costing more to produce than they are bringing in at the window.",
      },
      {
        listheading: "Location and Event Reporting",
        listdescription:
          "Session data is separated by location automatically. Comparing revenue and order volume across a weekday lunch stop, a weekend market, and a private event is straightforward from the reporting dashboard without any manual sorting or spreadsheet work.",
      },
    ],
  },
];

export const FOOD_TRUCK_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Mobile POS Terminal",
    description:
      "The system runs on tablets and mobile devices, fitting the setup of a food truck without fixed counters or bulky hardware. Orders, payments, and receipts are all handled from the same screen. The interface is built for fast operation in tight spaces, with large item buttons, clear navigation, and a screen readable in direct sunlight or low light.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Menu and Modifier Management",
    description:
      "Your full menu is built inside the system with item names, prices, portion sizes, and categories. Add-ons, size variations, and substitutions are attached to relevant items so the correct price calculates automatically. When a price needs updating, the change applies across the menu in a single edit.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Ingredient-Level Stock Tracking",
    description:
      "Each menu item is mapped to the ingredients it uses and the exact quantity per portion. Stock reduces automatically with every order, giving you a live count throughout the service. Prep quantities entered at the start of each service are factored in from the first transaction.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Low Stock Alerts and Reorder Points",
    description:
      "Every ingredient can be assigned a minimum quantity. When stock drops to that level, an alert triggers before the ingredient runs out, giving you time to stop accepting affected orders or arrange a resupply before the next service.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Offline Mode With Automatic Sync",
    description:
      "The system keeps processing orders and payments without an internet connection. All transactions, ingredient deductions, and payment details recorded offline sync automatically to the dashboard once the connection is restored.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Cash, Card, and Contactless Payments",
    description:
      "Cash, credit and debit cards, and tap-to-pay are all accepted at the window. A single order can be split across multiple payment methods without any manual calculation. Every payment is recorded with the method, amount, time, and staff member who processed it. ",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Service Session Reports",
    description:
      "At the end of each service, the system generates a report covering total orders, revenue, payment breakdown, voided items, and refunds. Reports are produced automatically when the session closes and are accessible from any device.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Role-Based Staff Access",
    description:
      "Permissions are assigned by role, so each team member only accesses what their position requires. Staff handling payments can't edit menu prices or adjust stock counts. Owners and managers have full access to sales reports, session summaries, and cost data.",
    imageSrc:
      "/assets/industries-pages/food-truck-pos/key-features-section/key-feature-card8.webp",
  },
];

export const FOOD_TRUCK_WORKFLOW_DATA = {
  heading: "Inventory Workflow for Food Trucks",
  paragraph:
    "Owners Inventory tracks every ingredient from purchase to the last order of the day, so your stock count stays accurate and cost records don't need to be reconstructed later.",
  steps: [
    {
      number: 1,
      title: "Logging Pre-Service Stock",
      description:
        "When ingredients are purchased or delivered, quantities and purchase prices are entered against the relevant items. This sets your opening stock count for the service, and every order placed during the day is measured against it.",
    },
    {
      number: 2,
      title: "Mapping The Menu to Ingredients",
      description:
        "Every menu item is linked to the ingredients it uses and the exact quantity per portion. When a burger is sold, the system reduces the beef patty, bun, sauce, and any other mapped ingredients at the same time. Stock and sales are managed as one connected process, not two separate tasks.",
    },
    {
      number: 3,
      title: "Stock Monitoring During Orders",
      description:
        "Ingredient quantities update in real time as each order is processed. When an ingredient hits the minimum level you've set, a low-stock alert goes out immediately, giving you time to limit orders or pull from backup before it runs out. For a truck serving 50 to 100 customers in a single sitting, that visibility has a direct impact on how the service runs.",
    },
    {
      number: 4,
      title: "Logging Prep and Service Waste",
      description:
        "Any ingredient discarded during prep or service is logged before disposal, capturing the ingredient name, quantity, reason, and time. Waste entries are kept separate from sales deductions, so your stock count only reflects usable ingredients. This also lets you compare waste levels across different service days and locations.",
    },
    {
      number: 5,
      title: "Session Close and Stock Check",
      description:
        "When service ends, the system compares expected remaining stock against actual usage. Any difference between what was consumed and what was ordered is flagged immediately, so it can be looked into before the next service. The session closes with a full summary of orders, revenue, payment breakdown, and ingredient usage, stored automatically with no manual entry required.",
    },
    {
      number: 6,
      title: "Post-Service Cost Review",
      description:
        "Once a session closes, the reporting dashboard shows what was sold, what each item cost to make, and the margin across the service. Food cost percentages are calculated per menu item based on actual ingredient quantities and supplier prices. If a specific item consistently shows a low margin, it appears in the report before it affects the following week. Sales data is stored by location, so you can compare performance across different stops whenever you're making scheduling decisions.",
    },
  ],
};

export const FOOD_TRUCK_TESTIMONIALS = [
  {
    id: "1",
    name: "Miles Jenkins",
    title: "Food Truck Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image35.webp",
    text: "Cash reconciliation used to take me 40 minutes after every service. Now the session report is ready the moment I close out, and any cash difference is flagged straight away. It takes under five minutes and I actually trust the number.",
  },
  {
    id: "2",
    name: "Skylar Sanders",
    title: "Street Food Operator ",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image34.webp",
    text: "We were running out of ingredients mid-service at least twice a week. The low-stock alerts changed that completely. We have not had to turn away a single order in six weeks since we started using Owners Inventory.",
  },
  {
    id: "3",
    name: "Griffin Sanders",
    title: "Multi Truck Operator",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image34.webp",
    text: "I run two trucks at different locations on weekends and had no real way to compare how each one performed. Now both are visible in the same dashboard. The location reports make it obvious which stops are worth coming back to and which ones are not.",
  },
  {
    id: "4",
    name: "Luna Jenkins",
    title: "Food Truck Owner",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image35.webp",
    text: "I updated ingredient costs after a supplier price increase, and the system recalculated the food cost on every affected menu item straight away. I spotted two items running at a loss and fixed the prices before the next service. That alone saved the week.",
  },
];

export const FOOD_TRUCK_FAQS = [
  {
    id: "1",
    question:
      "Can the system work without an internet connection during service?",
    answer:
      "Owners Inventory runs in offline mode when a connection is unavailable. Orders are processed, payments are accepted, and ingredient quantities are updated locally throughout the service. Everything syncs automatically to the dashboard once the connection is restored, so no transaction or stock movement is lost.",
  },
  {
    id: "2",
    question:
      "How does ingredient tracking work if I prep quantities before service starts?",
    answer:
      "At the start of each service session, you enter your opening stock. By the end of service, your remaining stock count reflects exactly what was used, based on what you actually started with that day.",
  },
  {
    id: "3",
    question:
      "Does the system handle menu items with add-ons or size variations?",
    answer:
      "Each menu item can have multiple modifier groups attached to it, covering add-ons, size options, and substitutions. So your staff members do not need to adjust prices manually at the window or risk charging the wrong amount during a busy service.",
  },
  {
    id: "4",
    question: "How does the system help with food cost control?",
    answer:
      "Every menu item is mapped to its ingredients and the exact quantity used per portion. When a supplier price changes, updating the ingredient cost triggers an automatic recalculation across every affected menu item. Items with a dropped margin are visible in the dashboard before the next service.",
  },
  {
    id: "5",
    question:
      "What happens to my sales data if my tablet is lost or damaged at an event?",
    answer:
      "Your data is backed up automatically to encrypted cloud storage after every session. You can log in from any other tablet, phone, or laptop and access your full transaction history, session reports, and ingredient records straight away.",
  },
  {
    id: "6",
    question:
      "Can I track sales across different locations and events from one account?",
    answer:
      "Each service session is assigned to a location when it opens, and every order is recorded against it. The reporting dashboard lets you filter sales, order volume, and menu item performance by location without sorting through records manually.",
  },
];

export const FOOD_TRUCK_KEY_FEATURES = [
  {
    id: "ice-cream-shop-billing",
    title: "Touchscreen Order & Billing",
    description:
      "Process customer food and combo orders quickly with customizable touchscreen menus and instant bill split options.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "ice-cream-shop-stock-control",
    title: "Ingredient and Stock Inventory Control",
    description:
      "Keep track of active ingredient count, packaging supplies, and combo box stock. Avoid running out of best-sellers during high demand.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "ice-cream-shop-vendor-mgmt",
    title: "Dairy and Ingredient Suppliers",
    description:
      "Manage food distributors, track ingredient costs, issue purchase orders, and monitor refrigerated shipment arrivals.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "ice-cream-shop-variants",
    title: "Flavor & Modifier Customization",
    description:
      "Configure meal sizes, gluten-free alternatives, sides, and sauces as modifiers attached to base menu items.",
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

export const FOOD_TRUCK_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Grow your business with Owners Inventory Today",
  secondDescription:
    "Running out of ingredients mid-service, cash gaps at the end of the day, and no clear picture of which stops make money are not unavoidable problems. They are the result of operating without the right system. Owners Inventory gives your food truck business the ingredient tracking, sales visibility, and payment controls it needs to run every service cleanly.",
  whyChooseTitle: "Why Choose Owners Inventory for Your Food Truck",
  whyChooseDescription:
    "Food trucks operate on thin margins, limited prep space, and service windows that leave no room for slow systems or costly errors. Here is why food truck owners trust Owners Inventory to keep every service accurate, every record complete, and every cost visible.",
};

export const FOOD_TRUCK_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Mobile Food Service",
    description:
      "Most POS systems are designed for fixed restaurants and then adapted for mobile use. Owners Inventory is structured around how a food truck actually runs, with location-based sessions, ingredient-level stock tracking, and offline payment processing built in from the start.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Every Service Accounted For",
    description:
      "From the first order to the final cash count, every transaction is recorded automatically under the staff member who processed it. Session reports are generated the moment service closes, so there is no manual compiling at the end of a long day. Owners who previously spent 30 to 40 minutes reconciling cash after each service now get that down to under five minutes.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Stock Tracked Automatically",
    description:
      "Every order updates your ingredient count in real time. You know what remains at any point during service without leaving the window to check. When something runs low, an alert goes out with enough time to act before the queue reaches that item.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Location Data on Every Stop",
    description:
      "Each service session is sorted by location, so your sales reports are already separated by stop when you review them. Comparing a regular weekday location against a weekend festival takes seconds, not a manual sort through separate records. Over time, this data tells you exactly where your truck makes money and where it does not.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Works Without Internet ",
    description:
      "Outdoor events, street markets, and private venues do not always have reliable internet. The system processes orders and payments in offline mode without any interruption to service. Everything syncs automatically once the connection returns, so no transaction is lost regardless of where the truck is parked.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Staff Ready Fast ",
    description:
      "The interface is designed for speed, not complexity. Role-based access means they only see what their position requires from day one, which keeps the handover process short even when staff turnover is high.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Support Is Available When Needed",
    description:
      "Our team is available from initial setup through day-to-day use. You are not handed documentation and left to work it out on your own.",
    icon: "testWhychoseIcon7",
  },
  {
    id: "8",
    title: "Pricing That Fits Your Budget",
    description:
      "The plans are structured around what a single food truck or small fleet actually spends, not around the budgets of large restaurant groups. You get full POS functionality, ingredient tracking, session reporting, and accounting integration without paying for features a mobile food operation does not need. The system is free to start, with a 3-month trial so you can run it through real services before committing to a plan.",
    icon: "testWhychoseIcon8",
  },
];

export const FOOD_TRUCK_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with the accounting and payment tools your food truck business already uses, so sales figures, ingredient costs, and financial records stay consistent across every system without manual data entry between them.",
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
