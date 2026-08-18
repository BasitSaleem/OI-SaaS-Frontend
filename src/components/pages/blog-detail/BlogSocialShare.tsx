"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogSocialShareProps {
  title: string;
}

const BlogSocialShare: React.FC<BlogSocialShareProps> = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const encodedUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: copied ? "Copied!" : "Copy link",
      onClick: handleCopy,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8318_31101)">
            <path d="M9.22657 6.58672L14.893 0H13.5502L8.63009 5.71915L4.7004 0H0.167969L6.11043 8.64837L0.167969 15.5556H1.5108L6.70657 9.51594L10.8566 15.5556H15.389L9.22624 6.58672H9.22657ZM7.38739 8.72457L6.78529 7.86338L1.99464 1.01086H4.05714L7.92326 6.54107L8.52535 7.40225L13.5508 14.5907H11.4883L7.38739 8.7249V8.72457Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_8318_31101">
              <rect width="15.5556" height="15.5556" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.35 0.25C1.77964 0.25 1.26111 0.460933 0.872221 0.856413C0.457417 1.27825 0.25 1.80553 0.25 2.35921C0.25 2.93923 0.483333 3.46655 0.872221 3.86203C1.26111 4.25751 1.80555 4.4948 2.32408 4.46844H2.37594C2.89447 4.46844 3.38705 4.25751 3.77594 3.86203C4.16483 3.46655 4.39816 2.93923 4.39816 2.35921C4.42408 1.80553 4.19074 1.27822 3.80186 0.882737C3.41297 0.460902 2.89444 0.25 2.35 0.25ZM3.41297 3.49294C3.12777 3.78296 2.73888 3.96751 2.32408 3.94116C1.93519 3.94116 1.52039 3.78296 1.23519 3.49294C0.924083 3.20291 0.768528 2.78107 0.768528 2.35924C0.768528 1.9374 0.924083 1.54192 1.23519 1.22554C1.52039 0.935509 1.90928 0.777317 2.35 0.777317C2.73888 0.777317 3.12777 0.935509 3.41297 1.22554C3.72408 1.54192 3.87963 1.9374 3.87963 2.35924C3.87963 2.78107 3.72408 3.20291 3.41297 3.49294ZM3.36111 4.99576H1.26111C0.846305 4.99576 0.509249 5.3385 0.509249 5.78672V15.0146C0.509249 15.4364 0.872221 15.8056 1.28702 15.8056H3.36111C3.77591 15.8056 4.13888 15.4364 4.13888 15.0409V5.78672C4.13888 5.36485 3.77591 4.99576 3.36111 4.99576ZM3.62035 15.0409C3.62035 15.1728 3.49071 15.2782 3.36111 15.2782H1.28702C1.15739 15.2782 1.02778 15.1464 1.02778 15.0146V5.78672C1.02778 5.65488 1.13147 5.52308 1.26111 5.52308H3.36111C3.49074 5.52308 3.62035 5.65491 3.62035 5.78672V15.0409ZM12.1759 4.73209H11.6314C10.6203 4.73209 9.66109 5.18031 9.03887 5.89217V5.52305C9.03887 5.2594 8.77962 4.99573 8.52034 4.99573H5.92777C5.69443 4.99573 5.40924 5.20666 5.40924 5.49666V15.3309C5.40924 15.6209 5.69443 15.8055 5.92777 15.8055H8.77962C9.01296 15.8055 9.29815 15.6209 9.29815 15.3309V9.63601C9.29815 8.76595 9.92037 8.08044 10.7241 8.08044C11.1389 8.08044 11.5278 8.23863 11.813 8.52866C12.0722 8.76595 12.1759 9.13507 12.1759 9.60965V15.2782C12.1759 15.5418 12.4352 15.8055 12.6945 15.8055H15.287C15.5463 15.8055 15.8056 15.5419 15.8056 15.2782V8.47595C15.8055 6.36675 14.2241 4.73209 12.1759 4.73209ZM15.287 15.2519L15.2611 15.2782H12.7203L12.6944 9.60968C12.6944 8.97691 12.5389 8.50234 12.2018 8.1596C11.813 7.76412 11.2944 7.55319 10.75 7.55319C9.66109 7.57954 8.80554 8.47598 8.80554 9.63604V15.2782H5.95368V5.52305H8.52034L8.54626 5.5494V7.21042L9.24626 6.49855L9.27217 6.4722C9.7907 5.73398 10.6981 5.2594 11.6574 5.2594H12.2018C13.9388 5.2594 15.287 6.68313 15.287 8.47598V15.2519Z" fill="white" stroke="white" strokeWidth="0.5" />
        </svg>

      ),
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.43108 3.76317V5.9047H0.75V8.52389H2.43108V16.3056H5.88547V8.52389H8.20248C8.20248 8.52389 8.41915 7.26767 8.52462 5.89478H5.89783V4.10404C5.89783 3.83665 6.27399 3.47647 6.64641 3.47647H8.52778V0.75H5.97024C2.34602 0.750268 2.43108 3.3716 2.43108 3.76317Z" stroke="white" strokeWidth="1.5" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      ),
    },
    {
      label: "Share via Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* CTA Card */}
      <div
        className="backdrop-blur-[60px] bg-[linear-gradient(105.91deg,_rgba(121,92,245,0.76)_5.38%,_rgba(26,209,185,0.76)_94.62%)] rounded-2xl px-5 py-7 flex flex-col items-center text-center gap-4"
        
      >
        <p className="text-lg font-bold font-['Onest'] text-white leading-snug">
          Ready to Optimize?
        </p>
        <p className="text-sm font-['Onest'] text-white/85 leading-relaxed">
          See how Owners Inventory can transform your inventory management operations.
        </p>
        <Link
          href="https://app.ownersinventory.com/sign-up?app=OG"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#231F20] font-semibold font-['Onest'] text-sm px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200 w-full text-center"
        >
          Start Today
        </Link>
      </div>

      {/* Share Section */}
      <div className="bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB] px-4 py-4 flex flex-col gap-3">
        <p className="text-base font-semibold font-['Onest'] text-[#231F20]">
          Share this Blog
        </p>
        <div className="flex items-center gap-2">
          {shares.map((s) =>
            s.onClick ? (
              <button
                key={s.label}
                onClick={s.onClick}
                aria-label={s.label}
                title={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors duration-200 flex-shrink-0"
              >
                {s.icon}
              </button>
            ) : (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors duration-200 flex-shrink-0"
              >
                {s.icon}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSocialShare;
