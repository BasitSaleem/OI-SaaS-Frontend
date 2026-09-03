export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description?: string;
  yearlyPrice?: number;
  // Real PKR prices (not a USD conversion) — set on plans shown on
  // /pk/pricing. Falls back to a placeholder USD->PKR conversion
  // (see src/utils/currency.ts) when omitted.
  pkrPrice?: number;
  pkrYearlyPrice?: number;
  color: string;
  bgColor: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
  link?: string;
}

export interface FeatureRow {
  name: string;
  info?: boolean;
  infoText?: string;
  basic?: string | boolean;
  standard?: string | boolean;
  professional?: string | boolean;
  premium?: string | boolean;
}

export interface FeatureCategory {
  name: string;
  features: FeatureRow[];
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  items: DropdownItem[];
  rightColumn?: {
    title: string;
    links: { label: string; href: string }[];
  };
}
