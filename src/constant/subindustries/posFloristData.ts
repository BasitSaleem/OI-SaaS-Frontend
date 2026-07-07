import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Florist POS — UnifiedPlatform Section ──────────────────────────────
export const FLORIST_UNIFIED_HEADING =
  "Challenges That Florist Business Owners Face Today";

export const FLORIST_UNIFIED_PARAGRAPH =
  "Running a business without a dedicated system of a point of sale is quite challenging. Let's take a look at the typical issues that florist owners and managers face on a daily basis.";

export const FLORIST_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Inaccurate Flower and Supply Inventory Tracking",
    description:
      "A florist is dealing in perishable material which changes daily. If a suitable tracking system is not in place, shops risk overstocking of flowers that might wilt before being sold, running out of popular flower arrangements, over ordering supplies from the wholesaler, and wasting money where they do not need to.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow and Error-Prone Order Processing",
    description:
      "Taking custom floral orders manually through phone calls, paper slips, or basic spreadsheets creates room for mistakes. Wrong flower varieties, missed add-ons, incorrect delivery addresses, and forgotten special instructions all damage customer satisfaction and repeat business.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Difficulty Managing Custom and Recurring Orders",
    description:
      "Handing out orders by telephone, paper or a simple spreadsheet can lead to inaccuracies. Misplaced addresses, forgotten special instructions, wrong flower varieties, missed add-ons: all hurt people's happiness and satisfaction as well as customer retention.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "No Visibility into Delivery Scheduling Coordination",
    description:
      "Florists that offer delivery need clear scheduling and routing. Without a proper system, delivery times get mixed up, drivers receive incomplete instructions, and customers are left waiting without updates, resulting in complaints and chargebacks.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Inconsistent Customer Profiles and Order History",
    description:
      "Each wedding, corporate account, funeral and regular subscriber is a unique situation. These are very difficult to manage in addition to the walk-in sales without a centralized system, which means that deadlines are missed and service failures can occur during important events.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Reporting on Sales, Waste, and Profitability",
    description:
      "Without a dedicated reporting system, florist owners are left guessing. There is no clear view of which arrangements generate the most profit, which flowers are being wasted before they can be sold, or how revenue fluctuates across seasons and events.",
  },
];

export const FLORIST_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Flower and Inventory Management",
    description:
      "Stock levels are automatically updated every time a sale or a supplier delivery are made, or when the day is adjusted. Real-time inventory tracking results in no over-ordering, less flower waste and availability of popular stems and arrangements for walk-in customers and advance ordering.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Fast and Accurate Order Processing",
    description:
      "The system can seamlessly lead the staff to order a custom flower, confirm the flower selection, record the delivery information, enter special instructions, and accept payment. All orders are registered in full, minimizing errors and omissions.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Custom Order and Event Management",
    description:
      "Handle wedding flower packages, corporate standing orders, funeral arrangements and subscription deliveries and daily retail sales from one calendar-based system. The order types have their own working procedures, which help in keeping the shop organized even during peak seasons.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Delivery Scheduling and Route Coordination",
    description:
      "Give tasks to drivers, add notes and pictures to each order and monitor the status of the tasks in real-time. Automated notifications can be sent to customers when their order is out for delivery, decreasing inbound calls and making customers happier.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Customer Profiles and Loyalty Tracking",
    description:
      "Every customer interaction, order history, preference, and communication is stored in a centralized profile. Staff can pull up a returning customer's favorite flowers in seconds and proactively reach out for birthdays, anniversaries, and seasonal promotions.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-Time Sales and Business Reporting",
    description:
      "One reporting dashboard provides revenue per day, per week or per month, top selling arrangements, flower cost per order, delivery performance and waste. The business owners of the flower shop will now enjoy the visibility that is essential for them when they need to make a purchase, set a price as well as maintain their profitable growth.",
  },
];

export const FLORIST_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel Sales and Operations Integration",
    description:
      "Owners Inventory synchronizes all aspects of your florist business. Every task from receiving flowers from your wholesaler, to confirming a wedding order, to dispatching a same-day delivery is live on one dashboard and linked to the same inventory and customer records.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Stock Receiving and Inventory Entry",
        listdescription:
          "As flowers and supplies arrive at the shop they are logged. Supplier, variety, batch and storage location can be used to record items. This is to ensure the inventories are correct, and prevents over-sales or stock-outs on a busy day.",
      },
      {
        listheading: "Order Management and Fulfilment Dispatch",
        listdescription:
          "Walk-in sales, advance orders, event packages, and subscription deliveries are all managed from the same system. Design staff receive clear preparation instructions and delivery staff receive complete route and order details, reducing errors from verbal handoffs.",
      },
      {
        listheading: "Unified Operations Dashboard",
        listdescription:
          "Monitor sales, stock, supplier delivery, pending orders, delivery status and employee activities from a single screen. With a single click, the florist owner can view the performance of multiple staff members and multiple locations, if applicable, without ever changing tools.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "The florist POS system turns everyday to reports that include trends in revenue, best selling arrangements, costs of flowers per order, waste percentage, delivery percentage and customer retention. This information guides owners to better buying decisions, pricing, and identification of the arrangements and seasons that are most profitable.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [],
  },
];

