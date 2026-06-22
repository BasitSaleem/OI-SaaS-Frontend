import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Construction Inventory Management — UnifiedPlatform Section ─────────────
export const CONSTRUCTION_INVENTORY_UNIFIED_HEADING =
  "Challenges Construction Companies Face Every Day";

export const CONSTRUCTION_INVENTORY_UNIFIED_PARAGRAPH =
  "Construction businesses deal with daily operational challenges that affect project timelines, material costs, site efficiency, and budget control when inventory is managed without a proper system.";

export const CONSTRUCTION_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Overstock, Waste, and Misallocation",
    description:
      "Ordering too much leaves materials sitting on-site for weeks, blocking cash that could be used elsewhere on the project. Ordering too little stops work and forces expensive last-minute purchases. Excess stock gets moved around, left out in the weather, or simply forgotten. Without tracking what's being used and what's piling up, the same purchasing mistakes get repeated on every project. ",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "No Real-Time Visibility Across Multiple Sites",
    description:
      "When materials are spread across multiple job sites, warehouses, and service vehicles, keeping an accurate count manually is nearly impossible. Teams make purchasing decisions based on memory or outdated records. Lack of visibility leads to duplicate orders, missed stock, and budgets that keep getting stretched project after project. ",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Theft and Shrinkage",
    description:
      "The construction industry loses an estimated $1 billion annually to theft in the US alone. Power tools, copper wire, and building materials are common targets. Most of these losses go undetected for days or weeks because there's no system recording what left the site and when. The project is already behind by the time the shortage is noticed.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Poor Purchase Order Management",
    description:
      "When material purchasing is handled through phone calls, emails, and separate spreadsheets, errors are guaranteed. The same order gets placed by two different people. A delivery gets missed because no one followed up. Unapproved purchases go unnoticed because there is no approval process for orders before they are placed. Without a structured construction purchase order management process in place, each of these problems keeps repeating project after project.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Supplier and Delivery Delays",
    description:
      "When a delivery gets late, everything that depends on it gets delayed too. It can stop multiple trades from working at the same time, turning a one-day delay into three. Construction teams that have no visibility into incoming deliveries cannot adjust schedules in advance. They only find out about the delay when the delivery doesn't arrive on time.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Manual Processes and Paperwork",
    description:
      "Paper records and Excel sheets create more problems than they solve on active construction sites. Entries get missed, sheets get lost, and by the time someone updates the inventory log, the numbers are already wrong. Reconciling those records takes hours that could be spent on actual site work. The margin for error in manual tracking is too high for a project where every material and every dollar needs to be accounted for.",
  },
];

export const CONSTRUCTION_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Stock Tracking Across All Sites",
    description:
      "Our software updates stock levels automatically every time a material is received, used, or transferred between sites. Your team no longer needs to call around or walk a site to get an accurate count. Every site, warehouse, and storage location is visible from one place. That means fewer duplicate orders and fewer surprises when a delivery doesn't match what was expected. ",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Centralized Purchase Order Management",
    description:
      "Every purchase order is created, tracked, and approved inside the same system. No more orders placed through phone calls or separate spreadsheets. If an order is pending, received, or overdue, the status is visible to the people who need to know. Unapproved purchases can be flagged before they go through, so spending stays within the project budget.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Material Usage Tracking and Waste Reduction",
    description:
      "Our software tracks how materials are being consumed across each project. When teams can see usage patterns, they order closer to what's actually needed rather than what's estimated. Overstocking drops. Materials are less likely to be left exposed on-site until they're damaged or lost. That waste reduction directly protects project margins.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Theft and Loss Monitoring",
    description:
      "Every item that enters or leaves a site is logged. Owners Inventory software keeps a clear record of stock movement, so stock errors are caught early rather than weeks later when the project budget reflects the loss. Teams can identify patterns and take action before small losses become large ones.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Supplier and Delivery Tracking",
    description:
      "Our software keeps all supplier information and delivery schedules in one place. When a delivery is expected, the system shows it. When something is delayed, teams find out in time to adjust the work schedule rather than after a crew has already shown up at a site waiting on materials that haven't arrived.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Accurate Records, Without the Manual Work",
    description:
      "Paper logs and Excel sheets get replaced with a system that updates in real time. Every stock movement, purchase, and material transfer is recorded automatically. Reconciling inventory no longer takes hours at the end of the week. The records are accurate because the process of keeping them accurate is built into how the system works.",
  },
];

