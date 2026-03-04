import React from 'react'
import { BusinessType } from "../pages/Pricings/tableConfig";
interface ToolTipProps {
    text: string | undefined
    isComparisonToolTip?: boolean
    isVisible?: boolean
    industry: BusinessType;
}
const Tooltip: React.FC<ToolTipProps> = ({ text, isComparisonToolTip = false, isVisible = false, industry }) => {
    return (
        <div className={`${isComparisonToolTip
            ?
            `absolute  -translate-x-2 left-0 md:-translate-x-1  ${industry === 'Hybrid' ? 'lg:translate-x-7' : 'lg:translate-x-2'}   lg:left-2 bottom-full mb-2 z-[999] ${isVisible ? "flex" : "hidden lg:group-hover:flex"} flex-col items-start w-auto`
            :
            `absolute left-[50%] -translate-x-[50%] top-[110%] z-[999] ${isVisible ? "flex" : "hidden lg:group-hover:flex"} flex-col items-left`}`}>

            {!isComparisonToolTip && <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[var(--primary-purple)] -mb-1 mx-auto"></div>}

            <div
                className={`${isComparisonToolTip
                    ? "rounded-xl border border-[var(--primary-purple)] bg-white px-4 py-2 text-xs leading-4 font-normal text-[var(--text-dark)] shadow-lg w-[150px] md:w-[200px] lg:w-[250px]"
                    : "rounded-xl border border-[var(--primary-purple)] bg-white px-4 py-2 text-sm whitespace-nowrap leading-4 font-semibold text-[var(--text-dark)] shadow-lg w-fit"
                    }`}
            >
                {text}
            </div>

            {/* Downward-pointing arrow aligned to the left for comparison tooltip */}
            {isComparisonToolTip &&
                <div className="w-2 h-2 rotate-45 bg-white border-b border-r border-[var(--primary-purple)] -mt-[5px] ml-6"></div>
            }

        </div>
    )
}

export default Tooltip