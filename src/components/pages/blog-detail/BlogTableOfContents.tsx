"use client";

import { useEffect, useRef, useState } from "react";
import { TOCItem } from "@/constant/blogData/blogData";

interface BlogTableOfContentsProps {
  items: TOCItem[];
}

const BlogTableOfContents: React.FC<BlogTableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] p-4 flex flex-col">
      <p className="text-base font-semibold font-['Onest'] text-[#231F20] mb-3">
        Table of Contents
      </p>
      <div className="flex flex-col divide-y divide-[#F3F4F6]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={[
                "text-left text-sm font-['Onest'] font-medium py-3 px-3 rounded-full transition-all duration-200 w-full truncate",
                isActive
                  ? "bg-[#1AD1B9] text-white rounded-full"
                  : "text-[#555] hover:text-[#231F20]",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogTableOfContents;
