import React from "react";

interface BlogOverviewProps {
  text: string;
}

const BlogOverview: React.FC<BlogOverviewProps> = ({ text }) => (
  <div className="bg-[rgba(121,92,245,0.11)] px-4 py-6 md:p-6 lg:p-8 rounded-[20px] lg:rounded-[40px]">
    <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#231F20] font-normal">
      {text}
    </p>
  </div>
);

export default BlogOverview;
