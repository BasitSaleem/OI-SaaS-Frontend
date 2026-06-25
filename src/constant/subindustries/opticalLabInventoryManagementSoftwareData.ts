import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Optical Lab Inventory Management — UnifiedPlatform Section ─────────────
export const OPTICAL_LAB_INVENTORY_UNIFIED_HEADING =
  "Challenges Faced by Optical Labs Today";

export const OPTICAL_LAB_INVENTORY_UNIFIED_PARAGRAPH =
  "In optical labs, there are a large number of prescriptions, lens orders and production jobs that demand high accuracy throughout the entire process. When the management system is not efficient, delays, errors or inventory problems can have a negative impact on customer satisfaction and business results.";

export const OPTICAL_LAB_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Prescription Processing Errors",
    description:
      "There is a need for optical labs to process prescriptions with detailed specifications in an accurate manner. Manual data entry can result in inaccuracies, which can cause the production of incorrect lenses, costly remakes, and customer dissatisfaction.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Lens and Frame Inventory Management",
    description:
      "Managing several types of lenses, coatings, frame models, and accessories can be difficult. Without a proper inventory system, it is easy to fall into the pitfalls of running out of stock or over stocking.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Coordinating Orders From Multiple Sources",
    description:
      "Optical labs receive orders from retail stores, eye clinics, wholesale partners, and online channels at the same time. Without a single intake system, prescriptions get missed, duplicated, or entered with errors.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Costly Lens Remakes",
    description:
      "A single wrong axis, base curve, or coating means the lens has to be scrapped and remade from scratch. High remake rates waste expensive materials, eat into margins, and push delivery dates back.",
  },
];

export const OPTICAL_LAB_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-time Order Tracking",
    description:
      "Owners Inventory tracks prescriptions and lab orders from start to finish. Staff can keep a check on the order status in real-time, which helps to minimise delays and enhance customer communication.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Automated Inventory Management",
    description:
      "All lenses, frames, coatings, and accessories are automatically tracked. Stock levels are updated in real time and enable labs to maintain optimal stock levels and prevent shortages.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Production Workflow Management",
    description:
      "Orders can be seen at all stages of the production process. Staff have the ability to oversee workloads, prioritise urgent orders, and ensure they are able to complete prescriptions on time.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Quality Control Monitoring",
    description:
      "There are different points in production where quality checks can be recorded. This ensures all orders meet prescription specifications and reduces costly remakes.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Multi-location Synchronization",
    description:
      "Our software allows inventory and order data to be synced between various stores, clinics and lab locations. This enhances coordination and gives real-time stock visibility to all locations.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Reporting and Analytics",
    description:
      "Complete reports offer information on production effectiveness, order volumes, inventory usage and profitability. Managers have access to the operational data in real-time to make informed decisions.",
  },
];

export const OPTICAL_LAB_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "OmniChannel and Order Management Integration",
    description:
      "Our AI-powered optical lab software helps manage orders from retail stores, eye clinics, wholesale customers, and online channels. Every order automatically updates inventory and production records, reducing manual errors and improving operational efficiency.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Retail Store and Clinic Integration",
        listdescription:
          "Optical stores can send prescriptions straight to the lab via the system, along with a clinic. Staff can view the details of the order, verify timelines and track progress in real time without manual communication. This enhances accuracy and turnaround time.",
      },
      {
        listheading: "Wholesale and Online Order Integration",
        listdescription:
          "The sales orders placed by wholesale partners and online sales channels are managed through a central control. The software manages bulk orders, prescription needs, and delivery timelines, ensures proper stock allocation and delivery.",
      },
      {
        listheading: "Unified Dashboard",
        listdescription:
          "Owners Inventory offers a single dashboard that allows managers to track the status of production, inventory, order status, completed work and customer requests. This unified view enhances visibility and aids in better decisions for operational activities.",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced Analytics and Reporting",
    description:
      "Our optical lab management software generates real-time reports on the production efficiency, turnaround time, inventory utilization, and sales performance. Based on the accurate data, managers can identify workflow bottlenecks, understand demand trends, and optimize the resources.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [],
  },
];

export const OPTICAL_LAB_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Prescription Intake and Verification",
    description:
      "Prescription is documented electronically and verified prior to manufacturing. This will minimize manual errors, and will guarantee the right lens manufacturing from the beginning.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Lens and Frame Inventory Control",
    description:
      "The system monitors inventory with respect to lens type, coating, brand, frame style and supplier. Staff can easily find products and keep the inventory accurate.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Production and Work Order Management",
    description:
      "Each order is assigned a work order that tracks progress through cutting, coating, and assembly. This improves accountability and enhances workflow.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Quality Assurance Tracking",
    description:
      "Inspection of production is carried out at various stages of the manufacturing process. Labs can maintain the quality standards without remakes and customer complaints.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Customer and Store Order Management",
    description:
      "Orders from retail stores, clinics and individual customers are managed from a single dashboard. All orders, order status and delivery schedules are visible to staff.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Analytics and Decision Support",
    description:
      "Owners Inventory automatically analyzes production performance, inventory movement, turnaround time, and sales trends. Detailed reports enable managers to identify growth opportunities, improve efficiency and provide better customer service.",
    imageSrc:
      "/assets/industries-pages/optical-lab-inventory-management-software/key-features-section/key-features-card6.webp",
  },
];

