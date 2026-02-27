import { FeatureCategory } from '../types';

export const commonFeatureCategories: FeatureCategory[] = [
    {
        name: 'People',
        features: [
            { name: 'Users', info: true, infoText: "Add team members and control their access with roles." },
            { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place." },
            { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently." }
        ]
    },
    {
        name: 'Human Resources',
        features: [
            { name: 'Employees', info: true, infoText: "Manage your workforce details and documents." },
            { name: 'Departments', info: true, infoText: "Structure your team by function." },
            { name: 'Designations', info: true, infoText: "Assign job titles to define staff roles and permissions." },
            { name: 'Payslips', info: true, infoText: "Generate payroll slips with salary and deduction details." }
        ]
    },
    {
        name: 'Products',
        features: [
            { name: 'Products', info: true, infoText: "Add and manage all your products from a central place." },
            { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering." },
            { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging." },
            { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy." },
            { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition." },
            { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once." }
        ]
    },
    {
        name: 'Sales & Orders',
        features: [
            { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system." },
            { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included." },
            { name: 'Invoices', info: true, infoText: " Print & Share/Send professional invoices to customers with ease." },
            { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers." },
            { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders." },
            { name: 'Sales Return', info: true, infoText: " Handle post-sale returns and credit notes – while keeping your sales and inventory records in perfect sync." },
            { name: 'Hold Sales', info: true, infoText: "Pause sales temporarily and resume them later." },
            { name: 'Sample Sales', info: true, infoText: "Record and track sample product distribution." }
        ]
    },
    {
        name: 'Purchases',
        features: [
            { name: 'Purchase Orders', info: true, infoText: " Create and track orders placed to suppliers." },
            { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix." }
        ]
    },
    {
        name: 'Inventory Operations',
        features: [
            { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations." },
            { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales." },
            { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory." },
            { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view." }
        ]
    },
    {
        name: 'Ecommerce',
        features: [
            { name: 'Online Store', info: true, infoText: "Launch your own branded e-commerce website and custom-developed templates will be billed separately." },
            { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online." },
            { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products." },
            { name: 'collections', info: true, infoText: "Manage customer records and order history in one place." }
        ]
    },
    {
        name: 'Restaurant',
        features: [
            { name: 'Floors', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management." },
            { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service." },
            { name: 'Decorations', info: true, infoText: "Customize your digital floor layout for ambiance." }
        ]
    },
    {
        name: 'Marketing',
        features: [
            { name: 'Coupons', info: true, infoText: "Create promo codes for discounts or deals." },
            { name: 'Loyalty', info: true, infoText: "Reward repeat buyers with points or perks." }
        ]
    },
    {
        name: 'Manufacturing',
        features: [
            { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods." },
            { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place." }
        ]
    },
    {
        name: 'Accounts & Finance',
        features: [
            { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly." },
            { name: 'Billing & Payments', info: true, infoText: "Automate invoices, payments & bill tracking." },
            { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses." },
            { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics." },
            { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance." },
            { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants." },
            { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams." },
            { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses." }
        ]
    },
    {
        name: 'Analytics',
        features: []
    },
    {
        name: 'General Tools',
        features: [
            // { name: 'Role-Based Access', info: true, infoText: "Limit user access based on job roles and responsibilities." },
            { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases." },
            // { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out." },
            { name: 'Activity Log', info: true, infoText: "View recent user actions and changes." },
            // { name: 'Automations', info: true, infoText: "Set up workflow automations to save time." }
        ]
    },
    {
        name: 'Integration',
        features: [
            { name: 'API Calls/Day', info: true, infoText: "Number of API requests allowed per day for external integrations and automation."  },
            { name: 'Stripe', info: true, infoText: "Accept online payments securely via Stripe." },
            { name: 'PayPal', info: true, infoText: "Enable PayPal as a payment method for your customers." },
            { name: 'DHL', info: true, infoText: "Connect with DHL for automated shipping and courier management." },
            { name: 'Leopard', info: true, infoText: "Integrate with Leopard Courier for local delivery tracking and dispatch." },
            { name: 'Zapier', info: true, infoText: "Automate workflows by connecting your store with thousands of apps via Zapier." },
            { name: 'Make', info: true, infoText: "Build advanced automation scenarios using Make (formerly Integromat)." }
        ]
    },
    {
        name: 'Support',
        features: [
            { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations." },
            { name: 'Email Support', info: true, infoText: "Reach our support team via email." },
            { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help." },
            { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs." },
            { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business." }
        ]
    }
];

export const PRICING_HERO_CONTENT = {
    title: "Start free. Scale anytime.",
    description: "Get full access to powerful inventory tools without upfront costs. Start managing smarter today and upgrade only when your business is ready — no contracts, no pressure.",
};
