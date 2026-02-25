import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  url?: string;
  text: string;
  bgColor: string;
  textColor: string;
  isBorder?: boolean;
  icon?: ReactNode;
  onClick?: () => void;

  padding?: string;
  paddingMd?: string;
  paddingLg?: string;

  className?: string;   // <-- OPTIONAL extra classes
  type?: "button" | "submit" | "reset";
}

export default function Button({
  url = "#",
  text,
  bgColor,
  textColor,
  isBorder,
  icon,
  onClick,
  padding = "px-3 py-2.5",
  paddingMd = "md:px-5 md:py-3",
  paddingLg = "lg:px-[30px] lg:py-4",
  className = "",         // <-- default empty
  type = "button",
}: ButtonProps) {
  const parsedBgColor = bgColor.startsWith("[") && bgColor.endsWith("]") ? bgColor.slice(1, -1) : bgColor;
  const parsedTextColor = textColor.startsWith("[") && textColor.endsWith("]") ? textColor.slice(1, -1) : textColor;

  const classes = `
    ${padding}
    ${paddingMd}
    ${paddingLg}
    bg-[var(--btn-bg)]
    text-[var(--btn-text)]
    flex items-center justify-center gap-2 whitespace-nowrap
    text-sm md:text-base font-['Onest'] font-semibold
    ${isBorder ? `border` : ""}
    rounded-full hover:text-[var(--btn-bg)] hover:bg-transparent
    hover:border-[var(--btn-bg)]
    transition-colors duration-300 cursor-pointer
    ${className}
  `;

  const style = {
    "--btn-bg": parsedBgColor,
    "--btn-text": parsedTextColor,
    border: isBorder ? `1px solid var(--btn-bg)` : "transparent",
  } as React.CSSProperties;


  // If onClick is passed → render <button>
  if (onClick) {
    return (
      <button type={type} onClick={onClick} style={style} className={classes}>
        <span>{text}</span>
        {icon && <span className="ml-1 flex items-center">{icon}</span>}
      </button>
    );
  }

  // Otherwise → render <Link>
  return (
    <Link href={url} style={style} className={classes}>
      <span>{text}</span>
      {icon && <span className="ml-1 flex items-center">{icon}</span>}
    </Link>
  );
}
