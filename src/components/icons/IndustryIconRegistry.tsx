"use client";
// HMR Trigger: 2026-04-08 14:30
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import all industry icon components to keep the main bundle size small
const posBakeryPageIcons = dynamic(() => import("./posBakeryPageIcons"), { ssr: false });
const posBookstorePageIcons = dynamic(() => import("./posBookstorePageIcons"), { ssr: false });
const posClothingStorePageIcons = dynamic(() => import("./posClothingStorePageIcons"), { ssr: false });
const posFurnitureStorePageIcons = dynamic(() => import("./posFurnitureStorePageIcons"), { ssr: false });
const clothingInventoryManagementSoftwareIcons = dynamic(() => import("./clothingInventoryManagementSoftwareIcons"), { ssr: false });
const retailInventoryManagementSoftwareIcons = dynamic(() => import("./retailInventoryManagementSoftwareIcons"), { ssr: false });
const jewelaryInventoryManagementSoftwareIcons = dynamic(() => import("./jewelaryInventoryManagementSoftwareIcons"), { ssr: false });
const autoStoreInventoryManagementSoftwareIcons = dynamic(() => import("./autoStoreInventoryManagementSoftwareIcons"), { ssr: false });
const ecommerceStoreInventoryManagementSoftwareIcons = dynamic(() => import("./ecommerceStoreInventoryManagementSoftwareIcons"), { ssr: false });
const posGroceryStorePageIcons = dynamic(() => import("./posGroceryStorePageIcons"), { ssr: false });
const posHardwarePageIcons = dynamic(() => import("./posHardwarePageIcons"), { ssr: false });
const posJewelryStorePageIcons = dynamic(() => import("./posJewelryStorePageIcons"), { ssr: false });
const posSupermarketStorePageIcons = dynamic(() => import("./posSupermarketStorePageIcons"), { ssr: false });
const restaurantInventoryManagementSoftwareIcons = dynamic(() => import("./restaurantInventoryManagementSoftwareIcons"), { ssr: false });
const healthCareInventoryManagementSoftwareIcons = dynamic(() => import("./healthCareInventoryManagementSoftwareIcons"), { ssr: false });
const hotelInventoryManagementSoftwareIcons = dynamic(() => import("./hotelInventoryManagementSoftwareIcons"), { ssr: false });
const smallBusinessInventoryManagementSoftwareIcons = dynamic(() => import("./smallBusinessInventoryManagementSoftwareIcons"), { ssr: false });
const posRetailStorePageIcons = dynamic(() => import("./posRetailStorePageIcons"), { ssr: false });
const posBeautySalonStorePageIcons = dynamic(() => import("./posBeautySalonStorePageIcons"), { ssr: false });
const furnitureInventoryManagementSoftwareIcons = dynamic(() => import("./furnitureInventoryManagementSoftwareIcons"), { ssr: false });
const constructionInventoryManagementSoftwareIcons = dynamic(() => import("./constructionInventoryManagementSoftwareIcons"), { ssr: false });
const opticalLabInventoryManagementSoftwareIcons = dynamic(() => import("./opticalLabInventoryManagementSoftwareIcons"), { ssr: false });
const hvacInventoryManagementSoftwareIcons = dynamic(() => import("./hvacInventoryManagementSoftwareIcons"), { ssr: false });
const posCoffeeShopStorePageIcons = dynamic(() => import("./posCoffeeShopStorePageIcons"), { ssr: false });
const posShoesStorePageIcons = dynamic(() => import("./posShoesStorePageIcons"), { ssr: false });
const posConvenienceStorePageIcons = dynamic(() => import("./posConvenienceStorePageIcons"), { ssr: false });
const posIceCreamShopPageIcons = dynamic(() => import("./posIceCreamShopPageIcons"), { ssr: false });
const posCandyStorePageIcons = dynamic(() => import("./posCandyStorePageIcons"), { ssr: false });
const posFoodTruckPageIcons = dynamic(() => import("./posFoodTruckPageIcons"), { ssr: false });
const posSportingGoodsPageIcons = dynamic(() => import("./posSportingGoodsPageIcons"), { ssr: false });
const posBarberShopPageIcons = dynamic(() => import("./posBarberShopPageIcons"), { ssr: false });
const posPetStorePageIcons = dynamic(() => import("./posPetStorePageIcons"), { ssr: false });
const posWarehousesPageIcons = dynamic(() => import("./posWarehousesPageIcons"), { ssr: false });
const posApplianceStorePageIcons = dynamic(() => import("./posApplianceStorePageIcons"), { ssr: false });
const posGymPageIcons = dynamic(() => import("./posGymPageIcons"), { ssr: false });
const posThriftStorePageIcons = dynamic(() => import("./posThriftStorePageIcons"), { ssr: false });
const alAsifCasestudyIcons = dynamic(() => import("./alAsifCasestudyIcons"), { ssr: false });
const bightHomeIcons = dynamic(() => import("./bightHomeIcons"), { ssr: false });
const urbansThreadsIcons = dynamic(() => import("./urbansThreadsIcons"), { ssr: false });
const industriesTestmonialProfileIcons = dynamic(() => import("./industriesTestmonialProfileIcons"), { ssr: false });

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
  | "iceCreamShop"
  | "candyStore"
  | "foodTruck"
  | "sportingGoods"
  | "barberShop"
  | "petStore"
  | "warehouses"
  | "applianceStore"
  | "gym"
  | "thriftStore"
  | "furnitureInventory"
  | "constructionInventory"
  | "opticalLabInventory"
  | "hvacInventory"
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
  iceCreamShop: posIceCreamShopPageIcons,
  candyStore: posCandyStorePageIcons,
  foodTruck: posFoodTruckPageIcons,
  sportingGoods: posSportingGoodsPageIcons,
  barberShop: posBarberShopPageIcons,
  petStore: posPetStorePageIcons,
  warehouses: posWarehousesPageIcons,
  applianceStore: posApplianceStorePageIcons,
  gym: posGymPageIcons,
  thriftStore: posThriftStorePageIcons,
  furnitureInventory: furnitureInventoryManagementSoftwareIcons,
  constructionInventory: constructionInventoryManagementSoftwareIcons,
  opticalLabInventory: opticalLabInventoryManagementSoftwareIcons,
  hvacInventory: hvacInventoryManagementSoftwareIcons,
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

