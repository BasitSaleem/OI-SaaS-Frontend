import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── HVAC Inventory Management — UnifiedPlatform Section ─────────────
export const HVAC_INVENTORY_UNIFIED_HEADING =
  "Challenges HVAC Companies Face in Parts and Stock Control";

export const HVAC_INVENTORY_UNIFIED_PARAGRAPH =
  "Running an HVAC business without a proper inventory system cuts directly into job margins, technician output, and customer satisfaction. These problems do not show up once. They repeat every week until a structured system is in place.";

export const HVAC_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Stockouts That Halt Jobs Mid-Service",
    description:
      "A technician opens the van on a customer's driveway, and the contactor is not there. That one missing part triggers a return trip, delays the job, and ties up a technician for hours while generating no billable revenue. HVAC companies without structured parts tracking lose 12 to 18% of their total inventory value every year because situations like this get treated as normal rather than fixable.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Scattered Stock With No Accurate Count",
    description:
      "Parts sit across multiple service vans, a central warehouse, and sometimes an off-site storage unit. Without a connected system, nobody holds an accurate count at any given time. A technician places an order for a part that has been sitting in another van for three days, and neither person knew.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Seasonal Demand That Catches Operations Off Guard",
    description:
      "Compressors and refrigerants move fastest in summer. Ignitors and heat exchangers are the critical items in winter. HVAC businesses running with static reorder points year-round will either overstock the wrong items in the off-season or face shortages at exactly the point when demand is highest. Both outcomes affect revenue and customer trust.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Rush Orders That Drain the Parts Budget",
    description:
      "When a part runs out mid-job, emergency procurement is the only option. Rush orders carry a 40 to 80% price premium over standard purchasing rates. A $35 contactor, sourced next-day, can cost $90 delivered.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Capital Locked in Slow-Moving Stock",
    description:
      "Overstocking is not a safe fallback. Carrying costs for idle inventory run 20 to 25% of inventory value per year. Parts ordered in large quantities to avoid shortages end up sitting on shelves for months. They occupy warehouse space and block cash that should be working elsewhere in the business.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Manual Records That Fall Behind Daily Operations",
    description:
      "Spreadsheets work until the operation grows past a certain point. At five or six technicians across multiple zones, entries get missed, figures go stale, and the inventory log is already wrong by the time someone opens it.",
  },
];

export const HVAC_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Live Stock Updates Across Every Location",
    description:
      "Every time a part is used on a job, received at the warehouse, or moved between vans, the stock count updates immediately. Managers see accurate quantities across all locations from a single dashboard.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Proactive Alerts Before Stock Runs Out",
    description:
      "Each part is assigned a minimum stock level inside the system. When quantities fall below that level, an alert goes out before the shortage affects an active job. Purchase orders move proactively rather than in response to a technician discovering an empty bin on a customer's property.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Seasonal Reorder Point Adjustments",
    description:
      "Cooling season stocking requirements differ from heating season requirements, and Owners Inventory accommodates both. Reorder points can be reviewed and adjusted ahead of each peak period so the right parts are available when call volumes rise.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Structured Purchase Order Approvals",
    description:
      "Every purchase order is created and approved inside the same system. Orders placed through phone calls or text messages without a record are no longer part of the process. The approval workflow catches duplicate orders and unapproved spend before they leave the building, keeping the parts budget in check.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Automated Van Stock Replenishment",
    description:
      "When a technician's van stock drops below its set threshold, a replenishment request is generated automatically. Warehouse staff can see exactly what each vehicle needs without waiting to hear from a technician.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Records That Update Automatically",
    description:
      "There is no separate step required to update inventory records. Every part usage, delivery, transfer, and write-off is captured through the same actions the team performs during normal operations.",
  },
];

