import { retailData } from "./data/retailData";
import { manufacturingData } from "./data/manufacturingData";
import { ecommerceData } from "./data/ecommerceData";
import { hybridData } from "./data/hybridData";
import { commonFeatureCategories, PRICING_HERO_CONTENT } from "./data/commonData";
import { FeatureCategory } from "./types";

export type BusinessType = 'Retail' | 'Manufacturing' | 'Ecommerce' | 'Hybrid';

export { PRICING_HERO_CONTENT };

export const pricingConfig: Record<BusinessType, { plans: any[]; categories: FeatureCategory[] }> = {
  Retail: retailData,
  Manufacturing: manufacturingData,
  Ecommerce: ecommerceData,
  Hybrid: hybridData,
};

export const commonCategories = commonFeatureCategories;

/**
 * Aggregates all categories and features from all industries.
 * 'Key Features' are kept separate and industry-specific.
 * All other categories are merged. Values are pulled strictly from the active industry's data.
 * If a category/feature is not in the active industry, it defaults to false (dashes).
 */
export const getAggregatedCategories = (activeBusiness: BusinessType): FeatureCategory[] => {
  const currentIndustryData = pricingConfig[activeBusiness];
  const allIndustryData = [retailData, manufacturingData, ecommerceData, hybridData];

  // 1. Identify all unique category names (Case-insensitive check)
  const categoryNameMap = new Map<string, string>(); // UpperCase -> OriginalName

  const processCategoryName = (name: string) => {
    if (name.toUpperCase() === "KEY FEATURES") return;
    if (!categoryNameMap.has(name.toUpperCase())) {
      categoryNameMap.set(name.toUpperCase(), name);
    }
  };

  allIndustryData.forEach(industry => {
    industry.categories.forEach(cat => processCategoryName(cat.name));
  });
  commonFeatureCategories.forEach(cat => processCategoryName(cat.name));

  // 2. Build the aggregated categories list
  const aggregatedCategories: FeatureCategory[] = Array.from(categoryNameMap.entries()).map(([upperName, originalName]) => {
    // Find all unique feature names for this category (Case-insensitive)
    const featureNameMap = new Map<string, string>(); // UpperCase -> OriginalName

    const processFeatureName = (fName: string) => {
      if (!featureNameMap.has(fName.toUpperCase())) {
        featureNameMap.set(fName.toUpperCase(), fName);
      }
    };

    allIndustryData.forEach(industry => {
      const cat = industry.categories.find(c => c.name.toUpperCase() === upperName);
      if (cat) cat.features.forEach(f => processFeatureName(f.name));
    });
    const commonCat = commonFeatureCategories.find(c => c.name.toUpperCase() === upperName);
    if (commonCat) commonCat.features.forEach(f => processFeatureName(f.name));

    // 3. Populate features with data from active industry or defaults
    const features = Array.from(featureNameMap.entries()).map(([fUpperName, fOriginalName]) => {
      // Find source in active industry first
      const activeCat = currentIndustryData.categories.find(c => c.name.toUpperCase() === upperName);
      const activeFeature = activeCat?.features.find(f => f.name.toUpperCase() === fUpperName);

      // Try common data for definitions (info, infoText)
      const commonCatForMerge = commonFeatureCategories.find(c => c.name.toUpperCase() === upperName);
      const commonFeature = commonCatForMerge?.features.find(f => f.name.toUpperCase() === fUpperName);

      if (activeFeature) {
        return {
          ...commonFeature,
          ...activeFeature
        };
      }

      // If not in active industry, try common data for definitions (info, infoText)
      if (commonFeature) {
        // Keep definition but set values to false (dashes)
        return {
          ...commonFeature,
          basic: false,
          standard: false,
          professional: false,
          premium: false
        };
      }

      // Default fallback
      return {
        name: fOriginalName,
        basic: false,
        standard: false,
        professional: false,
        premium: false
      };
    });

    return {
      name: originalName,
      features
    };
  });

  // 4. Handle Key Features separately (strictly industry-specific)
  const keyFeaturesCategory = currentIndustryData.categories.find(
    c => c.name.toUpperCase() === "KEY FEATURES"
  ) || { name: "Key Features", features: [] };

  // 5. Define the specific order requested by the user
  const categoryOrder = [
    "PEOPLE",
    "PRODUCTS",
    "SALES & ORDERS",
    "PURCHASES",
    "INVENTORY OPERATIONS",
    "ECOMMERCE",
    "MANUFACTURING",
    "ACCOUNTS & FINANCE",
    "ANALYTICS",
    "HUMAN RESOURCES",
    "RESTAURANT",
    "MARKETING",
    "GENERAL TOOLS",
    "SUPPORT",
    "INTEGRATION"
  ];

  // 6. Sort the aggregated categories
  const sortedAggregatedCategories = aggregatedCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.name.toUpperCase());
    const indexB = categoryOrder.indexOf(b.name.toUpperCase());

    // If not in the list, move to the end
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });

  return [keyFeaturesCategory, ...sortedAggregatedCategories];
};
