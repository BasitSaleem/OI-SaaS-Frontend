import React from "react";

interface BlogOverviewProps {
  text: string;
}

const BlogOverview: React.FC<BlogOverviewProps> = ({ text }) => {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <div className="bg-[rgba(121,92,245,0.11)] px-4 py-6 md:p-6 lg:p-8 rounded-[20px] lg:rounded-[40px] flex flex-col gap-4">
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#231F20] font-normal"
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default BlogOverview;