export const CONSTRUCTION_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Centralized Project Costs and Material Billing",
    description:
      "Every material purchase, supplier payment, and stock adjustment made through Owners Inventory is recorded against the project it belongs to. Project owners get a clear view of total spending across every active site without pulling records from separate systems. All billing activity sits in one place, so comparing actual costs against the project budget is straightforward at any point during active work, not just at the end.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Material Cost Tracking by Project",
        listdescription:
          "Every purchase is assigned to a specific project at the time the order is placed. As materials are received and used, their costs are updated against the project record automatically. Project managers can check total material spend at any point during active work without waiting for an end-of-month report.",
      },
      {
        listheading: "Supplier Payment and Order History",
        listdescription:
          "Every supplier transaction is stored with a full record of what was invoiced, what was paid, and what each material cost at the time of purchase. If a supplier charges above the previously agreed price, the overcharge is visible straight away when compared against the order history. Over time, this record gives project owners the data they need to renegotiate pricing, switch suppliers, or consolidate orders based on actual cost performance rather than assumptions.",
      },
    ],
  },
  {
    id: "2",
    title: "Project Finance Reports and Accounting Integration",
    description:
      "Owners Inventory connects with accounting software so material costs, supplier invoices, and purchase order data flow directly into your financial records without manual re-entry. When a purchase order is completed and a delivery is confirmed, the transaction is available to sync with your accounting system straight away. This keeps project accounts accurate and reduces the time your team spends reconciling inventory records against financial statements at the end of each month.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      {
        listheading: "Accounting Software Integration",
      },
      {
        listheading: "Budget vs Actual Spend Reporting ",
      },
    ],
  },
];

export const CONSTRUCTION_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Material and Equipment Categorization",
    description:
      "Construction sites deal with hundreds of different materials, tools, and equipment at any given time. Owners Inventory lets you organize everything by category, type, unit of measurement, or location. Finding a specific item takes seconds instead of searching through a spreadsheet. Whether it's structural steel, electrical fittings, or heavy equipment, every item sits in its own category with its own stock record.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Barcode and SKU-Based Item Tracking",
    description:
      "Every material and tool can be assigned a barcode or SKU inside the system. Scanning an item at the point of receiving or issuing it updates the stock count instantly. This removes the need for manual entry and the errors that come with it. Items are tracked from the moment they arrive on site to the moment they're used, transferred, or written off.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Low Stock Alerts and Reorder Points",
    description:
      "Each material can be given a minimum stock level. When quantities drop below that level, the system sends an automatic alert before the item runs out. Project managers get notified in time to place an order without stopping work. It replaces the habit of ordering in bulk just to avoid running short.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Stock Adjustment and Loss Recording",
    description:
      "When materials are damaged, returned, or written off, the adjustment is recorded with a reason, date, and reference. Nothing disappears from the records without a trace. Every correction is logged, so your stock count stays accurate, and any audit trail is ready when it is needed.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Multi-Location Stock Transfers",
    description:
      "Materials can be moved between job sites, warehouses, or storage yards using transfer orders that the system tracks at every step. If one site has unused stock and another is running low, the transfer is initiated and recorded from a single dashboard. No reconciling spreadsheets between locations. No phone calls to confirm what was sent.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Role-Based Access Control",
    description:
      "Not everyone on a construction project needs access to the same information. Site supervisors, procurement staff, and project owners can each be given different levels of access. A site worker can log material usage without being able to edit purchase orders. Sensitive financial data stays visible only to the people who need it.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card6.webp",
  },
  {
    id: 7,
    title: "Bulk Product and Material Import",
    description:
      "Adding a full material list to the system doesn't have to be done one item at a time. You can upload an Excel or CSV file to import products, update prices, or add new categories in a single step. This is useful at the start of a new project when a large bill of materials needs to be loaded quickly.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card7.webp",
  },
  {
    id: 8,
    title: "Sales and Expense Reporting",
    description:
      "The reporting dashboard shows material consumption rates, stock value by category, and total expenses filtered by site or date range. Project managers can see which materials are being used fastest and which categories are running over their allocated budget. Reports are pulled from live data, so the numbers reflect what is actually happening on site rather than what was last manually entered into a spreadsheet.",
    imageSrc:
      "/assets/industries-pages/construction-inventory-management-software/key-features-section/key-features-card8.webp",
  },
];

