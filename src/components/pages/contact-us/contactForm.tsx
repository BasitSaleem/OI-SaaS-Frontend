"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { isValidPhoneNumber } from "react-phone-number-input";

import PhoneInputField from "@/components/inputField/PhoneInputField";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/inputField/SelectField";
import TextArea from "@/components/inputField/TextArea";
import ButtonSm from "@/components/button/ButtonSm";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { contactSchema, ContactFormData } from "@/utils/contactSchema";

const API_URL = "https://osbackend.ownersjungle.com/api/v1/oi/saas-leads";

const companySizeOptions = [
  { label: "Less than 5 employees", value: "Less than 5 employees" },
  { label: "5-20 employees", value: "5-20 employees" },
  { label: "20-50 employees", value: "20-50 employees" },
  { label: "50-250 employees", value: "50-250 employees" },
  { label: "More than 250 employees", value: "More than 250 employees" },
];

const ContactForm = () => {
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

      toast.success(
        "Your message has been sent! We'll get back to you shortly.",
      );
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send your message. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[20px] md:rounded-[40px] p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.08)] w-full max-w-[700px] mx-auto lg:ml-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Row 1: Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <InputField
            label="Name"
            placeHolder="Enter Name"
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
                placeHolder="Enter Phone No"
                required
                value={field.value}
                onChange={(val) => field.onChange(val ?? "")}
                error={errors.phone?.message}
              />
            )}
          />
        </div>

        {/* Row 2: Email + Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <InputField
            label="Email Address"
            placeHolder="Enter Email Address"
            required
            type="email"
            register={register("email")}
            error={errors.email?.message}
          />
          <InputField
            label="Company"
            placeHolder="Enter Company Name"
            required
            register={register("company")}
            error={errors.company?.message}
          />
        </div>

        {/* Row 3: Company Size + Subject */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-6">
          <Controller
            name="companySize"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Company Size"
                placeholder="Select Company Size"
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
        <TextArea
          label="Message"
          placeHolder="How can we assist you today?"
          required
          rows={5}
          register={register("message")}
          error={errors.message?.message}
        />

        {/* Submit */}
        <div className="pt-2">
          {/* <ButtonSm
            text={isLoading ? "Sending..." : "Send a request"}
            bgColor="[#795CF5]"
            textColor="white"
            isBorder
            className="w-full"
            paddingLg="lg:py-5"
            onClick={() => {}}
            type="submit"
          /> */}
          <button
            type="submit"
            className="w-full bg-[var(--primary-purple)] border-2 border-transparent leading-[100%] text-sm md:text-base font-['Onest'] font-semibold cursor-pointer text-white hover:text-[var(--primary-purple)] hover:border-[var(--primary-purple)] hover:bg-transparent py-5 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send a request"}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="border-t border-[#F2F2F2] pt-8 mt-4 flex items-start gap-3">
          <HiOutlineShieldCheck className="text-[var(--primary-teal)] text-2xl flex-shrink-0 mt-0.5" />
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
