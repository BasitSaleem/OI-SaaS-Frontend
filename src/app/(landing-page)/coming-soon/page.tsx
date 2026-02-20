"use client";

import { useErrorAnimation } from '@/hooks/useErrorAnimation';
import React from 'react';

const DEFAULT_GRADIENT_BACKGROUND = `
  linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.98) 18%,
    rgba(255, 255, 255, 0.85) 35%,
    rgba(255, 255, 255, 0.00) 50%,
    rgba(255, 255, 255, 0.00) 100%
  ),
  radial-gradient(900px 650px at 12% 8%,
    rgba(207, 181, 249, 0.80) 0%,
    rgba(207, 181, 249, 0.30) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.80) 0%,
    rgba(160, 215, 255, 0.30) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    135deg,
    rgba(210, 185, 255, 0.85) 0%,
    rgba(175, 205, 255, 0.77) 45%,
    rgba(160, 230, 245, 0.70) 100%
  )
`;

const ComingSoonPage = () => {
  useErrorAnimation();
  
  return (
    <div className="h-screen w-full  flex items-center justify-center"
       style={{ background: DEFAULT_GRADIENT_BACKGROUND }}
    >
      <h1 className="text-[#2B2B2B] text-4xl md:text-6xl lg:text-8xl font-semibold uppercase tracking-widest font-['Onest']">
        Coming Soon
      </h1>
    </div>
  );
};

export default ComingSoonPage;
