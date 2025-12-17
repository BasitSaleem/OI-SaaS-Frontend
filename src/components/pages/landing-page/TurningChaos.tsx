"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import CardHeading from "../typography/CardHeading";
import CardDesc from "../typography/CardDesc";
import { sign } from "crypto";

gsap.registerPlugin(ScrollTrigger);

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

interface TurningChaosProps {
  title: string;
  miniTitle?: string;
  description: string;
}

const TurningChaos: React.FC<TurningChaosProps> = ({
  title,
  description,
  miniTitle,
}) => {
  const chaosRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const firstBox = chaosRefs.current[0];
  if (!firstBox || !imageRef.current) return;

  const triggers: ScrollTrigger[] = [];

  const trigger = ScrollTrigger.create({
    trigger: firstBox,
    start: "top 70%",
    once: true,
    onEnter: () => {
      // Animate all numbers
      chaosRefs.current.forEach((el, index) => {
        if (!el) return;

        // Find the number span within the paragraph
        const numberSpan = el.querySelector('.number');
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
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    },
  });

  triggers.push(trigger);

  // Refresh ScrollTrigger for proper syncing
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return () => {
    triggers.forEach((t) => t.kill());
  };
}, []);

  return (
    <div className="overflow-hidden lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] mb-28 md:mb-20 lg:mb-[100px]">
      <div
        className={`relative  flex flex-col items-center justify-center w-full  pt-0 py-0 px-6 lg:px-[100px] overflow-hidden bg-[#F3F4F6] lg:rounded-bl-[40px] lg:rounded-br-[40px] rounded-bl-[24px] rounded-br-[24px] backdrop-blur-[42px]`}
        style={{
          backgroundImage: `
    linear-gradient(180deg, #FFFFFF 33%, transparent 60%),
    linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(207, 181, 249, 1) 50%, rgba(158, 2, 255, 0.3) 80%)
  `,
        }}
      >
        <div className="flex wrapper flex-col items-center justify-center w-full">
          <MainHeading className="text-center mx-auto md:max-w-screen-sm xl:max-w-5xl xl:mb-8 lg:mb-6 mb-5">
            {title} <span className="inline sm:block">{miniTitle}</span>
          </MainHeading>

          <Paragraph className="lg:mb-4 mb-6 text-center">
            {description}
          </Paragraph>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8 mt-10">
            {chaos.map(({ id, chaosHead, chaosSign, chaosDesc }, index) => (
              <div
                key={id}
                className="flex flex-col gap-3 items-center justify-start p-4 [var(--white-color)] border border-[rgba(255,255,255,0.5)] rounded-[30px] shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] backdrop-blur-[22px] text-center"
              >
                <p
                  className="lg:text-[42px] lg:leading-[100%] text-[32px] leading-[130%] font-onest text-center text-[var(--text-black)] font-semibold"
                  ref={(el) => {
                    chaosRefs.current[index] = el;
                  }}
                >
                  <span className="number">0</span>
                  {chaosSign && <span className="sign">{chaosSign}</span>}
                </p>

                <div className="flex flex-col items-center justify-start">
                  <h3 className="mb-2 lg:text-[28px] lg:leading-[30px] text-2xl leading-[135%] font-onest font-medium text-[var(--text-dark)] text-center">
                    {chaosHead}
                  </h3>
                  <p className="text-base font-onest leading-[170%] text-[var(--text-grey)] font-normal">
                    {chaosDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full max-w-[913px] mt-[45px]" ref={imageRef}>
            <Image
              src="/assets/home-page-images/chaos-mainImage.webp"
              alt="Chaos Image"
              width={800}
              height={600}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningChaos;
