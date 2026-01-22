"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import MainHeading from "../typography/MainHeading";

type VideoRefs = {
  [key: string]: HTMLVideoElement | null;
};

export default function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [videoProgress, setVideoProgress] = useState<{[key: string]: number}>({});
  const videoRefs = useRef<VideoRefs>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoPlayAttempts = useRef<{[key: string]: number}>({});

  const features = [
    {
      id: "inventorypos-system",
      title: "Smart POS System for Modern Retail",
      icon: "/assets/features-section/pos-system.svg",
      videoSrc: "https://d1ybi42hallhsh.cloudfront.net/videos/Game_Main.mp4",
      tabIndex: 1,
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      id: "inventory-ecommerce",
      title: "Built-in E-commerce - Fully Synced and Ready to Sell",
      icon: "/assets/features-section/cart-icons.svg",
      videoSrc: "https://d1ybi42hallhsh.cloudfront.net/videos/Road+Map+V2.mp4",
      tabIndex: 2,
      iconWidth: 18,
      iconHeight: 14,
    },
    {
      id: "inventory-management",
      title: "Streamline Manufacturing + Stay in Control of Every Process",
      icon: "/assets/features-section/management-icon.svg",
      videoSrc: "https://d1ybi42hallhsh.cloudfront.net/videos/Game_Main.mp4",
      tabIndex: 3,
      iconWidth: 16,
      iconHeight: 14,
    },
    {
      id: "inventory-autosync",
      title: "Smart analytics and reports to drive visibility and accountability",
      icon: "/assets/features-section/autosync.svg",
      videoSrc: "https://d1ybi42hallhsh.cloudfront.net/videos/Road+Map+V2.mp4",
      tabIndex: 4,
      iconWidth: 18,
      iconHeight: 18,
    },
  ];

  // Force video autoplay with multiple attempts
  const forceVideoPlay = useCallback((video: HTMLVideoElement, videoId: string) => {
    if (!video) return;

    const playVideo = async () => {
      try {
        video.currentTime = 0;
        
        // Set playsInline for iOS
        video.playsInline = true;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        
        // Hide controls and remove poster
        video.controls = false;
        video.removeAttribute('poster');
        
        // Mute the video (required for autoplay on many browsers)
        video.muted = true;
        video.setAttribute('muted', 'true');
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log(`Video ${videoId} autoplay successful`);
        }
      } catch (error) {
        console.error(`Video ${videoId} autoplay failed:`, error);
        
        // Retry logic
        videoPlayAttempts.current[videoId] = (videoPlayAttempts.current[videoId] || 0) + 1;
        
        if (videoPlayAttempts.current[videoId] < 3) {
          setTimeout(() => forceVideoPlay(video, videoId), 500);
        }
      }
    };

    playVideo();
  }, []);

  // Preload videos with better loading strategy
  const preloadVideo = useCallback((videoId: string, videoSrc: string) => {
    if (loadedVideos.has(videoId)) return;

    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = videoSrc;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('muted', 'true');
    video.style.display = 'none';
    
    video.onloadeddata = () => {
      console.log(`Video ${videoId} loaded`);
      setLoadedVideos(prev => new Set([...prev, videoId]));
    };

    video.onerror = () => {
      console.error(`Failed to load video: ${videoId}`);
    };

    document.body.appendChild(video);
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

  // Handle video time updates
  useEffect(() => {
    const handleTimeUpdate = (videoId: string, video: HTMLVideoElement) => {
      if (video && video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        setVideoProgress((prev) => ({
          ...prev,
          [videoId]: percent,
        }));
      }
    };

    const handleVideoEnded = () => {
      if (isAutoPlaying) {
        // Delay before moving to next tab
        setTimeout(() => {
          moveToNextTab();
        }, 300);
      }
    };

    // Setup event listeners for active video
    const activeFeature = features.find(f => f.tabIndex === activeTab);
    if (activeFeature) {
      const desktopVideoId = `${activeFeature.id}-video`;
      const mobileVideoId = `${activeFeature.id}-mobile-video`;
      
      const desktopVideo = videoRefs.current[desktopVideoId];
      const mobileVideo = videoRefs.current[mobileVideoId];

      // Desktop video listeners
      if (desktopVideo) {
        const timeUpdateHandler = () => handleTimeUpdate(desktopVideoId, desktopVideo);
        const endedHandler = () => handleVideoEnded();
        
        desktopVideo.addEventListener("timeupdate", timeUpdateHandler);
        desktopVideo.addEventListener("ended", endedHandler);

        return () => {
          desktopVideo.removeEventListener("timeupdate", timeUpdateHandler);
          desktopVideo.removeEventListener("ended", endedHandler);
        };
      }

      // Mobile video listeners
      if (mobileVideo) {
        const timeUpdateHandler = () => handleTimeUpdate(mobileVideoId, mobileVideo);
        const endedHandler = () => handleVideoEnded();
        
        mobileVideo.addEventListener("timeupdate", timeUpdateHandler);
        mobileVideo.addEventListener("ended", endedHandler);

        return () => {
          mobileVideo.removeEventListener("timeupdate", timeUpdateHandler);
          mobileVideo.removeEventListener("ended", endedHandler);
        };
      }
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
      }, 2000);
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

    // Play the selected video with force autoplay
    setTimeout(() => {
      const selectedDesktopVideo = videoRefs.current[videoId];
      const selectedMobileVideo = videoRefs.current[`${videoId.replace('-video', '-mobile-video')}`];
      
      if (selectedDesktopVideo) {
        forceVideoPlay(selectedDesktopVideo, videoId);
      }
      
      if (selectedMobileVideo) {
        forceVideoPlay(selectedMobileVideo, `${videoId.replace('-video', '-mobile-video')}`);
      }
    }, 100);
  }, [features, preloadVideo, forceVideoPlay]);

  // Initial load - preload all videos in sequence
  useEffect(() => {
    if (isInitialLoad) {
      // Preload all videos in sequence to avoid overwhelming network
      const preloadSequence = async () => {
        for (const feature of features) {
          await new Promise(resolve => setTimeout(resolve, 300)); // Delay between loads
          preloadVideo(`${feature.id}-video`, feature.videoSrc);
          preloadVideo(`${feature.id}-mobile-video`, feature.videoSrc);
        }
      };
      
      preloadSequence();
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
          forceVideoPlay(firstVideo, `${firstFeature.id}-video`);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [forceVideoPlay, features, activeTab]);

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
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
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
                    className="h-full bg-[#F3F4F6] transition-all duration-200"
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
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
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
      
      {/* Add CSS to hide iOS play button */}
      <style jsx global>{`
        /* Hide iOS/Safari play button overlay */
        video::-webkit-media-controls,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none;
          opacity: 0;
        }
        
        /* Hide native controls */
        video {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        /* Prevent video from showing controls on iOS */
        video[controls] {
          display: none;
        }
        
        /* Feature video specific styles */
        .feature-video {
          pointer-events: none; /* Prevent interaction that might show controls */
        }
        
        /* For tablets specifically */
        @media (max-width: 1024px) and (min-width: 768px) {
          video {
            -webkit-appearance: none;
          }
        }
      `}</style>
    </section>
  );
}