export const CONSTRUCTION_INVENTORY_WORKFLOW_DATA = {
  heading: "Workflow of Construction Inventory Management",
  paragraph:
    "Owners Inventory follows a structured workflow that keeps every material, order, site record, and purchase history connected from the start of a project to its completion.",
  steps: [
    {
      number: 1,
      title: "Receiving and Verifying Incoming Materials",
      description:
        "When a delivery arrives on site, it gets checked against the original purchase order inside the system. Quantities are verified and added to the stock count immediately. If there's a shortfall or a damaged item in the delivery, it gets flagged and recorded against that supplier before the delivery is accepted. Nothing enters the site stock without a record attached to it.",
    },
    {
      number: 2,
      title: "Assigning Materials to Projects and Cost Codes",
      description:
        "Once materials are received, they are assigned to a specific project or cost code inside the system. This step connects material spending directly to the project it belongs to. When a project manager reviews costs, they can see exactly how much has been spent on materials for each phase of work. It removes the guesswork from project cost tracking.",
    },
    {
      number: 3,
      title: "Issuing Materials to Site Teams",
      description:
        "When a site team needs materials, the request is logged, and the stock count is updated at the point of issue. The system records who requested the materials, which project they were issued to, and when. This keeps consumption data accurate across every active project and makes it easy to spot when usage is running ahead of what was planned.",
    },
    {
      number: 4,
      title: "Monitoring Stock Levels During Active Work",
      description:
        "As materials are used, stock levels update automatically. Project managers can check remaining quantities at any point without walking the site. When a material approaches its reorder point, an alert is triggered so the order can be placed before work is affected. No manual stock checks between deliveries are needed.",
    },
    {
      number: 5,
      title: "Raising and Approving Purchase Orders",
      description:
        "When restocking is needed, a purchase order is created directly from the dashboard and sent through the approval process before it reaches the supplier. The right person reviews and approves the order, and once approved, it is logged against the project budget. When the delivery arrives, it is matched back to that purchase order automatically.",
    },
    {
      number: 6,
      title: "Closing Out and Reconciling Project Stock",
      description:
        "At the end of a project, the system generates a full stock reconciliation report showing what was ordered, what was used, and what remains. Leftover materials can be transferred to another site or recorded as unused stock. The report gives project owners a clear final picture of material costs against the original budget, without having to piece it together from separate records.",
    },
  ],
};

export const CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Us",
  paragraph: "",
  secondHeading: "Run Your Construction Projects With Confidence",
  secondDescription:
    "Take control of material costs, stock levels, and site operations with a system built for construction companies. Less waste, fewer delays, and every dollar accounted for.",
  whyChooseTitle:
    "Why Choose Owners Inventory for Construction Inventory Management Software",
  whyChooseDescription:
    "Construction companies operate on tight budgets and tighter schedules. Here is why project owners and site managers trust Owners Inventory to keep their materials accounted for, their teams aligned, and their projects on budget.",
};

export const CONSTRUCTION_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Hudson Lewis",
    title: "General Contractor",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image44.webp",
    text: "We were ordering the same materials twice because no one could see what was already on site. Within the first month of using Owners Inventory, we cut duplicate orders by more than half. That alone saved us around $4,000 on a single project.",
  },
  {
    id: "2",
    name: "Weston Scott",
    title: "Construction Project Manager",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image45.webp",
    text: "We had a theft problem we couldn't pin down. Tools and copper wire kept going missing. After we started logging every item in and out through Owners Inventory, we identified the pattern within two weeks and recovered over $2,000 worth of equipment.",
  },
  {
    id: "3",
    name: "Avery Clark",
    title: "Multi-Site Construction Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image44.webp",
    text: "I manage four active sites, and I used to spend my mornings calling supervisors for stock updates. Now I check everything from my phone in under five minutes. Last week I spotted a site running low on rebar and had a delivery arranged before work started that morning.",
  },
  {
    id: "4",
    name: "Layla Morgan",
    title: "Procurement Manager",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image45.webp",
    text: "Our purchase orders were a mess. Same orders going to two suppliers, missed deliveries, no approval process. We haven't had a duplicate order in three months since switching to Owners Inventory. The approval workflow alone has saved us hours of back and forth every week.",
  },
];

