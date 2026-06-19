import React from "react";
import { FeatureListItem } from "./FeatureAccordionList";

interface FeatureBulletListProps {
  list: FeatureListItem[];
}

const FeatureBulletList = ({ list }: FeatureBulletListProps) => (
  <ul className="flex flex-col gap-3 mb-8">
    {(list as any[]).map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1.5 min-w-[18px] h-[18px] flex items-center justify-center">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.67434 11.9995L0.80626 2.39758C0.518635 1.68002 0.86115 0.862661 1.57126 0.572036C2.01292 0.391286 2.49353 0.455646 2.86243 0.703614L17.897 10.8318C18.5352 11.2617 18.7077 12.1331 18.2822 12.778C18.1761 12.9392 18.0377 13.0767 17.8757 13.1816L2.86243 23.2953C2.22428 23.7253 1.36196 23.551 0.936478 22.9061C0.657713 22.4836 0.635682 21.9638 0.833166 21.5347L4.67434 11.9995Z"
              stroke="#E5E5E5"
              strokeWidth="1.40626"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.14067 18.37L14.597 11.9997L5.14062 5.62939L7.70689 11.9997L5.14067 18.37Z"
              fill="url(#paint0_linear_4867_6573)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4867_6573"
                x1="8.23628"
                y1="11.9997"
                x2="14.597"
                y2="11.9997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1AD1B9" />
                <stop offset="0.293269" stopColor="#38ACCC" />
                <stop offset="0.649038" stopColor="#5588DF" />
                <stop offset="1" stopColor="#795CF5" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="font-['Onest'] text-[var(--text-dark)] font-medium text-base md:text-xl lg:text-2xl  leading-[150%] lg:leading-[135%]">
          {typeof item === "string" ? item : item.listheading}
        </span>
      </li>
    ))}
  </ul>
);

export default FeatureBulletList;
