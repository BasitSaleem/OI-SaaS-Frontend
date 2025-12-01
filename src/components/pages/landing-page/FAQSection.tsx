"use client";
import { useState } from "react";
import Image from "next/image";
import "../../../app/globals.css";
import ButtonLg from "@/components/button/ButtonLg";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FAQ[];
  heading?: string;
  paragraph?: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonHasBorder?: boolean;
  defaultOpenIndex?: number;
  showButton?: boolean;
}

const defaultFaqs: FAQ[] = [
  {
    question: "What can I manage with Owners Inventory?",
    answer:
      "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store.",
  },
  {
    question: "Does the system support multi-location inventory?",
    answer:
      "Yes, Owners Inventory supports multi-location inventory management. You can track stock across multiple stores or warehouses from a single dashboard.",
  },
  {
    question: "Can I create an online store with this platform?",
    answer:
      "Yes, Owners Inventory includes a fully integrated online store builder that syncs seamlessly with your inventory and point-of-sale system.",
  },
  {
    question: "Is there a built-in POS system?",
    answer:
      "Yes, Owners Inventory comes with a built-in POS system that works both online and offline, allowing you to process in-store sales efficiently.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "You can get started in minutes. Our setup process is designed to be quick and intuitive, with guided onboarding to help you import your inventory and configure your settings.",
  },
];

export default function FaqSection({
  faqs = defaultFaqs,
  heading = "Everything You Were About to Ask",
  paragraph = "We've compiled the most common questions about Owners Inventory — from setup and features to pricing and support. If you're still unsure, our team is here to help.",
  buttonText = "Start Now",
  buttonUrl = "#",
  buttonBgColor = "#1AD1B9",
  buttonTextColor = "white",
  buttonHasBorder = true,
  defaultOpenIndex = 0,
  showButton = true,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wrapper">
      <div className="rounded-[20px] lg:rounded-[40px] bg-[#F3F4F6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-10 md:gap-[100px] lg:gap-12 w-full px-5 md:px-[77px] lg:px-[87px] py-10 md:py-[58px] lg:py-[60px]">
          {/* Left Accordion Cards */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-6 rounded-[20px] bg-white overflow-hidden"
              >
                <button
                  type="button"
                  className="accordion-toggle flex items-center justify-between w-full p-5 md:px-6 md:py-4 text-left font-medium focus:outline-none rounded-[20px] transition-colors duration-300"
                  onClick={() => toggle(index)}
                >
                  <span
                    className={`w-full max-w-[90%] text-sm md:text-xl leading-5 md:leading-9 font-onest transition-colors duration-300
                      ${openIndex === index ? "text-[var(--primary-purple)]" : "text-[var(--text-dark)]"}
                    `}
                  >
                    {faq.question}
                  </span>
                  <span className={openIndex === index ? "hidden" : "block"}>
                    <Image
                      src="/assets/plus-icon.svg"
                      alt="Plus-icon"
                      width={24}
                      height={24}
                      priority
                    />
                  </span>
                  <span className={openIndex === index ? "block" : "hidden"}>
                    <Image
                      src="/assets/minus-icon.svg"
                      alt="Minus-icon"
                      width={24}
                      height={24}
                      priority
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    px-5 text-xs md:text-base text-[var(--text-dark)]
                    ${openIndex === index ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-start justify-start text-left">
            <MainHeading className="mb-5 lg:mb-10">
              {heading}
            </MainHeading>
            <Paragraph className="mb-8 md:mb-5 xl:mb-10 text-[var(--text-dark)]">
              {paragraph}
            </Paragraph>
            
            {showButton && (
              <ButtonLg
                url={buttonUrl}
                text={buttonText}
                bgColor={buttonBgColor}
                textColor={buttonTextColor}
                isBorder={buttonHasBorder}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}