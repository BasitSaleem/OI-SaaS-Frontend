import Image from "next/image";
import React from "react";

interface PricingTabsProps {
  activeTab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
  variant?: "tabs" | "toggle";
}

const PricingTabs: React.FC<PricingTabsProps> = ({
  activeTab,
  onTabChange,
  variant = "tabs",
}) => {
  if (variant === "toggle") {
    return (
      <div className="flex items-center gap-3">
        {/* Monthly Label */}
        <span
          className={`text-base font-['Onest'] font-semibold ${
            activeTab === "monthly" ? "text-[var(--text-dark)]" : "text-gray-400"
          }`}
        >
          Monthly
        </span>

        {/* Toggle Button with accessibility */}
        <button
          onClick={() =>
            onTabChange(activeTab === "monthly" ? "yearly" : "monthly")
          }
          className={`relative inline-flex items-center h-6 md:h-8 w-12 md:w-16 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-purple)] ${
            activeTab === "yearly" ? "bg-[var(--primary-purple)]" : "bg-[var(--primary-teal)]"
          }`}
          role="switch"
          aria-checked={activeTab === "yearly"}
          aria-label={`Switch to ${activeTab === "monthly" ? "yearly" : "monthly"} pricing`}
        >
          <span
            className={`inline-block w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${
              activeTab === "yearly" ? "translate-x-6 md:translate-x-8" : "translate-x-1"
            }`}
          />
        </button>

        {/* Yearly Label */}
        <span
          className={`text-base font-['Onest'] font-semibold ${
            activeTab === "yearly" ? "text-[var(--text-dark)]" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex gap-2 p-1 lg:p-2 mt-10 xl:mt-20 border border-transparent rounded-full bg-white">
      {/* Monthly Button */}
      <button
        onClick={() => onTabChange("monthly")}
        className={`tab-btn px-4 py-2 md:px-5 md:py-2 lg:px-[60px] lg:py-[14px] 
          text-sm lg:text-base font-['Onest'] font-semibold border rounded-full 
          transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-purple)] ${
            activeTab === "monthly"
              ? "text-white bg-[var(--primary-purple)] border-[var(--primary-purple)]"
              : "text-gray-800 bg-transparent border-transparent hover:text-white hover:bg-[var(--primary-purple)] hover:border-[var(--primary-purple)]"
          }`}
        aria-pressed={activeTab === "monthly"}
      >
        Monthly
      </button>

      {/* Yearly Button with Badge */}
      <div className="relative">
        <button
          onClick={() => onTabChange("yearly")}
          className={`tab-btn relative px-4 py-2 md:px-5 md:py-2 lg:px-[60px] lg:py-3.5
           text-sm lg:text-base font-['Onest'] font-semibold border rounded-full 
            transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-purple)] ${
              activeTab === "yearly"
                ? "text-white bg-[var(--primary-purple)] border-[var(--primary-purple)]"
                : "text-gray-800 bg-transparent border-transparent hover:text-white hover:bg-[var(--primary-purple)] hover:border-[var(--primary-purple)]"
            }`}
          aria-pressed={activeTab === "yearly"}
        >
          Yearly
        </button>

        {/* Discount Banner - Responsive Design */}
        <div className="absolute left-[70%] md:left-[80%] top-[-25px] md:top-[-20px] translate-x-2 flex flex-col gap-2 md:gap-4 items-center">
          <div className="flex flex-col items-center md:gap-1 ml-6 md:ml-10">
            {/* 20% Badge */}
            <div
              className="w-[69px] h-[24px] md:w-[70px] md:h-[24px] lg:w-[112px] lg:h-[38px] flex items-center justify-center rotate-[-5deg] text-white font-bold text-[10px] md:text-sm lg:text-xl z-30"
              style={{
                clipPath:
                  "polygon(0% 26.57%, 97.23% 0%, 89.75% 37.8%, 99.46% 70.94%, 2.23% 97.44%, 9.71% 59.68%, 0% 26.57%)",
                backgroundColor: "var(--text-dark)",
              }}
            >
              20%
            </div>

            {/* OFF Badge */}
            <div
              className="w-[52px] h-[17px] md:w-[58px] md:h-[19px] lg:w-[94px] lg:h-[30px] -mt-1 md:-mt-2.5 flex items-center justify-center text-[var(--primary-dark)] font-black text-[8px] md:text-[9px] lg:text-xl z-20"
              style={{
                clipPath:
                  "polygon(0% 26.57%, 97.2% 0%, 89.72% 37.77%, 99.42% 70.89%, 2.23% 97.38%, 9.7% 59.65%, 0% 26.57%)",
                backgroundColor: "var(--primary-teal)",
              }}
            >
              OFF
            </div>
          </div>

          {/* Squiggled Arrow pointing from Yearly to Badges */}
          <Image
            src="/assets/owners-inventory-pricing/pricing-arrow.svg"
            alt=""
            width={78}
            height={30}
            className="absolute left-[10px] md:left-0 lg:left-5 bottom-[-30px] md:bottom-[-30px] lg:bottom-[-40px] w-10 md:w-16 lg:w-[78px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;