"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";

const features = [
  {
    id: "inventorypos-system",
    title: "Smart POS System for Modern Retail",
    icon: "/assets/features-section/pos-system.svg",
    webm: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/pos-systemopt.webm",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/pos-systemopt.mp4",
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    id: "inventory-ecommerce",
    title: "Built-in E-commerce - Fully Synced and Ready to Sell",
    icon: "/assets/features-section/cart-icons.svg",
    webm: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/ecommerce-opt.webm",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/ecommerce-opt.mp4",
    iconWidth: 18,
    iconHeight: 14,
  },
  {
    id: "inventory-management",
    title: "Inventory Management to Stay in Control of Every Product",
    icon: "/assets/features-section/inventory-management.svg",
    webm: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/inventory-managementopt.webm",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/inventory-managementopt.mp4",
    mediaClass: "scale-[1.1]",
    iconWidth: 16,
    iconHeight: 14,
  },
  {
    id: "inventory-autosync",
    title: "Streamline Manufacturing + Stay in Control of Every Process",
    icon: "/assets/features-section/autosync.svg",
    webm: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/manufacturing-opt.webm",
    mp4: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/manufacturing-opt.mp4",
    iconWidth: 18,
    iconHeight: 18,
  },
];

export default function FeaturesTabSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [progressMap, setProgressMap] = useState<{ [key: string]: number }>({});
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  
  const desktopRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const mobileRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const animationRef = useRef<number | null>(null);
  const autoRotationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoEndedHandlersRef = useRef<{ [key: string]: (() => void) | null }>({});

  // Detect tablet screen
  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    
    return () => {
      window.removeEventListener('resize', checkTablet);
    };
  }, []);

  // Function to get next feature index
  const getNextFeatureIndex = useCallback((currentId: string) => {
    const currentIndex = features.findIndex(f => f.id === currentId);
    return (currentIndex + 1) % features.length;
  }, []);

  // Function to rotate to next feature
  const rotateToNextFeature = useCallback(() => {
    if (!isAutoRotating) return;
    const nextIndex = getNextFeatureIndex(activeFeature);
    setActiveFeature(features[nextIndex].id);
  }, [activeFeature, getNextFeatureIndex, isAutoRotating]);

  // Handle manual tab click
  const handleTabClick = (featureId: string) => {
    setActiveFeature(featureId);
    setIsAutoRotating(false);
    
    // Reset progress for all features
    setProgressMap({});
    
    // Resume auto rotation after 10 seconds of inactivity
    if (autoRotationTimerRef.current) {
      clearTimeout(autoRotationTimerRef.current);
    }
    
    autoRotationTimerRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  // Setup video event listeners
  useEffect(() => {
    const setupVideoEndListeners = () => {
      features.forEach(feature => {
        const desktopVideo = desktopRefs.current[feature.id];
        const mobileVideo = mobileRefs.current[feature.id];
        
        // Clean up previous handlers
        if (videoEndedHandlersRef.current[feature.id]) {
          desktopVideo?.removeEventListener('ended', videoEndedHandlersRef.current[feature.id]!);
          mobileVideo?.removeEventListener('ended', videoEndedHandlersRef.current[feature.id]!);
        }

        // Create new handler for this feature
        const handler = () => {
          if (feature.id === activeFeature && isAutoRotating) {
            rotateToNextFeature();
          }
        };
        
        videoEndedHandlersRef.current[feature.id] = handler;
        
        // Add event listeners
        desktopVideo?.addEventListener('ended', handler);
        mobileVideo?.addEventListener('ended', handler);
      });
    };

    setupVideoEndListeners();

    return () => {
      // Cleanup event listeners
      features.forEach(feature => {
        const desktopVideo = desktopRefs.current[feature.id];
        const mobileVideo = mobileRefs.current[feature.id];
        const handler = videoEndedHandlersRef.current[feature.id];
        
        if (handler) {
          desktopVideo?.removeEventListener('ended', handler);
          mobileVideo?.removeEventListener('ended', handler);
        }
      });
      
      if (autoRotationTimerRef.current) {
        clearTimeout(autoRotationTimerRef.current);
      }
    };
  }, [activeFeature, rotateToNextFeature, isAutoRotating]);

  // Animation for progress bar
  useEffect(() => {
    const video = desktopRefs.current[activeFeature] || mobileRefs.current[activeFeature];
    
    if (!video) {
      console.log("Video not found for", activeFeature);
      return;
    }

    // Reset progress when switching tabs
    setProgressMap(prev => ({ ...prev, [activeFeature]: 0 }));
    
    const handleVideoPlay = async () => {
      try {
        // On tablet, we might need to wait for user interaction
        if (isTablet) {
          video.muted = true;
        }
        await video.play();
      } catch (error) {
        console.log("Video autoplay prevented:", error);
        // Fallback: show play button or continue without video
      }
    };

    handleVideoPlay();

    const animateProgress = () => {
      if (video && video.duration > 0 && !video.paused && !video.ended) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgressMap(prev => ({ ...prev, [activeFeature]: percent }));
        animationRef.current = requestAnimationFrame(animateProgress);
      }
    };

    animationRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeFeature, isTablet]);

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
    <section className="features-tab-section overflow-hidden relative mt-20 md:mt-28 lg:mt-[100px] py-10 md:py-10 z-20 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[#231F20]">
      <div className="absolute top-[-150px] right-[-0px] z-[300]">
        <div className="bg-[var(--primary-purple)] h-[200px] lg:h-[300px] w-[200px] lg:w-[300px] blur-[400px] lg:blur-[300px] rounded-full"></div>
      </div>
      
      <div className="wrapper relative z-[400] px-4 md:px-6">
        <MainHeading className="max-w-[800px] mx-auto leading-tight text-[var(--white-color)] lg:mb-20 md:mb-[60px] mb-10 text-center">
          Powerful Features Built for Growing Businesses
        </MainHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
          {/* DESKTOP + TABLET VIDEO */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`w-full max-w-[743px] bg-transparent overflow-hidden rounded-3xl h-full max-h-[400px] lg:max-h-[460px] p-1 ${
                  activeFeature === feature.id ? "flex" : "hidden"
                }`}
              >
                <video
                  ref={(el) => {
                    desktopRefs.current[feature.id] = el;
                  }}
                  className={`w-full h-full object-cover bg-transparent rounded-3xl ${feature.mediaClass || ""}`}
                  muted
                  playsInline
                  autoPlay={activeFeature === feature.id}
                  loop={false}
                  preload="auto"
                  controls={false}
                  onError={(e) => console.error("Video error:", e)}
                >
                  <source src={feature.mp4} type="video/mp4" />
                  <source src={feature.webm} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (TABS + MOBILE VIDEO) */}
          <div className="flex flex-col gap-6 md:gap-10">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const progress = progressMap[feature.id] || 0;

              return (
                <div key={feature.id} className="w-full">
                  {/* TAB BUTTON */}
                  <button
                    className="flex items-center gap-4 w-full text-left"
                    onClick={() => handleTabClick(feature.id)}
                    aria-label={`View ${feature.title}`}
                  >
                    <div
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-[var(--primary-purple)]" : "bg-[rgba(243,244,246,0.1)]"
                      }`}
                    >
                      <Image 
                        src={feature.icon} 
                        alt=""
                        width={feature.iconWidth} 
                        height={feature.iconHeight}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>

                    <span
                      className={`font-['Onest'] ${
                        isActive
                          ? "text-[var(--primary-purple)] font-semibold text-base md:text-lg lg:text-2xl"
                          : "text-[var(--white-color)] font-medium text-base md:text-lg lg:text-xl"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </button>

                  {/* PROGRESS BAR */}
                  {isActive && (
                    <div className="w-full h-1 mt-3 md:mt-5 rounded-2xl bg-[rgba(243,244,246,0.1)]">
                      <div
                        className="h-full bg-[#F3F4F6] transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}

                  {/* MOBILE VIDEO */}
                  {isActive && (
                    <div className="md:hidden w-full mt-5">
                      <video
                        ref={(el) => {
                          mobileRefs.current[feature.id] = el;
                        }}
                        className="w-full h-auto object-cover rounded-3xl max-h-[300px]"
                        muted
                        playsInline
                        autoPlay
                        loop={false}
                        preload="auto"
                        onError={(e) => console.error("Mobile video error:", e)}
                      >
                        <source src={feature.mp4} type="video/mp4" />
                        <source src={feature.webm} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
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