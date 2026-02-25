import Link from 'next/link'
import React from 'react'
interface ButtonOutlineProps{
    text:string
    borderColor:string
    url:string
    textColor?:string
}
const ButtonOutline:React.FC<ButtonOutlineProps> = (props) => {
  const parsedBorderColor = props.borderColor.startsWith("[") && props.borderColor.endsWith("]") ? props.borderColor.slice(1, -1) : props.borderColor;
  const parsedTextColor = props.textColor ? (props.textColor.startsWith("[") && props.textColor.endsWith("]") ? props.textColor.slice(1, -1) : props.textColor) : "white";

  const style = {
    "--btn-border": parsedBorderColor,
    "--btn-text": parsedTextColor,
  } as React.CSSProperties;

  return (
    <Link href={props.url} style={style} className={`bg-transparent 
    px-8 py-2.5 md:px-5 md:py-3 lg:px-[30px] whitespace-nowrap lg:py-5 flex items-center justify-center text-base md:text-base font-['Onest'] font-medium
     text-[var(--btn-border)] border border-[var(--btn-border)] hover:border-transparent rounded-full hover:text-[var(--btn-text)] hover:bg-[var(--btn-border)] 
     transition-colors duration-300
    `}>{props.text}</Link>
  )
}


export default ButtonOutline