export const FLORIST_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Real-Time Flower Inventory Tracking",
    description:
      "Stock levels are automatically updated every time a sale, delivery receipt or waste write-off is made. Florist managers are always perfectly aware of what is in the cooler, what is dwindling and what needs to be ordered before the next rush.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Custom Order and Arrangement Builder",
    description:
      "Make custom orders with different flowers, quantities, colours, extras, card text and packing. The total cost of the arrangement is calculated automatically using ingredients and labour costs, for accurate quoting and healthy margins.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Multi-Channel Order Management",
    description:
      "Take care of walk-ins, telephone orders, online store orders and wholesale accounts all in one queue. All orders undergo the same confirmation and fulfilment process, minimising risk of missing work and the likelihood of duplication.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Delivery Management and Driver Dispatch",
    description:
      "Plan deliveries, assign drivers, route deliveries and manage the status of each delivery from the POS dashboard. Staff can attach delivery photos, collect digital signatures, and send customers automated status updates without needing a separate tool.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Supplier and Purchase Order Management",
    description:
      "Prepare and issue Purchase Orders to flower wholesalers and receive the flowers and compare against the orders. The system facilitates florists in organizing their orders in relation to other events and seasonal peaks.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Customer Account and Loyalty Management",
    description:
      "Stores customer contact information, order history, flower preferences, future events and loyalty points per profile. This data can be used by the staff to provide customized customer service and to implement targeted promotions that encourage repeat visits.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Role-Based Staff Access",
    description:
      "Configure access rights for counter personnel, delivery personnel, designers and managers. Financial data and reporting is accessible to business owners, and only to staff relative to their role.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Mobile-Friendly Interface",
    description:
      "Order information, stock checks, delivery confirmation and messaging with the team can all be done on any mobile device, allowing managers and delivery staff to keep things ticking over even when no one's at the counter.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Automated Low-Stock Alerts",
    description:
      "The system notifies the managers when there is a low supply or a low number of certain flowers, providing adequate time for the reordering before it impacts on the next order or walk-in sales.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Detailed Sales and Waste Reporting",
    description:
      "Monitor revenue, cost of goods, arrangement profitability, waste levels, delivery performance and customer retention on one dashboard for florist business owners.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card10.webp",
  },
];

export const FLORIST_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory for Florist Businesses",
  paragraph:
    "Owners Inventory is designed to support high-volume retail sales, complex custom orders, perishable inventory management, and time-sensitive delivery coordination.",
  steps: [
    {
      number: 1,
      title: "Set Up Your Flower Menu and Inventory",
      description:
        "Record all costs, suppliers, storage information, and allergen/care notes for all flowers, foliage, materials, and packaging. Group and sort arrangements according to their category, occasions, seasons and/or prices, so that they can be easily retrieved during customer consultations.",
    },
    {
      number: 2,
      title: "Receive and Track Incoming Stock",
      description:
        "Record all supplier deliveries including quantities, supplier batch information and conditions notes. The stock level is automatically updated and the system flags any discrepancy between the quantity ordered and what was received.",
    },
    {
      number: 3,
      title: "Process Walk-In and Custom Orders",
      description:
        "Create individual custom orders for retail, events, subscriptions and delivery customers. The system verifies stock, ensures pricing and provides order information directly to the design team, eliminating manual handoffs.",
    },
    {
      number: 4,
      title: "Manage Delivery Scheduling and Dispatch",
      description:
        "Assign orders to available drivers, create delivery windows, add instructions and photos, and track order completion in real-time. Automated customer notifications ensure customers are kept up-to-date, avoiding delays at the door.",
    },
    {
      number: 5,
      title: "Handle Billing and Customer Accounts",
      description:
        "Create invoices, handle deposits, process all kinds of payments and track all of the customer finances. Separate billing for corporate accounts and wedding clients with complete track of payments.",
    },
    {
      number: 6,
      title: "Monitor Daily Performance and Stock Health",
      description:
        "Florist owners see live data on sales, inventory levels, pending deliveries, flower waste, and revenue at a glance. Automated reports highlight which arrangements are most profitable, which flowers need attention, and where operational improvements can be made.",
    },
  ],
};

