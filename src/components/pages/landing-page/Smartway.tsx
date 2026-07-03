'use client';
import Image from 'next/image';
import React from 'react';
import Tooltip from '@/components/toolTip/Tooltip';
import SectionHeading from '../typography/SectionHeading';
import Link from 'next/link';
import { useSmartwayAnimation } from '@/hooks/useSmartwayAnimation';
import { SMARTWAY_ICON_DATA as iconData } from '@/constant/landingPage/smartwayIcons';

export default function PosIconsSection() {
  const {
    sectionRef,
    spanRef,
    handleMouseEnter,
    handleMouseLeave,
    activeTooltipId,
    handleTooltipClick,
  } = useSmartwayAnimation();

  return (
    <div
      ref={sectionRef}
      className="pinned-section-4 lg:mt-40 md:mt-28 mt-20 smart-features-icons"
    >
      <div className=" md:h-auto flex flex-col items-center justify-center">
        <section
          className="w-full relative rounded-[20px] lg:rounded-[40px] py-10 px-6 xl:p-[70px] lg:p-10 md:p-10 ownerinventory-landing__pos-icons-section bg-cover bg-no-repeat bg-top"
          style={{ backgroundImage: "url('https://d2qlv5xtew5ayb.cloudfront.net/assets/icons-section/icons-section.webp')" }}
        >
          <SectionHeading heading="Your Complete Inventory Toolkit" headingClassName="text-[var(--white-color)] text-center mb-6" />

          <p
            className="font-['Onest'] font-normal text-[var(--white-color)] xl:text-xl lg:text-lg text-base xl:leading-9 lg:leading-7 md:leading-6 leading-5 flex items-center justify-center gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span ref={spanRef}>
              <Image
                src="https://d2qlv5xtew5ayb.cloudfront.net/assets/icons-section/navigation-icon.svg"
                alt="Navigation Icon"
                width={24}
                height={24}
                className="flex items-center justify-center w-6 h-6 z-10"
              />
            </span>
            Click any feature below to get started.
          </p>

          <div className="relative h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-center items-center">
            <Link
              href="/"
              className="relative flex flex-col justify-center gap-[11px] items-center"
            >
              <Image
                src="https://d2qlv5xtew5ayb.cloudfront.net/assets/icons-section/icons-section-logo.webp"
                alt="Logo Image"
                width={198}
                height={100}
                className="flex items-center justify-center w-full mx-auto lg:max-w-[198px] lg:h-[198px] md:max-w-[132px] md:h-[139px] max-w-[100px] h-[100px] z-10"
              />
            </Link>

            {iconData.map((icon) => (
              <Link
                key={icon.id}
                href={`/features/${icon.category}`}
                id={icon.id}
                onClick={(e) => handleTooltipClick(e, icon.id)}
                className={`absolute cursor-pointer ${icon.size} rounded-[20px] border border-transparent hover:border-white w-auto flex items-center justify-center group`}
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-[20px] transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                />
                <Tooltip
                  text={icon.label}
                  isComparisonToolTip={false}
                  isVisible={activeTooltipId === icon.id}
                  industry="Retail"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