export const CONSTRUCTION_INVENTORY_FAQS = [
  {
    id: "1",
    question:
      "Can I track materials across multiple job sites from one account?",
    answer:
      "Yes. Owners Inventory gives you a single dashboard that shows stock levels, purchase orders, and material movements across all your active sites. You do not need a separate account or system for each location. Changes made on one site are reflected across the whole system straight away.",
  },
  {
    id: "2",
    question:
      "How does the system handle materials that are transferred between sites?",
    answer:
      "Transfer orders are raised directly from the dashboard. When materials are moved from one site or warehouse to another, the transfer is logged with the quantity, destination, and date. Both sites update automatically once the transfer is confirmed, so stock counts stay accurate on both ends without any manual reconciliation.",
  },
  {
    id: "3",
    question:
      "What happens if a delivery arrives short or with damaged materials?",
    answer:
      "When a delivery is received, it is checked against the original purchase order inside the system. If the quantity delivered is short or a damaged item is found, it is flagged and recorded against that supplier before the delivery is accepted. This keeps your stock count accurate and builds a clear history of each supplier's delivery performance over time.",
  },
  {
    id: "4",
    question: "Can I set minimum stock levels for specific materials?",
    answer:
      "Yes, you can. Each material can be given a reorder point inside the system. When stock drops to that level, an automatic alert is sent so a purchase order can be placed before work on site is affected. This removes the need to manually check stock levels between deliveries.",
  },
  {
    id: "5",
    question:
      "How much does Owners Inventory cost for a construction business?",
    answer:
      "Our construction inventory management software is free to start, with a trial period so you can run it across real projects before committing. After the trial, pricing is based on the size of your operation and the features you need. Contact us, and we will send you a quote the same day.",
  },
  {
    id: "6",
    question: "How long does it take to get the system set up?",
    answer:
      "Most construction teams are up and running within a day. Your full material list can be imported using an Excel or CSV file rather than being entered one item at a time. Once the list is uploaded and access is assigned to each team member, the system is ready to use across all active sites.",
  },
  {
    id: "7",
    question: "Does Owners Inventory integrate with accounting software?",
    answer:
      "Yes, we do. Material costs, supplier invoices, and purchase order data can be synced directly with your accounting software. This removes the need to re-enter data between systems and keeps your project financial records accurate without extra manual work from your team.",
  },
];

export const CONSTRUCTION_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Construction Operations",
    description:
      "Most inventory systems are built for retail or warehousing and then adapted for construction. Our construction inventory management software is structured around the way construction projects actually run, with multiple sites, changing material needs, and teams that need quick access to accurate stock information. The system handles the volume and complexity of active construction operations without requiring workarounds.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Manage Your Sites Remotely",
    description:
      "Project owners are rarely sitting at a desk. Stock levels, purchase order status, and site spending are accessible from any phone, tablet, or laptop in real time. Whether you are on site, in a meeting, or checking in from home, the information you need is available without calling anyone or waiting for a report to be sent through.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Quick Setup, Minimal Training",
    description:
      "Getting started does not require weeks of training or a dedicated IT team. Your material list can be imported in a single file upload and the system is ready to use from day one. Site workers, supervisors, and procurement staff can each be set up with the access they need quickly, and the interface is straightforward enough that most team members are comfortable using it within their first shift. ",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Scales Across One or Twenty Sites",
    description:
      "Owners Inventory works the same way whether you are managing a single project or running operations across multiple active sites. Adding a new site, new team members, or a new supplier does not require a separate system or a call to technical support. The same dashboard that works for one project handles ten without any changes to how the system is set up.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Pricing Built for Contractors",
    description:
      "Professional-grade construction inventory software does not have to come with enterprise-level pricing. Owners Inventory offers plans structured around the real costs of running a construction business, whether you are a small contractor managing one project at a time or a larger operation with ongoing multi-site work. The system is free to start, and after the trial period, pricing is based on your operation size and the features you need. No hidden fees. No long-term commitment required upfront.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Reliable Support",
    description:
      "Our support team is available to help from the initial setup through day-to-day use. If a question comes up mid-project or a new team member needs help getting started, you are not left waiting. Support is available when it matters, not just during the onboarding period.",
    icon: "testWhychoseIcon6",
  },
];

export const CONSTRUCTION_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with the accounting tools your construction business already uses, so material costs, purchase orders, and project spending stay consistent across every system without manual data entry.",
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
