"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import MainHeading from "../typography/MainHeading";
import { LANDING_FEATURES } from "@/constant/landingPageData";
import Image from "next/image";
import { useSafariDetector } from "@/hooks/useSafariDetector";


type VideoRefs = {
  [key: string]: HTMLVideoElement | null;
};

export default function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const videoRefs = useRef<VideoRefs>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); 
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  const { isTablet, isSafari, shouldShowImage } = useSafariDetector();

  const features = LANDING_FEATURES;
  
  // Lazy Loading State
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Load once and keep it
        }
      },
      { threshold: 0.1 } // Start loading when 10% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  // Preload only active video (Disabled on Safari/Tablet or if not in view)
  const preloadVideo = useCallback((videoId: string, videoSrc: string) => {
    if (shouldShowImage || loadedVideos.has(videoId) || !isInView) return;

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoSrc;
    video.preload = 'metadata';
    video.src = videoSrc;
    video.muted = true;
    
    video.onloadeddata = () => {
      setLoadedVideos(prev => new Set([...prev, videoId]));
    };

    video.onerror = () => {
      console.error(`Failed to load video: ${videoId}`);
    };
  }, [loadedVideos, shouldShowImage]);

  // Function to move to next tab automatically
  const moveToNextTab = useCallback(() => {
    if (!isAutoPlaying) return;

    const currentFeatureIndex = features.findIndex(f => f.tabIndex === activeTab);
    let nextFeature;
    
    if (currentFeatureIndex < features.length - 1) {
      nextFeature = features[currentFeatureIndex + 1];
    } else {
      nextFeature = features[0];
    }

    if (nextFeature) {
      handleTabClick(nextFeature.tabIndex, `${nextFeature.id}-video`, true);
    }
  }, [activeTab, isAutoPlaying, features]);


  
  // Handle progress and auto-advance
  useEffect(() => {
    let animationFrameId: number;
    let tabletInterval: NodeJS.Timeout;
    const activeFeature = features.find(f => f.tabIndex === activeTab);
    
    const handleVideoEnded = () => {
      if (isAutoPlaying && !shouldShowImage) {
        setTimeout(() => {
          moveToNextTab();
        }, 300);
      }
    };

    const updateProgress = () => {
      if (activeFeature && !shouldShowImage) {
        const desktopVideoId = `${activeFeature.id}-video`;
        const mobileVideoId = `${activeFeature.id}-mobile-video`;
        const desktopVideo = videoRefs.current[desktopVideoId];
        const mobileVideo = videoRefs.current[mobileVideoId];
        const video = desktopVideo || mobileVideo;
        const videoId = desktopVideo ? desktopVideoId : mobileVideoId;

        if (video && !video.paused && video.duration > 0) {
          const percent = (video.currentTime / video.duration) * 100;
          
          // Direct DOM update for 60fps smoothness
          const progressBar = progressRefs.current[videoId];
          if (progressBar) {
            progressBar.style.width = `${percent}%`;
          }
        }
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    // Fallback Timer Logic (Tablet or Safari)
    if (shouldShowImage && activeFeature && isAutoPlaying) {
      const tabletProgressKey = `${activeFeature.id}-tablet`;
      let progress = 0;
      const duration = 5000; 
      const intervalTime = 16; 
      const increment = (intervalTime / duration) * 100;

      const progressBar = progressRefs.current[tabletProgressKey];
      if (progressBar) progressBar.style.width = '0%';

      tabletInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
          progress = 100;
          const progressBar = progressRefs.current[tabletProgressKey];
          if (progressBar) progressBar.style.width = '100%';
          
          clearInterval(tabletInterval);
          setTimeout(() => {
            moveToNextTab();
          }, 100);
        } else {
          const progressBar = progressRefs.current[tabletProgressKey];
          if (progressBar) progressBar.style.width = `${progress}%`;
        }
      }, intervalTime);
    }

    if (activeFeature && !shouldShowImage) {
      const desktopVideo = videoRefs.current[`${activeFeature.id}-video`];
      const mobileVideo = videoRefs.current[`${activeFeature.id}-mobile-video`];

      if (desktopVideo) desktopVideo.addEventListener("ended", handleVideoEnded);
      if (mobileVideo) mobileVideo.addEventListener("ended", handleVideoEnded);

      animationFrameId = requestAnimationFrame(updateProgress);
      
      return () => {
        if (desktopVideo) desktopVideo.removeEventListener("ended", handleVideoEnded);
        if (mobileVideo) mobileVideo.removeEventListener("ended", handleVideoEnded);
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => {
      if (tabletInterval) clearInterval(tabletInterval);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab, isAutoPlaying, features, moveToNextTab, shouldShowImage, isInView]);

  // Handle tab click
  const handleTabClick = useCallback((tabIndex: number, videoId: string, isAutoTransition: boolean = false) => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }

    if (!isAutoTransition) {
      setIsAutoPlaying(false);
      autoPlayTimeoutRef.current = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 2000); 
    }

    // Skip video logic if showing images
    if (shouldShowImage) {
      setActiveTab(tabIndex);
      return;
    }

    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        video.pause();
      }
    });

    setActiveTab(tabIndex);

    // Reset all progress bars on tab change
    Object.values(progressRefs.current).forEach(bar => {
      if (bar) bar.style.width = '0%';
    });

    const currentFeatureIndex = features.findIndex(f => f.tabIndex === tabIndex);
    if (currentFeatureIndex < features.length - 1) {
      const nextFeature = features[currentFeatureIndex + 1];
      preloadVideo(`${nextFeature.id}-video`, nextFeature.videoSrc);
      preloadVideo(`${nextFeature.id}-mobile-video`, nextFeature.videoSrc);
    }

    setTimeout(() => {
      const selectedDesktopVideo = videoRefs.current[videoId];
      const selectedMobileVideo = videoRefs.current[`${videoId.replace('-video', '-mobile-video')}`];
      
      if (selectedDesktopVideo) {
        selectedDesktopVideo.currentTime = 0; 
        selectedDesktopVideo.play().catch((error) => {
          if (error.name !== 'AbortError') {
            console.error("Desktop video play failed:", error);
          }
        });
      }
      
      if (selectedMobileVideo) {
        selectedMobileVideo.currentTime = 0; 
        selectedMobileVideo.play().catch((error) => {
          if (error.name !== 'AbortError') {
            console.error("Mobile video play failed:", error);
          }
        });
      }
    }, 100);
  }, [features, preloadVideo, shouldShowImage]);

  // Initial load
  useEffect(() => {
    if (isInitialLoad && !shouldShowImage) {
      const firstFeature = features[0];
      if (firstFeature) {
        preloadVideo(`${firstFeature.id}-video`, firstFeature.videoSrc);
        preloadVideo(`${firstFeature.id}-mobile-video`, firstFeature.videoSrc);
      }
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, features, preloadVideo, shouldShowImage]);

  // Initial play trigger when section comes into view
  useEffect(() => {
    if (isInView && !shouldShowImage) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
        const activeFeature = features.find(f => f.tabIndex === activeTab);
        if (activeFeature) {
          const video = videoRefs.current[`${activeFeature.id}-video`];
          if (video && video.paused) {
            video.play().catch((error) => {
              if (error.name !== 'AbortError') {
                console.error("Initial playback failed:", error);
              }
            });
          }
        }
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isInView, shouldShowImage, features]); // Runs once when entering view

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="features-tab-section overflow-hidden relative mt-20 md:mt-28 lg:mt-[100px] py-10 md:py-10 z-20 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[#231F20] z-11">
      <div className="absolute top-[-150px] right-[-0px] z-[300]">
        <div className="bg-[var(--primary-purple)] h-[200px] lg:h-[300px] w-[200px] lg:w-[300px] blur-[400px] lg:blur-[300px] rounded-full"></div>
      </div>
      <div className="wrapper relative z-[400]">
        <MainHeading className="max-w-[800px] leading-tight text-[var(--white-color)] lg:mb-20 md:mb-[60px] mb-10">
          Powerful Features Built for Growing Businesses
        </MainHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
          {/* IMAGE SECTION */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`w-full max-w-[743px] bg-transparent overflow-hidden rounded-3xl h-full max-h-[460px] p-1 ${
                  activeTab === feature.tabIndex ? "" : "hidden"
                }`}
              >
                {shouldShowImage ? (
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    width={743}
                    height={460}
                    className="w-full h-full object-contain overflow-hidden bg-transparent rounded-3xl"
                    priority={index === 0}
                  />
                ) : isInView ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[`${feature.id}-video`] = el;
                    }}
                    className="w-full h-full object-cover overflow-hidden bg-transparent rounded-3xl lazy-video feature-video"
                    autoPlay={activeTab === feature.tabIndex}
                    muted
                    loop={false}
                    playsInline
                    preload="metadata"
                  >
                    <source src={feature.videoSrc} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            ))}
          </div>

          {/* FEATURES SECTION */}
          <div className="flex flex-col items-start justify-center gap-10 xl:gap-10 h-full">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col w-full items-start justify-start">
                <button
                  className="feature-tab flex items-center justify-start gap-4 xl:gap-6 cursor-pointer w-full text-left"
                  onClick={() => handleTabClick(feature.tabIndex, `${feature.id}-video`, false)}
                  type="button"
                  aria-label={`Show ${feature.title}`}
                >
                  <div
                    className={`w-full max-w-11 h-11 m rounded-full flex items-center justify-center ${
                      activeTab === feature.tabIndex ? "bg-(--primary-purple)" : "bg-[rgba(243,244,246,0.1)]"
                    }`}
                  >
                    <img
                      src={feature.icon}
                      width={feature.iconWidth} 
                      height={feature.iconHeight} 
                      className="w-6 h-6 md:w-auto md:h-auto"
                      alt={feature.title}
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`font-['Onest'] ${
                      activeTab === feature.tabIndex
                        ? "text-(--primary-purple) font-semibold text-lg lg:text-2xl"
                        : "text-(--white-color) text-base lg:text-xl"
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
                <div
                  className={`progress-bar w-full h-1 xl:h-1.5 mt-5 xl:mt-7 rounded-2xl bg-[rgba(243,244,246,0.1)] overflow-hidden ${
                    activeTab === feature.tabIndex ? "" : "hidden"
                  }`}
                >
                  <div
                    ref={(el) => {
                      progressRefs.current[`${feature.id}-video`] = el;
                      progressRefs.current[`${feature.id}-mobile-video`] = el;
                      progressRefs.current[`${feature.id}-tablet`] = el;
                    }}
                    className="h-full bg-[#F3F4F6]"
                    style={{ width: '0%' }}
                  />
                </div>
                {/* Mobile video section */}
                <div
                  className={`md:hidden w-full feature-section mt-5 mobile-feature-image ${
                    activeTab === feature.tabIndex ? "" : "hidden"
                  }`}
                >
                  {shouldShowImage ? (
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={743}
                      height={460}
                      className="w-full h-full object-contain overflow-hidden bg-transparent rounded-3xl"
                    />
                  ) : isInView ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[`${feature.id}-mobile-video`] = el;
                      }}
                      className="w-full object-cover rounded-3xl lazy-video feature-video"
                      autoPlay={activeTab === feature.tabIndex}
                      muted
                      loop={false}
                      playsInline
                      preload="metadata"
                    >
                      <source src={feature.videoSrc} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
