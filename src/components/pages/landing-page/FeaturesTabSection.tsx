"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import MainHeading from "../typography/MainHeading";
import { LANDING_FEATURES } from "@/constant/landingPageData";


type VideoRefs = {
  [key: string]: HTMLVideoElement | null;
};

export default function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [videoProgress, setVideoProgress] = useState<{[key: string]: number}>({});
  const videoRefs = useRef<VideoRefs>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Start with auto-play enabled
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const features = LANDING_FEATURES;

  // Preload only active video
  const preloadVideo = useCallback((videoId: string, videoSrc: string) => {
    if (loadedVideos.has(videoId)) return;

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoSrc;
    video.muted = true;
    
    video.onloadeddata = () => {
      setLoadedVideos(prev => new Set([...prev, videoId]));
    };

    video.onerror = () => {
      console.error(`Failed to load video: ${videoId}`);
    };
  }, [loadedVideos]);

  // Function to move to next tab automatically
  const moveToNextTab = useCallback(() => {
    if (!isAutoPlaying) return;

    const currentFeatureIndex = features.findIndex(f => f.tabIndex === activeTab);
    let nextFeature;
    
    if (currentFeatureIndex < features.length - 1) {
      nextFeature = features[currentFeatureIndex + 1];
    } else {
      // Loop back to first feature
      nextFeature = features[0];
    }

    if (nextFeature) {
      handleTabClick(nextFeature.tabIndex, `${nextFeature.id}-video`, true);
    }
  }, [activeTab, isAutoPlaying, features]);

  // Handle video progress and ended state
  useEffect(() => {
    let animationFrameId: number;
    const activeFeature = features.find(f => f.tabIndex === activeTab);
    
    const handleVideoEnded = () => {
      if (isAutoPlaying) {
        setTimeout(() => {
          moveToNextTab();
        }, 300);
      }
    };

    const updateProgress = () => {
      if (activeFeature) {
        const desktopVideoId = `${activeFeature.id}-video`;
        const mobileVideoId = `${activeFeature.id}-mobile-video`;
        const desktopVideo = videoRefs.current[desktopVideoId];
        const mobileVideo = videoRefs.current[mobileVideoId];
        const video = desktopVideo || mobileVideo;
        const videoId = desktopVideo ? desktopVideoId : mobileVideoId;

        if (video && !video.paused && video.duration > 0) {
          const percent = (video.currentTime / video.duration) * 100;
          setVideoProgress((prev) => ({
            ...prev,
            [videoId]: percent,
          }));
        }
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    if (activeFeature) {
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

    return () => {};
  }, [activeTab, isAutoPlaying, features, moveToNextTab]);

  // Handle tab click
  const handleTabClick = useCallback((tabIndex: number, videoId: string, isAutoTransition: boolean = false) => {
    // Clear any existing timeout
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }

    // When user clicks manually, pause auto-playing for a moment, then resume
    if (!isAutoTransition) {
      setIsAutoPlaying(false);
      
      // Resume auto-play after current video finishes
      autoPlayTimeoutRef.current = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 2000); // Resume auto-play 2 seconds after manual click
    }

    // Pause all videos
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        video.pause();
      }
    });

    // Set new active tab
    setActiveTab(tabIndex);

    // Preload next video
    const currentFeatureIndex = features.findIndex(f => f.tabIndex === tabIndex);
    if (currentFeatureIndex < features.length - 1) {
      const nextFeature = features[currentFeatureIndex + 1];
      preloadVideo(`${nextFeature.id}-video`, nextFeature.videoSrc);
      preloadVideo(`${nextFeature.id}-mobile-video`, nextFeature.videoSrc);
    }

    // Play the selected video
    setTimeout(() => {
      const selectedDesktopVideo = videoRefs.current[videoId];
      const selectedMobileVideo = videoRefs.current[`${videoId.replace('-video', '-mobile-video')}`];
      
      if (selectedDesktopVideo) {
        selectedDesktopVideo.currentTime = 0; // Restart video
        selectedDesktopVideo.play().catch((error) => {
          console.error("Desktop video play failed:", error);
        });
      }
      
      if (selectedMobileVideo) {
        selectedMobileVideo.currentTime = 0; // Restart video
        selectedMobileVideo.play().catch((error) => {
          console.error("Mobile video play failed:", error);
        });
      }
    }, 100);
  }, [features, preloadVideo]);

  // Initial load - preload only first video
  useEffect(() => {
    if (isInitialLoad) {
      const firstFeature = features[0];
      if (firstFeature) {
        preloadVideo(`${firstFeature.id}-video`, firstFeature.videoSrc);
        preloadVideo(`${firstFeature.id}-mobile-video`, firstFeature.videoSrc);
      }
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, features, preloadVideo]);

  // Start auto-playing when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
      const firstFeature = features.find(f => f.tabIndex === activeTab);
      if (firstFeature) {
        const firstVideo = videoRefs.current[`${firstFeature.id}-video`];
        if (firstVideo) {
          firstVideo.play().catch((error) => {
            console.error("Initial video play failed:", error);
          });
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
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
          {/* IMAGE SECTION (Only for md and up) */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`w-full max-w-[743px] bg-transparent overflow-hidden rounded-3xl h-full max-h-[460px] p-1 ${
                  activeTab === feature.tabIndex ? "" : "hidden"
                }`}
              >
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
                  <source src={feature.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                  } transition-all`}
                >
                  <div
                    className="h-full bg-[#F3F4F6]"
                    style={{
                      width: `${videoProgress[`${feature.id}-video`] || 
                              videoProgress[`${feature.id}-mobile-video`] || 0}%`,
                    }}
                  />
                </div>
                {/* Mobile video section */}
                <div
                  className={`md:hidden w-full feature-section mt-5 mobile-feature-image ${
                    activeTab === feature.tabIndex ? "" : "hidden"
                  }`}
                >
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
                    <source src={feature.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}