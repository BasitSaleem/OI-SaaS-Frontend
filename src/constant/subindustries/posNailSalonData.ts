import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Nail Salon POS — UnifiedPlatform Section ─────────────────────────────
export const NAIL_SALON_UNIFIED_HEADING =
  "Challenges That Nail Salon Owners Face Today";

export const NAIL_SALON_UNIFIED_PARAGRAPH =
  "Without a dedicated nail salon point of sale system, there is friction for nail salon owners, technicians and clients each and every day. Here are some of the most frequently faced problems that nail salons experience.";

export const NAIL_SALON_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Inaccurate Product and Supply Inventory Tracking",
    description:
      "A nail salon is selling runaway consumables that are used every day of the year. If there's no proper tracking system in place, then shops can end up with popular colors running out during an appointment or be forced to order more than they have on their shelves, ultimately costing them money on items that go bad without being sold.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow and Error-Prone Booking Management",
    description:
      "Taking appointments manually through phone calls, paper books, or basic calendar apps creates room for mistakes. Double-bookings, missed slots, wrong technician assignments, and forgotten client preferences all damage satisfaction and repeat business.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Difficulty Managing Service Menus and Pricing",
    description:
      "Nail salons offer dozens of services with varying prices across technician levels, durations, and materials. Without a centralized system, staff quote inconsistent prices, discounts are applied incorrectly, and new services are slow to update across the team.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "No Visibility into Technician Performance",
    description:
      "There is no way to determine who is working at full capacity, who has an open spot, and who's the most profitable with a decentralized system. Schedule and staff based on guesswork instead of data.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Inconsistent Client Records and Preferences",
    description:
      "Every regular, corporate, bridal party member and subscription is an individual relationship. This, coupled with walk-in sales, without a centralized system, can result in preferences being forgotten, missed opportunities and the personal touch that influences loyalty being lost.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Reporting on Revenue, and Profitability",
    description:
      "Without a dedicated reporting system, salon owners are left guessing. If there is no designated reporting system, salon owners are left with the question of what to report. No visibility of profitable services, wasted products or seasonal / promotional trends in revenue.",
  },
];

export const NAIL_SALON_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory Management",
    description:
      "Stock levels are updated automatically each time a service is delivered. Having the inventory managed in real time, means no more over-ordering, or loss of product, and always having popular colors and nail supplies on hand before that busy weekend.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Fast Appointment Booking",
    description:
      "The system walks the staff through the booking process, matching the appropriate technician, verifying the time of the service, and accepting payments. No appointments are double-booked, missed, or misrecorded, resulting in no confusion or last minute chaos.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Service and Pricing Management",
    description:
      "Create and configure your complete service catalog, ordered by technician, service time and add-on services with tiered pricing. Consistently priced at checkout and healthy margins across all service types.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Technician Scheduling and Performance Tracking",
    description:
      "Access availability, utilization and appointment load for technicians in real time. Assign services to the appropriate team members, determine gaps to be filled and monitor revenue per technician.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Client and Loyalty Tracking",
    description:
      "All visits, service history, product transactions, preferences and loyalty rewards are kept in a centralized client profile. Favourites can be displayed to staff in seconds to be able to pull up a returning client's favourite technician and nail type.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Sales and Business Reporting",
    description:
      "One reporting dashboard offers revenue per day, per week or per month. Salon owners are empowered with visibility to confidently make purchasing, pricing and staffing decisions.",
  },
];

export const NAIL_SALON_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Booking and Appointment Synchronization",
    description:
      "All online, on the phone, and in-house bookings are added to the same calendar, and the booking process is the same for all bookings. Technician work schedules, customer records and stock levels are all updated instantaneously.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/omni-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Unified Operations Dashboard",
        listdescription:
          "Track bookings, stock, supplier orders, technician performance & client activity all with one-click. Multi-location salon owners can see all sites without switching tools or systems to see them.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "The nail salon point of sale transforms your daily operations into reports that show you revenue trends, which services are the most popular, product cost per nail, waste percentage, technician utilization and client retention rates.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [],
  },
];

