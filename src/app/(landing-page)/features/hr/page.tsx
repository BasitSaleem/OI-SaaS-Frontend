"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/hr-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/hr-whychose.webp";

// 🔥 Dynamic Imports
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection")
);
const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction")
);
const FeaturesTestimonials = dynamic(
  () => import("@/components/pages/features-page/FeaturesTestimonials")
);
const KeyHighlights = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/KeyHighlights")
);
const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS")
);
const SubFeaturesHero = dynamic(
  () => import("@/components/pages/features-page/SubFeaturesHero")
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection")
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase")
);

const hrIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage staff and payroll at multiple retail locations with ease and convenience. You will be able to ensure that the store runs smoothly and that customers experience a high level of customer care on a day-to-day basis.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Monitor all restaurant staff—from chefs to servers—while simplifying shift planning, payroll, and tip distribution to keep your team organized, happy, and focused on delivering top-notch service.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage distribution teams and warehouse employees via a central HR platform. Monitor attendance, shifts, and payroll accurately to ensure your supply chain runs smoothly all the way through.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Maintain precise employee records while tracking work hours, renewals, and training, keeping your pharmacy staff organized, skilled, and fully prepared to serve customers responsibly.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Unify the creative, retail, and logistics teams into a single, seamless HR system. Easily manage designer schedules, store personnel, and seasonal employees, as well as maintain operations in all branches.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Departments, Designations & Payslips Management",
    description:
      "Take control of every department, designation, and payroll information with a single potent human resource management software. The best HR software 2025 will simplify your daily HR tasks.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/payslip-management.webp",
  },
  {
    id: 2,
    title: "Active / Inactive Department Control",
    description:
      "Switch between department status easily to make your HR management system tidy. Pay attention to dynamic teams and ensure transparency throughout the company.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/department-control.webp",
  },
  {
    id: 3,
    title: "Add & Edit Department Options",
    description:
      "Our easy-to-use employee management software enables you to create or update departments in seconds. Created to be precise, fast, and fully controllable.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/add-department-option.webp",
  },
  {
    id: 4,
    title: "Categorized Depth Lists",
    description:
      "See departments in ordered categories such as Finance, Sales, and Services. This organization simplifies navigation in your HR management system.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/categorized-depth.webp",
  },
  {
    id: 5,
    title: "Detailed Designation List",
    description:
      "Browse all designations with key information such as ID, Department, and Status. Organize your team of employees with the best HR management software.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/detailed-designation.webp",
  },
  {
    id: 6,
    title: "Smart Search & Data Export",
    description:
      "Search and find what you need instantly or export data to Excel with a single click. Make your HR reports simple, fast, and trustworthy.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/smart-search-data.webp",
  },
  {
    id: 7,
    title: "Automated Payslip Management",
    description:
      "Create and see pay slips with all the information--salary, deductions and salary. Allow our human resource management system to take care of payroll.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/automated-payslip.webp",
  },
  {
    id: 8,
    title: "Custom Payroll Setup",
    description:
      "Easily set up payroll structures with custom payroll forms and heads. Make sure your policies can be integrated perfectly in the best HR software 2025.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/payrol-setup.webp",
  },
  {
    id: 9,
    title: "Table Controls & Pagination",
    description:
      "Get clear records in tables including pagination and column display. Easily handle employee information within your employee management program.",
    imageSrc:
      "/assets/features-page/human-resource-page/features-section/table-controls.webp",
  },
];

const hrFaqs = [
  {
    id: 1,
    question: "What does the Human Resource feature in Owners Inventory do?",
    answer:
      "It assists you in managing the employee data, attendance, payroll, and performance under a single easy dashboard that saves time and minimizes errors.",
  },
  {
    id: 2,
    question: "Is this HR system suitable for small businesses?",
    answer:
      "Absolutely. Owners Inventory is designed to serve any size of team, be it a small retail store or a large company, and as your company grows, so will your inventory.",
  },
  {
    id: 3,
    question: "Can I manage multiple branches or locations with one account?",
    answer:
      "Yes, it is possible to deal with employees in various branches or locations with a single system, and all data is stored there and is accessible.",
  },
  {
    id: 4,
    question: "Is my employee data secure in the system?",
    answer:
      "Yes. We offer state-of-the-art encryption and secure servers to guarantee that the information belonging to your team remains absolutely safe and confidential.",
  },
  {
    id: 5,
    question:
      "Does the HR feature integrate with other tools in the Owners Inventory?",
    answer:
      "Definitely. It integrates well with inventory, sales, and accounting features and provides you with a total picture of your business activities.",
  },
];

