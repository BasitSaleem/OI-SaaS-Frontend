import { FeatureCategory, PricingPlan } from './types';

export type BusinessType = "Retail" | "Manufacturing" | "Ecommerce" | "Hybrid";

export const PRICING_DATA: Record<BusinessType, { plans: PricingPlan[]; categories: FeatureCategory[] }> = {
  Retail: {
    plans: [
      {
        id: 'basic',
        name: 'Basic',
        price: 25,
        yearlyPrice: 20,
        description: 'Perfect for small businesses getting started',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        features: [
          '1 Store',
          '1 POS Terminal',
          'Unlimited Users',
          'Unlimited Products',
          'Unlimited Orders & Invoices',
          'Onboarding Assistance & Email Support'
        ]
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 75,
        yearlyPrice: 60,
        description: 'Ideal for growing businesses',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        popular: true,
        features: [
          '3 Store',
          '6 POS Terminal',
          '1 Warehouse',
          'Unlimited Users',
          'Unlimited Products',
          'Unlimited Orders & Invoices',
          'Onboarding Assistance & Email Support'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 115,
        yearlyPrice: 92,
        description: 'For established businesses scaling up',
        color: '#5588DF',
        bgColor: 'rgba(85,136,223,0.1)',
        features: [
          '3 Store',
          '6 POS Terminal',
          '1 Warehouse',
          'Unlimited Users',
          'Unlimited Products',
          'Unlimited Orders & Invoices',
          'Onboarding Assistance & Email Support'
        ]
      }
    ],
    categories: [
      {
        name: 'Key Features',
        features: [
          { name: 'Stores', info: true, infoText: "Manage multiple business or store locations seamlessly.", basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included.", basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Warehouses', info: true, infoText: "Manage one or more warehouses.", basic: '+1 Added (Add-on)', standard: '1', professional: 'Unlimited', premium: 'Unlimited' },
        ]
      },
      {
        name: 'People',
        features: [
          { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
        ]
      },
      {
        name: 'Products',
        features: [
          { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Products Import', info: true, infoText: "Quickly upload multiple products via spreadsheet.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Sales & Orders',
        features: [
          { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: true, standard: true, professional: true, premium: true },
          { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included.", basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Invoices', info: true, infoText: "Print & Share/Send professional invoices to customers with ease.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sales Return', info: true, infoText: "Handle post-sale returns and credit notes – while keeping your sales and inventory records in perfect sync.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Hold Sales', info: true, infoText: "Pause sales temporarily and resume them later.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sample Sales', info: true, infoText: "Record and track sample product distribution.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Purchases',
        features: [
          { name: 'Purchase Orders', info: true, infoText: "Create and track orders placed to suppliers.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Inventory Operations',
        features: [
          { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Stock Adjustments', info: true, infoText: "Add initial stock quantities quickly in bulk.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Analytics',
        features: [
          { name: 'Sales Reports', info: true, infoText: "Access essential business performance metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Purchases Reports', info: true, infoText: "Monitor purchase trends and metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Inventory Reports', info: true, infoText: "Track stock levels and movements over time.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Shifts', info: true, infoText: "Monitor employee shifts and work hours.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Commissions', info: true, infoText: "Track earned commissions for sales staff.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Daily Cash Report', info: true, infoText: "Track cash flow daily for better control.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'General Tools',
        features: [
          { name: 'Role-Based Permissions', info: true, infoText: "Limit user access based on job roles and responsibilities.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Support',
        features: [
          { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: false, standard: false, professional: true, premium: true },
        ]
      },
      {
        name: 'Integrations',
        features: [
          { name: 'FBR', info: true, infoText: "FBR integration for tax compliance.", basic: true, standard: true, professional: true, premium: true },
        ]
      }
    ]
  },
  Manufacturing: {
    plans: [
      {
        id: 'basic',
        name: 'Basic',
        price: 65,
        yearlyPrice: 52,
        description: 'Perfect for small businesses getting started',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        features: [
          '1 Store',
          '1 Production Floors',
          '1 Warehouse',
          '1 POS Terminal'
        ]
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 115,
        yearlyPrice: 94,
        description: 'Expanding factories',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        popular: true,
        features: [
          '1 Store',
          '3 Production Floors',
          'Unlimited Warehouse',
          '1 POS Terminal'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 155,
        yearlyPrice: 124,
        description: 'Large scale manufacturing',
        color: '#5588DF',
        bgColor: 'rgba(85,136,223,0.1)',
        features: [
          '1 Store',
          'Unlimited Production Floors',
          'Unlimited Warehouse',
          '1 POS Terminal'
        ]
      }
    ],
    categories: [
      {
        name: 'Key Features',
        features: [
          { name: 'Production Floors', info: true, infoText: "Structure your business operations with one or more production floors mapped to your workflow.", basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Warehouses', info: true, infoText: "Manage one or more warehouses.", basic: '1', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stores (For Invoicing)', info: true, infoText: "Manage multiple business or store locations seamlessly.", basic: '1', standard: '1', professional: '1', premium: '1' },
        ]
      },
      {
        name: 'People',
        features: [
          { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
        ]
      },
      {
        name: 'Products',
        features: [
          { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Products Import', info: true, infoText: "Quickly upload multiple products via spreadsheet.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'MANUFACTURING',
        features: [
          { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Moulds', info: true, infoText: "Manage and track product moulds used in the manufacturing process.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Quality & Inspections', info: true, infoText: "Ensure product quality with standardized inspection workflows.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Purchases',
        features: [
          { name: 'Purchase Orders', info: true, infoText: "Create and track orders placed to suppliers.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'INVENTORY OPERATIONS',
        features: [
          { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Stock Adjustments', info: true, infoText: "Add initial stock quantities quickly in bulk.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Sales & Orders',
        features: [
          { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Invoices', info: true, infoText: "Print & Share/Send professional invoices to customers with ease.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'ANALYTICS',
        features: [
          { name: 'Sales Reports', info: true, infoText: "Access essential business performance metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Purchases Reports', info: true, infoText: "Monitor purchase trends and metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Inventory Reports', info: true, infoText: "Track stock levels and movements over time.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Shifts', info: true, infoText: "Monitor employee shifts and work hours.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Commissions', info: true, infoText: "Track earned commissions for sales staff.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Daily Cash Report', info: true, infoText: "Track cash flow daily for better control.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Manufacturing', info: true, infoText: "Access detailed reports on manufacturing performance and efficiency.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Human Resources',
        features: [
          { name: 'Employees', info: true, infoText: "Manage employee records and personal information.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Departments', info: true, infoText: "Structure your team by function.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Designations', info: true, infoText: "Assign job titles to define staff roles and permissions.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Payslips', info: true, infoText: "Generate payroll slips with salary and deduction details.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'GENERAL TOOLS',
        features: [
          { name: 'Role-Based Permissions', info: true, infoText: "Limit user access based on job roles and responsibilities.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'SUPPORT',
        features: [
          { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: false, standard: true, professional: true, premium: true },
          { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: false, standard: false, professional: true, premium: true },
        ]
      },
      {
        name: 'INTEGRATIONS',
        features: [
          { name: 'FBR', info: true, infoText: "FBR integration for tax compliance.", basic: true, standard: true, professional: true, premium: true },
        ]
      }
    ]
  },
  Ecommerce: {
    plans: [
      {
        id: 'basic',
        name: 'Basic',
        price: 25,
        yearlyPrice: 20,
        description: 'Start selling online',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        features: [
          '1 Store',
          '1 Online Store',
          '1 Warehouse',
          '1 POS Terminal',
        ]
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 50,
        yearlyPrice: 40,
        description: 'Grow your digital presence',
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        popular: true,
        features: [
          '1 Store',
          '1 Online Store',
          '2 Warehouse',
          '1 POS Terminal',
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 115,
        yearlyPrice: 92,
        description: 'High volume online sales',
        color: '#5588DF',
        bgColor: 'rgba(85,136,223,0.1)',
        features: [
           '1 Store',
          '1 Online Store',
          'Unlimited Warehouses',
          '1 POS Terminal',
        ]
      }
    ],
    categories: [
      {
        name: 'Key Features',
        features: [
          { name: 'Warehouses', basic: '1', standard: '2', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Online Store', basic: '1', standard: '1', professional: '1', premium: '1' },
        ]
      },
      {
        name: 'E-COMMERCE',
        features: [
          { name: 'OJ Themes', basic: true, standard: true, professional: true, premium: true },
          { name: 'Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Discounts', basic: true, standard: true, professional: true, premium: true },
          { name: 'Campaigns', basic: false, standard: true, professional: true, premium: true },
          { name: 'Custom Domain', basic: true, standard: true, professional: true, premium: true },
          { name: 'Collections', basic: false, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'People',
        features: [
          { name: 'Users', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Suppliers', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
        ]
      },
      {
        name: 'Products',
        features: [
          { name: 'Products', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Categories', basic: true, standard: true, professional: true, premium: true },
          { name: 'Brands', basic: true, standard: true, professional: true, premium: true },
          { name: 'Barcode & Serial Tracking', basic: true, standard: true, professional: true, premium: true },
          { name: 'Product Images', basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Products Import', basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Sales & Orders',
        features: [
          { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
          { name: 'POS Terminals', basic: '1', standard: '1', professional: '1', premium: '1' },
          { name: 'Invoices', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Quotations', basic: true, standard: true, professional: true, premium: true },
          { name: 'Sales Orders', basic: true, standard: true, professional: true, premium: true },
          { name: 'Sample Sales', basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'INVENTORY OPERATIONS',
        features: [
          { name: 'Transfer Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stock Issuing', basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Receiving', basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Alerts', basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'MARKETING',
        features: [
          { name: 'Fixed Assets & Allocations', basic: true, standard: true, professional: true, premium: true },
          { name: 'Coupons', basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'ANALYTICS',
        features: [
          { name: 'Commission', basic: true, standard: true, professional: true, premium: true },
          { name: 'Purchases Reports', basic: true, standard: true, professional: true, premium: true },
          { name: 'Decoration', basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'GENERAL TOOLS',
        features: [
          { name: 'Role-Based Permissions', basic: false, standard: true, professional: true, premium: true },
          { name: 'Notifications', basic: true, standard: true, professional: true, premium: true },
          { name: 'Activity Log', basic: false, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'SUPPORT',
        features: [
          { name: 'Onboarding Assistance', basic: true, standard: true, professional: true, premium: true },
          { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
          { name: 'Live Chat Support', basic: false, standard: true, professional: true, premium: true },
          { name: 'Phone Support', basic: false, standard: true, professional: true, premium: true },
          { name: 'Dedicated Account Manager', basic: false, standard: false, professional: true, premium: true },
        ]
      },
      {
        name: 'INTEGRATIONS',
        features: [
          { name: 'FBR', basic: true, standard: true, professional: true, premium: true },
        ]
      }
    ]
  },
  Hybrid: {
    plans: [
      {
        id: 'pro',
        name: 'Pro',
        price: 210,
        yearlyPrice: 168,
        description: 'Ideal for growing businesses',
        color: '#795CF5',
        bgColor: 'rgba(121,92,245,0.1)',
        popular: true,
        features: [
          '5 Store',
          '1 Online Store',
          '5 Warehouse',
          '5 Production Floor, Add-on available',
          '10 POS Terminal',
          'Accounts & Finance'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 315,
        yearlyPrice: 252,
        description: 'Large scale operations',
        color: '#5588DF',
        bgColor: 'rgba(85,136,223,0.1)',
        features: [
          'Unlimited Store',
          '1 Online Store',
          'Unlimited Warehouse',
          'Unlimited Production Floor',
          'Unlimited POS Terminal',
          'Accounts & Finance'
        ]
      },

      {
        id: 'lets-talk',
        name: "Let's Talk",
        price: 0,
        color: '#1AD1B9',
        bgColor: 'rgba(26,209,185,0.1)',
        features: [],
        isCustom: true,
        description: 'Connect with our team to customize features tailored to your business, ensuring effortless growth and success.'
      }
    ],
    categories: [
      {
        name: 'Key Features',
        features: [
          { name: 'Production Floors', info: true, infoText: "Structure your business operations with one or more production floors mapped to your workflow.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stores', info: true, infoText: "Manage multiple business or store locations seamlessly.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Warehouses', info: true, infoText: "Manage one or more warehouses.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Online Store', info: true, infoText: "Launch your own branded e-commerce website.", basic: '1', standard: '1', professional: '1', premium: '1' },
          { name: 'Accounts & Finance', info: true, infoText: "Powerful accounts & finance tools critical for businesses.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'People',
        features: [
          { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
        ]
      },
      {
        name: 'Products',
        features: [
          { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Products Import', info: true, infoText: "Quickly upload multiple products via spreadsheet.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Sales & Orders',
        features: [
          { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: true, standard: true, professional: true, premium: true },
          { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Invoices', info: true, infoText: "Print & Share/Send professional invoices to customers with ease.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Hold Sales', info: true, infoText: "Pause sales temporarily and resume them later.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sample Sales', info: true, infoText: "Record and track sample product distribution.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Purchases',
        features: [
          { name: 'Purchase Orders', info: true, infoText: "Create and track orders placed to suppliers.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'INVENTORY OPERATIONS',
        features: [
          { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bulk Stock Adjustments', info: true, infoText: "Add initial stock quantities quickly in bulk.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'E-COMMERCE',
        features: [
          { name: 'OJ Themes', info: true, infoText: "Customize your website's appearance with pre-built and custom-developed templates.", basic: 'Free/Paid', standard: 'Free/Paid', professional: 'Free/Paid', premium: 'Free/Paid' },
          { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Campaigns', info: true, infoText: "Create and manage marketing campaigns to boost sales.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Custom Domain', info: true, infoText: "Manage your professional brand with a dedicated digital address.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'MANUFACTURING',
        features: [
          { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Moulds', info: true, infoText: "Manage and track product moulds used in the manufacturing process.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Quality & Inspections', info: true, infoText: "Ensure product quality with standardized inspection workflows.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'ACCOUNTS & FINANCE',
        features: [
          { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Bills & Payments', info: true, infoText: "Automate invoices, payments & bill tracking.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'ANALYTICS',
        features: [
          { name: 'Commission', info: true, infoText: "Track earned commissions for sales staff.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Purchases Reports', info: true, infoText: "Monitor purchase trends and metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Sale Reports', info: true, infoText: "Access essential business performance metrics.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Inventory report', info: true, infoText: "Track stock levels and movements over time.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Shift', info: true, infoText: "Monitor employee shifts and work hours.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Daily Cash Report', info: true, infoText: "Track cash flow daily for better control.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Manufacturing', info: true, infoText: "Access detailed reports on manufacturing performance and efficiency.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Human Resources',
        features: [
          { name: 'Employees', info: true, infoText: "Manage employee records and personal information.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
          { name: 'Departments', info: true, infoText: "Structure your team by function.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Designations', info: true, infoText: "Assign job titles to define staff roles and permissions.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Payslips', info: true, infoText: "Generate payroll slips with salary and deduction details.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'Restaurant',
        features: [
          { name: 'Floor', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Decorations', info: true, infoText: "Customize your digital floor layout for ambiance.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'MARKETING',
        features: [
          { name: 'Loyalty', info: true, infoText: "Reward repeat buyers with points or perks.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Coupons', info: true, infoText: "Create promo codes for discounts or deals.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'GENERAL TOOLS',
        features: [
          { name: 'Role-Based Permissions', info: true, infoText: "Limit user access based on job roles and responsibilities.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'SUPPORT',
        features: [
          { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: true, standard: true, professional: true, premium: true },
          { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: true, standard: true, professional: true, premium: true },
        ]
      },
      {
        name: 'INTEGRATIONS',
        features: [
          { name: 'FBR', info: true, infoText: "FBR integration for tax compliance.", basic: true, standard: true, professional: true, premium: true },
        ]
      }
    ]
  }
};

export const featureCategories: FeatureCategory[] = [
  {
    name: 'People',
    features: [
      { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: '2', standard: '5', professional: '10', premium: 'Unlimited' },
      { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' }
    ]
  },
  {
    name: 'Human Resources',
    features: [
      { name: 'Departments', info: true, infoText: "Structure your team by function.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Designations', info: true, infoText: "Assign job titles to define staff roles and permissions.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Payslips', info: true, infoText: "Generate payroll slips with salary and deduction details.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Facilities',
    features: [
      { name: 'Locations', info: true, infoText: "Manage multiple business or store locations seamlessly.", basic: '1', standard: '2', professional: '4', premium: '6' },
      { name: 'Warehouses', info: true, infoText: "Manage one or more warehouses.", basic: '1', standard: '2', professional: '3', premium: '4' }
    ]
  },
  {
    name: 'Restaurant',
    features: [
      { name: 'Floors', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Decorations', info: true, infoText: "Customize your digital floor layout for ambiance.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Products',
    features: [
      { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: '100', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Products Import', info: true, infoText: "Quickly upload multiple products via spreadsheet.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Sales & Orders',
    features: [
      { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: 'Advance', standard: 'Advance', professional: 'Advance', premium: 'Advance' },
      { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included.", basic: '2', standard: '5', professional: '10', premium: '15' },
      { name: 'Invoices', info: true, infoText: " Print & Share/Send professional invoices to customers with ease.", basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '9,500/month' },
      { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Return', info: true, infoText: " Handle post-sale returns and credit notes – while keeping your sales and inventory records in perfect sync.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Hold Sales', info: true, infoText: "Pause sales temporarily and resume them later.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sample Sales', info: true, infoText: "Record and track sample product distribution.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Purchases',
    features: [
      { name: 'Purchase Orders', info: true, infoText: " Create and track orders placed to suppliers.", basic: '50/month', standard: '500/month', professional: '1,500/month', premium: '5,000/month' },
      { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Inventory Operations',
    features: [
      { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '7,500/month' },
      { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Import Open Stock', info: true, infoText: "Add initial stock quantities quickly in bulk.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Ecommerce',
    features: [
      { name: 'Online Store', info: true, infoText: "Launch your own branded e-commerce website and custom-developed templates will be billed separately.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Templates & Themes', info: true, infoText: "Customize your website's appearance with pre-built and custom-developed templates.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Domains', info: true, infoText: "Manage customer records and order history in one place.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Marketing',
    features: [
      { name: 'Coupons', info: true, infoText: "Create promo codes for discounts or deals.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Loyalty', info: true, infoText: "Reward repeat buyers with points or perks.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Manufacturing',
    features: [
      { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Accounting & Financial',
    features: [
      { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly.", basic: 'Basic', standard: 'Basic', professional: 'Advance', premium: 'Advance' },
      { name: 'Billing & Payments', info: true, infoText: "Automate invoices, payments & bill tracking.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Analytics',
    features: [
      { name: 'Standard Reports', info: true, infoText: "Access essential business performance metrics.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Shift & Commission Reports', info: true, infoText: "Monitor employee shifts and their earned commissions.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Daily & Monthly Cash Reports', info: true, infoText: "Track cash flow daily or monthly for better control.", basic: false, standard: true, professional: true, premium: true },
      { name: 'Advanced Reports', info: true, infoText: " Get real-time insights into sales, profits, and inventory performance—including how long products have remained unsold in your stores.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'General Tools',
    features: [
      { name: 'Role-Based Access', info: true, infoText: "Limit user access based on job roles and responsibilities.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Automations', info: true, infoText: "Set up workflow automations to save time.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Integration',
    features: [
      { name: 'API Calls/Day', info: false, infoText: "Number of staff or employees you can add as system users.", basic: '500/day', standard: '5,000/day', professional: '10,000/day', premium: '20,000/day' },
      { name: 'Stripe', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'PayPal', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'DHL', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Leopard', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Zapier', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Make', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Support',
    features: [
      { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: 'Basic Guide Included', standard: 'Standard Walkthrough', professional: 'Standard Walkthrough + 2 Sessions', premium: 'Advanced Setup + 5 Sessions' },
      { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: false, standard: true, professional: true, premium: true },
      { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: false, standard: false, professional: false, premium: true }
    ]
  }
];

export const PRICING_HERO_CONTENT = {
  title: "Start free. Scale anytime.",
  description: "Get full access to powerful inventory tools without upfront costs. Start managing smarter today and upgrade only when your business is ready — no contracts, no pressure.",
};