export const NAIL_SALON_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Real-Time Product Inventory Tracking",
    description:
      "Stock levels are automatically updated every time a service is performed, retail sale or supplier delivery. Salon managers always know what's on the shelf, what's running low and what needs a reorder before the next rush.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Appointment and Scheduling Management",
    description:
      "Schedule, reconfirm, and organize all appointments all from one calendar view. Prevent double bookings, manage technician schedules and schedule in automation and waitlist.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Service Menu and Custom Add-On Builder",
    description:
      "Design and administer the complete service schedule and pricing, with technician service rates, service time and add-on items.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Multi-Channel Order Management",
    description:
      "Accept walk-in, phone bookings and online reservations through a single queue. All bookings follow the same booking and fulfillment procedure, reducing missed bookings and duplicate bookings.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Client Account and Loyalty Management",
    description:
      "Keep all of the information regarding contact, visits, service preferences, product bought, appointments upcoming and loyalty points in every client's profile.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Mobile-Friendly Interface",
    description:
      "Managers and technicians can access the appointment book, notes, payment processing and communicate with each other from any mobile device, helping to keep everyone connected while they are away from the front desk.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Automated Low-Stock Alerts",
    description:
      "When the nail colour, gel or consumable is going below the reorder point, the system alerts the manager in time, and can place an order with the supplier before the service is impacted.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Gift Cards and Membership Management",
    description:
      "Manage gift cards and memberships in the POS. Monthly service allowances and membership discounts are automatically handled, cutting back on front-desk duties.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Detailed Sales and Waste Reporting",
    description:
      "Track revenue, product costs, profitability of services, product waste, technician utilization and client retention from a single interface designed specifically for nail salon business owners.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/key-features-section/key-feature-card9.webp",
  },
];

export const NAIL_SALON_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory for Nail Salon Businesses",
  paragraph:
    "Owners Inventory is designed to support high-volume appointment scheduling, complex service menus, perishable product management, and client relationship programs from a single connected system.",
  steps: [
    {
      number: 1,
      title: "Set Up Your Service Menu and Inventory",
      description:
        "Include all services, pricing levels, technician levels, add-ons and product costs into the system. Organize group services in order of type, occasion and length of service making them easily accessible to clients when they are consulting and booking online.",
    },
    {
      number: 2,
      title: "Receive and Track Incoming Stock",
      description:
        "Record all supplier deliveries of products, quantities, batch information and notes on condition. Stock levels are automatically updated and discrepancies between quantity ordered and quantity received are marked in the system.",
    },
    {
      number: 3,
      title: "Manage Bookings and Walk-In Appointments",
      description:
        "Create bookings for walk-ins, phone calls, and online reservations from a single calendar. The system can match the availability of technicians, confirm the time of the service and schedule the appointment to the appropriate technician without needing to make handoffs.",
    },
    {
      number: 4,
      title: "Process Checkout and Client Payments",
      description:
        "Create itemized invoices, apply loyalty points or memberships, accept all payments and automatically update the client profile. Front desk receipts are sent digitally, maintaining a fast and paper-free front desk.",
    },
    {
      number: 5,
      title: "Handle Client Accounts and Loyalty Rewards",
      description:
        "Monitor client loyalty points, memberships, gift card balances and upcoming appointments. Automated reminders are sent out prior to appointments and follow-up post-visits are sent afterwards to encourage re-booking.",
    },
    {
      number: 6,
      title: "Monitor Daily Performance and Stock Health",
      description:
        "Live data for revenue, product stock, utilization of technicians, pending appointments and loss of product is visible at a glance for the owner of the salon. Automated reporting identifies which services are most profitable and on which services performance may be improved.",
    },
  ],
};

export const NAIL_SALON_TESTIMONIALS = [
  {
    id: "1",
    name: "Emily R.",
    title: "Nail Salon Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image76.webp",
    text: "What used to be a lot of emails, sticky notes and spreadsheets is now all in a single location, and our clients receive a much more professional experience when booking a bridal party.",
  },
  {
    id: "2",
    name: "Claire M.",
    title: "Technician Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image77.webp",
    text: "It saved our technicians a lot of hours each week as they used to ask us constantly for booking details and client notes etc., but now it's all on their phone and clients are notified automatically.",
  },
  {
    id: "3",
    name: "James T.",
    title: "Salon Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image76.webp",
    text: "Since switching to Owners Inventory, we've stopped running out of popular colors mid-week. The low-stock alerts alone have saved us from so many last-minute supplier calls.",
  },
  {
    id: "4",
    name: "Priya N.",
    title: "Online Booking Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image77.webp",
    text: "We introduced an online booking system and were concerned about overhauling two systems, but with Owners Inventory it's all done at once and there's never been a missed appointment.",
  },
  {
    id: "5",
    name: "Robert A.",
    title: "Boutique Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image78.webp",
    text: "The reporting alone is worth it. I can finally see which services actually make money and which ones I should stop discounting.",
  },
  {
    id: "6",
    name: "Hannah K.",
    title: "Front Desk Coordinator",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image78.webp",
    text: "It was set up quickly and everyone was familiar with it within a day of installing it, and they have already found that the daily stock checks are paying for the system.",
  },
];

