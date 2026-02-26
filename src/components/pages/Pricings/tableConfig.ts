import { retailData } from "./data/retailData";
import { manufacturingData } from "./data/manufacturingData";
import { ecommerceData } from "./data/ecommerceData";
import { hybridData } from "./data/hybridData";
import { commonFeatureCategories, PRICING_HERO_CONTENT } from "./data/commonData";

export type BusinessType = 'Retail' | 'Manufacturing' | 'Ecommerce' | 'Hybrid';

export { PRICING_HERO_CONTENT };

export const pricingConfig: Record<BusinessType, any> = {
  Retail: retailData,
  Manufacturing: manufacturingData,
  Ecommerce: ecommerceData,
  Hybrid: hybridData,
};

export const commonCategories = commonFeatureCategories;
