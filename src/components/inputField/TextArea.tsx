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
}

const TextArea: React.FC<TextAreaProps> = ({
    placeHolder,
    label,
    readOnly,
    register,
    error,
    required = false,
    rows = 4,
}) => {
    return (
        <div>
            {label && (
                <div className="flex items-center gap-x-1">
                    <p className="text-sm text-[#231F20] font-normal font-['Onest'] leading-[100%] mb-1">{label}</p>
                    {required && <p className="text-redColor">*</p>}
                </div>
            )}
            <div className="relative">
                <textarea
                    // {...register}
                    rows={rows}
                    className="w-[100%] text-area px-4 py-3 outline-0 rounded-[14px] border border-[#D9D9D9] placeholder:text-[16px] text-[#9A9A9A] placeholder:text-[#9A9A9A] appearance-none resize-none"
                    placeholder={placeHolder}
                    readOnly={readOnly}
                />
            </div>
            {/* {error && <p className="errorText text-left mt-1">{error}</p>} */}
        </div>
    );
};

export default TextArea;
