"use client";

import { useEffect, useRef, useState } from "react";

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
    <section className="features-tab-section mt-20 md:mt-28 lg:mt-40 py-10 md:py-10 xl:py-24 rounded-[40px] bg-[#231F20] z-11">
      <div className="wrapper">
        <h1 className="w-full text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[48px] md:leading-[56px] lg:leading-[60px] xl:leading-[76px] mb-10 md:mb-11 xl:mb-10 text-left font-onest font-semibold text-white lg:max-w-[867px] md:max-w-[657px]">
          Powerful Features Built for Growing Businesses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* IMAGE SECTION (Only for md and up) */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3 h-full">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-image feature-section w-full flex items-stretch justify-center ${
                  activeTab === feature.tabIndex ? "" : "hidden"
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[`${feature.id}-video`] = el;
                  }}
                  className="w-full md:h-[300px] lg:h-[380px] xl:h-[430px] object-cover rounded-3xl lazy-video feature-video"
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
                  className="feature-tab flex items-center justify-center gap-4 xl:gap-6 cursor-pointer w-full text-left"
                  onClick={() => handleTabClick(feature.tabIndex, `${feature.id}-video`)}
                  type="button"
                  aria-label={`Show ${feature.title}`}
                >
                  <div
                    className={`tab-icon-wrapper w-10 xl:w-11 p-2.5 flex items-center justify-center rounded-full ${
                      activeTab === feature.tabIndex
                        ? "bg-[#795CF5]"
                        : "bg-[rgba(243,244,246,0.1)]"
                    }`}
                  >
                    <img
                      src={feature.icon}
                      className="w-5 h-5"
                      alt={feature.title}
                    />
                  </div>
                  <span
                    className={`tab-label text-lg xl:text-xl leading-6 xl:leading-9 font-onest ${
                      activeTab === feature.tabIndex
                        ? "text-[#795CF5] font-semibold"
                        : "text-white font-normal"
                    } hover:text-[#795CF5] transition-colors`}
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