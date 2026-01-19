"use client";
import { useState } from "react";
import { companyItems } from "./dropdownItems/Companylist";
import {
  featuresItems,
  featuresDetailsMap,
  FeatureList,
  featureCategories,
} from "./dropdownItems/Featureslist";
import {
  industriesItems,
  industryCategories,
  industryDetailsMap,
  IndustryList,
} from "./dropdownItems/IndustryItemslist";
import {
  resourcesItems,
  resourcesDetailsMap,
} from "./dropdownItems/ResourceItemlist";
import NavDropdown from "./NavDropdown";
import Image from "next/image";
import "../../../app/globals.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavItems = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const open = (key: string) => setOpenMenu(key);
  const close = () => setOpenMenu(null);
  const toggle = (key: string) =>
    setOpenMenu((curr) => (curr === key ? null : key));

  const [selectedFeatureKey, setSelectedFeatureKey] = useState("pos");
  const [selectedIndustryKey, setSelectedIndustryKey] = useState("retailer");
  const [selectedResourceKey, setSelectedResourceKey] =
    useState<string>("learning");

  // Add new state for selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "sales-marketing",
  );

  const [selectedIndustryCategory, setselectedIndustryCategory] = useState<
    string | null
  >("retailer");

  const router = useRouter();

  return (
    <div className="bg-white lg:px-1 lg:py-1 xl:px-3 xl:py-1.5 shadow-[0_0_20px_0_#0000001A] rounded-full inventory-menu lg:flex justify-center w-auto">
      <ul className="hidden lg:flex items-center justify-center md:gap-1 lg:gap-3 w-auto">
        {/* FEATURES DROPDOWN */}
        <NavDropdown
          label="Features"
          isOpen={openMenu === "features"}
          onOpen={() => {
            open("features");
            // Set default category when opening
            if (!selectedCategory) {
              setSelectedCategory("sales-marketing");
            }
          }}
          onClose={close}
          onToggle={() => toggle("features")}
        >
          <div className="h-2 bg-transparent"></div>
          <div className="bg-white grid grid-cols-12 gap-6 mt-2 mx-auto xl:w-[1220px] lg:w-[950px] md:w-[700px] rounded-[30px] shadow-[0_0_20px_0_#0000001A] h-auto lg:min-h-[450px] overflow-y-hidden overflow-x-hidden">
            {/* Left Section (3/12) - Categories */}
            <div className="lg:col-span-3 px-4 py-6 bg-[#F6F4FE]">
              <div className="space-y-1 ">
                {featureCategories.map((category) => {
                  const categoryFeatures = featuresItems.filter(
                    (item) => item.category === category.id,
                  );

                  if (categoryFeatures.length === 0) return null;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      // onMouseEnter={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? "bg-white border border-transparent text-[#795CF5]"
                          : "hover:bg-[white] text-[#16151C]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-medium font-['Onest']">
                          {category.title}
                        </span>
                        {/* <span className="text-xs text-gray-500 mt-1">
                    {categoryFeatures.length} features
                  </span> */}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Section (6/12) - Features within Selected Category */}
            <div className="lg:col-span-6 px-4 py-6 relative">
              <div className="w-[150px] h-[150px] rotate-[-26deg] bg-[#795CF5] absolute blur-[150px] bottom-0 right-20"></div>
              <div className="w-[150px] h-[150px] rotate-[-26deg] bg-[#1AD1B9] absolute blur-[150px] bottom-0 left-10"></div>
              {selectedCategory && (
                <div>
                  <h3 className="text-xl leading-[140%] font-semibold font-['Onest'] text-[#464253] mb-4">
                    {
                      featureCategories.find((c) => c.id === selectedCategory)
                        ?.title
                    }
                  </h3>

                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
                    {featuresItems
                      .filter((item) => item.category === selectedCategory)
                      .map((item) => (
                        <Link
                          key={item.key}
                          href={`/features/${item.key.toLowerCase()}`}
                          className={`relative flex items-center gap-3 px-5 py-4 border rounded-xl ${
                            selectedFeatureKey === item.key
                              ? "border-[#795CF5] bg-purple-50 "
                              : "border-[#D9D9D9] hover:border-[#795CF5]"
                          } hover:bg-gray-50 transition-all duration-200`}
                          onMouseEnter={() => setSelectedFeatureKey(item.key)}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                          <span
                            className={`text-sm font-['Onest'] text-left text-[#231F20]
                    ${
                      selectedFeatureKey === item.key
                        ? "font-bold"
                        : "font-medium"
                    }
                    `}
                          >
                            {item.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Section (3/12) - Details Panel */}
            <div className="px-4 py-6 hidden md:block lg:col-span-3">
              <div
                className=" border-l max-h-[400px] min-h-[400px] border-[#D9D9D9] w-full pl-4  overflow-y-auto overflow-x-hidden 
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9]
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-[#B0B0B0]
  [scrollbar-width:thin]
  [scrollbar-color:#D9D9D9_transparent]"
              >
                <p className="mb-2 text-xs font-bold text-[#231F20]">
                  {
                    featuresItems.find(
                      (item) => item.key === selectedFeatureKey,
                    )?.title
                  }
                </p>

                <span className="text-xs mb-6 leading-[100%] font-['Onest'] text-[#666666] font-normal">
                  Key Features
                </span>

                <FeatureList items={featuresDetailsMap[selectedFeatureKey]} />
              </div>
            </div>
          </div>
        </NavDropdown>

        {/* INDUSTRIES DROPDOWN */}
        {/* INDUSTRIES DROPDOWN */}
        <NavDropdown
          label="Industries"
          isOpen={openMenu === "industries"}
          onOpen={() => {
            open("industries");
            // Set default category when opening
            if (!selectedIndustryCategory) {
              setselectedIndustryCategory("retailer");
            }
            // Also set default industry key
            if (!selectedIndustryKey) {
              setSelectedIndustryKey("bakery-pos");
            }
          }}
          onClose={close}
          onToggle={() => toggle("industries")}
        >
          <div className="h-2 bg-transparent"></div>
          <div className="bg-white grid grid-cols-12 gap-6 mt-2 mx-auto xl:w-[1220px] lg:w-[950px] md:w-[700px] rounded-[30px] shadow-[0_0_20px_0_#0000001A] h-auto lg:min-h-[450px] overflow-y-hidden overflow-x-hidden">
            {/* Left Section (3/12) - Categories */}
            <div className="lg:col-span-3 px-4 py-6 bg-[#F6F4FE]">
              <div className="space-y-1">
                {industryCategories.map((category) => {
                  const categoryIndustries = industriesItems.filter(
                    (item) => item.category === category.id,
                  );

                  if (categoryIndustries.length === 0) return null;

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setselectedIndustryCategory(category.id);
                        // Set the first item in this category as selected
                        const firstItem = categoryIndustries[0];
                        if (firstItem) {
                          setSelectedIndustryKey(firstItem.key);
                        }
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                        selectedIndustryCategory === category.id
                          ? "bg-white border border-transparent text-[#795CF5]"
                          : "hover:bg-[white] text-[#16151C]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-medium font-['Onest']">
                          {category.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Section (6/12) - Industries within Selected Category */}
            <div className="lg:col-span-6 px-4 py-6 relative">
              <div className="w-[150px] h-[150px] rotate-[-26deg] bg-[#795CF5] absolute blur-[150px] bottom-0 right-20"></div>
              <div className="w-[150px] h-[150px] rotate-[-26deg] bg-[#1AD1B9] absolute blur-[150px] bottom-0 left-10"></div>
              {selectedIndustryCategory && (
                <div>
                  <h3 className="text-xl leading-[140%] font-semibold font-['Onest'] text-[#464253] mb-4">
                    {
                      industryCategories.find(
                        (c) => c.id === selectedIndustryCategory,
                      )?.title
                    }
                  </h3>

                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
                    {industriesItems
                      .filter(
                        (item) => item.category === selectedIndustryCategory,
                      )
                      .map((item) => (
                        <Link
                          key={item.key}
                          href={`/industries/${item.key.toLowerCase()}`}
                          className={`relative flex items-center gap-3 px-5 py-4 border rounded-xl ${
                            selectedIndustryKey === item.key
                              ? "border-[#795CF5] bg-purple-50"
                              : "border-[#D9D9D9] hover:border-[#795CF5]"
                          } hover:bg-gray-50 transition-all duration-200`}
                          onMouseEnter={() => setSelectedIndustryKey(item.key)}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                          <span
                            className={`text-sm font-['Onest'] text-left text-[#231F20]
                      ${
                        selectedIndustryKey === item.key
                          ? "font-bold"
                          : "font-medium"
                      }
                    `}
                          >
                            {item.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Section (3/12) - Details Panel */}
            <div className="px-4 py-6 hidden md:block lg:col-span-3">
              <div
                className="border-l max-h-[400px] min-h-[400px] border-[#D9D9D9] w-full pl-4 overflow-y-auto overflow-x-hidden 
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#B0B0B0]
          [scrollbar-width:thin]
          [scrollbar-color:#D9D9D9_transparent]"
              >
                <p className="mb-2 text-xs font-bold text-[#231F20]">
                  {
                    industriesItems.find(
                      (item) => item.key === selectedIndustryKey,
                    )?.title
                  }
                </p>

                <span className="text-xs mb-6 leading-[100%] font-['Onest'] text-[#666666] font-normal">
                  Key Features
                </span>

                {/* FIXED: Use IndustryList instead of FeatureList */}
                <IndustryList
                  items={industryDetailsMap[selectedIndustryKey] || []}
                />
              </div>
            </div>
          </div>
        </NavDropdown>

        {/* PRICING LINK */}
        <li>
          <a
            href="/pricing"
            className="flex items-center justify-center gap-3 px-3.5 py-1.5 xl:px-4 xl:py-[9px] lg:text-xs xl:text-sm font-semibold hover:bg-gray-100 hover:border-[#795CF5] text-[#231F20] bg-white border border-[#F3F4F6] rounded-full"
          >
            Pricing
          </a>
        </li>

        {/* RESOURCES DROPDOWN */}
        <NavDropdown
          label="Resources"
          isOpen={openMenu === "resources"}
          onOpen={() => open("resources")}
          onClose={close}
          onToggle={() => toggle("resources")}
        >
          <div className="h-2 bg-transparent"></div>
          <div className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white xl:w-[1220px] lg:w-[950px] md:w-[700px] rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden">
            {/* Left Section */}
            <div
              className={`overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent ${
                resourcesDetailsMap[selectedResourceKey]
                  ? "md:col-span-9 col-span-12"
                  : "col-span-12"
              }`}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {resourcesItems.map((item) => (
                  <div
                    key={item.key} // ✅ key on outer div
                    className={`flex items-center gap-2 px-3 py-4 border rounded-xl ${
                      selectedResourceKey === item.key
                        ? "border-[#795CF5] bg-gray-100"
                        : "border-[#D9D9D9]"
                    } hover:bg-gray-100`}
                  >
                    <button
                      onClick={() => setSelectedResourceKey(item.key)}
                      className="flex items-center gap-2 w-[80%]"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={16}
                        height={16}
                      />
                      <span className="text-sm font-medium text-left text-[#231F20]">
                        {item.title}
                      </span>
                    </button>
                    <Link
                      href={`/resources/${item.key.toLowerCase()}`}
                      className="w-[20%] border-l-2 flex items-center justify-end border-gray-300"
                    >
                      <Image
                        src="/assets/detail-icon.svg"
                        alt="arrow-up"
                        width={12}
                        height={16}
                        priority
                        className="h-4 w-3"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            {resourcesDetailsMap[selectedResourceKey] && (
              <div className="hidden md:block col-span-3 border-l border-[#D9D9D9] pl-4 overflow-y-auto">
                <p className="mb-4 text-xs font-bold text-[#231F20]">
                  {
                    resourcesItems.find((i) => i.key === selectedResourceKey)
                      ?.title
                  }
                </p>
                <ul className="space-y-0">
                  {resourcesDetailsMap[selectedResourceKey].map((item) => (
                    <li key={item}>
                      {" "}
                      {/* ✅ unique key for each <li> */}
                      <a
                        href="#"
                        className="text-xs font-normal leading-9 text-[#231F20] hover:text-gray-400"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </NavDropdown>

        {/* COMPANY DROPDOWN */}
        <NavDropdown
          label="Company"
          isOpen={openMenu === "company"}
          onOpen={() => open("company")}
          onClose={close}
          onToggle={() => toggle("company")}
        >
          <div className="h-2 bg-transparent"></div>
          <div className="grid grid-cols-12 gap-6 p-10 mt-2 mx-auto bg-white rounded-2xl shadow-[0_0_20px_0_#0000001A] h-[450px] overflow-hidden">
            <div className="overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent col-span-12">
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 content-start">
                {companyItems.map((item) => (
                  <a
                    key={item.title} // ✅ key on outer element
                    href="#"
                    className="flex items-center gap-2 px-4 py-4 border border-[#D9D9D9] rounded-xl hover:bg-gray-100 hover:border-[#795CF5]"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                    <span className="text-xs font-medium text-[#231F20] hover:font-semibold">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </NavDropdown>
      </ul>
    </div>
  );
};

export default NavItems;
