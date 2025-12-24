"use client";

import { useEffect, useRef, useState } from "react";
import MainHeading from "../typography/MainHeading";

type VideoRefs = {
  [key: string]: HTMLVideoElement | null;
};

export default function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [videoProgress, setVideoProgress] = useState<{[key: string]: number}>({});
  const videoRefs = useRef<VideoRefs>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const features = [
    {
      id: "inventorypos-system",
      title: "Smart POS System for Modern Retail",
      icon: "/assets/features-section/pos-system.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/Air_Spray.mp4",
      tabIndex: 1,
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      id: "inventory-ecommerce",
      title: "Built-in E-commerce - Fully Synced and Ready to Sell",
      icon: "/assets/features-section/cart-icons.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/Bottle.mp4",
      tabIndex: 2,
      iconWidth: 18,
      iconHeight: 14,
    },
    {
      id: "inventory-management",
      title: "Streamline Manufacturing + Stay in Control of Every Process",
      icon: "/assets/features-section/management-icon.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/NinjaStream_Final.mp4",
      tabIndex: 3,
      iconWidth: 16,
      iconHeight: 14,
    },
    {
      id: "inventory-autosync",
      title: "Smart analytics and reports to drive visibility and accountability",
      icon: "/assets/features-section/autosync.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/user+story+v1.mp4",
      tabIndex: 4,
      iconWidth: 18,
      iconHeight: 18,
    },
  ];

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

    const handleVideoEnded = (tabIndex: number) => {
      if (isAutoPlaying) {
        // Move to next tab when video ends
        const currentFeatureIndex = features.findIndex(f => f.tabIndex === tabIndex);
        if (currentFeatureIndex < features.length - 1) {
          const nextFeature = features[currentFeatureIndex + 1];
          setTimeout(() => {
            handleTabClick(nextFeature.tabIndex, `${nextFeature.id}-video`, true);
          }, 500); // Small delay for smooth transition
        } else {
          // If it's the last video, loop back to the first one
          const firstFeature = features[0];
          setTimeout(() => {
            handleTabClick(firstFeature.tabIndex, `${firstFeature.id}-video`, true);
          }, 500);
        }
      }
    };

    // Setup event listeners for each video
    features.forEach((feature) => {
      const desktopVideoId = `${feature.id}-video`;
      const mobileVideoId = `${feature.id}-mobile-video`;
      
      const desktopVideo = videoRefs.current[desktopVideoId];
      const mobileVideo = videoRefs.current[mobileVideoId];

      // Desktop video listeners
      if (desktopVideo) {
        // Remove existing listeners first
        desktopVideo.removeEventListener("timeupdate", () => {});
        desktopVideo.removeEventListener("ended", () => {});
        
        // Add new listeners
        const timeUpdateHandler = () => handleTimeUpdate(desktopVideoId, desktopVideo);
        const endedHandler = () => handleVideoEnded(feature.tabIndex);
        
        desktopVideo.addEventListener("timeupdate", timeUpdateHandler);
        desktopVideo.addEventListener("ended", endedHandler);
      }

      // Mobile video listeners
      if (mobileVideo) {
        // Remove existing listeners first
        mobileVideo.removeEventListener("timeupdate", () => {});
        mobileVideo.removeEventListener("ended", () => {});
        
        // Add new listeners
        const timeUpdateHandler = () => handleTimeUpdate(mobileVideoId, mobileVideo);
        const endedHandler = () => handleVideoEnded(feature.tabIndex);
        
        mobileVideo.addEventListener("timeupdate", timeUpdateHandler);
        mobileVideo.addEventListener("ended", endedHandler);
      }
    });

    return () => {
      // Cleanup event listeners
      Object.keys(videoRefs.current).forEach((key) => {
        const video = videoRefs.current[key];
        if (video) {
          video.removeEventListener("timeupdate", () => {});
          video.removeEventListener("ended", () => {});
        }
      });
    };
  }, [activeTab, isAutoPlaying]);

  // Handle tab click
  const handleTabClick = (tabIndex: number, videoId: string, isAutoTransition: boolean = false) => {
    // When user clicks manually, stop auto-playing sequence
    if (!isAutoTransition) {
      setIsAutoPlaying(false);
    }

    // Pause all videos and reset progress
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Set new active tab
    setActiveTab(tabIndex);
    
    // Reset progress for all videos
    setVideoProgress({});

    // Play the selected video after a small delay to ensure DOM is updated
    setTimeout(() => {
      // Play both desktop and mobile videos
      const selectedDesktopVideo = videoRefs.current[videoId];
      const selectedMobileVideo = videoRefs.current[`${videoId.replace('-video', '-mobile-video')}`];
      
      if (selectedDesktopVideo) {
        selectedDesktopVideo.play().catch((error) => {
          console.error("Desktop video play failed:", error);
        });
      }
      
      if (selectedMobileVideo) {
        selectedMobileVideo.play().catch((error) => {
          console.error("Mobile video play failed:", error);
        });
      }

      // If this is an auto-transition, keep auto-playing enabled
      if (isAutoTransition) {
        setIsAutoPlaying(true);
      }
    }, 100);
  };

  // Start auto-playing when component mounts
  useEffect(() => {
    // Start auto-play sequence after initial load
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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="features-tab-section overflow-hidden relative mt-20 md:mt-28 lg:mt-[100px] py-10 md:py-10 z-20 xl:py-24 rounded-[20px] lg:rounded-[40px] bg-[#231F20] z-11">
      <div className="absolute  top-[-150px] right-[-0px] z-[300] ">
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
                  loop={false} // Disable loop for auto-transition
                  playsInline
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
                    loop={false} // Disable loop for auto-transition
                    playsInline
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