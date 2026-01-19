import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string; 
}

const CardHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "font-semibold text-[var(--text-dark)]",
        "font-['Onest']",
        "lg:text-2xl md:text-xl text-2xl",
        "md:leading-[100%] leading-[140%]",
        "",
        className 
      )}
    >
      {children}
    </h3>
  );
};

export default CardHeading;
