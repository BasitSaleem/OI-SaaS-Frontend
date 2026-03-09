import { FeatureCategory, PricingPlan } from '../types';

export const manufacturingData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
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
                '1 Production Floor',
                '1 Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 115,
            yearlyPrice: 92,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56,172,204,0.1)',
            popular: true,
            features: [
                '3 Production Floor',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support'
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 155,
            yearlyPrice: 124,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85,136,223,0.1)',
            features: [
                'Unlimited Production Floor',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
                'Dedicated Account Manager'
            ]
        }
    ],
    categories: [
        {
            name: 'Key Features',
            features: [
                { name: 'Production Floors', info: true, infoText: "Manage factory production areas", basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', info: true, infoText: "Manage stock across storage locations", basic: '1', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stores (For Invoicing)', info: true, infoText: "Manage multiple business store locations", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce website", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Accounts & Finance', info: true, infoText: "Manage financial records and transactions", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'POS Terminal', info: true, infoText: "Configure and manage POS counters", basic: '1', standard: '1', professional: '1', premium: '1' },
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce storefront", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'OJ Themes', info: true, infoText: "Customize store design and layout", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Orders', info: true, infoText: "Manage online customer orders", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Discounts', info: true, infoText: "Create product or cart discounts", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Campaigns', info: true, infoText: "Run marketing and sales campaigns", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Custom Domain', info: true, infoText: "Connect your branded domain", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Collections', info: true, infoText: "Group products into collections", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
            ]
        },
        {
            name: 'Manufacturing',
            features: [
                { name: 'Production Orders', info: true, infoText: "Create and manage production tasks", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Machines', info: true, infoText: "Manage production machinery details", basic: true, standard: true, professional: true, premium: true },
                { name: 'Moulds', info: true, infoText: "Manage mould and tooling records", basic: true, standard: true, professional: true, premium: true },
                { name: 'Quality & Inspections', info: true, infoText: "Track product quality checks", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Accounts & Finance',
            features: [
                { name: 'Income & Expense', info: true, infoText: "Track business income and expenses", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Billing & Payments', info: true, infoText: "Manage invoices and received payments", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Payables & Receivables', info: true, infoText: "Track dues from customers and suppliers", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Financial Insights & Reports', info: true, infoText: "Analyze financial performance reports", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Balance Sheet & Trial Balance', info: true, infoText: "View financial position summaries", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Chart of Accounts', info: true, infoText: "Manage structured financial accounts", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Journal Entries & Reports', info: true, infoText: "Record accounting journal entries", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Fixed Assets & Allocations', info: true, infoText: "Track assets and depreciation allocations", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' }
            ]
        },
        {
            name: 'Restaurant',
            features: [
                { name: 'Floors', info: true, infoText: "Manage restaurant floor layout", basic: false, standard: false, professional: false, premium: false },
                { name: 'Tables', info: true, infoText: "Manage restaurant table assignments", basic: false, standard: false, professional: false, premium: false },
                { name: 'Decorations', info: true, infoText: "Customize restaurant theme and layout", basic: false, standard: false, professional: false, premium: false }
            ]
        },
        {
            name: 'People',
            features: [
                { name: 'Users', info: true, infoText: "Manage system users and access", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Customers', info: true, infoText: "Store and manage customer records", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Suppliers', info: true, infoText: "Manage vendor and supplier details", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Products',
            features: [
                { name: 'Products', info: true, infoText: "Create and manage product listings", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Categories', info: true, infoText: "Organize products into structured categories", basic: true, standard: true, professional: true, premium: true },
                { name: 'Brands', info: true, infoText: "Manage product brands and manufacturers", basic: true, standard: true, professional: true, premium: true },
                { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products via barcode or serial", basic: true, standard: true, professional: true, premium: true },
                { name: 'Product Images', info: true, infoText: "Upload and manage product photos", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Product Import', info: true, infoText: "Import multiple products via file", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', info: true, infoText: "Update product prices in bulk", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Purchases',
            features: [
                { name: 'Purchase Orders', info: true, infoText: "Create and manage supplier orders", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Bulk Purchase', info: true, infoText: "Record multiple purchases quickly", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Inventory Operations',
            features: [
                { name: 'Transfer Orders', info: true, infoText: "Transfer stock between locations", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', info: true, infoText: "Issue stock to departments or staff", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', info: true, infoText: "Record received stock entries", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', info: true, infoText: "Adjust stock for discrepancies", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', info: true, infoText: "Adjust multiple stock items together", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', info: true, infoText: "Get low stock notifications", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', info: true, infoText: "Process in-store sales transactions", basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', info: true, infoText: "Configure and manage POS counters", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Invoices', info: true, infoText: "Generate and manage sales invoices", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Quotations', info: true, infoText: "Create and send price quotes", basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Orders', info: true, infoText: "Manage confirmed customer sales orders", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Analytics',
            features: [
                { name: 'Sales Reports', info: true, infoText: "Analyze detailed sales performance data", basic: true, standard: true, professional: true, premium: true },
                { name: 'Purchases Reports', info: true, infoText: "Review purchase transaction reports", basic: true, standard: true, professional: true, premium: true },
                { name: 'Inventory Reports', info: true, infoText: "Monitor stock movement and valuation", basic: true, standard: true, professional: true, premium: true },
                { name: 'Shifts', info: true, infoText: "Manage employee work shift records", basic: true, standard: true, professional: true, premium: true },
                { name: 'Commissions', info: true, infoText: "Calculate and track sales commissions", basic: true, standard: true, professional: true, premium: true },
                { name: 'Daily Cash Report', info: true, infoText: "View daily cash summary report", basic: true, standard: true, professional: true, premium: true },
                { name: 'Manufacturing', info: true, infoText: "Analyze production performance reports", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Human Resources',
            features: [
                { name: 'Employees', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Departments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Designations', basic: true, standard: true, professional: true, premium: true },
                { name: 'Payslips', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'General Tools',
            features: [
                { name: 'Role-Based Permissions', info: true, infoText: "Control access by user roles", basic: false, standard: true, professional: true, premium: true },
                { name: 'Notifications', info: true, infoText: "Receive important system alerts", basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', info: true, infoText: "Track user system activities", basic: false, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Support',
            features: [
                { name: 'Onboarding Assistance', basic: true, standard: true, professional: true, premium: true },
                { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Live Chat Support', basic: false, standard: true, professional: true, premium: true },
                { name: 'Phone Support', basic: false, standard: true, professional: true, premium: true },
                { name: 'Dedicated Account Manager', basic: false, standard: false, professional: true, premium: true },
            ]
        },
        {
            name: 'Integrations',
            features: [
                // { name: 'FBR', basic: true, standard: true, professional: true, premium: true },
                { name: 'API Calls/Day', info: true, infoText: "Limit of daily API requests", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Stripe', info: true, infoText: "Accept payments via Stripe", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'PayPal', info: true, infoText: "Accept payments via PayPal", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'DHL', info: true, infoText: "Ship orders via DHL", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Leopard', info: true, infoText: "Ship locally with Leopard courier", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Zapier', info: true, infoText: "Automate workflows using Zapier", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Make', info: true, infoText: "Connect apps using Make automation", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' }
            ]
        }
    ]
};
