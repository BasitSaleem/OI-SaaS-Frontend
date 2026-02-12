"use client";

import React, { useState } from 'react';
import PhoneInputField from '@/components/inputField/PhoneInputField';
import InputField from '@/components/inputField/InputField';
import TextArea from '@/components/inputField/TextArea';
import ButtonSm from '@/components/button/ButtonSm';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import Paragraph from '../typography/Paragraph';

const ContactForm = () => {
    const [value, setValue] = useState<string | undefined>()
    return (
        <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.08)] w-full max-w-[700px] mx-auto lg:ml-auto">
            <div className="text-center mb-10">
                <h2 className="lg:text-[32px] sm:text-[28px] text-2xl leading-[130%] font-medium font-['onest'] text-[var(--text-dark)] mb-6">
                    Reach Out to Us
                </h2>
                <Paragraph >
                    We’ll respond promptly and help you achieve your goals. For general inquiries, support, or assistance, contact us via the options below:
                </Paragraph>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4 gap-y-6">
                    <InputField
                        label="First Name"
                        placeHolder="Enter your first name"
                        // required
                    />
                    <InputField
                        label="Last Name"
                        placeHolder="Enter your last name"
                        // required
                    />
                </div>

                 <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4 gap-y-6">
                    <PhoneInputField
                        label="Phone Number"
                        placeHolder="Enter your phone number"
                        value={value}
                        onChange={setValue}
                        // required
                    />
                    <InputField
                        label="Email Address"
                        placeHolder="Enter your company name"
                        // required
                        type="email"
                    />
                </div>

                <InputField
                    label="Subject"
                    placeHolder="Enter your full name"
                    // required
                />

                <TextArea
                    label="Message"
                    placeHolder="How can we help you today?"
                    // required
                    rows={5}
                />

                <div className="pt-2">
                    <ButtonSm
                        text="Send a request"
                        bgColor="[#795CF5]"
                        textColor="white"
                        isBorder
                        className="w-full "
                        paddingLg="lg:py-5"
                        onClick={() => {}}
                    />
                </div>

                <div className="border-t border-[#F2F2F2] pt-8 mt-4 flex items-start gap-3">
                    <HiOutlineShieldCheck className="text-[#1AD1B9] text-2xl flex-shrink-0 mt-0.5" />
                    <p className="text-[#666666] text-base leading-[170%] font-['Onest']">
                        <span className="font-semibold text-[#231F20]">Privacy Notice:</span> We value your privacy. The information you provide to us will not be used in any other way other than to answer your query.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;