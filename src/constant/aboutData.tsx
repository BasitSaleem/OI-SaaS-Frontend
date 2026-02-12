import PhilosophyIcons from "@/components/icons/philosophyIcons";

export const ABOUT_HERO_CONTENT = {
  title: "Empowering Businesses with Complete Inventory Control",
  description: "Owners Inventory integrates POS, eCommerce, and inventory management into one system, streamlining operations and giving retailers confidence, clarity, and control.",
  ctaDesc: "Get Started for Free",
  variant: "animation2" as const,
};

export const PHILOSOPHY_CARDS = [
  {
    iconName: "complication",
    title: "Power without complication",
    description: "Power without being complicated: Simple to operate, yet able to perform complicated tasks.",
  },
  {
    iconName: "centralized",
    title: "Reliable & Centralized",
    description: "Reliable updates and centralized data can be trusted by businesses to make informed decisions.",
  },
  {
    iconName: "scalabilityExpension",
    title: "Scalability for Expansion",
    description: "Built to scale grow from a single store to multi-location operations with Owners Inventory.",
  },
  {
    iconName: "ownerControl",
    title: "Owner Control",
    description: "Power squarely in the hands of the business owners: Flexibility to run operations at your own will.",
  },
];

export const WHAT_WE_DO_CARDS = [
  {
    icon: "/assets/about-us/why-chose/stock-levels.svg",
    title: "Accurate Stock Levels",
    description: "Eliminate over-selling and stockout with precise, real-time tracking.",
  },
  {
    icon: "/assets/about-us/why-chose/simplified-perchasing.svg",
    title: "Simplified Purchasing",
    description: "Streamlined PO creation and vendor management to keep inventory flowing.",
  },
  {
    icon: "/assets/about-us/why-chose/real-time-insights.svg",
    title: "Real-time Insights",
    description: "Performance analytics that help you view, manage, and optimize margins.",
  },
  {
    icon: "/assets/about-us/why-chose/growth-management.svg",
    title: "Growth Management",
    description: "Tools designed to help you expand locations without expanding complexity.",
  },
];

export const WHO_WE_SERVE_CARDS = [
  {
    icon: <PhilosophyIcons name="cashCarry" size={40} />,
    title: "Cash & Carry",
    description: "Fast-paced environments requiring instant checkout and stock updates.",
  },
  {
    icon: <PhilosophyIcons name="multiLocation" size={40} />,
    title: "Multi-Location",
    description: "Retailers managing stock transfers and unified reporting across branches.",
  },
  {
    icon: <PhilosophyIcons name="centralizedWarehouses" size={40} />,
    title: "Centralized Warehouses",
    description: "Distributors needing robust picking, packing, and shipping logic.",
  },
];
