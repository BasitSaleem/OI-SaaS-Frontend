"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";

const features = [
  {
    id: "inventorypos-system",
    title: "Smart POS System for Modern Retail",
    icon: "/assets/features-section/pos-system.svg",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/home-page-videos/pos-systemopt.mp4",
    poster: "/assets/features-section/pos-poster.jpg", // Optional: Add poster images
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    id: "inventory-ecommerce",
    title: "Built-in E-commerce - Fully Synced and Ready to Sell",
    icon: "/assets/features-section/cart-icons.svg",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/home-page-videos/ecommerce-opt.mp4",
    poster: "/assets/features-section/ecommerce-poster.jpg",
    iconWidth: 18,
    iconHeight: 14,
  },
  {
    id: "inventory-management",
    title: "Inventory Management to Stay in Control of Every Product",
    icon: "/assets/features-section/inventory-management.svg",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/home-page-videos/inventory-managementopt.mp4",
    poster: "/assets/features-section/inventory-poster.jpg",
    mediaClass: "scale-[1.1]",
    iconWidth: 16,
    iconHeight: 14,
  },
  {
    id: "inventory-autosync",
    title: "Streamline Manufacturing + Stay in Control of Every Process",
    icon: "/assets/features-section/autosync.svg",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/home-page-videos/manufacturing-opt.mp4",
    poster: "/assets/features-section/manufacturing-poster.jpg",
    iconWidth: 18,
    iconHeight: 18,
  },
];

export default function FeaturesTabSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [progressMap, setProgressMap] = useState<{ [key: string]: number }>({});
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set([features[0].id]));
  
  const desktopRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const mobileRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const animationRef = useRef<number | null>(null);
  const autoRotationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to get next feature index
  const getNextFeatureIndex = useCallback((currentId: string) => {
    const currentIndex = features.findIndex(f => f.id === currentId);
    return (currentIndex + 1) % features.length;
  }, []);

  // Function to rotate to next feature
  const rotateToNextFeature = useCallback(() => {
    if (isAutoRotating) {
      const nextIndex = getNextFeatureIndex(activeFeature);
      setActiveFeature(features[nextIndex].id);
    }
  }, [activeFeature, getNextFeatureIndex, isAutoRotating]);

  // Handle manual tab click
  const handleTabClick = (featureId: string) => {
    setActiveFeature(featureId);
    setIsAutoRotating(false);
    
    // Mark video as loaded
    if (!loadedVideos.has(featureId)) {
      setLoadedVideos(prev => new Set([...prev, featureId]));
    }
    
    // Resume auto rotation after 10 seconds of inactivity
    if (autoRotationTimerRef.current) {
      clearTimeout(autoRotationTimerRef.current);
    }
    
    autoRotationTimerRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  // Handle video end for auto rotation
  useEffect(() => {
    const handleVideoEnd = () => {
      rotateToNextFeature();
    };

    const currentDesktopVideo = desktopRefs.current[activeFeature];
    const currentMobileVideo = mobileRefs.current[activeFeature];

    if (currentDesktopVideo) {
      currentDesktopVideo.addEventListener('ended', handleVideoEnd);
    }
    if (currentMobileVideo) {
      currentMobileVideo.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (currentDesktopVideo) {
        currentDesktopVideo.removeEventListener('ended', handleVideoEnd);
      }
      if (currentMobileVideo) {
        currentMobileVideo.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [activeFeature, rotateToNextFeature]);

  // Animation for progress bar
  useEffect(() => {
    const video =
      desktopRefs.current[activeFeature] ||
      mobileRefs.current[activeFeature];

    if (!video) return;

    // Reset progress when switching tabs
    setProgressMap((prev) => ({ ...prev, [activeFeature]: 0 }));
    
    const playVideo = async () => {
      try {
        // Only play if video is loaded
        if (loadedVideos.has(activeFeature)) {
          video.currentTime = 0;
          await video.play();
        }
      } catch (e) {
        console.log("Autoplay blocked:", e);
      }
    };

    playVideo();

    const animateProgress = () => {
      if (video && video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgressMap((prev) => ({ ...prev, [activeFeature]: percent }));
      }
      animationRef.current = requestAnimationFrame(animateProgress);
    };

    animationRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeFeature, loadedVideos]);

  // Preload next video when current one is playing
  useEffect(() => {
    if (isAutoRotating) {
      const nextIndex = getNextFeatureIndex(activeFeature);
      const nextFeatureId = features[nextIndex].id;
      
      if (!loadedVideos.has(nextFeatureId)) {
        // Create a video element to preload
        const preloadVideo = document.createElement('video');
        preloadVideo.src = features[nextIndex].mp4;
        preloadVideo.preload = 'metadata'; // Only load metadata to save bandwidth
        preloadVideo.onloadeddata = () => {
          setLoadedVideos(prev => new Set([...prev, nextFeatureId]));
        };
      }
    }
  }, [activeFeature, isAutoRotating, loadedVideos, getNextFeatureIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoRotationTimerRef.current) {
        clearTimeout(autoRotationTimerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="features-tab-section overflow-hidden relative mt-20 md:mt-28 lg:mt-[100px] py-10 md:py-10 z-20 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[#231F20] z-11">
      <div className="absolute top-[-150px] right-[-0px] z-[300]">
        <div className="bg-[var(--primary-purple)] h-[200px] lg:h-[300px] w-[200px] lg:w-[300px] blur-[400px] lg:blur-[300px] rounded-full"></div>
      </div>
      
      <div className="wrapper relative z-[400]">
        <MainHeading className="max-w-[800px] leading-tight text-[var(--white-color)] lg:mb-20 md:mb-[60px] mb-10">
          Powerful Features Built for Growing Businesses
        </MainHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
          {/* DESKTOP + TABLET VIDEO */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const isLoaded = loadedVideos.has(feature.id);
              
              return (
                <div
                  key={feature.id}
                  className={`w-full max-w-[743px] bg-transparent overflow-hidden rounded-3xl h-full max-h-[460px] p-1 ${
                    isActive ? "flex" : "hidden"
                  }`}
                >
                  {isLoaded ? (
                    <video
                      ref={(el) => {
                        desktopRefs.current[feature.id] = el;
                      }}
                      className={`w-full h-full object-cover overflow-hidden bg-transparent rounded-3xl ${feature.mediaClass || ""}`}
                      muted
                      playsInline
                      autoPlay={isActive}
                      loop={false}
                      preload={isActive ? "auto" : "none"}
                      controls={false}
                      poster={feature.poster}
                    >
                      <source src={feature.mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gray-800 rounded-3xl flex items-center justify-center">
                      <div className="text-white">Loading video...</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE (TABS + MOBILE VIDEO) */}
          <div className="flex flex-col gap-10">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const isLoaded = loadedVideos.has(feature.id);
              const progress = progressMap[feature.id] || 0;

              return (
                <div key={feature.id} className="w-full">
                  {/* TAB BUTTON */}
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handleTabClick(feature.id)}
                  >
                    <div
                      className={`w-full max-w-11 h-11 m rounded-full flex items-center justify-center ${
                        isActive ? "bg-(--primary-purple)" : "bg-[rgba(243,244,246,0.1)]"
                      }`}
                    >
                      <Image 
                        src={feature.icon} 
                        alt="icon-name"
                        width={feature.iconWidth} 
                        height={feature.iconHeight} 
                        className="w-6 h-6 md:w-auto md:h-auto" 
                      />
                    </div>

                    <span
                      className={`font-['Onest'] ${
                        isActive
                          ? "text-(--primary-purple) font-semibold text-lg lg:text-2xl"
                          : "text-(--white-color) text-base lg:text-xl"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  {isActive && (
                    <div className="w-full h-1 mt-5 rounded-2xl bg-[rgba(243,244,246,0.1)]">
                      <div
                        className="h-full bg-[#F3F4F6]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}

                  {/* MOBILE VIDEO */}
                  {isActive && (
                    <div className="md:hidden w-full mt-5">
                      {isLoaded ? (
                        <video
                          ref={(el) => {
                            mobileRefs.current[feature.id] = el;
                          }}
                          className="w-full object-cover rounded-3xl"
                          muted
                          playsInline
                          autoPlay
                          loop={false}
                          preload="auto"
                          poster={feature.poster}
                        >
                          <source src={feature.mp4} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="w-full h-64 bg-gray-800 rounded-3xl flex items-center justify-center">
                          <div className="text-white">Loading video...</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}