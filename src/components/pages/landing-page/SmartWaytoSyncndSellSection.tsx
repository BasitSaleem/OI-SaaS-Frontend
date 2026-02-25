"use client";

import { useState, useEffect } from "react";
import globalGsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";
import ContactModal from "@/components/models/ContactModal";
import { useSafariDetector } from "@/hooks/useSafariDetector";

if (typeof window !== "undefined") {
  globalGsap.registerPlugin(ScrollTrigger);
}

function SmartWaytoSyncndSellSection() {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { shouldShowImage } = useSafariDetector();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <section className="wrapper lg:pt-[100px] md:pt-20 pt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <MainHeading className=" mb-0 md:mb-10 lg:mb-[50px]">
              Modern Features Designed for Real Owners and Real Growth
            </MainHeading>

            <div className="hidden md:flex gap-4 w-full items-center justify-start">
              <ButtonSm
                url="/coming-soon"
                text="Book a Free Demo"
                bgColor="var(--primary-teal)"
                textColor="white"
                isBorder
                paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
              />
              <ButtonSm
                url="#"
                text="Contact Sales"
                bgColor="var(--primary-purple)"
                textColor="white"
                isBorder
                paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>

          <div className="w-full bg-white h-full aspect-auto md:aspect-auto">
            {shouldShowImage || isMobile ? (
              <Image
                src="/assets/home-page-images/animations/trolly-image.webp"
                alt="Smart sync and sell"
                width={743}
                height={460}
                className="w-full h-auto rounded-3xl"
                priority
              />
            ) : (
              <video
                className="w-full h-full object-cover rounded-3xl bg-white lazy-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/home-page-videos/trolly-anim.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="md:hidden flex gap-4 w-full items-center justify-start">
            <ButtonSm
              url="#"
              text="Boost Your Sales"
              bgColor="var(--primary-teal)"
              textColor="white"
              isBorder
              paddingLg="lg:px-[64px] lg:py-5"
              className="w-full"
            />
            <ButtonSm
              url="#"
              text="Scale with Ease"
              bgColor="var(--primary-purple)"
              textColor="white"
              isBorder
              paddingLg="lg:px-[64px] lg:py-5"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartWaytoSyncndSellSection;
