import React from "react";
import clsx from "clsx";

interface MediumHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const MediumHeading: React.FC<MediumHeadingProps> = ({ children, className }) => (
  <h2
    className={clsx(
      "font-semibold text-[var(--text-dark)] font-['Onest']",
      "lg:text-[32px] text-[24px]",
      "lg:leading-[40px] leading-[32px]",
      className
    )}
  >
    {children}
  </h2>
);

export default MediumHeading;
