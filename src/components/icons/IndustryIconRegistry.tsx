"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import all industry icon components to keep the main bundle size small
const posBakeryPageIcons = dynamic(() => import("./posBakeryPageIcons"));
const posBookstorePageIcons = dynamic(() => import("./posBookstorePageIcons"));
const posClothingStorePageIcons = dynamic(() => import("./posClothingStorePageIcons"));
const posFurnitureStorePageIcons = dynamic(() => import("./posFurnitureStorePageIcons"));
const posGroceryStorePageIcons = dynamic(() => import("./posGroceryStorePageIcons"));
const posHardwarePageIcons = dynamic(() => import("./posHardwarePageIcons"));
const posJewelryStorePageIcons = dynamic(() => import("./posJewelryStorePageIcons"));
const posRetailStorePageIcons = dynamic(() => import("./posRetailStorePageIcons"));

export type IndustryIconSet = 
  | "bakery" 
  | "bookstore" 
  | "clothing" 
  | "furniture" 
  | "grocery" 
  | "hardware" 
  | "jewelry" 
  | "retail";

const REGISTRY: Record<IndustryIconSet, React.ComponentType<any>> = {
  bakery: posBakeryPageIcons,
  bookstore: posBookstorePageIcons,
  clothing: posClothingStorePageIcons,
  furniture: posFurnitureStorePageIcons,
  grocery: posGroceryStorePageIcons,
  hardware: posHardwarePageIcons,
  jewelry: posJewelryStorePageIcons,
  retail: posRetailStorePageIcons,
};

interface IndustryIconProps {
  set?: IndustryIconSet;
  name: string;
  size?: number;
  className?: string;
}

export default function IndustryIcon({ 
  set, 
  name, 
  size = 48, 
  className = "" 
}: IndustryIconProps) {
  if (!set || !REGISTRY[set]) {
    return null;
  }

  const IconsComponent = REGISTRY[set];
  return <IconsComponent name={name} size={size} className={className} />;
}