export const OPTICAL_LAB_INVENTORY_WORKFLOW_DATA = {
  heading: "Optical Lab Management Workflow of Owners Inventory",
  paragraph:
    "Our software makes optical lab work even easier by managing prescriptions, production workflows, and inventory accurately. Each order is monitored throughout the production process to minimize mistakes and speed up delivery.",
  steps: [
    {
      number: 1,
      title: "Prescription Intake and Order Registration",
      description:
        "Upon receipt of prescriptions, all pertinent information, such as lens specifications, coatings, frame choices, and customer needs is entered into the computer system. An order number is assigned to each order to keep it trackable. This allows for proper processing and full traceability during production.",
    },
    {
      number: 2,
      title: "Inventory and Material Management",
      description:
        "The system classifies and records lenses, frames, coatings and accessories. Stock levels are monitored in real time; staff able to find materials easily needed for production. This helps maintain accurate stock and minimizes delays due to stock shortages.",
    },
    {
      number: 3,
      title: "Production Workflow Management",
      description:
        "Owners Inventory monitors all stages of production for each order, from the lens cutting to coating stage, edging, fitting, and assembly. Staff can follow progress in real time and prioritize ‘urgent’ orders.",
    },
    {
      number: 4,
      title: "Custom Prescription and Special Order Handling",
      description:
        "Special lenses, coatings and/or custom frame modification orders are handled on a case-by-case basis and detailed specifications are provided. All customer needs and production instructions are recorded in the system to guarantee accurate production without disrupting standard production flows.",
    },
    {
      number: 5,
      title: "Quality Inspection and Verification",
      description:
        "Completed glasses are checked for accuracy of the prescription and standards of the product before they are delivered. Results of inspections are entered into the system, which will help to minimize remakes and guarantee that the product will fulfil customer needs.",
    },
  ],
};

export const OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA = {
  heading: "The POS Reviews: What Our Clients Say",
  paragraph: "",
  secondHeading: "Manage Your Optical Lab Efficiently",
  secondDescription:
    "Use our optical lab software to streamline your workflow, increase accuracy while manufacturing prescriptions, and handle all prescription orders with ease.",
  whyChooseTitle:
    "Why Choose Our Optical Lab Management Software?",
  whyChooseDescription:
    "Owners Inventory is more than just a lab management solution. It helps optical labs with accurate, efficient, and full control of prescriptions, production processes, and inventory.",
};

export const OPTICAL_LAB_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Delaney Shaw",
    title: "Optical Partner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image70.webp",
    text: "It used to be hard to order prescriptions, particularly when working at peak times, but now we're able to do it without any confusion and track the job from start to finish.",
  },
  {
    id: "2",
    name: "Sterling Cross",
    title: "Lab Director",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image71.webp",
    text: "The inventory tracking system is highly effective in ensuring proper stock of lenses and frames at all times. We no longer face unforeseen shortages",
  },
  {
    id: "3",
    name: "Bristol Lane",
    title: "Operations Manager",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image71.webp",
    text: "The reporting tools provide us with a good insight into production performance and order volumes, and it has enabled us to be much more efficient.",
  },
];

export const OPTICAL_LAB_INVENTORY_FAQS = [
  {
    id: "1",
    question: "How can optical lab management software improve operational accuracy?",
    answer:
      "Prescription tracking, production activities and inventory movement are tracked automatically in the system. This helps to minimise human error and ensures that each order is fulfilled in line with the customer's needs.",
  },
  {
    id: "2",
    question: "Is it suitable for small optical labs?",
    answer:
      "Yes, Owners Inventory works for all optical laboratories, no matter how small or big they are, as well as production facilities. It aids in streamlining operations and automating repetitive tasks.",
  },
  {
    id: "3",
    question: "Can I manage multiple lab locations with the software?",
    answer:
      "Yes, the software offers centralized views for various locations. It can manage stock levels, production status, and order fulfillment on one dashboard.",
  },
  {
    id: "4",
    question: "How does it help with inventory management?",
    answer:
      "The system provides real-time monitoring of lenses, frames, coatings and accessories. It automatically updates stock after use, purchase and adjustment, and it will help to keep inventory records accurate.",
  },
  {
    id: "5",
    question: "Can it track custom prescriptions and special orders?",
    answer:
      "Yes, Owners Inventory records prescription details, custom requirements, production steps, delivery dates and payment information. This ensures proper goods delivery and shipment.",
  },
];

export const OPTICAL_LAB_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Prescription Accuracy",
    description:
      "Each prescription order is recorded and tracked throughout the manufacturing process. The system minimizes manual work and guarantees the exact manufacture of lenses.",
    icon: "testWhychoseIcon1",
  },
  
  {
    id: "2",
    title: "Adapts to Business Growth",
    description:
      "The software can be scaled to fit the needs of a single optical laboratory or many production sites without causing any disruption of workflow.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Ensures Controlled Access",
    description:
      "Managers can manage employee access to sensitive information with role-based permissions. The system ensures secure record keeping and transparency throughout production, inventory, and finances.",
    icon: "testWhychoseIcon3",
  },

  {
    id: "4",
    title: "Supports Custom Lens and Special Orders",
    description:
      "Specialized prescriptions, lens coatings, custom frame modifications, and special customer needs are all managed by the software. All details are recorded to guarantee precise fulfillment.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Handles Complex Inventory Management",
    description:
      "Lenses, frames, coatings, and accessories are controlled in a centralized system as well as production materials. Real-time inventory updates prevent shortages and provide better inventory control.",
    icon: "testWhychoseIcon5",
  },
];

export const OPTICAL_LAB_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our optical lab management software integrates with CRMs, ERPs, accounting software, barcode scanners, prescription management software and payment gateways. The integrations reduce redundant data entry, enhance data quality and ensure a smooth business process.",
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
