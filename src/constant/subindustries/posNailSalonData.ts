import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Nail Salon POS — UnifiedPlatform Section ─────────────────────────────
export const NAIL_SALON_UNIFIED_HEADING =
  "Challenges Holding Back Nail Salons";

export const NAIL_SALON_UNIFIED_PARAGRAPH =
  "Nail salons must manage appointments, staff schedules, commissions, retail inventories, and walk-ins simultaneously, leading to specific daily challenges:";

export const NAIL_SALON_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Appointment & Calendar Double-Bookings",
    description:
      "Coordinating client bookings, technician schedules, and chair availability manually can lead to scheduling conflicts. Double-bookings cause client dissatisfaction and can cost salons up to 20% in annual revenue.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Commission & Staff Performance Tracking",
    description:
      "Calculating unique commissions, tips, and service splits for different technicians by hand is time-consuming and prone to human errors during payout periods.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Retail Product Inventory Control",
    description:
      "Tracking styling items, nail polishes, acrylics, and retail products sold at the counter requires real-time monitoring to prevent shortages.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Business Insights",
    description:
      "Without detailed reports, salon owners must guess which nail services, technicians, or retail brands generate the most profit.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Inefficient Price & Discount Control",
    description:
      "Manually adjusting prices for weekday promos or bundling services is difficult to manage across different chairs or locations without centralized controls.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Online Booking Integration",
    description:
      "Many salons miss out on appointments because their walk-ins are not synchronized with their online booking system. The Owners Inventory POS solves this problem.",
  },
];

export const NAIL_SALON_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Integrated Calendar Scheduling",
    description:
      "Manage client appointments, staff shifts, and chair availability in one interactive calendar to prevent double-bookings.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Automated Commission Tracking",
    description:
      "Instantly calculate technician commissions, tip splits, and service sales at checkout, simplifying payroll processes.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Retail Stock Management",
    description:
      "Track polishes, manicure tools, and retail products dynamically to get low stock alerts and avoid out-of-stock items.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Centralized Price Management",
    description:
      "Easily update service menu prices, implement package deals, and roll out promotions across all salon locations.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Technician Performance Analytics",
    description:
      "Access live reports displaying service volumes, repeat clients, and product sales for each technician.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-Time Booking Sync",
    description:
      "Sync online appointment requests and walk-ins instantly with your checkout desk for accurate calendar updates.",
  },
];

export const NAIL_SALON_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Booking Integration",
    description:
      "Our system connects your salon reception desk, online booking site, and product sales into a unified platform. Manage appointments and retail sales from one dashboard.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Service & Checkout Management",
        listdescription:
          "Keep checkout simple, process payments, split tips, and assign services to technicians automatically.",
        listSubDescription:
          "This helps nail salons run smoothly, reduce billing mistakes, and enhance the customer experience by keeping wait times short.",
      },
      {
        listheading: "Online Appointment Booking",
        listdescription:
          "Accept secure booking deposits, manage stylist calendars, and send automatic text reminders to reduce client no-shows.",
      },
      {
        listheading: "Single Multi-Location Control",
        listdescription:
          "See client histories, track active tables, and monitor salon revenue in real time across all of your branches.",
        listSubDescription:
          "This way you can run the salon efficiently and ensure customers receive consistent service at every visit.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "Our system provides reports showing service margins, employee performance, and product turnover, enabling you to optimize staffing schedules.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Track top technicians and services" },
      { listheading: "Monitor popular retail nail care brands" },
      {
        listheading:
          "Generate reports to understand client return frequencies",
      },
    ],
  },
];

export const NAIL_SALON_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Appointment Scheduling",
    description:
      "Interactive calendar for quick booking, reschedule, and technician assignment. The Owners Inventory POS is great for salons.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Live Retail Stock Updates",
    description:
      "Nail polishes, gels, and accessories inventory updates immediately with every purchase to prevent stockouts.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Staff Commissions & Tips",
    description:
      "Automatically calculates technician commission rates, cash/card tips, and payroll splits at checkout.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Service Packages & Bundles",
    description:
      "Combine manicures, pedicures, and nail art into custom packages with specialized pricing options.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Client CRM & History",
    description:
      "Saves client details, preferred nail polish shades, and service logs to deliver personalized experiences.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Expense & Finance Tracking",
    description:
      "Monitor salon rent, product costs, and registers to keep accounts transparent and audit-ready.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Online Booking Sync",
    description:
      "Allow clients to book appointments online with real-time slot updates on your front-desk console.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Multi-Store Salon Control",
    description:
      "Manage employees, inventory, and bookings across multiple nail salon locations from a single dashboard.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Actionable Reporting",
    description:
      "Create immediate summaries on service revenue, popular technician reports, and tax details.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Staff Commissions Security",
    description:
      "Set custom access levels to protect commission records, client databases, and financial registers.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card10.webp",
  },
];