export const NAIL_SALON_FAQS = [
  {
    id: "1",
    question: "Can the system track nail products and supply inventory in real time?",
    answer:
      "Yes. All stock transactions are automatically captured, such as deliveries from suppliers, service provision and stock sold in the retail outlets and items written off as waste, eliminating the need to manually count stock and ensuring the accuracy of stock levels at all times.",
  },
  {
    id: "2",
    question: "Does the system support appointment booking and technician scheduling?",
    answer:
      "The nail salon point of sale allows walk-in bookings, advance reservations, phone appointments, and online bookings, all on one calendar view. It also automatically eliminates conflicts and double bookings based on the availability of technicians, duration of service, and client preferences.",
  },
  {
    id: "3",
    question: "Can I manage both retail product sales and services from the same system?",
    answer:
      "Yes. All walk-in service sales, retail product sales, gift cards, and memberships go through the same checkout and fulfillment system, and inventory and client records are updated in real-time for each sale.",
  },
  {
    id: "4",
    question: "How quickly can I set up the Owners Inventory for my nail salon?",
    answer:
      "In most nail salons, the salon is open and operating within a couple of hours. Your team can start using the system the same day, as you can upload service menus, client records, supplier information, and product catalogs en masse.",
  },
  {
    id: "5",
    question: "Can different staff members have different access levels?",
    answer:
      "Yes. For the front desk, nail technician and manager, roles based permissions can be set to provide access to only the areas applicable to their role. Data and reporting is only for business owners and authorized managers.",
  },
  {
    id: "6",
    question: "Does the system support client loyalty programs and membership packages?",
    answer:
      "Loyalty points, membership allowances, gift card balances and promotional discounts are all held within each of the clients' profiles and automatically applied at checkout, reducing the manual tracking of loyalty and minimizing the possibility of error at the front desk.",
  },
];

export const NAIL_SALON_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Streamline and Scale Your Nail Salon Business",
  secondDescription: "Owners Inventory is an integrated solution, with bookings, inventory, service management, client loyalty, technician scheduling and reporting all in one system. It simplifies day to day tasks, eliminates manual steps, and provides a consistent and professional experience, for clients that walk in, call, or book online.",
  whyChooseTitle: "Why Choose Owners Inventory Nail Salon POS System?",
  whyChooseDescription:
    "Our software removes the need for nail salon owners to employ a number of separate devices to manage product inventory, appointment scheduling, service pricing, technicians scheduling, client accounts, and enterprise reporting.",
};

export const NAIL_SALON_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Nail Salon Operations",
    description:
      "It has been created particularly for nail salons that rely on appointments, require co-ordination among the technicians, have many services and products that are continually being updated, and where stock turns frequently. It's capable of accommodating the needs of any nail salon, from a regular Tuesday to the night before Valentine's Day.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Quick Setup",
    description:
      "Owners Inventory can be set up within a few hours without advanced technical knowledge. Service menus, product inventory, supplier details, client records, and staff profiles can all be uploaded in bulk from a spreadsheet or added directly through the platform.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "All-in-One Platform",
    description:
      "Eliminates the necessity of multiple applications for appointment scheduling, inventory management, client loyalty, technician schedules, and financial reporting. All of your nail salon's operations are managed from one single platform, eliminating the need to use multiple disconnected systems and the cost that comes with that.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "24/7 Support",
    description:
      "Help is on hand 24 hours a day and 7 days a week. Whether it's a busy Saturday morning or a scheduling issue for Mother's Day, or a stock problem before a full week is booked up, help is always at the ready when it's most needed.",
    icon: "testWhychoseIcon4",
  },
   {
    id: "5",
    title: "Actionable Insights",
    description:
      "With real-time revenue data, product cost breakdowns, best-performing services, technician utilization rates, and client retention figures, nail salon owners have clarity that empowers them to plan with certainty, set prices, and expand their nail salon with confidence.",
    icon: "testWhychoseIcon5",
  },
];

export const NAIL_SALON_TOOLS_DATA = {
  heading: "Integration and Business Tools",
  paragraph:
    "Owners Inventory is compatible with Shopify, Stripe, QuickBooks, Google Calendar, Mailchimp, and more. All online bookings, payment records, supplier records and client communication synchronize across systems, without manual reconciliation.",
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
      name: "Google Calendar",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/google-calendar.svg",
    },
    {
      id: 5,
      name: "Mailchimp",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/mailchimp.svg",
    },
  ],
};
