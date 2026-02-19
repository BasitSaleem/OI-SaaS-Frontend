"use client";

import { useErrorAnimation } from '@/hooks/useErrorAnimation';
import React from 'react';

const ComingSoonPage = () => {
  useErrorAnimation();
  
  return (
    <div className="h-screen w-full bg-[#fcf2f9] flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-widest font-['Onest']">
        Coming Soon
      </h1>
    </div>
  );
};

export default ComingSoonPage;
