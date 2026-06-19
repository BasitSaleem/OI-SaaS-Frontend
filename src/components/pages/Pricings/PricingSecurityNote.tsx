import React from "react";
import Paragraph from "../typography/Paragraph";

const PricingSecurityNote = () => (
  <div className="bg-white/24 w-full flex items-center justify-center border border-white backdrop-blur-md rounded-[16px] lg:rounded-[24px] p-2 lg:px-6 py-4 overflow-x-auto lg:overflow-x-visible gap-4 no-scrollbar snap-x snap-mandatory lg:snap-none mt-[60px]">
    <Paragraph className="flex items-start md:items-center justify-center  gap-2">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.1375 13.9C26.1375 20.0125 21.7 25.7375 15.6375 27.4125C15.225 27.525 14.775 27.525 14.3625 27.4125C8.29998 25.7375 3.86249 20.0125 3.86249 13.9V8.41248C3.86249 7.38748 4.63751 6.22498 5.60001 5.83748L12.5625 2.98752C14.125 2.35002 15.8875 2.35002 17.45 2.98752L24.4125 5.83748C25.3625 6.22498 26.15 7.38748 26.15 8.41248L26.1375 13.9Z"
          stroke="url(#paint0_linear_6938_17787)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15.625C16.3807 15.625 17.5 14.5057 17.5 13.125C17.5 11.7443 16.3807 10.625 15 10.625C13.6193 10.625 12.5 11.7443 12.5 13.125C12.5 14.5057 13.6193 15.625 15 15.625Z"
          stroke="url(#paint1_linear_6938_17787)"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15.625V19.375"
          stroke="url(#paint2_linear_6938_17787)"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6938_17787"
            x1="15.0062"
            y1="2.5094"
            x2="15.0062"
            y2="27.4969"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#795CF5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6938_17787"
            x1="15"
            y1="10.625"
            x2="15"
            y2="15.625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#795CF5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_6938_17787"
            x1="15.5"
            y1="15.625"
            x2="15.5"
            y2="19.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#795CF5" />
          </linearGradient>
        </defs>
      </svg>

      <span className="text-[var(--text-dark)]"><span className="font-semibold">Payments are processed securely.</span> Subscriptions renew automatically unless canceled.</span>
    </Paragraph>
  </div>
);

export default PricingSecurityNote;
