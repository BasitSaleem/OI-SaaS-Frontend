"use client";

import PosGroceryPageIcons from "../../icons/posGroceryPageIcons";

interface WorkflowCardProps {
  number: number;
  title: string;
  description: string;
}

const WorkflowCard = ({ number, title, description }: WorkflowCardProps) => {
  const iconName = `workflowIcon${number}` as any;

  return (
    <div className="relative group p-[0px] pt-[2px] rounded-[30px] bg-[linear-gradient(90deg,#1AD1B9_32.74%,#38ACCC_52.46%,#5588DF_76.39%,#795CF5_100%)] h-full">
      <div className="relative flex flex-col items-center p-2 lg:p-4 rounded-[27px] bg-white  h-full overflow-hidden">
        <div className="relative flex flex-col items-center rounded-[27px] p-6 h-full bg-[linear-gradient(90deg,rgba(26,209,185,0.2)_32.74%,rgba(56,172,204,0.2)_52.46%,rgba(85,136,223,0.2)_76.39%,rgba(121,92,245,0.2)_100%)] shadow-[inset_0px_17px_29px_0px_rgba(255,255,255,0.25)]">
        

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20 mb-6">
            <PosGroceryPageIcons name={iconName} size={80} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-[#2D2D2D] text-center">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-[#666666] text-center">
            {description}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
