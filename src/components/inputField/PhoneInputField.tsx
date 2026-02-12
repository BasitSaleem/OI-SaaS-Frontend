'use client';

import React from 'react';
import PhoneInput from 'react-phone-number-input';
import CustomCountrySelect from './CustomCountrySelect';
import 'react-phone-number-input/style.css';
import './PhoneInputField.css'; 

interface PhoneInputFieldProps {
    label?: string;
    value: string | undefined;
    onChange: (value: string | undefined) => void;
    placeHolder?: string;
    required?: boolean;
    className?: string;
    error?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
    label,
    value,
    onChange,
    placeHolder,
    required = false,
    className,
    error,
}) => {
    return (
        <div className={className}>
             {label && (
                <div className="flex items-center gap-x-1">
                    <p className="text-sm text-[#231F20] font-normal font-['Onest'] leading-[100%] mb-1">{label}</p>
                    {required && <p className="text-[#FF0000]">*</p>}
                </div>
            )}
             
            <PhoneInput
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
                defaultCountry="US" 
                className="font-['Onest']" 
                countrySelectComponent={CustomCountrySelect}
                numberInputProps={{
                    className: "PhoneInputInput" 
                }}
            />
             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default PhoneInputField;
