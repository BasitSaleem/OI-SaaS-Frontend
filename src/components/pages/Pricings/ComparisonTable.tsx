"use client";
import React, { useCallback, useMemo, useEffect, useState, useRef } from "react";
import { FeatureCategory, PricingPlan } from "./types";
import PricingTabs from "./PricingTabs";
import Tooltip from "@/components/toolTip/Tooltip";
import Image from "next/image";
import { useDevice } from "@/hooks/useDevice";

interface ComparisonTableProps {
  categories: FeatureCategory[];
  tab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
  plans: PricingPlan[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  categories,
  tab,
  onTabChange,
  plans,
}) => {
  const { isMobile: isSmallScreen } = useDevice();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter out custom plans (like "Let's Talk") from the comparison table
  const tablePlans = useMemo(() => plans.filter((p) => !p.isCustom), [plans]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
        setScrollProgress(progress);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      // Initial calculation
      handleScroll();
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isVisible, plans]); // Re-calculate when visibility or plans change

  const renderFeatureValue = useCallback((value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <Image
            src="/assets/owners-inventory-pricing/compare-feature/tick-icon.svg"
            className="xl:h-[28px] md:h-6 md:w-[18px] w-3 h-[24px]"
            alt="Tick icon"
            width={28}
            height={28}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-gray-400">—</span>
        </div>
      );
    }
    return <div className="text-center">{value}</div>;
  }, []);

  return (
    <section className="compare-section mt-20 md:mt-28 lg:mt-[100px]">
      <div className="wrapper mx-auto flex items-center justify-center">
        <button
          onClick={toggleVisibility}
          className="compare-toggle flex gap-5 items-center justify-center px-12 py-5 bg-[var(--primary-purple)] text-white rounded-full text-base leading-[170%] font-semibold font-['Onest'] w-fit whitespace-nowrap"
        >
          Compare Feature List
          <Image
            src="/assets/owners-inventory-pricing/compare-feature/arrow-down.svg"
            alt="Dropdown icon"
            width={20}
            height={20}
            className={`arrow-down ${isVisible ? "hidden" : "block"}`}
          />
          <Image
            src="/assets/owners-inventory-pricing/compare-feature/arrow-up.svg"
            alt="Dropdown icon"
            width={20}
            height={20}
            className={`arrow-up ${isVisible ? "block" : "hidden"}`}
          />
        </button>
      </div>

      <div
        className={`compare-content pt-10 md:pt-16 lg:pt-20 wrapper mx-auto ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <div className="w-full hidden lg:flex  items-center justify-end mb-10">
          <PricingTabs
            activeTab={tab}
            onTabChange={onTabChange}
            variant="toggle"
          />
        </div>

        {/* Progress Bar for Mobile/Tablet */}
        <div className="lg:hidden  w-full flex md:flex-row flex-col gap-4 md:gap-2 items-center justify-center  w-full mb-6 ">
          <div className="h-1.5 md:w-2/3  w-full md:order-1 order-2 bg-[var(--primary-purple)]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--primary-purple)] transition-all duration-200 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className=" flex md:w-1/2 md:order-2 order-1 w-full items-center justify-end ">
            <PricingTabs
              activeTab={tab}
              onTabChange={onTabChange}
              variant="toggle"
            />
          </div>
        </div>

        <div className="flex w-full overflow-hidden rounded-[30px] bg-gradient-to-r from-[var(--primary-teal)] to-[var(--primary-purple)] p-[2px]">
          <div className="flex w-full overflow-hidden bg-white rounded-[28px]">
            {/* Left sticky column with feature names */}
            <div className="bg-white sticky left-0 z-30 w-6/12 md:w-4/12 lg:w-3/12 border-r border-[var(--primary-teal)] shrink-0">
              <table className="table-auto w-full border-collapse">
                {categories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <thead>
                      <tr>
                        <th className="text-center md:h-[150px] h-[110px] p-[7.8px] md:p-[15.8px]">
                          <div className="flex flex-col capitalize items-center font-['onest'] text-sm md:text-base lg:text-lg bg-[var(--background-halfwhite)] font-semibold text-[var(--text-dark)] rounded-[10px] justify-center gap-[6px] md:h-[150px] h-[110px] p-2 md:p-4">
                            {category.name.toLowerCase()}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} style={{ height: "68px" }}>
                          <td
                            className={`
                               px-4 text-left font-['onest'] text-sm md:text-base lg:text-lg leading-6
                                text-[var(--text-dark)] font-normal 
                                border-b border-[var(--primary-teal)]
                              `}
                            style={{ height: "68px", verticalAlign: "middle" }}
                          >
                            <div className="flex flex-col items-start justify-center gap-1">      
                              {/* Title + Tooltip */}
                              <div className="flex items-center gap-3">
                                <span>
                                  {feature.name}
                                </span>

                                {feature.info && (
                                  <div className="relative group inline-block">
                                    <Image
                                      src="/assets/owners-inventory-pricing/compare-feature/info-icon.svg"
                                      className="md:h-3 md:w-3 h-[10px] w-[10px] cursor-pointer"
                                      alt="Info Icon"
                                      width={12}
                                      height={12}
                                    />
                                    <Tooltip
                                      text={feature?.infoText}
                                      isComparisonToolTip
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Subtitle */}
                              {feature.name === "Standard Reports" && (
                                <span className="text-[9px] sm:text-xs lg:text-sm xl:text-base text-[var(--text-dark)]">
                                  (Sales, Purchases, Inventory)
                                </span>
                              )}

                              {feature.name === "Advanced Reports" && (
                                <span className="text-[9px] sm:text-xs lg:text-sm xl:text-base text-[var(--text-dark)]">
                                  (Dashboards, Inventory Aging)
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                ))}
              </table>
            </div>

            {/* Right scrollable column with pricing plans */}
            <div
              ref={scrollRef}
              className="overflow-x-auto w-6/12 md:w-8/12 lg:w-9/12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex min-w-max">
                {tablePlans.map((plan, planIndex) => {
                  // decide which price to show
                  const displayPrice =
                    tab === "yearly"
                      ? (plan.yearlyPrice ?? plan.price)
                      : plan.price;

                  return (
                    <div
                      key={plan.id}
                      className={`w-[50vw] ${tablePlans.length === 2 ? "md:w-1/2" : "md:w-1/3"} flex-shrink-0 snap-start`}
                    >
                      {categories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          {/* Plan header */}
                          <div
                            className={`p-2 md:p-4 ${
                              planIndex < tablePlans.length - 1
                                ? "border-r"
                                : ""
                            }`}
                            style={{ borderColor: plan.color }}
                          >
                            <div
                              className="flex flex-col items-center rounded-[10px] justify-center gap-[6px] md:h-[150px] h-[110px] p-2 md:p-4"
                              style={{ backgroundColor: plan.bgColor }}
                            >
                              <p className="text-sm md:text-base lg:text-lg text-[var(--text-dark)] font-semibold leading-[100%] font-['Onest']">
                                {plan.name}
                              </p>
                              <p
                                className="text-base md:text-lg lg:text-xl font-bold leading-[100%] font-['Onest']"
                                style={{ color: plan.color }}
                              >
                                {displayPrice === 0
                                  ? "Free"
                                  : `$${displayPrice}`}
                                <span className="text-xs">
                                  {displayPrice === 0
                                    ? ""
                                    : tab === "yearly"
                                      ? "/month"
                                      : "/month"}
                                </span>
                              </p>
                              <a
                                href="#"
                                className="inline-block text-center w-full items-center justify-center px-6 md:px-[26px] lg:px-[26px] py-2 md:py-2 text-[10px] md:text-xs leading-[100%] font-semibold text-white whitespace-nowrap border border-transparent rounded-full font-['Onest'] mt-1 hover:bg-transparent transition-all"
                                style={
                                  {
                                    backgroundColor: plan.color,
                                    "--hover-border-color": plan.color,
                                    "--hover-text-color": plan.color,
                                  } as React.CSSProperties
                                }
                                onMouseEnter={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.backgroundColor = "transparent";
                                  target.style.borderColor = plan.color;
                                  target.style.color = plan.color;
                                }}
                                onMouseLeave={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.backgroundColor = plan.color;
                                  target.style.borderColor = "transparent";
                                  target.style.color = "white";
                                }}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>

                          {/* Feature rows */}
                          {category.features.map((feature, featureIndex) => {
                            const featureValue =
                              planIndex === 0
                                ? feature.basic
                                : planIndex === 1
                                  ? feature.standard
                                  : planIndex === 2
                                    ? feature.professional
                                    : feature.premium;

                            const isAddon =
                              typeof featureValue === "string" &&
                              featureValue.includes("(Add-on)");
                            const cleanValue = isAddon
                              ? featureValue.replace("(Add-on)", "").trim()
                              : featureValue;

                            return (
                              <div
                                key={featureIndex}
                                className={`py-5 text-center text-sm md:text-base xl:text-lg leading-6 text-[var(--text-dark)] font-normal px-2 ${planIndex < tablePlans.length - 1 ? "border-r" : ""}`}
                                style={{
                                  height: "68px",
                                  borderBottom: isAddon
                                    ? "2px solid var(--addon-border)"
                                    : `1px solid ${plan.color}`,
                                  borderRightColor: plan.color,
                                  borderRight: isAddon
                                    ? "2px solid var(--addon-border)"
                                    : `1px solid ${plan.color}`,
                                  borderLeft: isAddon
                                    ? "2px solid var(--addon-border)"
                                    : "none",
                                  borderTop: isAddon
                                    ? "2px solid var(--addon-border)"
                                    : "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  zIndex: isAddon ? 10 : 1,
                                  backgroundColor: isAddon
                                    ? "var(--addon-bg)"
                                    : "transparent",
                                }}
                              >
                                {isAddon && (
                                  <div
                                    className="absolute -top-[16px] -right-[30px] rotate-3 z-20 w-[80px] h-[26px] overflow-visible"
                                    style={{
                                      clipPath:
                                        "polygon(0px 6.9081px, 77.7857px 0px, 71.8021px 9.8317px, 79.5679px 18.4496px, 1.7823px 25.3411px, 7.7659px 15.5185px, 0px 6.9081px)",
                                      backgroundColor: "var(--addon-tag-bg)",
                                    }}
                                  >
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-[12px] rotate-[-5deg] font-bold text-center leading-none">
                                      Add-on
                                    </div>
                                  </div>
                                )}

                                {isAddon ? (
                                  <div className="bg-[var(--addon-light-bg)] text-[var(--addon-border)] px-4 py-1.5 rounded-full text-sm font-semibold border border-[var(--addon-border)]/20 shadow-sm">
                                    {cleanValue}
                                  </div>
                                ) : (
                                  renderFeatureValue(featureValue)
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
