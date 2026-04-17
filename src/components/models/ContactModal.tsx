"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import Modal from "./ModalLayout";
import MainHeading from "../pages/typography/MainHeading";
import Paragraph from "../pages/typography/Paragraph";
import InputField from "../inputField/InputField";
import SelectField from "../inputField/SelectField";
import TextArea from "../inputField/TextArea";
import ButtonSm from "../button/ButtonSm";
import PhoneInputField from "../inputField/PhoneInputField";
import { contactSchema, ContactFormData } from "@/utils/contactSchema";

const API_URL = "https://osbackend.ownersjungle.com/api/v1/oi/saas-leads";

const companySizeOptions = [
  { label: "Less than 5 employees", value: "Less than 5 employees" },
  { label: "5-20 employees", value: "5-20 employees" },
  { label: "20-50 employees", value: "20-50 employees" },
  { label: "50-250 employees", value: "50-250 employees" },
  { label: "More than 250 employees", value: "More than 250 employees" },
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      companySize: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || "Something went wrong. Please try again.",
        );
      }

      toast.success("Your request has been sent! We'll be in touch soon.");
      reset();
      onClose();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send your request. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-start">
        <MainHeading className="mb-5">Contact Us</MainHeading>
        <Paragraph className="text-center text-[#434242] hidden md:flex">
          We&apos;d love to hear from you! Our team is available to answer any
          questions you may have regarding features, pricing or help installing
          your POS system. Complete the form below and one of our experts will
          call you soon.
        </Paragraph>

        <div
          className="bg-white w-full max-w-[768px] h-auto mt-5 rounded-[20px] lg:rounded-[30px] p-4 md:p-8"
          style={{ boxShadow: "2px 2px 22px 0px rgba(0,0,0,0.15)" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Row 1: Name + Phone */}
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
              <InputField
                label="Full Name"
                placeHolder="Enter Your Name"
                required
                register={register("name")}
                error={errors.name?.message}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInputField
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                    required
                    value={field.value}
                    onChange={(val) => field.onChange(val ?? "")}
                    error={errors.phone?.message}
                  />
                )}
              />
            </div>

            {/* Row 2: Email + Company */}
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 mt-4">
              <InputField
                label="Company Email"
                type="email"
                placeHolder="Enter Your Company Email"
                required
                register={register("email")}
                error={errors.email?.message}
              />
              <InputField
                label="Company Name"
                placeHolder="Enter Your Company Name"
                required
                register={register("company")}
                error={errors.company?.message}
              />
            </div>

            {/* Row 3: Company Size + Subject */}
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 mt-4">
              <Controller
                name="companySize"
                control={control}
                render={({ field }) => (
                  <SelectField
                    label="Company Size"
                    placeholder="Select Your Company Size"
                    required
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    options={companySizeOptions}
                    error={errors.companySize?.message}
                  />
                )}
              />
              <InputField
                label="Subject"
                placeHolder="Enter the Subject"
                required
                register={register("subject")}
                error={errors.subject?.message}
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <TextArea
                label="Message"
                placeHolder="How can we assist you today?"
                required
                rows={4}
                register={register("message")}
                error={errors.message?.message}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className="w-full bg-[var(--primary-purple)] border-2 border-transparent leading-[100%] text-sm md:text-base font-['Onest'] font-semibold cursor-pointer text-white hover:text-[var(--primary-purple)] hover:border-[var(--primary-purple)] hover:bg-transparent py-5 rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send a request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
