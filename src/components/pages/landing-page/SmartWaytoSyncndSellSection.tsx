"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import MainHeading from "../typography/MainHeading";

gsap.registerPlugin(ScrollTrigger);

function SmartWaytoSyncndSellSection() {
  const [isTablet, setIsTablet] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on tablet
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    
    // GSAP animation setup - only if not on tablet to avoid performance issues
    if (!isTablet && sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);

      return () => {
        ctx.revert();
        window.removeEventListener('resize', checkTablet);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkTablet);
    };
  }, [isTablet]);

  useEffect(() => {
    // Handle video autoplay on tablet
    const video = videoRef.current;
    if (!video) return;

    const handleVideoPlay = async () => {
      try {
        // On tablet, ensure muted and inline plays
        if (isTablet) {
          video.muted = true;
          video.setAttribute("playsinline", "");
          video.setAttribute("webkit-playsinline", "");
        }
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (error) {
        console.log("Video autoplay prevented:", error);
        // Don't show error state for autoplay issues
      }
    };

    handleVideoPlay();

    // Fallback for video errors
    const handleVideoError = () => {
      console.error("Video failed to load");
      setVideoError(true);
    };

    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      video.removeEventListener('error', handleVideoError);
    };
  }, [isTablet]);

  const handleVideoLoad = () => {
    try {
      ScrollTrigger.refresh();
    } catch (e) {
      console.log("ScrollTrigger refresh error:", e);
    }
  };

  return (
    <section ref={sectionRef} className="wrapper lg:pt-[100px] md:pt-20 pt-[60px] px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center order-2 md:order-1">
          <MainHeading className="mb-6 md:mb-8 lg:mb-[50px]">
            Modern Features Designed for Real Owners and Real Growth
          </MainHeading>

          <div className="hidden md:flex gap-4 w-full items-center justify-start">
            <ButtonSm
              url="#"
              text="Book a Free Demo"
              bgColor="[#1AD1B9]"
              textColor="white"
              isBorder
              paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
            />
            <ButtonSm
              url="#"
              text="Contact Sales"
              bgColor="[#795CF5]"
              textColor="white"
              isBorder
              paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
            />
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full h-full order-1 md:order-2">
          {videoError ? (
            <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] bg-gray-100 rounded-3xl flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
                Video unavailable. Please try again later.
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover bg-transparent rounded-3xl"
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              controls={false}
              onLoadedMetadata={handleVideoLoad}
              onLoadedData={handleVideoLoad}
              poster="/assets/video-placeholder.jpg" // Add a placeholder
            >
              <source
                src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauturehome.mp4"
                type="video/mp4"
              />
              <source
                src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/modern-feauturehome.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        {/* Mobile Buttons */}
        <div className="md:hidden flex flex-col sm:flex-row gap-3 sm:gap-4 w-full items-center justify-start order-3">
          <ButtonSm
            url="#"
            text="Boost Your Sales"
            bgColor="[#1AD1B9]"
            textColor="white"
            isBorder
            paddingLg="lg:px-[64px] lg:py-5"
            className="w-full sm:w-auto"
          />
          <ButtonSm
            url="#"
            text="Scale with Ease"
            bgColor="[#795CF5]"
            textColor="white"
            isBorder
            paddingLg="lg:px-[64px] lg:py-5"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default SmartWaytoSyncndSellSection;