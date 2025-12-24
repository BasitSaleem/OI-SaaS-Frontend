"use client";

import React, { useState, useEffect, useRef } from "react";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import ButtonSm from "@/components/button/ButtonSm";
import ContactModal from "@/components/models/ContactModal";
import Link from "next/link";

interface SmartToolsProps {
  title?: string;
  description?: string;
}

const SmartTools: React.FC<SmartToolsProps> = ({
  title = "Stay Ahead with Smart Tools",
  description = "Everything you need to grow your business, learn at your pace, and stay connected with the community of smart sellers.",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on tablet
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    
    return () => {
      window.removeEventListener('resize', checkTablet);
    };
  }, []);

  useEffect(() => {
    // Handle video autoplay with better error handling
    const video = videoRef.current;
    if (!video) return;

    const handleVideoPlay = async () => {
      try {
        // On tablet, we need to be more careful with autoplay
        if (isTablet) {
          video.muted = true;
          video.setAttribute("playsinline", "");
          video.setAttribute("webkit-playsinline", "");
          
          // Try to play but don't force it
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsVideoPlaying(true))
              .catch(error => {
                console.log("Tablet video autoplay prevented:", error);
                // Don't show error for autoplay issues
              });
          }
        } else {
          await video.play();
          setIsVideoPlaying(true);
        }
      } catch (error) {
        console.log("Video play error:", error);
      }
    };

    handleVideoPlay();

    // Handle video errors
    const handleVideoError = (e: Event) => {
      console.error("Video error:", e);
      setVideoError(true);
    };

    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', () => {
      if (!isTablet) {
        handleVideoPlay();
      }
    });

    return () => {
      video.removeEventListener('error', handleVideoError);
    };
  }, [isTablet]);

  const handleRetryVideo = () => {
    setVideoError(false);
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  };

  return (
    <section className="wrapper px-4 md:px-6">
      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      
      <div
        ref={sectionRef}
        className="w-full px-4 md:px-8 pt-[40px] md:pt-[60px] pb-0 rounded-[20px] lg:rounded-[40px] mt-[28px] md:mt-20 lg:mt-[100px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/home-page-images/black-background.webp')",
        }}
      >
        <MainHeading className="text-center lg:mb-6 md:mb-6 mb-5 text-[var(--white-color)] px-2">
          {title}
        </MainHeading>
        
        <Paragraph className="text-center lg:mb-[42px] md:mb-6 mb-5 text-[var(--white-color)] px-2">
          {description}
        </Paragraph>
        
        <div className="flex gap-3 lg:gap-6 flex-col md:flex-row items-center justify-center relative z-50 px-2">
          <Link
            href="#"
            className="bg-transparent w-full md:w-auto px-4 py-2.5 md:px-5 md:py-3 lg:px-[40px] xl:px-[64px] lg:py-4 flex items-center justify-center text-sm md:text-base font-['Onest'] font-medium text-[var(--white-color)] border border-[var(--white-color)] hover:border-transparent rounded-full hover:text-black hover:bg-[var(--white-color)] transition-colors duration-300"
          >
            Watch Tutorials
          </Link>
          
          <ButtonSm
            url="#"
            text="Contact Now"
            bgColor="[#795CF5]"
            textColor="white"
            paddingLg="lg:px-[40px] xl:px-[64px] lg:py-4"
            isBorder
            className="w-full md:w-auto"
            onClick={() => setOpenModal(true)}
          />
        </div>

        <div className="w-full lg:max-w-[1000px] md:max-w-[760px] xl:max-w-[1065px] bg-transparent px-4 md:px-5 relative z-30 mx-auto md:mt-[-60px] lg:mt-[-120px] xl:mt-[-162px]">
          {videoError ? (
            <div className="relative w-full pt-[56.25%] bg-gray-800 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="text-white text-center mb-4">
                  Failed to load video
                </p>
                <button
                  onClick={handleRetryVideo}
                  className="px-4 py-2 bg-[var(--primary-purple)] text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto object-cover bg-transparent rounded-3xl"
                muted
                playsInline
                autoPlay={!isTablet}
                loop
                preload="auto"
                controls={false}
                poster="/assets/video-placeholder.jpg"
              >
                <source
                  src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/stay_ahead.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/stay_ahead+.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback play button for tablet if autoplay fails */}
              {isTablet && !isVideoPlaying && (
                <button
                  onClick={() => {
                    const video = videoRef.current;
                    if (video) {
                      video.play()
                        .then(() => setIsVideoPlaying(true))
                        .catch(error => console.log("Manual play failed:", error));
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-3xl"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartTools;