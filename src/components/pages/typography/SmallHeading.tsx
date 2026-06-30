import React from "react";
import clsx from "clsx";

interface SmallHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SmallHeading: React.FC<SmallHeadingProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-semibold text-[var(--text-dark)] font-['Onest']",
      "lg:text-[32px] text-[24px]",
      "lg:leading-[40px] leading-[32px]",
      className
    )}
  >
    {children}
  </h3>
);

export default SmallHeading;
