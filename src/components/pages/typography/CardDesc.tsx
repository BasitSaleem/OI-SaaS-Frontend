import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; // For dynamic margin, padding, etc.
}

const CardDesc: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <p
      className={clsx(
        "font-normal text-[var(--text-grey)] ",
        "font-['Onest']",
        "lg:text-lg text-base",
        "lg:leading-[28px] leading-[170%]",
        "",
        className 
      )}
    >
      {children}
    </p>
  );
};

export default CardDesc;
