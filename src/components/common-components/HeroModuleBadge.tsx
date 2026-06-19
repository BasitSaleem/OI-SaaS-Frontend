import { forwardRef } from "react";
import Image from "next/image";

interface HeroModuleBadgeProps {
  src: string;
  alt: string;
  label: string;
  /** Absolute-position + layout classes for this badge instance. */
  className: string;
}

/**
 * A single floating glass "module" badge (icon + label) in the home hero
 * showcase. The forwarded ref is the animated element (GSAP float-in target).
 */
const HeroModuleBadge = forwardRef<HTMLDivElement, HeroModuleBadgeProps>(
  ({ src, alt, label, className }, ref) => (
    <div ref={ref} style={{ opacity: 0 }} className={className}>
      <Image
        src={src}
        alt={alt}
        width={33}
        height={33}
        className="xl:w-[33px] xl:h-[33px] lg:w-6 lg:h-6 md:w-[18px] md:h-[18px] w-[13px] h-[13px]"
      />
      <p className="text-[10px] leading-4 md:text-[12px] md:leading-[19px] lg:text-[22px] lg:leading-[38px] font-medium font-inter text-[var(--text-light)]">
        {label}
      </p>
    </div>
  )
);

HeroModuleBadge.displayName = "HeroModuleBadge";

export default HeroModuleBadge;
