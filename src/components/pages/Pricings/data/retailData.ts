import { FeatureCategory, PricingPlan } from '../types';

export const retailData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
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
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 75,
            yearlyPrice: 60,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56,172,204,0.1)',
            popular: true,
            features: [
                '3 Store',
                '6 POS Terminal',
                '1 Warehouse',
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
            price: 115,
            yearlyPrice: 92,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85,136,223,0.1)',
            features: [
                'Unlimited Store',
                'Unlimited POS Terminal',
                'Unlimited Warehouse',
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
                { name: 'Stores', info: true, infoText: "Manage multiple business store locations", basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'POS Terminal', info: true, infoText: "Configure and manage POS counters", basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', info: true, infoText: "Manage stock across storage locations", basic: 'Add-on', standard: '1', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce storefront", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Production Floors', info: true, infoText: "Manage factory production areas", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Accounts & Finance', info: true, infoText: "Manage financial records and transactions", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
            ]
        },
        {
            name: 'People',
            features: [
                { name: 'Users', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Customers', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
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
                { name: 'Bulk Product Import', infoText: 'Import multiple products via file', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Invoices', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Quotations', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Orders', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Return', basic: true, standard: true, professional: true, premium: true },
                { name: 'Hold Sales', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sample Sales', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Purchases',
            features: [
                { name: 'Purchase Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Bulk Purchase', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Inventory Operations',
            features: [
                { name: 'Transfer Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', info: true, infoText: "Adjust multiple stock items together", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', info: true, infoText: "Monitor low inventory notifications", basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Manufacturing', info: true, infoText: "Analyze production performance reports", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
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
            name: 'Restaurant',
            features: [
                { name: 'Floors', info: true, infoText: "Manage restaurant floor layout", basic: true, standard: true, professional: true, premium: true },
                { name: 'Tables', info: true, infoText: "Manage restaurant table assignments", basic: true, standard: true, professional: true, premium: true },
                { name: 'Decorations', info: true, infoText: "Customize restaurant theme and layout", basic: true, standard: true, professional: true, premium: true }
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce website", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
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
                { name: 'Production Orders', info: true, infoText: "Create and manage production tasks", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Machines', info: true, infoText: "Manage production machinery details", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Moulds', info: true, infoText: "Manage mould and tooling records", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Quality & Inspections', info: true, infoText: "Track product quality checks", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
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
            name: 'General Tools',
            features: [
                { name: 'Role-Based Permissions', info: true, infoText: "Control access by user roles", basic: false, standard: true, professional: true, premium: true },
                { name: 'Notifications', basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', basic: false, standard: true, professional: true, premium: true },
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
