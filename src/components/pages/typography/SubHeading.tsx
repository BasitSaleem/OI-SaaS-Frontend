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
        "font-semibold text-[#231F20]",
        "font-['Onest']",
        "lg:text-[48px] md:text-[40px] text-[32px]",
        "lg:leading-[48px] leading-[48px]",
        "",
        className 
      )}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
