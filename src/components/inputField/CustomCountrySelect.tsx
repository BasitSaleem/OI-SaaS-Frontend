'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();

    const isContactPage = pathname?.includes('/contact');
    const widthClass = isContactPage ? 'min-w-[240px] max-w-[240px] sm:min-w-[340px] sm:max-w-[340px] xl:min-w-[260px] xl:max-w-[260px]' : 'min-w-[250px] max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[340px] lg:max-w-[340px]';

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Focus search input when opening
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        } else {
            setSearchQuery(''); // Reset search when closing
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const countries = getCountries();

    const filteredCountries = countries.filter((country) => {
        const name = labels[country]?.toLowerCase() || '';
        const code = getCountryCallingCode(country);
        const query = searchQuery.toLowerCase();
        return name.includes(query) || code.includes(query) || `+${code}`.includes(query);
    });

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
                    className={`absolute top-full left-0 -ml-2 z-50 mt-1 ${widthClass} bg-white shadow-lg flex flex-col`}
                    style={{
                        border: '1px solid #E2E2E2',
                        borderRadius: '16px',
                        overflow: 'hidden'
                    }}
                >
                    <div className="p-3 border-b border-gray-100 flex-shrink-0">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search country..."
                            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#795CF5] transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div 
                        className="overflow-y-auto custom-scrollbar" 
                        style={{ maxHeight: '280px', overscrollBehavior: 'contain' }}
                    >
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => {
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
                                        <span className="flex-1 text-sm whitespace-normal text-[#231F20] font-['Onest'] truncate">
                                            {labels[country]}
                                        </span>
                                        <span className="text-xs text-gray-400 font-['Onest'] ml-2">
                                            +{getCountryCallingCode(country)}
                                        </span>
                                    </button>
                                );
                            })
                        ) : (
                            <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountrySelect;
