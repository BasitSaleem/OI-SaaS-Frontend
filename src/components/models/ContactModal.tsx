"use client";
import React, { useState } from "react";
import Modal from "./ModalLayout";
import MainHeading from "../pages/typography/MainHeading";
import Paragraph from "../pages/typography/Paragraph";
import InputField from "../inputField/InputField";
import SelectField from "../inputField/SelectField";
import ButtonSm from "../button/ButtonSm";
import PhoneInputField from "../inputField/PhoneInputField";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState<string | undefined>();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const companySizeOptions = [
    { label: "Less than 5 employees", value: "Less than 5 employees" },
    { label: "5-20 employees", value: "5-20 employees" },
    { label: "20-50 employees", value: "20-50 employees" },
    { label: "50-250 employees", value: "50-250 employees" },
    { label: "More than 250 employees", value: "More than 250 employees" },
  ];

  const planOptions = [
    { label: "Free Plan", value: "free" },
    { label: "Pro Plan", value: "pro" },
    { label: "Enterprise", value: "enterprise" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Modal Form submitted");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-start">
        <MainHeading className="mb-5">Contact Us</MainHeading>
        <Paragraph className="text-center text-[#434242] hidden md:flex">
          We'd love to hear from you! Our team is available to answer any
          questions you may have regarding features, pricing or help installing
          your POS system. Complete the form below and one of our experts will
          call you soon to offer individualized help and guide you on how to get
          started with Owners Inventory.
        </Paragraph>

        <div
          className="bg-white  w-full max-w-[768px] h-auto mt-5 rounded-[20px] lg:rounded-[30px] p-4 md:p-8"
          style={{ boxShadow: "2px 2px 22px 0px rgba(0,0,0,0.15)" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
              <InputField
                label="Full Name"
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
              <InputField
                label="Company Email"
                type="email"
                placeHolder="Enter Your Company Email"
                // required
              />
              <InputField
                label="Company Name"
                placeHolder="Enter Your Company Name"
                // required
              />
              <SelectField
                label="Company Size"
                placeholder="Select Your Company Size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                options={companySizeOptions}
                // required
              />
              <SelectField
                label="Select Your Plan"
                placeholder="Select Your Plan"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                options={planOptions}
                // required
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <ButtonSm
                url="#"
                className="w-full md:w-fit"
                text="Send a request"
                bgColor="[#795CF5]"
                textColor="white"
                isBorder
                paddingLg="lg:px-[160px] lg:py-5"
                type="submit"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
