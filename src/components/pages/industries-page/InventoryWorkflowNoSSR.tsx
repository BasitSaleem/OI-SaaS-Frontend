"use client";
import dynamic from "next/dynamic";

// Swiper must not run on the server — this prevents the 108KB swiper SSR chunk
// from being embedded in every industry page's prerendered HTML.
const InventoryWorkflow = dynamic(() => import("./InventoryWorkflow"), {
  ssr: false,
});

export default InventoryWorkflow;
