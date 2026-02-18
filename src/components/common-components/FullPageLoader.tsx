"use client";

import React from "react";

const FullPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#795CF5] mx-auto mb-4"></div>
      <p className="text-gray-600 font-['Onest']">Loading Owners Inventory...</p>
    </div>
  </div>
);

export default FullPageLoader;
