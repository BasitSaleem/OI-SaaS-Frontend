import { FeatureCategory, PricingPlan } from "../types";

export const ecommerceData: {
  plans: PricingPlan[];
  categories: FeatureCategory[];
} = {
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: 25,
      yearlyPrice: 20,
      description: "Start selling online",
      color: "#1AD1B9",
      bgColor: "rgba(26,209,185,0.1)",
      features: [
        "1 Online Store",
        "1 Warehouse",
        "Unlimited Users",
        "Unlimited Orders & Invoices",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: 50,
      yearlyPrice: 40,
      description: "Grow your digital presence",
      color: "#38ACCC",
      bgColor: "rgba(56, 172, 204, 0.1)",
      popular: true,
      features: [
        "1 Online Store",
        "2 Warehouse",
        "Unlimited Users",
        "Unlimited Orders & Invoices",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 115,
      yearlyPrice: 92,
      description: "High volume online sales",
      color: "#5588DF",
      bgColor: "rgba(85, 136, 223, 0.1)",
      features: [
        "1 Online Store",
        "Unlimited Warehouse",
        "Unlimited Users",
        "Unlimited Orders & Invoices",
      ],
    },
  ],
  categories: [
    {
      name: "Key Features",
      features: [
        {
          name: "Online Store",
          basic: "1",
          standard: "1",
          professional: "1",
          premium: "1",
        },
        {
          name: "Warehouses",
          basic: "1",
          standard: "2",
          professional: "Unlimited",
          premium: "Unlimited",
        },
        {
          name: "Stores",
          basic: "1",
          standard: "1",
          professional: "1",
          premium: "1",
        },
        {
          name: "POS Terminal",
          basic: "1",
          standard: "1",
          professional: "1",
          premium: "1",
        },
        {
          name: "Production Floors",
          basic: "Add-on",
          standard: "Add-on",
          professional: "Add-on",
          premium: "Add-on",
        },
        {
          name: "Accounts & Finance",
          basic: "Add-on",
          standard: "Add-on",
          professional: "Add-on",
          premium: "Add-on",
        },
      ],
    },
    {
      name: "Ecommerce",
      features: [
        {
          name: "Online Store",
          info: true,
          infoText:
            "Launch your own branded e-commerce website and custom-developed templates will be billed separately.",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        // { name: 'Templates & Themes', info: true, infoText: "Customize your website's appearance with pre-built and custom-developed templates.", basic: true, standard: true, professional: true, premium: true },
        {
          name: "Orders",
          info: true,
          infoText: "Monitor and fulfill orders – placed online.",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Discounts",
          info: true,
          infoText: "Apply promotional price reductions to products.",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        // { name: 'Domains', info: true, infoText: "Manage customer records and order history in one place.", basic: true, standard: true, professional: true, premium: true }
      ],
    },
    {
      name: "People",
      features: [
        {
          name: "Users",
          basic: "Unlimited",
          standard: "Unlimited",
          professional: "Unlimited",
          premium: "Unlimited",
        },
        // { name: 'Customers', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
        {
          name: "Suppliers",
          basic: "Unlimited",
          standard: "Unlimited",
          professional: "Unlimited",
          premium: "Unlimited",
        },
      ],
    },
    {
      name: "Products",
      features: [
        {
          name: "Products",
          basic: "Unlimited",
          standard: "Unlimited",
          professional: "Unlimited",
          premium: "Unlimited",
        },
        {
          name: "Categories",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Brands",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Barcode & Serial Tracking",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Product Images",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Bulk Product Import",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Bulk Price Update",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
      ],
    },
    {
      name: "Sales & Orders",
      features: [
        {
          name: "Point of Sale",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "POS Terminals",
          basic: "1",
          standard: "1",
          professional: "1",
          premium: "1",
        },
        {
          name: "Quotations",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Invoices",
          basic: "Unlimited",
          standard: "Unlimited",
          professional: "Unlimited",
          premium: "Unlimited",
        },
        {
          name: "Sample Sales",
          info: true,
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Sales Orders",
          info: true,
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
      ],
    },
    {
      name: "Inventory Operations",
      features: [
        {
          name: "Transfer Orders", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited'
        },
        {
          name: "Stock Issuing", basic: true, standard: true, professional: true, premium: true
         
        },
        {
          name: "Stock Receiving", basic: true, standard: true, professional: true, premium: true
         
        },
        {
          name: "Stock Adjustments", basic: true, standard: true, professional: true, premium: true
         
        },
        {
          name: "Bulk Stock Adjustments", basic: true, standard: true, professional: true, premium: true
         
        },
        {
          name: "Stock Alerts", basic: true, standard: true, professional: true, premium: true
         
        },
      ],
    },
    {
      name: "Analytics",
      features: [
        {
          name: "Sales Reports",
          basic: false,
          standard: false,
          professional: false,
          premium: false,
        },
        {
          name: "Purchases Reports",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Inventory Reports",
          basic: false,
          standard: false,
          professional: false,
          premium: false,
        },
        {
          name: "Daily Cash Report",
          basic: false,
          standard: false,
          professional: false,
          premium: false,
        },
         {
          name: "Commissions",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
         {
          name: "Decorations",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
      ],
    },
     {
        name: 'Marketing',
        features: [
            { name: 'Coupons', basic: true, standard: true, professional: true, premium: true },
            { name: 'Loyalty', basic: true, standard: true, professional: true, premium: true }
        ]
    },
    {
      name: "General Tools",
      features: [
        {
          name: "Role-Based Permissions",
          basic: false,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Notifications",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Activity Log",
          basic: false,
          standard: true,
          professional: true,
          premium: true,
        },
      ],
    },
    {
      name: "Support",
      features: [
        {
          name: "Onboarding Assistance",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Email Support",
          basic: true,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Live Chat Support",
          basic: false,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Phone Support",
          basic: false,
          standard: true,
          professional: true,
          premium: true,
        },
        {
          name: "Dedicated Account Manager",
          basic: false,
          standard: false,
          professional: true,
          premium: true,
        },
      ],
    },
    {
      name: "Integration",
      features: [
           { name: 'API Calls/Day', info: true, infoText: "Number of API requests allowed per day for external integrations and automation.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon'  },
            { name: 'Stripe', info: true, infoText: "Accept online payments securely via Stripe.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
            { name: 'PayPal', info: true, infoText: "Enable PayPal as a payment method for your customers.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
            { name: 'DHL', info: true, infoText: "Connect with DHL for automated shipping and courier management.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
            { name: 'Leopard', info: true, infoText: "Integrate with Leopard Courier for local delivery tracking and dispatch.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
            { name: 'Zapier', info: true, infoText: "Automate workflows by connecting your store with thousands of apps via Zapier.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
            { name: 'Make', info: true, infoText: "Build advanced automation scenarios using Make (formerly Integromat).", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' }
      
      ],
    },
  ],
};
