import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "font-semibold text-[var(--text-dark)]",
        "font-['Onest']",
        "lg:text-[48px] md:text-[32px] text-[32px]",
        "lg:leading-[60px] leading-[48px]",
        "",
        className 
      )}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