export const NAIL_SALON_WORKFLOW_DATA = {
  heading: "Nail Salon Workflow",
  paragraph:
    "Our POS software automates appointment scheduling, client check-ins, technician commissions, and retail checkout. It keeps salon operations organized and efficient.",
  steps: [
    {
      number: 1,
      title: "Appointment Booking",
      description:
        "Clients book appointments online or call the salon. The system assigns a time slot, chair, and technician.",
    },
    {
      number: 2,
      title: "Client Check-In",
      description:
        "Welcome clients, verify booking details, and update the schedule status to 'In Service' as styling starts.",
    },
    {
      number: 3,
      title: "Service Delivery",
      description:
        "Technicians perform manicure, pedicure, or art services, noting any retail products used or purchased.",
    },
    {
      number: 4,
      title: "Product Inventory",
      description:
        "Retail products and nail polish stock levels are tracked and updated automatically to avoid running out.",
    },
    {
      number: 5,
      title: "Checkout & Tip Split",
      description:
        "Process payments quickly, add tips, calculate commission splits, and log details into the client's CRM history.",
    },
    {
      number: 6,
      title: "Reporting & Insights",
      description:
        "Review detailed insights to understand what services and technicians are most profitable. Transform your nail salon today.",
    },
  ],
};

export const NAIL_SALON_TESTIMONIALS = [
  {
    id: "1",
    name: "Zoey Scott",
    title: "Nail Salon Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "This system has made calendar scheduling and commission calculations quick and precise. Salon management is finally stress-free.",
  },
  {
    id: "2",
    name: "Tyler Mitchell",
    title: "Salon Manager",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "The best system we have implemented. It schedules appointments, tracks stylist shifts, and splits tips automatically.",
  },
  {
    id: "3",
    name: "Brandon Howard",
    title: "Multi-Store Salon Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We used to have double-booking issues. Now, everything is synchronized perfectly, and checkout billing is very fast.",
  },
  {
    id: "4",
    name: "Aisha Malik",
    title: "Salon Franchise Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "Staff commission payouts are finally accurate and fast. It saves hours of manual excel calculations every week.",
  },
];

export const NAIL_SALON_FAQS = [
  {
    id: "1",
    question: "What is a POS system for a nail salon?",
    answer:
      "A nail salon point of sale system helps manage appointments, client records, technician schedules, commission rates, and retail checkouts from one unified software.",
  },
  {
    id: "2",
    question: "Can it calculate commissions and tips?",
    answer:
      "Yes. The system automatically tracks commissions, tip percentages, and booth rent payouts for each technician during checkout.",
  },
  {
    id: "3",
    question: "Is it easy for nail artists to use?",
    answer:
      "Absolutely. The layout is simple and designed for quick booking lookups, and checking schedules on tablets or phones.",
  },
  {
    id: "4",
    question: "Does it support online booking sync?",
    answer:
      "Yes, your website booking widgets and phone reservations sync instantly with the central receptionist calendar.",
  },
  {
    id: "5",
    question: "Can I manage retail product sales?",
    answer:
      "Yes, you can scan and sell retail items like nail files, polishes, and lotions, keeping retail stock counts automatically in sync.",
  },
];

export const NAIL_SALON_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Salon Inventory Management Made Easy",
  secondDescription:
    "Control your retail product stock, manage employee calendars, and simplify technician commission calculations using our system designed specifically for salons.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our system gives you appointment scheduling, commission tracking, and unified control over your nail salon.",
};

export const NAIL_SALON_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Simple Setup",
    description:
      "Set up your service menus, pricing, and technician details quickly without interrupting daily client appointments.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Stable & Reliable",
    description:
      "Maintains speed and performance during busy weekend rushes, ensuring hassle-free checkout for clients.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Clear Inventory Counts",
    description:
      "Know exactly how many bottles of polish, nail gel, and styling products are available at the front desk.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Accurate Commission Reports",
    description:
      "Generate detailed commission and sales summaries for each technician, making payroll cycles quick and simple.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Page Settings",
    description:
      "Adapts to your nail salon's policies, supporting walk-ins, complex appointments, and custom tips.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Secure Cash Registers",
    description:
      "Set custom access levels to protect salon commission records, client databases, and financial registers.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Advanced Integrations",
    description:
      "Integrates with barcode scanners, receipt printers, card terminals, online booking platforms, and accounting tools.",
    icon: "testWhychoseIcon7",
  },
];

export const NAIL_SALON_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our point of sale system integrates with accounting, ecommerce platforms, and payment systems to streamline nail salon operations and reduce manual work.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
