import { FeatureCategory, PricingPlan } from '../types';

export const hybridData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
    plans: [
        {
            id: 'pro',
            name: 'Pro',
            price: 210,
            yearlyPrice: 168,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56, 172, 204, 0.1)',
            popular: true,
            features: [
                '5 Stores',
                '1 Online Store',
                '5 Warehouses',
                '5 Production Floors',
                "10 POS Terminal",
                'Accounts & Finance',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 315,
            yearlyPrice: 252,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85, 136, 223, 0.1)',
            features: [
                'Unlimited Stores',
                '1 Online Store',
                'Unlimited Warehouses',
                "Unlimited POS Terminal",
                'Unlimited Production Floors',
                'Accounts & Finance',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
                'Dedicated Account Manager'


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
                { name: 'Stores', info: true, infoText: "Manage multiple business store locations", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', info: true, infoText: "Manage stock across storage locations", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Production Floors', info: true, infoText: "Manage factory production areas", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce storefront", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Accounts & Finance', info: true, infoText: "Manage financial records and transactions", basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', info: true, infoText: "Configure and manage POS counters", basic: '10', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Accounts & Finance',
            features: [
                { name: 'Income & Expense', info: true, infoText: "Track business income and expenses", basic: true, standard: true, professional: true, premium: true },
                { name: 'Billing & Payments', info: true, infoText: "Manage invoices and received payments", basic: true, standard: true, professional: true, premium: true },
                { name: 'Payables & Receivables', info: true, infoText: "Track dues from customers and suppliers", basic: true, standard: true, professional: true, premium: true },
                { name: 'Financial Insights & Reports', info: true, infoText: "Analyze financial performance reports", basic: true, standard: true, professional: true, premium: true },
                { name: 'Balance Sheet & Trial Balance', info: true, infoText: "View financial position summaries", basic: true, standard: true, professional: true, premium: true },
                { name: 'Chart of Accounts', info: true, infoText: "Manage structured financial accounts", basic: true, standard: true, professional: true, premium: true },
                { name: 'Journal Entries & Reports', info: true, infoText: "Record accounting journal entries", basic: true, standard: true, professional: true, premium: true },
                { name: 'Fixed Assets & Allocations', info: true, infoText: "Track assets and depreciation allocations", basic: true, standard: true, professional: true, premium: true }
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
                { name: 'Bulk Product Import', info: true, infoText: "Import products in bulk with a easy way.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
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
                { name: 'Transfer Orders', info: true, infoText: "Transfer stock between locations", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', info: true, infoText: "Issue stock to departments or staff", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', info: true, infoText: "Record received stock entries", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', info: true, infoText: "Adjust stock for discrepancies", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', info: true, infoText: "Adjust multiple stock items together", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', info: true, infoText: "Get low stock notifications", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'Online Store', info: true, infoText: "Manage your ecommerce website", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'OJ Themes', info: true, infoText: "Customize store design and layout", basic: 'Free/Paid', standard: 'Free/Paid', professional: 'Free/Paid', premium: 'Free/Paid' },
                { name: 'Orders', info: true, infoText: "Manage online customer orders", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Discounts', info: true, infoText: "Create product or cart discounts", basic: true, standard: true, professional: true, premium: true },
                { name: 'Campaigns', info: true, infoText: "Run marketing and sales campaigns", basic: true, standard: true, professional: true, premium: true },
                { name: 'Custom Domain', info: true, infoText: "Connect your branded domain", basic: true, standard: true, professional: true, premium: true },
                { name: 'Collections', info: true, infoText: "Group products into collections", basic: true, standard: true, professional: true, premium: true },
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
            name: 'Restaurant',
            features: [
                { name: 'Floors', info: true, infoText: "Manage restaurant floor layout", basic: true, standard: true, professional: true, premium: true },
                { name: 'Tables', info: true, infoText: "Manage restaurant table assignments", basic: true, standard: true, professional: true, premium: true },
                { name: 'Decorations', info: true, infoText: "Customize restaurant theme and layout", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Marketing',
            features: [
                { name: 'Coupons', basic: true, standard: true, professional: true, premium: true },
                { name: 'Loyalty', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'General Tools',
            features: [
                { name: 'Role-Based Permissions', info: true, infoText: "Control access by user roles", basic: true, standard: true, professional: true, premium: true },
                { name: 'Notifications', basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Support',
            features: [
                { name: 'Onboarding Assistance', basic: true, standard: true, professional: true, premium: true },
                { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Live Chat Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Phone Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Dedicated Account Manager', basic: true, standard: true, professional: true, premium: true },
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