export const HVAC_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Parts Ordering and Integration",
    description:
      "Owners Inventory connects every channel your HVAC business uses to manage parts into one system. Stock levels, purchase records, and order data stay consistent whether a transaction happens at the warehouse, through a supplier, or via a field request.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Warehouse Counter Transactions",
        listdescription:
          "Parts issued from the warehouse are recorded at the point of dispatch. Stock counts update immediately, so inventory figures stay accurate throughout the day without manual reconciliation.",
      },
      {
        listheading: "Field and Supplier Order Integration",
        listdescription:
          "Purchase orders and technician parts requests are captured automatically when confirmed. Stock updates instantly, preventing duplicate orders and eliminating the risk of dispatching a technician to a job where the required part is no longer available.",
      },
      {
        listheading: "Unified Parts Dashboard",
        listdescription:
          "All inventory activity across vans, warehouses, and supplier orders appears in one central dashboard. Service managers can monitor stock movement, track open orders, and manage replenishment without switching between tools.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Parts Analytics and Reporting",
    description:
      "Owners Inventory converts daily parts usage and purchasing data into clear, readable reports. Managers can identify fast-moving components, slow stock that is tying up capital, and seasonal demand patterns over time. That data supports smarter purchasing decisions, reduces unnecessary stock holding, and keeps parts costs proportional to actual job volume.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const HVAC_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Parts Catalog and Categorization",
    description:
      "HVAC inventory covers a wide range of SKUs, from low-cost consumables like capacitors and filters to higher-value components such as compressors and heat exchangers. Every item can be organized by category, unit of measurement, storage location, and stock priority.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Barcode and SKU Tracking",
    description:
      "Each part is assigned a barcode or SKU inside the system. Scanning at the point of receipt or issue updates the stock count without manual entry. From arrival at the warehouse to installation on a service call, every part carries a complete movement record.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Van and Warehouse Stock in One View",
    description:
      "Service vehicles are managed as separate stock locations within the same account. Managers can see what is in each van, what has been consumed, and what requires replenishment alongside warehouse levels, all from a single screen.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Work Order Parts Tracking",
    description:
      "Parts used on a job are recorded against the corresponding work order at the point of issue. Service history ties directly to parts consumption, which lets managers identify which job types draw the heaviest stock and build purchasing schedules around actual patterns rather than assumptions.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Automated Reorder Triggers",
    description:
      "Minimum stock thresholds are monitored continuously. When a part reaches its reorder point, the system triggers an alert or a purchase order depending on how the account is configured. High-frequency parts can be set to reorder automatically so the restocking process does not depend on someone noticing the shortage manually.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Bulk Parts Import",
    description:
      "A full parts catalog can be loaded from an Excel or CSV file in one upload. Pricing updates, new categories, and additional items can be added the same way. This is particularly useful when onboarding a new service territory or migrating from an older tracking system.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card6.webp",
  },
  {
    id: 7,
    title: "Parts Usage and Cost Reporting",
    description:
      "The reporting dashboard shows consumption rates by part, stock value by category, purchasing costs by supplier, and emergency order frequency. Managers can identify which items move fastest, which are building up as dead stock, and where the parts budget is being stretched by unplanned purchases.",
    imageSrc:
      "/assets/industries-pages/hvac-inventory-management-software/key-features-section/key-features-card7.webp",
  },
];

export const HVAC_INVENTORY_WORKFLOW_DATA = {
  heading: "Workflow of HVAC Inventory Management With Owners Inventory",
  paragraph:
    "Owners Inventory follows the actual path that HVAC parts take through a service operation, from the moment a delivery arrives to the point a job is closed out, keeping every stage connected and recorded.",
  steps: [
    {
      number: 1,
      title: "Receiving and Verifying Deliveries",
      description:
        "When a delivery arrives at the warehouse, it is checked against the original purchase order inside the system. A short delivery or a damaged item is flagged against the supplier before the delivery is accepted, so the stock count stays accurate and the supplier's performance record reflects what actually happened.",
    },
    {
      number: 2,
      title: "Allocating Parts to Jobs and Vehicles",
      description:
        "Once received, parts are assigned to specific service vehicles, technicians, or active job locations. When a service manager reviews costs at the end of a period, they can see exactly which parts were used, by whom, and on which job.",
    },
    {
      number: 3,
      title: "Logging Parts Usage Per Job",
      description:
        "When a technician uses a part on a service call, it is logged against that job at the point of issue. Consumption data stays accurate across all active team members, and it becomes straightforward to identify when a particular job category is consuming parts faster than the purchasing plan anticipated.",
    },
    {
      number: 4,
      title: "Monitoring Stock During Active Service",
      description:
        "Stock levels update automatically as parts are used throughout the day. When a location approaches its reorder threshold, the alert fires in time to arrange restocking before the next affected job is dispatched.",
    },
    {
      number: 5,
      title: "Raising and Approving Purchase Orders",
      description:
        "When a reorder is needed, the purchase order is created from the dashboard and routed through the configured approval process before it reaches the supplier. On delivery, the incoming stock is matched back to that purchase order automatically, closing the loop without manual reconciliation.",
    },
    {
      number: 6,
      title: "Closing Out and Reconciling Stock",
      description:
        "At the end of a billing cycle or service period, the system generates a reconciliation showing what was ordered, received, consumed, and returned. Service managers get a clear picture of actual parts costs against revenue without piecing together data from separate spreadsheets or asking technicians for recall.",
    },
  ],
};

export const HVAC_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Take Control of Your HVAC Inventory Today",
  secondDescription:
    "Stockouts, emergency orders, and parts that technicians cannot locate are not unavoidable costs. They are the result of operating without the right system. Owners Inventory gives your HVAC business the parts tracking, van stock visibility, and purchase controls it needs to run cleanly.",
  whyChooseTitle:
    "Why Choose Owners Inventory for HVAC Inventory Management",
  whyChooseDescription:
    "HVAC service businesses run on tight dispatch schedules and tighter margins. Here is why service managers and business owners trust Owners Inventory to keep their parts accounted for and their operations moving without interruption.",
};

