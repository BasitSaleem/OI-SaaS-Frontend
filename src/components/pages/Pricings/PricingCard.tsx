"use client";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { PricingPlan } from "./types";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface AddOn {
  id: string;
  name: string;
  price: number;
  type: "quantity" | "checkbox";
}

const addOnsList: AddOn[] = [
  { id: "pos", name: "POS Terminal", price: 10, type: "quantity" },
  { id: "store", name: "Store", price: 25, type: "quantity" },
  { id: "warehouse", name: "Warehouses", price: 15, type: "quantity" },
  { id: "production", name: "Production Floors", price: 25, type: "quantity" },
  { id: "accounting", name: "Accounts & Finance", price: 15, type: "checkbox" },
  { id: "online", name: "Online Store", price: 25, type: "checkbox" },
];

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  allPlans: PricingPlan[];
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, allPlans }) => {
  const [showAddOns, setShowAddOns] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    pos: 0,
    store: 0,
    warehouse: 0,
    production: 0,
  });
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({
    accounting: false,
    online: false,
  });
  const [isVisibleUpgrade, setIsVisibleUpgrade] = useState(false);

  const basePrice = isYearly ? (plan.yearlyPrice ?? plan.price) : plan.price;

  const nextPlan = useMemo(() => {
    if (plan.isCustom) return null;
    
    // Filter out custom "Let's Talk" and current plan
    const otherPlans = allPlans.filter(p => !p.isCustom && p.id !== plan.id);
    
    // Find plans that are more expensive than current base price
    const moreExpensivePlans = otherPlans.filter(p => {
      const pPrice = isYearly ? (p.yearlyPrice ?? p.price) : p.price;
      return pPrice > basePrice;
    });

    if (moreExpensivePlans.length === 0) return null;

    // Sort by price and pick the cheapest one among the more expensive ones
    return moreExpensivePlans.sort((a, b) => {
      const aPrice = isYearly ? (a.yearlyPrice ?? a.price) : a.price;
      const bPrice = isYearly ? (b.yearlyPrice ?? b.price) : b.price;
      return aPrice - bPrice;
    })[0];
  }, [allPlans, plan, isYearly, basePrice]);

  const filteredAddOns = useMemo(() => {
    return addOnsList.filter((addOn) => {
      const features = plan.features.map((f) => f.toLowerCase());

      if (
        addOn.id === "pos" &&
        features.some((f) => f.includes("unlimited pos terminal"))
      )
        return false;
      if (
        addOn.id === "store" &&
        features.some((f) => f.includes("unlimited store"))
      )
        return false;
      if (
        addOn.id === "warehouse" &&
        features.some((f) => f.includes("unlimited warehouse"))
      )
        return false;
      if (
        addOn.id === "production" &&
        features.some((f) => f.includes("unlimited production floor"))
      )
        return false;
      if (
        addOn.id === "accounting" &&
        features.some((f) => f.includes("accounts & finance"))
      )
        return false;
      if (
        addOn.id === "online" &&
        features.some((f) => f.includes("online store"))
      )
        return false;

      return true;
    });
  }, [plan.features]);

  const addOnTotal = useMemo(() => {
    let total = 0;
    filteredAddOns.forEach((addOn) => {
      if (addOn.type === "quantity") {
        total += (quantities[addOn.id] || 0) * addOn.price;
      } else {
        if (checkboxes[addOn.id]) {
          total += addOn.price;
        }
      }
    });
    return total;
  }, [quantities, checkboxes, filteredAddOns]);

  const totalPrice = basePrice + addOnTotal;

  const upgradeMessage = useMemo(() => {
    if (!nextPlan) return null;

    const nextPlanPrice = isYearly ? (nextPlan.yearlyPrice ?? nextPlan.price) : nextPlan.price;

    if (totalPrice > nextPlanPrice) {
      return `Consider upgrading to ${nextPlan.name} plan at only $${nextPlanPrice}/mo for more features and better value.`;
    }
    return null;
  }, [nextPlan, totalPrice, isYearly]);

  useEffect(() => {
    if (upgradeMessage) {
      setIsVisibleUpgrade(true);
      const timer = setTimeout(() => {
        setIsVisibleUpgrade(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    } else {
      setIsVisibleUpgrade(false);
    }
  }, [upgradeMessage]);

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className={`flex flex-col items-stretch justify-start p-[2px] rounded-[30px] relative flex-1 ${
        plan.popular
          ? "bg-gradient-to-r from-[var(--primary-teal)] via-[var(--primary-blue-dark)] via-[var(--primary-blue)] to-[var(--primary-purple)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex flex-col items-stretch justify-start flex-1 px-4 py-4 bg-white rounded-[30px] w-full snap-start transition-all duration-300 relative`}
      >
        {plan.popular && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--primary-teal)] to-[var(--primary-purple)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Most Popular
          </div>
        )}

        {plan.isCustom ? (
          <div className="relative flex flex-col items-center justify-center  flex-grow py-4 text-center">
            <div className="absolute z-1 left-1 top-10  h-40 w-40 blur-3xl rounded-full bg-[#1AD1B9]"></div>
            <div className="mb-8">
              <div className="relative z-3 w-48 h-48 mx-auto relative">
                <Image
                  src="/assets/owners-inventory-pricing/lets-talk.svg"
                  alt="Let's Talk"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-[var(--text-dark)] mb-6 font-['Onest']">
              Let's <span className="text-[var(--primary-purple)]">Talk</span>
            </h3>
            <p className="text-sm text-[var(--text-dark)]/60 font-['Onest'] mb-10">
              {plan.description}
            </p>
            <button className="w-full py-4 rounded-full font-bold text-white bg-[var(--primary-teal)] hover:bg-[var(--primary-teal-dark)] transition-colors mt-auto">
              Let's Connect
            </button>
          </div>
        ) : (
          <>
            <div className="text-left mb-5">
              <h3 className="text-[24px] lg:text-[28px] text-[var(--text-dark)] font-semibold leading-[100%] font-['Onest']">
            {plan.name}
          </h3>
          <p className="text-sm text-[var(--text-dark)] font-['Onest'] mt-1.5">
            {plan.description}
          </p>
        </div>

        <div className={`flex items-baseline gap-1 ${isYearly ? 'mb-0' : 'mb-8'}`}>
          <span
            className="text-4xl leading-[100%] font-semibold font-['Onest']"
            style={{ color: plan.color }}
          >
            ${basePrice}
          </span>
          <span className="text-sm font-normal leading-[170%] text-[var(--text-grey)] font-['Onest']">
            /month
          </span>
        </div>

        {isYearly && <p className="text-xs leading-[160%] text-[var(--text-grey)] font-['Onest'] mt-1.5 mb-8">Billed yearly</p>}

        <button
          className="w-full py-4 rounded-full text-base font-['Onest'] font-semibold text-white mb-8 transition-opacity hover:opacity-90"
          style={{ backgroundColor: plan.color }}
        >
          Start 14-Day Free Trial
        </button>

        <ul className="space-y-3 mb-10 flex-grow">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-[var(--text-light-alt)] font-['Onest']"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.30724 15.9522C8.25949 15.9522 8.21226 15.9423 8.16852 15.9232C8.12477 15.904 8.08546 15.8761 8.05306 15.841L1.19966 8.42759C1.15398 8.37816 1.12369 8.31649 1.11251 8.25013C1.10133 8.18376 1.10974 8.11557 1.13671 8.0539C1.16368 7.99224 1.20804 7.93977 1.26437 7.90293C1.32069 7.86609 1.38654 7.84647 1.45384 7.84647H4.75269C4.80222 7.84647 4.85117 7.8571 4.89624 7.87764C4.94132 7.89817 4.98146 7.92814 5.01397 7.96551L7.3044 10.6006C7.55193 10.0714 8.03111 9.19041 8.87199 8.11685C10.1151 6.52973 12.4273 4.19558 16.3833 2.08847C16.4598 2.04776 16.5487 2.03719 16.6326 2.05886C16.7165 2.08052 16.7892 2.13285 16.8364 2.20551C16.8835 2.27817 16.9017 2.36587 16.8874 2.45131C16.8731 2.53674 16.8272 2.61369 16.7589 2.66696C16.7438 2.67877 15.2185 3.87992 13.4631 6.08004C11.8475 8.1047 9.69992 11.4153 8.64315 15.6893C8.62458 15.7644 8.58141 15.8311 8.5205 15.8787C8.4596 15.9264 8.38448 15.9523 8.30714 15.9523L8.30724 15.9522Z"
                  fill="var(--primary-purple)"
                />
              </svg>

              {feature}
            </li>
          ))}
        </ul>

        <div className="border-t border-[var(--background-halfwhite)] pt-6 mt-auto">
          <div
            className={
              showAddOns && filteredAddOns.length > 0
                ? "bg-[var(--background-halfwhite)] rounded-lg px-3 py-4"
                : ""
            }
          >
            {filteredAddOns.length > 0 && (
              <button
                onClick={() => setShowAddOns(!showAddOns)}
                className={`flex items-center justify-center gap-2 font-medium text-base leading-[150%] cursor-pointer font-['onest'] w-full transition-colors ${
                  showAddOns ? "text-[var(--text-dark)]" : "text-[var(--primary-purple)]"
                }`}
              >
                {showAddOns ? (
                  <FaMinus size={14} className="text-[var(--primary-purple)]" />
                ) : (
                  <FaPlus size={14} />
                )}
                <span>{"Add-ons"}</span>
              </button>
            )}

            {showAddOns && (
              <div className="mt-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">

              {filteredAddOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex flex-col">
                    <span className="text-sm leading-[160%] font-medium font-['onest'] text-[var(--text-dark)]">
                      {addOn.name}
                    </span>
                    <span className="text-sm leading-[170%] font-normal font-['onest'] text-[var(--text-grey)]">
                      +${addOn.price} each
                    </span>
                  </div>

                  {addOn.type === "quantity" ? (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(addOn.id, -1)}
                        className="w-8 h-8 rounded-full border border-[var(--primary-purple)]/20 bg-white flex items-center justify-center text-[var(--text-dark)] hover:bg-[var(--background-halfwhite)] transition-colors"
                      >
                         <FaMinus size={14} className="text-[var(--text-dark)]" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">
                        {quantities[addOn.id]}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(addOn.id, 1)}
                        className="w-8 h-8 rounded-full bg-[var(--primary-purple)] flex items-center justify-center text-white hover:bg-[var(--primary-purple-dark)] transition-colors shadow-sm"
                      >
                        <FaPlus size={14} className="text-white" />
                      </button>
                    </div>
                  ) : (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={checkboxes[addOn.id]}
                        onChange={() => handleCheckboxChange(addOn.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary-purple)]"></div>
                    </label>
                  )}
                </div>
              ))}

               <div className="flex justify-between items-center text-xs">
                  <span className="text-sm font-medium leading-[160%] font-['onest'] text-[var(--text-dark)]">Add-ons:</span>
                  <span className="text-sm font-medium leading-[160%] font-['onest'] text-[var(--text-dark)]">
                    +${addOnTotal}/mo
                  </span>
                </div>

              <div className="pt-4 border-t border-black/5 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium leading-[160%] font-['onest'] text-[var(--text-dark)]">
                    Total Package:
                  </span>
                  <span className="text-lg font-semibold leading-[160%] font-['onest'] text-[var(--text-dark)]">
                    ${totalPrice}/mo
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

        {isVisibleUpgrade && upgradeMessage && (
          <div className="mt-8 p-4 bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-[20px] text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🧐</span>
              <h4 className="text-sm font-bold text-[var(--warning-text)] font-['Onest']">
                Smart Suggestions
              </h4>
            </div>
            <p className="text-[13px] text-[var(--warning-text)] font-['Onest'] leading-relaxed">
              {upgradeMessage}
            </p>
          </div>
        )}
      </>
    )}
  </div>
</div>
  );
};

export default PricingCard;
