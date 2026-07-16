import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
    placeHolder?: string;
    label?: string;
    readOnly?: boolean;
    register?: UseFormRegisterReturn;
    error?: string;
    required?: boolean;
    rows?: number;
    inputClassName?: string;
    isResizable?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
    placeHolder,
    label,
    readOnly,
    register,
    error,
    required = false,
    rows,
    inputClassName,
    isResizable = false,
}) => {
    return (
        <div>
            {label && (
                <div className="flex items-center gap-x-1">
                    <p className="text-sm text-[#231F20] font-normal font-['Onest'] leading-[100%] mb-1">{label}</p>
                    {required && <p className="text-red-500">*</p>}
                </div>
            )}
            <div className="relative">
                <textarea
                    {...register}
                    rows={rows}
                    className={`w-[100%] text-area ${inputClassName || "px-4 py-3"} outline-none focus:border-[#795CF5] transition-colors rounded-[14px] border placeholder:text-[16px] text-[#231F20] placeholder:text-[#9A9A9A] appearance-none ${isResizable ? 'resize-y' : 'resize-none'} font-['Onest'] ${error ? "border-red-500 focus:border-red-500" : "border-[#D9D9D9]"
                        }`}
                    placeholder={placeHolder}
                    readOnly={readOnly}
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-1 font-['Onest']">{error}</p>}
        </div>
    );
};

export default TextArea;
