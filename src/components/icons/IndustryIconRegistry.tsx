"use client";
// HMR Trigger: 2026-04-08 14:30
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import all industry icon components to keep the main bundle size small
const posBakeryPageIcons = dynamic(() => import("./posBakeryPageIcons"));
const posBookstorePageIcons = dynamic(() => import("./posBookstorePageIcons"));
const posClothingStorePageIcons = dynamic(
  () => import("./posClothingStorePageIcons"),
);
const posFurnitureStorePageIcons = dynamic(
  () => import("./posFurnitureStorePageIcons"),
);
const clothingInventoryManagementSoftwareIcons = dynamic(
  () => import("./clothingInventoryManagementSoftwareIcons"),
);
const retailInventoryManagementSoftwareIcons = dynamic(
  () => import("./retailInventoryManagementSoftwareIcons"),
);
const jewelaryInventoryManagementSoftwareIcons = dynamic(
  () => import("./jewelaryInventoryManagementSoftwareIcons"),
);
const autoStoreInventoryManagementSoftwareIcons = dynamic(
  () => import("./autoStoreInventoryManagementSoftwareIcons"),
);
const ecommerceStoreInventoryManagementSoftwareIcons = dynamic(
  () => import("./ecommerceStoreInventoryManagementSoftwareIcons"),
);
const posGroceryStorePageIcons = dynamic(
  () => import("./posGroceryStorePageIcons"),
);
const posHardwarePageIcons = dynamic(() => import("./posHardwarePageIcons"));
const posJewelryStorePageIcons = dynamic(
  () => import("./posJewelryStorePageIcons"),
);
const posSupermarketStorePageIcons = dynamic(
  () => import("./posSupermarketStorePageIcons"),
);

const restaurantInventoryManagementSoftwareIcons = dynamic(
  () => import("./restaurantInventoryManagementSoftwareIcons"),
);

const healthCareInventoryManagementSoftwareIcons = dynamic(
  () => import("./healthCareInventoryManagementSoftwareIcons"),
);
const hotelInventoryManagementSoftwareIcons = dynamic(
  () => import("./hotelInventoryManagementSoftwareIcons"),
);
const smallBusinessInventoryManagementSoftwareIcons = dynamic(
  () => import("./smallBusinessInventoryManagementSoftwareIcons"),
);
const posRetailStorePageIcons = dynamic(
  () => import("./posRetailStorePageIcons"),
);
const posBeautySalonStorePageIcons = dynamic(
  () => import("./posBeautySalonStorePageIcons"),
);
const furnitureInventoryManagementSoftwareIcons = dynamic(
  () => import("./furnitureInventoryManagementSoftwareIcons"),
);
const posCoffeeShopStorePageIcons = dynamic(
  () => import("./posCoffeeShopStorePageIcons"),
);
const posShoesStorePageIcons = dynamic(
  () => import("./posShoesStorePageIcons"),
);
const posConvenienceStorePageIcons = dynamic(
  () => import("./posConvenienceStorePageIcons"),
);
const posBarberShopPageIcons = dynamic(
  () => import("./posBarberShopPageIcons"),
);
const alAsifCasestudyIcons = dynamic(
  () => import("./alAsifCasestudyIcons"),
  
);
const bightHomeIcons = dynamic(
  () => import("./bightHomeIcons"),
  
);
const urbansThreadsIcons = dynamic(
  () => import("./urbansThreadsIcons"),
  
);

const industriesTestmonialProfileIcons = dynamic(
  () => import("./industriesTestmonialProfileIcons"),
  
);

export type IndustryIconSet =
  | "bakery"
  | "bookstore"
  | "clothing"
  | "clothingInventory"
  | "retailInventory"
  | "jewelaryInventory"
  | "autoStoreInventory"
  | "ecommerceStoreInventory"
  | "healthCareInventory"
  | "hotelInventory"
  | "smallBusinessInventory"
  | "superMarket"
  | "restaurantInventory"
  | "furniture"
  | "grocery"
  | "hardware"
  | "jewelry"
  | "retail"
  | "beautySalon"
  | "coffeeShop"
  | "shoesStore"
  | "convenienceStore"
  | "barberShop"
  | "furnitureInventory"
  | "alAsifCasestudyIcons"
  | "bightHomeIcons"
  | "urbansThreadsIcons"
  | "industriesTestmonialProfileIcons"

const REGISTRY: Record<IndustryIconSet, React.ComponentType<any>> = {
  bakery: posBakeryPageIcons,
  bookstore: posBookstorePageIcons,
  clothing: posClothingStorePageIcons,
  clothingInventory: clothingInventoryManagementSoftwareIcons,
  retailInventory: retailInventoryManagementSoftwareIcons,
  jewelaryInventory: jewelaryInventoryManagementSoftwareIcons,
  autoStoreInventory: autoStoreInventoryManagementSoftwareIcons,
  ecommerceStoreInventory: ecommerceStoreInventoryManagementSoftwareIcons,
  superMarket: posSupermarketStorePageIcons,
  restaurantInventory: restaurantInventoryManagementSoftwareIcons,
  healthCareInventory: healthCareInventoryManagementSoftwareIcons,
  hotelInventory: hotelInventoryManagementSoftwareIcons,
  smallBusinessInventory: smallBusinessInventoryManagementSoftwareIcons,
  furniture: posFurnitureStorePageIcons,
  grocery: posGroceryStorePageIcons,
  hardware: posHardwarePageIcons,
  jewelry: posJewelryStorePageIcons,
  retail: posRetailStorePageIcons,
  beautySalon: posBeautySalonStorePageIcons,
  coffeeShop: posCoffeeShopStorePageIcons,
  shoesStore: posShoesStorePageIcons,
  convenienceStore: posConvenienceStorePageIcons,
  barberShop: posBarberShopPageIcons,
  furnitureInventory: furnitureInventoryManagementSoftwareIcons,
  alAsifCasestudyIcons: alAsifCasestudyIcons,
  bightHomeIcons: bightHomeIcons,
  urbansThreadsIcons: urbansThreadsIcons,
  industriesTestmonialProfileIcons: industriesTestmonialProfileIcons
};

interface IndustryIconProps {
  set?: IndustryIconSet | IndustryIconSet[];
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function IndustryIcon({
  set,
  name,
  size = 48,
  className = "",
  style,
}: IndustryIconProps) {
  if (!set) return null;

  const sets = Array.isArray(set) ? set : [set];

  return (
    <>
      {sets.map((s) => {
        const IconsComponent = REGISTRY[s];
        if (!IconsComponent) {
          console.warn(`IndustryIcon: Set "${s}" not found in registry.`);
          return null;
        }
        return (
          <IconsComponent
            key={s}
            name={name}
            size={size}
            className={className}
            style={style}
          />
        );
      })}
    </>
  );
}

