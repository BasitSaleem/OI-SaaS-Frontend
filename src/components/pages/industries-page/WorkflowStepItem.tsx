import AlAsifIcons from "@/components/icons/alAsifCasestudyIcons";

export interface WorkflowItem {
  id: string | number;
  title: string;
  description: string;
}

interface WorkflowStepItemProps {
  item: WorkflowItem;
  index: number;
}

const WorkflowStepItem = ({ item, index }: WorkflowStepItemProps) => (
  <div
    className="workflow-step relative flex flex-col md:flex-row items-stretch md:items-center md:min-w-0 min-w-[257px] snap-center"
  >
    {/* Number Circle */}
    <div className="relative z-20 flex-shrink-0 w-full flex justify-center md:w-auto md:block">
      <AlAsifIcons
        name={`workflowIcon${(index % 7) + 1}` as any}
        size={80}
        className="step-circle w-16 h-16 md:w-20 md:h-20 relative z-20 transition-all duration-300 group"
      />

      {/* Connector Line (Vertical on Mobile, Horizontal on Desktop) */}
      <div className="step-connector-line absolute left-1/2 md:left-full top-full md:top-1/2 w-[2px] md:w-20 h-8 md:h-[2px] bg-[#E2E2E2] -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 overflow-hidden z-10">
        <div
          className="connecter horizontal absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[var(--primary-teal)] via-[var(--primary-purple)] to-[var(--primary-teal)] origin-top md:origin-left scale-x-1 md:scale-x-0 scale-y-0 md:scale-y-100"
          style={{ willChange: "transform" }}
        />
      </div>
    </div>

    {/* Content Card */}
    <div
      className="step-card h-full md:ml-20 ml-0 mt-8 md:mt-0 flex items-center transition-all duration-500 justify-center p-[1px] bg-[linear-gradient(11.61deg,#FFFFFF_20.11%,rgba(255,255,255,0)_82.07%)] flex-grow md:w-auto w-full rounded-[24px]"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="bg-white md:bg-white/50 p-6 md:p-8 rounded-[24px] min-w-[254px] max-w-[257px] md:min-w-0 md:max-w-none h-full">
        <h3 className="text-xl leading-[140%] md:text-left text-center lg:text-[32px] lg:leading-[130%] font-semibold lg:font-medium text-[var(--text-dark)] font-['Onest'] md:min-h-auto min-h-[70px] mb-0 md:mb-3">
          {item.title}
        </h3>
        <p className="text-base md:text-lg md:leading-[140%] leading-[170%] text-[var(--text-grey)] text-center md:text-left font-['Onest'] font-medium">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

export default WorkflowStepItem;