export const HVAC_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Marcus Tucker",
    title: "HVAC Service Manager, Multi-Van Operation",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image44.webp",
    text: "We were running stockout calls three or four times a week. Technicians would show up at a job and the part simply was not in the van. After we set up reorder points in the Owners Inventory for every high-use part, our first-time fix rate moved from around 74% to 91% within a few months. The unplanned return trips have nearly stopped.",
  },
  {
    id: "2",
    name: "Dana Ronaldo",
    title: "HVAC Business Owner, Residential and Light Commercial",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image45.webp",
    text: "Emergency parts orders were a weekly expense I had just accepted as part of running the business. Supplier premiums and rush delivery fees were adding up to thousands every quarter. Since we started using Owners Inventory to track minimum stock levels, we have not placed an emergency order in over six weeks.",
  },
  {
    id: "3",
    name: "Arjun Patel",
    title: "Operations Lead, Commercial HVAC Contractor",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image44.webp",
    text: "We had parts on the warehouse shelves that had not moved in months. Nobody had checked actual job consumption before placing orders, so we kept restocking items we did not need. Owners Inventory gave us the usage data to see exactly what was sitting idle. We cleared the dead stock and reinvested that capital into parts that actually moved, and our carrying costs came down within the first quarter.",
  },
];

export const HVAC_INVENTORY_FAQS = [
  {
    id: "1",
    question:
      "Can I track van stock and warehouse stock as separate locations in one account?",
    answer:
      "Yes. Each service vehicle and storage location is managed as a distinct stock point within a single account. Managers see parts levels for every van and every warehouse from the same dashboard.",
  },
  {
    id: "2",
    question:
      "How does the system handle parts used across different service categories?",
    answer:
      "Parts usage is logged against each work order at the point of issue. Over time, managers can compare usage patterns across residential, commercial, and preventive maintenance jobs separately, which makes forward stocking decisions more accurate.",
  },
  {
    id: "3",
    question:
      "Can I adjust reorder points based on seasonal demand shifts?",
    answer:
      "Each part carries a reorder point that can be updated at any time. The system sends alerts based on whatever minimum level is currently active for that item, so stocking stays calibrated to the time of year.",
  },
  {
    id: "4",
    question:
      "What happens when a technician uses the last available unit of a critical part?",
    answer:
      "When a part reaches zero or drops below its minimum threshold, the system sends an automated alert to the assigned manager. Because the alert triggers at the threshold rather than at zero, there is usually enough lead time to source the part before the next job requiring it is dispatched.",
  },
  {
    id: "5",
    question:
      "Does Owners Inventory connect with accounting software used by HVAC businesses?",
    answer:
      "Parts costs, supplier invoices, and purchase order data sync with QuickBooks, Xero, and other supported accounting platforms. There is no manual re-entry of data between systems, and financial records stay consistent on both sides without extra steps from the team.",
  },
  {
    id: "6",
    question:
      "How quickly can an HVAC business get the system running?",
    answer:
      "Most operations are fully set up within a single day. The parts catalog is imported from an existing Excel or CSV file rather than entered one item at a time.",
  },
  {
    id: "7",
    question:
      "Is there a way to track which supplier has the best pricing history on specific parts?",
    answer:
      "Every supplier transaction is stored with the invoiced price, the paid amount, and the date of purchase. That data is available to support renegotiations, consolidation decisions, or supplier switches.",
  },
];

export const HVAC_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for HVAC Field Operations",
    description:
      "Owners Inventory is structured around how HVAC operations actually run, with multiple vehicles, work order-based consumption, seasonal stocking requirements, and technicians who need accurate information while they are out in the field.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Full Visibility From Any Device",
    description:
      "Stock levels, purchase order status, and van replenishment data are accessible from any phone, tablet, or laptop in real time.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Quick Setup, No Disruption",
    description:
      "Getting started does not require weeks of configuration or an IT project. A full parts catalog can be imported in a single file upload, and the system is operational from the first day.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Scales as Your Business Grows",
    description:
      "Whether the business runs four vans or thirty, Owners Inventory handles the same workflow without requiring a separate system for each location. Adding a new service zone, a new technician, or a new supplier takes minutes.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Transparent Pricing for Contractors",
    description:
      "Professional HVAC inventory software does not need to carry an enterprise price tag. The system is free to start. After the trial period, pricing is tied to scope, with no hidden fees and no upfront long-term commitment required.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Reliable Support Beyond Onboarding",
    description:
      "Our support team is accessible from initial setup through everyday use. Support is available when it has practical impact, not only during the initial onboarding window.",
    icon: "testWhychoseIcon6",
  },
];

export const HVAC_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with the accounting and business platforms your HVAC operation already depends on. Parts costs, service spending, and purchase records stay consistent across every connected system without manual data entry between them.",
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
