"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import PricingPageIcon from "@/components/icons/pricingPageIcons";
import {
  pricingConfig,
  BusinessType,
} from "@/components/pages/Pricings/tableConfig";
import { PricingPlan } from "@/components/pages/Pricings/types";
import { FaMinus, FaPlus, FaCheck } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "@/components/pages/typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ADD_ONS_DATA = [
  { id: "store", name: "Store", price: 25, type: "quantity", icon: "store" },
  {
    id: "production",
    name: "Production Floors",
    price: 25,
    type: "quantity",
    icon: "productionFloors",
  },
  {
    id: "warehouse",
    name: "Warehouses",
    price: 15,
    type: "quantity",
    icon: "warehouse",
  },
  {
    id: "pos",
    name: "POS Terminal",
    price: 10,
    type: "quantity",
    icon: "posTerminal",
  },
  {
    id: "finance",
    name: "Accounts & Finance",
    price: 15,
    type: "toggle",
    icon: "finance",
  },
];

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planId = searchParams.get("plan");
  let industryParam = searchParams.get("industry") as BusinessType;
  if (!industryParam || (industryParam as string) === "undefined") {
    industryParam = "Retail";
  }
  const industry = industryParam;
  const initialCycle =
    (searchParams.get("cycle") as "monthly" | "yearly") || "monthly";

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    initialCycle,
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({
    store: 0,
    production: 0,
    warehouse: 0,
    pos: 0,
  });
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    finance: false,
  });

  useEffect(() => {
    let heroBreak = gsap.matchMedia();
    heroBreak.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });
      tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
      tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
      tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);
      tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
      tl.to(
        ".owner-inventory-hero",
        {
          y: -10,
          paddingLeft: 0,
          paddingRight: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );
    });

    heroBreak.add("(min-width: 320px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });
      tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
    });

    return () => heroBreak.revert();
  }, []);

  const selectedPlan = useMemo(() => {
    const industryData = pricingConfig[industry];
    if (!industryData) return null;
    return (
      industryData.plans.find((p) => p.id === planId) || industryData.plans[0]
    );
  }, [industry, planId]);

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const handleToggleChange = (id: string) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateAddOnsTotal = useMemo(() => {
    let total = 0;
    ADD_ONS_DATA.forEach((addOn) => {
      if (addOn.type === "quantity") {
        total += (quantities[addOn.id] || 0) * addOn.price;
      } else if (addOn.type === "toggle" && toggles[addOn.id]) {
        total += addOn.price;
      }
    });
    return total;
  }, [quantities, toggles]);

  const basePrice = useMemo(() => {
    if (!selectedPlan) return 0;
    return billingCycle === "yearly"
      ? (selectedPlan.yearlyPrice ?? selectedPlan.price)
      : selectedPlan.price;
  }, [selectedPlan, billingCycle]);

  const totalMonthly = basePrice + calculateAddOnsTotal;
  const savings = useMemo(() => {
    if (!selectedPlan || billingCycle === "monthly") return 0;
    const monthlyTotal = selectedPlan.price + calculateAddOnsTotal;
    return (monthlyTotal - totalMonthly) * 12;
  }, [selectedPlan, billingCycle, calculateAddOnsTotal, totalMonthly]);

  if (!selectedPlan)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen pinned-section-1">
      <div className="top-section md:h-6 h-8"></div>
      <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 overflow-hidden">
        <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
          <div className="hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[var(--background-halfwhite)] rounded-tl-[40px]">
            <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
          </div>
          <div className="relative w-40 rounded-tr-[30px] lg:rounded-tr-[40px] rounded-tl-[20px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[var(--background-halfwhite)] ">
            <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
          </div>
        </div>

        <div className="p-[1px] bg-[var(--background-halfwhite)] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] ">
          <div
            className="relative hero-bg-circle flex flex-col items-center justify-center w-full overflow-hidden pt-10 pb-16 md:py-14 lg:pt-14 lg:pb-24 bg-[var(--background-halfwhite)] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px] "
            style={
              {
                ["--hero-bg" as any]:
                  "url('/assets/home-page-images/hero-bg.webp')",
              } as React.CSSProperties
            }
          >
            <div className="relative z-[2] w-full wrapper px-4">
              <div className="text-center mb-12">
                <h1 className="text-center xl:text-[64px] md:text-5xl  text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest'] lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                  Checkout
                </h1>
                <Paragraph>
                  Please review your selection carefully and complete your
                  purchase so we can proceed with the next steps.
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-[1240px] mx-auto">
                {/* Left Column */}
                <div className="lg:col-span-6 p-6 bg-white/25 border border-white backdrop-blur-md rounded-[16px] lg:rounded-[32px] space-y-8">
                  {/* Your Selected Plan */}
                  <div className="">
                    <h2 className="md:text-[32px] text-2xl md:leading-[130%] leading-[135%] font-medium text-[var(--text-dark)] mb-6 font-['Onest']">
                      Your Selected Plan
                    </h2>
                    <div className="bg-white rounded-[30px] px-5 py-4">
                      <div className="flex justify-start items-start mb-4">
                        <div>
                          <h3 className="text-2xl leading-[135%] font-semibold text-[var(--text-dark)] font-['Onest']">
                            {selectedPlan.name}
                          </h3>
                          <p className="text-sm leading-[170%] text-[var(--text-grey)] font-normal mt-1 font-['Onest']">
                            {selectedPlan.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-baseline gap-1 ">
                          <span className="text-[32px] leading-[130%] font-semibold text-[var(--primary-teal)] font-['Onest']">
                            ${basePrice}
                          </span>
                          <span className="text-[var(--text-grey)] text-sm leading-[170%] font-normal font-['Onest']">
                            /month
                          </span>
                        </div>
                        <button
                          onClick={() => router.push("/pricing")}
                          className="text-[var(--primary-purple)] cursor-pointer text-base leading-[170%] font-semibold  font-['Onest']"
                        >
                          Change Plan
                        </button>
                      </div>

                      <ul className="grid grid-cols-1 gap-y-3 gap-x-4">
                        {selectedPlan.features.map(
                          (feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-sm leading-[140%] text-[var(--text-light-alt)] font-['Onest']"
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
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white"></div>

                  {/* Add-ons Section */}
                  <div className="">
                    <h2 className="md:text-[32px] text-2xl md:leading-[130%] leading-[135%] font-medium text-[var(--text-dark)] mb-6 font-['Onest']">
                      Add-ons
                    </h2>
                    <div className="space-y-4 bg-white rounded-[24px] p-6">
                      {ADD_ONS_DATA.map((addOn) => (
                        <div
                          key={addOn.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            {/* <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center shadow-sm">
                              <PricingPageIcon
                                name={addOn.icon as any}
                                size={24}
                              />
                            </div> */}
                            <div>
                              <h3 className="font-medium lg:text-xl text-lg leading-[140%] text-[var(--text-dark)] font-['Onest']">
                                {addOn.name}
                              </h3>
                              <p className="text-base leading-[170%] font-normal text-[var(--text-grey)] font-['Onest']">
                                +${addOn.price} each
                              </p>
                            </div>
                          </div>

                          {addOn.type === "quantity" ? (
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() =>
                                  handleQuantityChange(addOn.id, -1)
                                }
                                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[var(--primary-purple)] hover:text-[var(--primary-purple)] transition-colors bg-white"
                              >
                                <FaMinus size={12} />
                              </button>
                              <span className="font-bold text-lg min-w-[20px] text-center font-['Onest']">
                                {quantities[addOn.id]}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(addOn.id, 1)
                                }
                                className="w-8 h-8 rounded-full bg-[var(--primary-purple)] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={toggles[addOn.id]}
                                onChange={() => handleToggleChange(addOn.id)}
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary-purple)]"></div>
                            </label>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Billing Summary */}
                <div className="lg:col-span-6">
                  <div className="p-6 bg-white/25 border border-white backdrop-blur-md rounded-[16px] lg:rounded-[32px] sticky top-24">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="md:text-[32px] text-2xl md:leading-[130%] leading-[135%] font-medium text-[var(--text-dark)] mb-6 font-['Onest']">
                        Billing Summary
                      </h2>
                    </div>

                    <div className="flex gap-2 p-1 lg:p-2 mb-8 border border-transparent rounded-full bg-white">
                      {/* Monthly Button */}
                      <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`tab-btn flex-1 cursor-pointer py-2 lg:py-[14px] 
          text-sm lg:text-base font-['Onest'] font-semibold border rounded-full 
          transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-purple)] ${
            billingCycle === "monthly"
              ? "text-white bg-[var(--primary-purple)] border-[var(--primary-purple)]"
              : "text-gray-800 bg-transparent border-transparent hover:text-white hover:bg-[var(--primary-purple)] hover:border-[var(--primary-purple)]"
          }`}
                        aria-pressed={billingCycle === "monthly"}
                      >
                        Monthly
                      </button>

                      {/* Yearly Button with Badge */}
                      <div className="relative flex-1">
                        <button
                          onClick={() => setBillingCycle("yearly")}
                          className={`tab-btn relative cursor-pointer w-full py-2 lg:py-3.5
           text-sm lg:text-base font-['Onest'] font-semibold border rounded-full 
            transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-purple)] ${
              billingCycle === "yearly"
                ? "text-white bg-[var(--primary-purple)] border-[var(--primary-purple)]"
                : "text-gray-800 bg-transparent border-transparent hover:text-white hover:bg-[var(--primary-purple)] hover:border-[var(--primary-purple)]"
            }`}
                          aria-pressed={billingCycle === "yearly"}
                        >
                          Yearly
                        </button>

                        {/* Discount Banner - Responsive Design */}
                        <div className="absolute lg:right-0 right-[16px] md:right-[10px] top-[-60px] md:top-[-80px] lg:top-[-100px] translate-x-2 flex flex-col gap-2 md:gap-4 items-center">
                          <div className="flex flex-col items-center mr-[-20px] md:mr-0 lg:mr-5 md:gap-1">
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
                                  "polygon(0% 26.57%, 97.20% 0%, 89.72% 37.77%, 99.42% 70.89%, 2.23% 97.38%, 9.7% 59.65%, 0% 26.57%)",
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
                            className="absolute  right-[-40px] bottom-[-30px] md:bottom-[-30px] lg:bottom-[-40px] w-10 md:w-16 lg:w-[78px] rotate-[-90deg]"
                          />
                        </div>
                      </div>
                    </div>

                <div className="py-5 px-4 bg-white rounded-2xl">
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-[var(--text-dark)] text-xl font-medium leading-[140%] font-['Onest']">
                          {selectedPlan.name} Plan
                        </span>
                        <span className="text-[var(--text-dark)] text-xl font-medium leading-[140%] font-['Onest']">
                          ${basePrice}
                        </span>
                      </div>

                      {billingCycle === "yearly" && (
                        <div className="bg-[var(--primary-purple)]/5 p-3 rounded-xl border border-[var(--primary-purple)]/10">
                          <p className="text-[var(--primary-purple)] text-xs font-medium flex items-center gap-2 font-['Onest']">
                            <span>✨</span> You save ${savings} vs monthly
                            billing
                          </p>
                        </div>
                      )}

                      <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-[var(--text-dark)] text-xl font-medium leading-[140%] font-['Onest'] mb-4">
                          Selected Add-ons
                        </h3>
                        <div className="space-y-3">
                          {ADD_ONS_DATA.filter((addon) =>
                            addon.type === "quantity"
                              ? quantities[addon.id] > 0
                              : toggles[addon.id],
                          ).map((addon) => (
                            <div
                              key={addon.id}
                              className="flex justify-between items-center text-sm"
                            >
                              <span className="text-[var(--text-dark)] text-lg leading-[170%] font-normal font-['Onest']">
                                {addon.name}{" "}
                                {addon.type === "quantity"
                                  ? `× ${quantities[addon.id]}`
                                  : ""}
                              </span>
                              <span className="text-[var(--text-dark)] font-['Onest']">
                                $
                                {addon.type === "quantity"
                                  ? quantities[addon.id] * addon.price
                                  : addon.price}
                              </span>
                            </div>
                          ))}
                          {Object.values(quantities).every((v) => v === 0) &&
                            !Object.values(toggles).some((v) => v) && (
                              <p className="text-gray-400 text-xs italic font-['Onest']">
                                No add-ons selected
                              </p>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mb-8">
                      <div className="flex justify-between items-end">
                        <span className="text-[var(--text-dark)] text-xl font-medium leading-[140%] font-['Onest']">
                          Total
                        </span>
                        <div className="text-right">
                          <div className="flex items-baseline justify-end gap-1">
                            <span className="md:text-[32px] text-2xl leading-[130%] font-semibold text-[var(--primary-purple)] font-['Onest']">
                              ${totalMonthly}
                            </span>
                            <span className="text-[var(--text-grey)] text-sm leading-[170%] font-normal font-['Onest']">
                              /month
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-[var(--primary-teal)] hover:bg-[var(--primary-teal-dark)] text-white rounded-full font-bold transition-all shadow-lg active:scale-[0.98] font-['Onest']">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
};

export default CheckoutPage;
