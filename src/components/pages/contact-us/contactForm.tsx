"use client";

import React, { useState } from "react";
import PhoneInputField from "@/components/inputField/PhoneInputField";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/inputField/SelectField";
import TextArea from "@/components/inputField/TextArea";
import ButtonSm from "@/components/button/ButtonSm";
import { HiOutlineShieldCheck } from "react-icons/hi";
import Paragraph from "../typography/Paragraph";

const ContactForm = () => {
  const [value, setValue] = useState<string | undefined>();
  const [selected, setSelected] = useState("");

  const companySizeOptions = [
    { label: "Less than 5 employees", value: "Less than 5 employees" },
    { label: "5-20 employees", value: "5-20 employees" },
    { label: "20-50 employees", value: "20-50 employees" },
    { label: "50-250 employees", value: "50-250 employees" },
    { label: "More than 250 employees", value: "More than 250 employees" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.08)] w-full max-w-[700px] mx-auto lg:ml-auto">
      <div className="text-center mb-10">
        {/* <h2 className="lg:text-[32px] sm:text-[28px] text-2xl leading-[130%] font-medium font-['onest'] text-[var(--text-dark)] mb-6">
                    Reach Out to Us
                </h2> */}
        {/* <Paragraph >
                    We’ll respond promptly and help you achieve your goals. For general inquiries, support, or assistance, contact us via the options below:
                </Paragraph> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <InputField
            label="Name"
            placeHolder="Enter Your Name"
            // required
          />
          <PhoneInputField
            label="Phone Number"
            placeHolder="Enter Your Phone Number"
            value={value}
            onChange={setValue}
            // required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <InputField
            label="Email Address"
            placeHolder="Enter Your Email Address"
            // required
            type="email"
          />
          <InputField
            label="Company"
            placeHolder="Enter Your Company Name"
            // required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-6">
          <div className="">
            <SelectField
              label="Company Size"
              placeholder="Select Your Company Size"
              //   required
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              options={companySizeOptions}
              //   error={selected === "" ? "Please select a plan" : ""}
            />
          </div>
          <InputField
            label="Subject"
            placeHolder="Enter the Subject of Your Message"
            // required
          />
        </div>

        <TextArea
          label="Message"
          placeHolder="How can we assist you today?"
          // required
          rows={5}
        />

        <div className="pt-2">
          <ButtonSm
            text="Send a request"
            bgColor="[#795CF5]"
            textColor="white"
            isBorder
            className="w-full "
            paddingLg="lg:py-5"
            onClick={() => {}}
            type="submit"
          />
        </div>

        <div className="border-t border-[#F2F2F2] pt-8 mt-4 flex items-start gap-3">
          <HiOutlineShieldCheck className="text-[#1AD1B9] text-2xl flex-shrink-0 mt-0.5" />
          <p className="text-[#666666] text-base leading-[170%] font-['Onest']">
            <span className="font-semibold text-[#231F20]">
              Privacy Notice:
            </span>{" "}
            We value your privacy. The information you provide to us will not be
            used in any other way other than to answer your query.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
