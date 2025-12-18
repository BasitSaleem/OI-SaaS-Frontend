import React from "react";
import clsx from "clsx";


interface ParagraphProps {
  children: React.ReactNode;
  className?: string; 
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={clsx(
        "font-normal text-[var(--text-grey)]",
        "font-['Onest']",
        "lg:text-xl md:text-base text-base",
        "lg:leading-9 md:leading-6 leading-[170%]",
        className 
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
