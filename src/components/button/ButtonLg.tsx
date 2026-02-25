import Link from "next/link";
import React from "react";

interface ButtonLgProps {
  text: string;
  bgColor: string;
  url: string;
  textColor?: string;
  isBorder?: boolean;
  hoverBgColor?: string;
  className?: string;   // ✅ optional extra classes
}

const ButtonLg: React.FC<ButtonLgProps> = ({
  text,
  bgColor,
  url,
  textColor = "white",
  isBorder = false,
  hoverBgColor,
  className = "",       
}) => {
  const parsedBgColor = bgColor.startsWith("[") && bgColor.endsWith("]") ? bgColor.slice(1, -1) : bgColor;
  const parsedTextColor = textColor.startsWith("[") && textColor.endsWith("]") ? textColor.slice(1, -1) : textColor;
  const parsedHoverBgColor = hoverBgColor ? (hoverBgColor.startsWith("[") && hoverBgColor.endsWith("]") ? hoverBgColor.slice(1, -1) : hoverBgColor) : undefined;

  return (
    <Link
      href={url}
      style={{
        backgroundColor: parsedBgColor === "transparent" ? "transparent" : parsedBgColor,
        color: parsedTextColor,
        border: isBorder ? `1px solid ${parsedBgColor}` : "transparent",
      }}
      className={`
        px-4 py-2.5 md:px-5 md:py-2 lg:px-[40px] lg:py-3.5
        flex items-center justify-center text-sm md:text-base
        font-['Onest'] font-semibold rounded-full transition-colors duration-300
        ${className}                // ✅ merged here
      `}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = parsedHoverBgColor ?? "transparent";
        el.style.color = parsedHoverBgColor ? "#fff" : parsedBgColor;
        el.style.border = `1px solid ${parsedHoverBgColor ?? parsedBgColor}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor =
          parsedBgColor === "transparent" ? "transparent" : parsedBgColor;
        el.style.color = parsedTextColor;
        el.style.border = isBorder
          ? `1px solid ${parsedBgColor}`
          : "transparent";
      }}
    >

      {text}
    </Link>
  );
};

export default ButtonLg;
