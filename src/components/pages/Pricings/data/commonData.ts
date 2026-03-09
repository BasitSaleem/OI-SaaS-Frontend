import { FeatureCategory } from '../types';

export const commonFeatureCategories: FeatureCategory[] = [
    {
        name: 'People',
        features: [
            { name: 'Users', info: true, infoText: "Manage system users and access" },
            { name: 'Customers', info: true, infoText: "Store and manage customer records" },
            { name: 'Suppliers', info: true, infoText: "Manage vendor and supplier details" }
        ]
    },
    {
        name: 'Human Resources',
        features: [
            { name: 'Employees', info: true, infoText: "Manage employee records and profiles" },
            { name: 'Departments', info: true, infoText: "Organize employees by departments" },
            { name: 'Designations', info: true, infoText: "Define employee roles and titles" },
            { name: 'Payslips', info: true, infoText: "Generate and manage salary slips" }
        ]
    },
    {
        name: 'Products',
        features: [
            { name: 'Products', info: true, infoText: "Create and manage product listings" },
            { name: 'Categories', info: true, infoText: "Organize products into structured categories" },
            { name: 'Brands', info: true, infoText: "Manage product brands and manufacturers" },
            { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products via barcode or serial" },
            { name: 'Product Images', info: true, infoText: "Upload and manage product photos" },
            { name: 'Bulk Price Update', info: true, infoText: "Update product prices in bulk" }
        ]
    },
    {
        name: 'Sales & Orders',
        features: [
            { name: 'Point of Sale', info: true, infoText: "Process in-store sales transactions" },
            { name: 'POS Terminal', info: true, infoText: "Operate sales through POS counter" },
            { name: 'Invoices', info: true, infoText: "Generate and manage sales invoices" },
            { name: 'Quotations', info: true, infoText: "Create and send price quotes" },
            { name: 'Sales Orders', info: true, infoText: "Manage confirmed customer sales orders" },
            { name: 'Sales Return', info: true, infoText: "Process returned sold products" },
            { name: 'Hold Sales', info: true, infoText: "Temporarily save incomplete sales" },
            { name: 'Sample Sales', info: true, infoText: "Record promotional or sample sales" }
        ]
    },
    {
        name: 'Purchases',
        features: [
            { name: 'Purchase Orders', info: true, infoText: "Create and manage supplier orders" },
            { name: 'Bulk Purchase', info: true, infoText: "Record multiple purchases quickly" }
        ]
    },
    {
        name: 'Inventory Operations',
        features: [
            { name: 'Transfer Orders', info: true, infoText: "Transfer stock between locations" },
            { name: 'Stock Issuing', info: true, infoText: "Issue stock to departments or staff" },
            { name: 'Stock Receiving', info: true, infoText: "Record received stock entries" },
            { name: 'Stock Adjustments', info: true, infoText: "Adjust stock for discrepancies" }
        ]
    },
    {
        name: 'Ecommerce',
        features: [
            { name: 'Online Store', info: true, infoText: "Manage your ecommerce website" },
            { name: 'OJ Themes', info: true, infoText: "Customize store design and layout" },
            { name: 'Orders', info: true, infoText: "Manage online customer orders" },
            { name: 'Discounts', info: true, infoText: "Create product or cart discounts" },
            { name: 'Campaigns', info: true, infoText: "Run marketing and sales campaigns" },
            { name: 'Custom Domain', info: true, infoText: "Connect your branded domain" },
            { name: 'Collections', info: true, infoText: "Group products into collections" }
        ]
    },
    {
        name: 'Restaurant',
        features: [
            { name: 'Floors', info: true, infoText: "Manage restaurant floor layout" },
            { name: 'Tables', info: true, infoText: "Manage restaurant table assignments" },
            { name: 'Decorations', info: true, infoText: "Customize restaurant theme and layout" }
        ]
    },
    {
        name: 'Marketing',
        features: [
            { name: 'Coupons', info: true, infoText: "Create promotional discount codes" },
            { name: 'Loyalty', info: true, infoText: "Manage customer loyalty programs" }
        ]
    },
    {
        name: 'Manufacturing',
        features: [
            { name: 'Production Orders', info: true, infoText: "Create and manage production tasks" },
            { name: 'Machines', info: true, infoText: "Manage production machinery details" },
            { name: 'Moulds', info: true, infoText: "Manage mould and tooling records" },
            { name: 'Quality & Inspections', info: true, infoText: "Track product quality checks" }
        ]
    },
    {
        name: 'Accounts & Finance',
        features: [
            { name: 'Income & Expense', info: true, infoText: "Track business income and expenses" },
            { name: 'Billing & Payments', info: true, infoText: "Manage invoices and received payments" },
            { name: 'Payables & Receivables', info: true, infoText: "Track dues from customers and suppliers" },
            { name: 'Financial Insights & Reports', info: true, infoText: "Analyze financial performance reports" },
            { name: 'Balance Sheet & Trial Balance', info: true, infoText: "View financial position summaries" },
            { name: 'Chart of Accounts', info: true, infoText: "Manage structured financial accounts" },
            { name: 'Journal Entries & Reports', info: true, infoText: "Record accounting journal entries" },
            { name: 'Fixed Assets & Allocations', info: true, infoText: "Track assets and depreciation allocations" }
        ]
    },
    {
        name: 'Analytics',
        features: [
            { name: 'Sales Reports', info: true, infoText: "Analyze detailed sales performance data" },
            { name: 'Purchases Reports', info: true, infoText: "Review purchase transaction reports" },
            { name: 'Inventory Reports', info: true, infoText: "Monitor stock movement and valuation" },
            { name: 'Shifts', info: true, infoText: "Manage employee work shift records" },
            { name: 'Commissions', info: true, infoText: "Calculate and track sales commissions" },
            { name: 'Daily Cash Report', info: true, infoText: "View daily cash summary report" },
            { name: 'Manufacturing', info: true, infoText: "Analyze production performance reports" },
        ]
    },
    {
        name: 'General Tools',
        features: [
            { name: 'Role-Based Permissions', info: true, infoText: "Control access by user roles" },
            { name: 'Notifications', info: true, infoText: "Receive important system alerts" },
            { name: 'Stock Alerts', info: true, infoText: "Monitor low inventory notifications" },
            { name: 'Activity Log', info: true, infoText: "Track user system activities" },
        ]
    },
    {
        name: 'Integrations',
        features: [
            { name: 'API Calls/Day', info: true, infoText: "Limit of daily API requests" },
            { name: 'Stripe', info: true, infoText: "Accept payments via Stripe" },
            { name: 'PayPal', info: true, infoText: "Accept payments via PayPal" },
            { name: 'DHL', info: true, infoText: "Ship orders via DHL" },
            { name: 'Leopard', info: true, infoText: "Ship locally with Leopard courier" },
            { name: 'Zapier', info: true, infoText: "Automate workflows using Zapier" },
            { name: 'Make', info: true, infoText: "Connect apps using Make automation" }
        ]
    },
    {
        name: 'Support',
        features: [
            { name: 'Onboarding Assistance', info: true, infoText: "Get help setting up system" },
            { name: 'Email Support', info: true, infoText: "Contact support via email" },
            { name: 'Live Chat Support', info: true, infoText: "Real-time chat assistance" },
            { name: 'Phone Support', info: true, infoText: "Get help via phone call" },
            { name: 'Dedicated Account Manager', info: true, infoText: "Personal support account representative" }
        ]
    }
];

export const PRICING_HERO_CONTENT = {
    title: "Start free. Scale anytime.",
    description: "Get full access to powerful inventory tools without upfront costs. Start managing smarter today and upgrade only when your business is ready — no contracts, no pressure.",
};
