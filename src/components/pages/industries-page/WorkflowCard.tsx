"use client";

import PosHardwarePageIcons from "../../icons/posHardwarePageIcons";

interface WorkflowCardProps {
  number: number;
  title: string;
  description: string;
}

const DEFAULT_GRADIENT_BACKGROUND = `
  linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.98) 18%,
    rgba(255, 255, 255, 0.85) 35%,
    rgba(255, 255, 255, 0.00) 50%,
    rgba(255, 255, 255, 0.00) 100%
  ),
  radial-gradient(900px 650px at 12% 8%,
    rgba(207, 181, 249, 0.55) 0%,
    rgba(207, 181, 249, 0.18) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.55) 0%,
    rgba(160, 215, 255, 0.18) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    90deg,
    rgba(26, 209, 185, 0.7) 32.74%,
    rgba(56, 172, 204, 0.7) 52.46%,
    rgba(85, 136, 223, 0.7) 76.39%,
    rgba(121, 92, 245, 0.7) 100%
  )
`;

const WorkflowCard = ({ number, title, description }: WorkflowCardProps) => {
  const iconName = `workflowIcon${number}` as any;

  return (
    <div className="relative group p-[0px] pt-[2px] rounded-[30px] bg-[linear-gradient(90deg,#1AD1B9_32.74%,#38ACCC_52.46%,#5588DF_76.39%,#795CF5_100%)] h-full">
      <div className="relative flex flex-col items-center p-2 lg:p-4 rounded-[27px] bg-white  h-full overflow-hidden">
        <div className="relative flex flex-col items-center rounded-[27px] p-6 h-full shadow-[inset_0px_17px_29px_0px_rgba(255,255,255,0.25)]"
        style={{ background: DEFAULT_GRADIENT_BACKGROUND }}
        >
        

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20 mb-6">
            <PosHardwarePageIcons name={iconName} size={80} />
          </div>
          <h3 className="text-xl lg:text-2xl leading-[140%] font-['onest] font-semibold mb-4 text-[var(--text-dark)] text-center">
            {title}
          </h3>
          <p className="text-sm lg:text-base leading-[170%] text-[var(--text-grey)] font-normal  text-center">
            {description}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
