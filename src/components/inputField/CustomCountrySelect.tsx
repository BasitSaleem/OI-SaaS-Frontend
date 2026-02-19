'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import type { Country } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json'; // Importing English country names
import flags from 'react-phone-number-input/flags';

interface CountrySelectProps {
    value?: string;
    onChange: (value: string) => void;
    labels?: { [key: string]: string };
    className?: string; // To support className prop passed by PhoneInput
}

const CountrySelect: React.FC<CountrySelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    value,
    onChange,
    labels = en, // Default to English labels
    className,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const countries = getCountries();

    const selectedCountry = value as Country;
    const FlagComponent = selectedCountry ? flags[selectedCountry] : undefined;

    return (
        <div className={`relative ${className || ''}`} ref={dropdownRef}>
            <button
                type="button"
                {...rest}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors outline-none"
            >
                {FlagComponent && (
                    <span className="country-flag-container w-6 h-4 flex items-center justify-center">
                        <FlagComponent title={selectedCountry ? labels[selectedCountry] : ""} />
                    </span>
                )}
                <span className="text-gray-500 text-xs">
                    {/* Add arrow icon here explicitly if needed, or rely on CSS pseudo-element if preferred. Let's add an SVG arrow */}
                     <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <path d="M1 1L5 5L9 1" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div
                    className="absolute top-full left-0 -ml-2 z-50 mt-1 min-w-[200px] max-w-[250px] bg-white shadow-lg overflow-y-auto custom-scrollbar overscroll-y-contain"
                    style={{
                        maxHeight: '350px',
                        border: '1px solid #E2E2E2',
                        borderRadius: '16px',
                    }}
                >
                    {countries.map((c) => {
                        const country = c as Country;
                        const CountryFlag = flags[country];
                         return (
                            <button
                                key={country}
                                type="button"
                                className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${selectedCountry === country ? 'bg-gray-50' : ''}`}
                                onClick={() => {
                                    onChange(country);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="country-flag-container mr-3 w-6 h-4 flex-shrink-0">
                                   {CountryFlag && <CountryFlag title={labels[country]} />}
                                </span>
                                <span className="flex-1 text-sm text-[#231F20] font-['Onest'] truncate">
                                    {labels[country]}
                                </span>
                                <span className="text-xs text-gray-400 font-['Onest'] ml-2">
                                    +{getCountryCallingCode(country)}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CountrySelect;