const layoutPatterns = [
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
  {
    className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
    mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
    paddingClass: "px-0",
  },
];

const hrTestimonials = [
  {
    name: "Maryam Ali",
    title: "Inventory Specialist, SmartStock",
    image: "/assets/features-page/testimonial-images/testinomial-girl23.webp",
    text: `Owners Inventory has entirely transformed our approach to staff management. All the payroll, attendance, and department tracking are under one roof. The system is quick, precise and saves us hours a week. It really seems as though we have an additional player on our team that keeps us straight.`,
    // icon: "/assets/review-section/double-coma-icon.svg",
    // color: "#795CF5",
  },
  {
    name: "Hina Shah",
    title: "Business Owner, Shah Retail Co.",
    image: "/assets/features-page/testimonial-images/testinomial-girl24.webp",
    text: `We have tried a number of HR tools previously, but none were as convenient and dependable as Owners Inventory. It is well organised and our non technical staff can easily use it. We have found the best HR management software in it, efficient, clear, and tailored to the actual business needs.`,
    // icon: "/assets/review-section/coma-green.svg",
    // color: "#1AD1B9",
  },
  {
    name: "Omar Hassan",
    title: "Supply Manager, Al Noor Traders",
    image: "/assets/features-page/testimonial-images/testinomial-boy23.webp",
    text: `Owners Inventory provides us with complete control of employee information, payroll, and titles. The best thing about it is that it runs smoothly even when it has many branches. The system of human resource management is a game changer to a growing company.`,
    // icon: "/assets/review-section/double-coma-icon.svg",
    // color: "#795CF5",
  },
  {
    name: "Hassan Ali",
    title: "Operations Director, City Wholesale",
    image: "/assets/features-page/testimonial-images/testinomial-boy24.webp",
    text: `As our business grew, it became difficult to maintain HR activities. Owners Inventory assisted us to have it all in one platform- attendance to payslips. It is safe, adaptable, and quite frankly the best HR software 2025 to handle people and performance jointly.`,
    // icon: "/assets/review-section/coma-green.svg",
    // color: "#1AD1B9",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Smarter HR for Growing Businesses"
        description="Change the way you deal with people using the best HR management software of 2025. Combine performance, payroll, and hiring in a single robust HR managerial system. Empower your company with an employee management software that is designed to expand as your business does."
        // video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Businesses that Grow with Us"
        paragraph="We’re proud to partner with forward-thinking companies like Al-Asif and Bright Home, using Owners Inventory to automate payroll, organize HR tasks, and drive employee efficiency and growth."
      />
      <KeyHighlights
        heading="Features that Set Us Apart"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location."
        cards={[
          {
            icon: "/assets/features-page/human-resource-page/why-chose/hr-solution.svg",
            title: "All-in-One HR Solution",
            description:
              "Hire, payroll, and more, all in one integrated solution.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/easy-to-use.svg",
            title: "Easy to Use",
            description:
              "An easy-to-use and user-friendly interface that can be navigated easily by anyone on your team.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/scalable-for-growth.svg",
            title: "Scalable for Growth",
            description:
              "Created to expand with your business, whether you have 5 employees or 500.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/reliable-support.svg",
            title: "Reliable Support",
            description:
              "Our professional staff is constantly prepared to assist you throughout the process.",
          },
        ]}
        mainImage= {whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Powering People Across Every Industry"
          paragraph="Any business thrives on its people, and Owners Inventory provides you with the means to handle them with ease. Our Human Resource feature is easily adaptable to various industries to help you automate daily operations, keep things under control, and make teams stronger."
          buttonText="Explore All Industries"
          industries={hrIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Build Stronger Teams, Smarter"
        description="Take control of your workforce with tools that simplify hiring, attendance, and payroll — all in one place. Empower your people and let your business grow with confidence."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={hrTestimonials}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Streamline your HR operations and build smarter, more efficient teams with Owners Inventory."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Need to Know"
          paragraph="We understand that deciding on the appropriate HR system is a huge decision; this is why we have simplified it. These are the answers to the most frequently asked questions of our Human Resource feature, so that you know exactly how it helps your business run more smoothly and intelligently."
          faqs={hrFaqs}
        />
      </div>
    </div>
  );
};

export default page;
