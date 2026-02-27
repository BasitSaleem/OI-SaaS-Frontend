import PricingPageIcon from "@/components/icons/pricingPageIcons";
import React, { useState } from "react";

export type BusinessType = "Retail" | "Manufacturing" | "Ecommerce" | "Hybrid";

interface Tab {
  id: BusinessType;
  iconName: "retail" | "manufacturing" | "ecommerce" | "hybrid";
  title: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: "Retail",
    iconName: "retail",
    title: "Retail",
    description: "Perfect for stores, shops and multi locations business.",
  },
  {
    id: "Manufacturing",
    iconName: "manufacturing",
    title: "Manufacturing",
    description: "Built for production floors and factories.",
  },
  {
    id: "Ecommerce",
    iconName: "ecommerce",
    title: "Ecommerce",
    description: "Grow your online store with ease.",
  },
  {
    id: "Hybrid",
    iconName: "hybrid",
    title: "Hybrid",
    description: "All features, all location one platform.",
  },
];

interface IndustryTabsProps {
  activeTab: BusinessType;
  onTabChange: (tab: BusinessType) => void;
}

const IndustryTabs: React.FC<IndustryTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const [hoveredTab, setHoveredTab] = useState<BusinessType | null>(null);

  return (
    <div className="w-full wrapper">
    <div className="mt-12 md:mt-16 lg:mt-20 ">
      
        <h2 className="text-[32px] leading-[130%] lg:text-5xl font-semibold lg:font-medium text-[var(--text-dark)] text-center font-['Onest'] mb-8 md:mb-12">
          Flexible Plans for Every Business Type
        </h2>

        <div className="bg-white/24 border border-white backdrop-blur-md rounded-[16px] lg:rounded-[30px] p-2 lg:p-6 flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible gap-4 no-scrollbar snap-x snap-mandatory lg:snap-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            const showHoverIcon = isActive || isHovered;

            // Construct the icon name specifically: postfix "Hover" when active or hovered
            const currentIconName = (
              showHoverIcon ? `${tab.iconName}Hover` : tab.iconName
            ) as any;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex flex-col items-start p-4 lg:p-6 backdrop-blur-2xl rounded-[12px] lg:rounded-[30px] transition-all duration-300 text-left group min-w-[200px] sm:min-w-[240px] lg:min-w-0 snap-center ${
                  isActive
                    ? "bg-[var(--background-purple-light)] shadow-[0_10px_30px_rgba(var(--primary-purple-rgb),0.1)] border border-[var(--primary-purple)]"
                    : "bg-[var(--white-color)] border border-transparent hover:bg-[var(--background-purple-light)] hover:border-[var(--primary-purple)]"
                }`}
              >
                <div className="flex items-start gap-3 mb-2 lg:mb-4">
                  <div>
                    <PricingPageIcon
                      name={currentIconName}
                      size={32}
                      className="h-5 w-5 lg:h-8 lg:w-8"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-lg leading-[140%] lg:text-xl font-medium font-['Onest'] transition-colors ${isActive || isHovered ? "text-[var(--text-dark)]" : "text-[var(--text-dark)]"}`}
                    >
                      {tab.title}
                    </span>
                    <p
                      className={`text-xs md:text-base md:block hidden leading-relaxed font-['Onest'] transition-colors ${isActive || isHovered ? "text-[var(--text-grey)]" : "text-[var(--text-grey)]"}`}
                    >
                      {tab.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustryTabs;
