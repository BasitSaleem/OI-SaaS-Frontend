export type PackageTier = "basic" | "pro" | "premium" | "enterprise";
export type PackageCategory = "retail" | "manufacturing" | "ecommerce" | "hybrid";

export type PackageKey =
  | "retail-basic"
  | "retail-pro"
  | "retail-premium"
  | "manufacturing-basic"
  | "manufacturing-pro"
  | "manufacturing-premium"
  | "ecommerce-basic"
  | "ecommerce-pro"
  | "ecommerce-premium"
  | "hybrid-pro"
  | "hybrid-enterprise";

export interface PackageLinkConfig {
  key: PackageKey;
  name: string;
  staging: string;
  production: string;
}

export const PACKAGE_LINKS: PackageLinkConfig[] = [
  // Retail Plans
  {
    key: "retail-basic",
    name: "Retail Basic",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=d755fe7d-4372-426c-af33-e63b71a6521f",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=d755fe7d-4372-426c-af33-e63b71a6521f",
  },
  {
    key: "retail-pro",
    name: "Retail Pro",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=8e773346-3c38-4e76-9c1e-7f293a40d81c",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=8e773346-3c38-4e76-9c1e-7f293a40d81c",
  },
  {
    key: "retail-premium",
    name: "Retail Premium",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=d63271f4-1978-47af-b573-ba4a5516d8f8",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=d63271f4-1978-47af-b573-ba4a5516d8f8",
  },

  // Manufacturing Plans
  {
    key: "manufacturing-basic",
    name: "Manufacturing Basic",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=bb2e676e-6b10-40a9-83be-c0c660dc8ad2",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=bb2e676e-6b10-40a9-83be-c0c660dc8ad2",
  },
  {
    key: "manufacturing-pro",
    name: "Manufacturing Pro",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=4cb8ef12-08a5-48bb-8d48-4c738f0848bf",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=4cb8ef12-08a5-48bb-8d48-4c738f0848bf",
  },
  {
    key: "manufacturing-premium",
    name: "Manufacturing Premium",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=fd06bfbc-5de7-4457-bad5-0c073c5ee98e",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=fd06bfbc-5de7-4457-bad5-0c073c5ee98e",
  },

  // E-Commerce Plans
  {
    key: "ecommerce-basic",
    name: "Ecommerce Basic",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=b5b40c3b-7123-41f8-9e70-1d6eb5af76b1",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=b5b40c3b-7123-41f8-9e70-1d6eb5af76b1",
  },
  {
    key: "ecommerce-pro",
    name: "Ecommerce Pro",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=b61801dc-658e-4ff1-83b2-8921e65bf410",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=b61801dc-658e-4ff1-83b2-8921e65bf410",
  },
  {
    key: "ecommerce-premium",
    name: "Ecommerce Premium",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=90e3d803-80a2-40e0-8e38-7f0ec66e931c",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=90e3d803-80a2-40e0-8e38-7f0ec66e931c",
  },

  // Hybrid Plans
  {
    key: "hybrid-pro",
    name: "Hybrid Business Pro",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=98d8f68b-6b0c-43e2-aa6b-f0594e505cbe",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=98d8f68b-6b0c-43e2-aa6b-f0594e505cbe",
  },
  {
    key: "hybrid-enterprise",
    name: "Hybrid Enterprise",
    staging:
      "https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=51dfa210-cd5a-4943-ba46-ee106f854f80",
    production:
      "https://app.ownersinventory.com/create-organization?pkgId=51dfa210-cd5a-4943-ba46-ee106f854f80",
  },
];
