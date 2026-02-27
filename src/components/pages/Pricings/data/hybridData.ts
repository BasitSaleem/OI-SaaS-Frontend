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
                'Unlimited Users',
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
            bgColor: 'rgba(85, 136, 223, 0.1)',
            features: [
                'Unlimited Stores',
                '1 Online Store',
                'Unlimited Warehouses',
                'Unlimited Production Floors',
                'Unlimited Users',
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
                { name: 'Stores', basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Production Floors', basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Online Store', basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Accounts & Finance', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminals', basic: '10', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Accounts & Finance',
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
                { name: 'Bulk Product Import', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminals', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
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
                { name: 'Bulk Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'OJ Themes', basic: 'Free/Paid', standard: 'Free/Paid', professional: 'Free/Paid', premium: 'Free/Paid' },
                { name: 'Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Discounts', basic: true, standard: true, professional: true, premium: true },
                { name: 'Campaigns', basic: true, standard: true, professional: true, premium: true },
                { name: 'Custom Domain', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Manufacturing',
            features: [
                { name: 'Production Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Machines', basic: true, standard: true, professional: true, premium: true },
                { name: 'Moulds', basic: true, standard: true, professional: true, premium: true },
                { name: 'Quality & Inspections', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Analytics',
            features: [
                { name: 'Sales Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Purchases Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Inventory Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Shifts', basic: true, standard: true, professional: true, premium: true },
                { name: 'Commissions', basic: true, standard: true, professional: true, premium: true },
                { name: 'Daily Cash Report', basic: true, standard: true, professional: true, premium: true },
                { name: 'Manufacturing', basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Floors', basic: true, standard: true, professional: true, premium: true },
                { name: 'Tables', basic: true, standard: true, professional: true, premium: true },
                { name: 'Decorations', basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Role-Based Permissions', basic: true, standard: true, professional: true, premium: true },
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
            name: 'Integration',
            features: [
                { name: 'FBR', basic: true, standard: true, professional: true, premium: true },
            ]
        }
    ]
};
