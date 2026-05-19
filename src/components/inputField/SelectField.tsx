"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { HiChevronDown } from "react-icons/hi";

interface SelectFieldProps {
  label?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  readOnly?: boolean;
  variant?: "default" | "signup";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  placeholder = "Select an option",
  register,
  error,
  required = false,
  readOnly = false,
  variant = "default",
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <div className="flex items-center gap-x-1 ">
          <p className="text-sm text-[#231F20] mb-1 font-normal font-['Onest'] leading-[100%]">
            {label}
          </p>
          {required && variant !== "signup" && <p className="text-red-500">*</p>}
        </div>
      )}
      <div className="relative">
        <select
          {...register}
          value={value}
          onChange={onChange}
          disabled={readOnly}
          className={`w-full px-4 py-3 pr-10 rounded-[14px] border bg-white appearance-none outline-none focus:border-[#795CF5] transition-colors font-['Onest'] ${!value ? "text-[#9A9A9A]" : "text-[#231F20]"
            } ${error ? "border-red-500 focus:border-red-500" : "border-[#D9D9D9]"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value} className="text-[#231F20]">
              {opt.label}
            </option>
          ))}
        </select>
        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] pointer-events-none" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 font-['Onest']">{error}</p>}
    </div>
  );
};

export default SelectField;
