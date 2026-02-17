import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

interface InputFieldProps {
    placeHolder?: string;
    type?: string;
    label?: string;
    readOnly?: boolean;
    register?: UseFormRegisterReturn;
    error?: string;
    required?: boolean;
    variant?: "default" | "signup"
}

const InputField: React.FC<InputFieldProps> = ({
    placeHolder,
    type,
    label,
    readOnly,
    register,
    error,
    required = false,
    variant = "default",
}) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            {label && (
                <div className="flex items-center gap-x-1">
                    <p className="text-sm text-[#231F20] font-normal font-['Onest'] leading-[100%] mb-1">{label}</p>
                    {required && variant !== "signup" && <p className="text-redColor">*</p>}
                </div>
            )}
            <div className="relative">
                <input
                    // {...register}
                    className="w-[100%] px-4 py-3 outline-none focus:border-[#795CF5] transition-colors font-['onest] rounded-[14px] border border-[#D9D9D9] placeholder:font-['onest']  placeholder:text-[16px] text-[#231F20] placeholder:text-[#9A9A9A] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0"
                    type={
                        type === "password"
                            ? isHidden
                                ? "password"
                                : "text"
                            : type
                    }
                    placeholder={placeHolder}
                    readOnly={readOnly}
                />
                {/* {type === "password" &&
                    (isHidden ? (
                        <HiOutlineEyeOff
                            className="absolute top-3.5 right-2 w-[17px] h-[12px] sm:w-[20px] sm:h-[15px] cursor-pointer"
                            onClick={() => setIsHidden(false)}
                        />
                    ) : (
                        <HiOutlineEye
                            onClick={() => setIsHidden(true)}
                            className="absolute top-3.5 right-2 w-[17px] h-[12px] sm:w-[20px] sm:h-[15px] cursor-pointer"
                        />
                    ))} */}
            </div>
            {/* {error && <p className="errorText text-left mt-1">{error}</p>} */}
        </div>
    );
};

export default InputField;

