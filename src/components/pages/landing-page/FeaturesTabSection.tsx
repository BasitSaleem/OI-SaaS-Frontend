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

  const features = [
    {
      id: "inventorypos-system",
      title: "Smart POS system for modern retail",
      icon: "/assets/features-section/pos-system.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/Air_Spray.mp4",
      tabIndex: 1,
    },
    {
      id: "inventory-ecommerce",
      title: "Sell online with built-in, fully synced e-commerce",
      icon: "/assets/features-section/cart-icon.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/Bottle.mp4",
      tabIndex: 2,
    },
    {
      id: "inventory-management",
      title: "Inventory management to stay in control of every product",
      icon: "/assets/features-section/inventory-management.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/NinjaStream_Final.mp4",
      tabIndex: 3,
    },
    {
      id: "inventory-autosync",
      title: "Smart analytics and reports to drive visibility and accountability",
      icon: "/assets/features-section/autosync.svg",
      videoSrc: "https://redstarwebsitebucket.s3.us-east-1.amazonaws.com/videos/user+story+v1.mp4",
      tabIndex: 4,
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

    // Setup event listeners for each video
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        // Remove existing listeners first
        video.removeEventListener("timeupdate", () => {});
        // Add new listener
        const timeUpdateHandler = () => handleTimeUpdate(key, video);
        video.addEventListener("timeupdate", timeUpdateHandler);
      }
    });

    return () => {
      // Cleanup event listeners
      Object.keys(videoRefs.current).forEach((key) => {
        const video = videoRefs.current[key];
        if (video) {
          video.removeEventListener("timeupdate", () => {});
        }
      });
    };
  }, [activeTab]);

  // Handle tab click
  const handleTabClick = (tabIndex: number, videoId: string) => {
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
      const selectedVideo = videoRefs.current[videoId];
      if (selectedVideo) {
        selectedVideo.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      }
    }, 100);
  };

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
                  loop
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
                  onClick={() => handleTabClick(feature.tabIndex, `${feature.id}-video`)}
                  type="button"
                  aria-label={`Show ${feature.title}`}
                >
                  <div
                    className={` w-full max-w-11 h-11 m rounded-full flex items-center justify-center ${
                        activeTab === feature.tabIndex ? "bg-(--primary-purple)" : "bg-[rgba(243,244,246,0.1)]"
                      }`}
                  >
                    <img
                      src={feature.icon}
                      className="w-6 h-6 md:w-auto md:h-auto"
                      alt={feature.title}
                    />
                  </div>
                  <span
                    className={`font-['Onest'] ${
                        activeTab === feature.tabIndex
                          ? "text-(--primary-purple) font-semibold text-lg lg:text-2xl"
                          : "text-(--white-color) text-base  lg:text-xl"
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
                      width: `${videoProgress[`${feature.id}-video`] || 0}%`,
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
                    loop
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