export const FLORIST_TESTIMONIALS = [
  {
    id: "1",
    name: "Emily R.",
    title: "Florist Shop Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "Before switching, we were throwing away flowers every week because we had no idea what was actually in the cooler. Now our stock levels are always accurate and waste has dropped dramatically.",
  },
  {
    id: "2",
    name: "Claire M.",
    title: "Event Florist Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "Managing wedding orders used to mean juggling emails, sticky notes, and spreadsheets. Now everything is in one place and our clients get a much more professional experience.",
  },
  {
    id: "3",
    name: "James T.",
    title: "Delivery Operations Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "Our delivery drivers used to call us constantly for order details. Now they get everything on their phone and customers get notified automatically. It has saved us hours every week.",
  },
  {
    id: "4",
    name: "Priya N.",
    title: "Online Store Manager",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "We added an online store and were worried about managing two channels at once. Owners Inventory handles everything together and we have not had a missed order since.",
  },
  {
    id: "5",
    name: "Robert A.",
    title: "Boutique Owner",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "The reporting alone is worth it. I can finally see which arrangements actually make money and which ones I should stop offering.",
  },
  {
    id: "6",
    name: "Hannah K.",
    title: "Floral Designer",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "Setup was fast and the whole team was comfortable with it within a day. The daily stock checks alone have already paid for the system.",
  },
];

export const FLORIST_FAQS = [
  {
    id: "1",
    question: "Can the system track flowers and supply inventory in real time?",
    answer:
      "Yes. Every stock movement is recorded automatically, including supplier deliveries, sales, waste write-offs, and adjustments, so inventory levels are always accurate without manual counting.",
  },
  {
    id: "2",
    question: "Does the system support custom order and event management?",
    answer:
      "Yes. The pos system for florist will enable you to create in-depth custom orders for weddings, corporate clients, subscription services, as well as special occasions with complete ingredient, rates and delivery information linked to every purchase.",
  },
  {
    id: "3",
    question:
      "Can I manage both walk-in sales and advance orders from the same system?",
    answer:
      "Yes. The operations of all order types, such as counter sales, phone orders, online store orders, and event packages all pass through the same queue and fulfilment process, and all occur in the same platform.",
  },
  {
    id: "4",
    question: "How quickly can I set up the Owners Inventory for my florist shop?",
    answer:
      "Most florist shops are fully set up within a few hours. Customer records, supplier information and flower varieties and arrangements can be uploaded in bulk, meaning your team can start using the system the same day.",
  },
  {
    id: "5",
    question: "Can different staff members have different access levels?",
    answer:
      "Yes. Roletype permissions can be set to allow access to counter staff, floral designers, delivery drivers, and managers to only the areas they need to access for their job.",
  },
];

export const FLORIST_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Streamline and Scale Your Florist Business",
  secondDescription: "Owners Inventory is a single integrated system that combines sales, inventory, custom orders, delivery, customer management and reporting. It streamlines day-to-day operations, eliminates manual tasks, and provides customers with timely, accurate and professional service, whether they come in, call or order online.",
  whyChooseTitle: "Why Choose Owners Inventory Florist POS System?",
  whyChooseDescription: "Our software eliminates the need for florist business owners to use multiple separate tools to handle flower inventory, sales orders, custom events, delivery scheduling, customer accounts, and business reporting.",
};

export const FLORIST_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Florist Operations",
    description:
      "It is a system developed specifically for flower shops where time is critical, order coordination is needed, custom orders are a necessity, and management of perishable stock is a daily requirement. It handles the complexity of any florist business, whether it's a quiet Tuesday or the day before Valentine's Day.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Quick Setup",
    description:
      "Owners Inventory can be set up in a matter of minutes without being an advanced technical user. It is possible to upload the varieties of flowers, arrangements, suppliers, customer types and staff profiles in bulk from a spreadsheet, or to add them directly via the platform.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "All-in-One Platform",
    description:
      "Substitutes the need for individual applications in order management, inventory management, delivery scheduling, customer accounts and financial reporting. All aspects of the florist business are handled from a single platform and eliminating the need for multiple systems and costs.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "24/7 Support",
    description:
      "There is ongoing and continuous support available, 24 hours a day, 7 days a week throughout the year. From a busy Saturday morning to delivery problems on Mother's Day or a stock discrepancy before the big wedding, there is always help when it is needed most.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Actionable Insights",
    description: "Real-time sales data, flower price details, best-selling arrangements, waste rates, and customer behaviour provide the clarity for florist owners to plan purchases, set prices and take the business to the next level of success.",
    icon: "testWhychoseIcon5",
  },
];

export const FLORIST_TOOLS_DATA = {
  heading: "Integration and Business Tools",
  paragraph:
    "Owners Inventory integrates with Shopify, Stripe, QuickBooks, Google Calendar, Mailchimp, and others. Orders placed online are synchronised across systems, payment history is synchronised across systems and supplier invoices are synchronised across systems, and customer communications are synchronised across systems, all without the need for manual reconciliation, ensuring financial records are accurate.",
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
