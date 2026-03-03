"use client";
import React, { useState } from "react";
import PricingPageIcon from "@/components/icons/pricingPageIcons";
import Paragraph from "../typography/Paragraph";

interface AddOnItem {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: any; // Using any for icon name to match PricingPageIcon props
}

const addOns: AddOnItem[] = [
  {
    id: "warehouse",
    name: "Warehouses",
    price: 25,
    description: "Add warehouses for multi-location inventory tracking.",
    icon: "warehouse",
  },
  {
    id: "finance",
    name: "Accounts & Finance",
    price: 15,
    description: "Full accounting module with reports and financial tracking.",
    icon: "finance",
  },
  {
    id: "online",
    name: "Online Store",
    price: 25,
    description: "Add your online store to manage e-commerce operations.",
    icon: "onlineStore",
  },
  {
    id: "production",
    name: "Production Floors",
    price: 25,
    description: "Add production floors for manufacturing operations.",
    icon: "productionFloors",
  },
  {
    id: "pos",
    name: "POS Terminal",
    price: 10,
    description:
      "Add a point-of-sale terminal to your system for in-person sales.",
    icon: "posTerminal",
  },
  {
    id: "store",
    name: "Stores",
    price: 25,
    description: "Add additional store locations as you grow.",
    icon: "store",
  },
];

const AddOnsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="wrapper bg-white">
      <div className="mt-20 md:mt-28 lg:mt-[100px]">
        <div className="text-center mb-12">
          <h2 className="text-[32px] leading-[130%] lg:text-5xl font-semibold lg:font-medium text-[var(--text-dark)] text-center font-['Onest'] mb-6">
            Need more? Easily add it whenever required.
          </h2>
          <Paragraph>
            Flexible add-ons available on Basic and Pro plans. Enterprise plans
            include unlimited locations.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className="p-[1px] rounded-[24px] transition-all duration-300"
              style={{
                background:
                  hoveredId === addon.id
                    ? "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)"
                    : "#E2E2E2",
              }}
            >
              <div
                className="group p-6 rounded-[24px] h-full bg-white flex flex-col items-start transition-all duration-300"
                onMouseEnter={() => setHoveredId(addon.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--background-halfwhite)] border border-[#E2E2E2] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-transparent">
                  <PricingPageIcon
                    name={
                      hoveredId === addon.id ? `${addon.icon}Hover` : addon.icon
                    }
                    size={32}
                  />
                </div>

                <h3 className="text-lg font-medium text-[var(--text-dark)] leading-[140%] mb-2 font-['Onest']">
                  {addon.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold leading-[135%] text-[var(--primary-teal)] font-['Onest']">
                    ${addon.price}
                  </span>
                  <span className="text-sm text-[var(--text-dark)] font-['Onest']">
                    /month
                  </span>
                </div>

                <p className="text-sm leading-[170%] font-normal text-[var(--text-grey)] leading-relaxed font-['Onest']">
                  {addon.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
