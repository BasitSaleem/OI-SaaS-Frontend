"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import SectionHeading from "../typography/SectionHeading";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Chaos {
  id: number;
  chaosNumber: string;
  chaosSign?: string;
  chaosHead: string;
  chaosDesc: string;
}

const chaos: Chaos[] = [
  {
    id: 1,
    chaosNumber: "5000",
    chaosSign: "+",
    chaosHead: "Items",
    chaosDesc: "Items Already Organized",
  },
  {
    id: 2,
    chaosNumber: "90",
    chaosSign: "%",
    chaosHead: "Efficiency",
    chaosDesc: "Users Report Time Saved",
  },
  {
    id: 3,
    chaosNumber: "3",
    chaosHead: "Reach",
    chaosDesc: "Serving Teams in Continents",
  },
  {
    id: 4,
    chaosNumber: "250",
    chaosSign: "+",
    chaosHead: "Users",
    chaosDesc: "Active Users Growing With Us",
  },
];


const DEFAULT_GRADIENT_BACKGROUND = `
 
  linear-gradient(
    to bottom,
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
    135deg,
     rgba(175, 205, 255, 0.70) 0%,
     rgba(160, 230, 245, 0.70) 30%,
    rgba(210, 185, 255, 0.90) 70%
  )
`;

interface TurningChaosProps {
  title: string;
  miniTitle?: string;
  description: string;
  gradientBackground?: string;
}

const TurningChaos: React.FC<TurningChaosProps> = ({
  title,
  description,
  miniTitle,
  gradientBackground = DEFAULT_GRADIENT_BACKGROUND,
}) => {
  const chaosRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const firstBox = chaosRefs.current[0];
      if (!firstBox || !imageRef.current) return;

      ScrollTrigger.create({
        trigger: firstBox,
        start: "top 70%",
        once: true,
        onEnter: () => {
          // Animate all numbers
          chaosRefs.current.forEach((el, index) => {
            if (!el) return;

            const numberSpan = el.querySelector(".number");
            if (!numberSpan) return;

            const finalValue = parseInt(chaos[index].chaosNumber, 10) || 0;
            const obj = { val: 0 };

            gsap.to(obj, {
              val: finalValue,
              duration: 1,
              ease: "power3.out",
              onUpdate: () => {
                numberSpan.textContent = Math.floor(obj.val).toLocaleString();
              },
            });
          });

          // Animate image at the same time
          gsap.fromTo(
            imageRef.current,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
          );
        },
      });

      // Refresh ScrollTrigger for proper syncing
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] mb-28 md:mb-20 lg:mb-[100px] lg:mt-[100px] md:mt-28 mt-20">
      <div
        className={`relative z-1  flex flex-col items-center justify-center  w-full  pt-0 py-0 px-6 lg:px-[100px] overflow-hidden bg-[var(--background-halfwhite)] lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] `}
        style={{
          backgroundImage: `linear-gradient(180deg, var(--white-color) 20%, transparent 100%)`,
          background: gradientBackground,
        }}
      >
        <div className="w-full absolute blur-3xl left-0 right-0 z-2 h-full"></div>
        <div className="relative z-10 flex wrapper flex-col items-center justify-center w-full">
          <SectionHeading heading={<>{title} <span className="inline sm:block">{miniTitle}</span></>} headingClassName="text-center mx-auto md:max-w-screen-sm xl:max-w-5xl xl:mb-8 lg:mb-6 mb-5" description={description} descriptionClassName="lg:mb-4 mb-6 text-center" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8 mt-10">
            {chaos.map(({ id, chaosHead, chaosSign, chaosDesc }, index) => (
              <div
                key={id}
                className="flex flex-col gap-3 items-center justify-start p-4 bg-[var(--white-color)] border border-[rgba(var(--white-color-rgb),0.5)] rounded-[30px] shadow-[0_4px_4px_0_rgba(var(--text-dark-rgb),0.13)] backdrop-blur-[22px] text-center"
              >
                <p
                  className="lg:text-[42px] lg:leading-[100%] text-[32px] leading-[130%] font-['Onest'] text-center text-[var(--text-black)] font-semibold"
                  ref={(el) => {
                    chaosRefs.current[index] = el;
                  }}
                >
                  <span className="number">0</span>
                  {chaosSign && <span className="sign">{chaosSign}</span>}
                </p>

                <div className="flex flex-col items-center justify-start">
                  <p className="mb-2 lg:text-[28px] lg:leading-[30px] text-2xl leading-[135%] font-['Onest'] font-medium text-[var(--text-dark)] text-center">
                    {chaosHead}
                  </p>
                  <p className="text-base font-['Onest'] leading-[170%] text-[var(--text-grey)] font-normal">
                    {chaosDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full max-w-[913px] mt-[45px]" ref={imageRef}>
            <Image
              src="https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/chaos-mainImage.webp"
              alt="Chaos Into Clarity Dashboard"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TurningChaos;
