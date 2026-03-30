"use client";

import dynamic from "next/dynamic";

const MapComponentDynamic = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export default MapComponentDynamic;
