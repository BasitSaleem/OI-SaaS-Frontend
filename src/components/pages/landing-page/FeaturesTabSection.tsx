"use client";

import { useEffect, useRef } from "react";

export default function FeaturesTabSection() {
  const videoRefs = useRef<{
    [key: string]: HTMLVideoElement | null;
  }>({});

  const progressBarRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});

  useEffect(() => {
    const handleVideoPlay = (videoId: string, barId: string) => {
      const progressBar = progressBarRefs.current[barId];
      if (progressBar) {
        progressBar.style.transition = "width 0.2s linear";
        progressBar.style.width = "0%";
      }
    };

    const handleTimeUpdate = (videoId: string, barId: string, video: HTMLVideoElement) => {
      const progressBar = progressBarRefs.current[barId];
      if (progressBar && video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percent + "%";
      }
    };

    const handleVideoEnded = (videoId: string, barId: string) => {
      const progressBar = progressBarRefs.current[barId];
      if (progressBar) {
        progressBar.style.width = "100%";
        setTimeout(() => {
          progressBar.style.transition = "none";
          progressBar.style.width = "0%";
          requestAnimationFrame(() => {
            progressBar.style.transition = "width 0.2s linear";
          });
        }, 200);
      }
    };

    // Set up event listeners for each video
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      const barId = key.replace("-video", "-progress");
      
      if (video) {
        video.addEventListener("play", () => handleVideoPlay(key, barId));
        video.addEventListener("timeupdate", () => handleTimeUpdate(key, barId, video));
        video.addEventListener("ended", () => handleVideoEnded(key, barId));
      }
    });

    return () => {
      // Cleanup event listeners
      Object.keys(videoRefs.current).forEach((key) => {
        const video = videoRefs.current[key];
        if (video) {
          video.removeEventListener("play", () => {});
          video.removeEventListener("timeupdate", () => {});
          video.removeEventListener("ended", () => {});
        }
      });
    };
  }, []);

  const handleTabClick = (targetId: string, barId: string, tabIndex: number) => {
    // Hide all videos
    const allFeatureImages = document.querySelectorAll(".feature-image");
    const allMobileFeatureImages = document.querySelectorAll(".mobile-feature-image");
    const allProgressBars = document.querySelectorAll(".progress-bar");
    const allTabIcons = document.querySelectorAll(".tab-icon-wrapper");
    const allTabLabels = document.querySelectorAll(".tab-label");
    const allTabTexts = document.querySelectorAll(".feature-tab-text");

    allFeatureImages.forEach((img) => img.classList.add("hidden"));
    allMobileFeatureImages.forEach((img) => img.classList.add("hidden"));
    allProgressBars.forEach((bar) => bar.classList.add("hidden"));
    allTabIcons.forEach((icon) => icon.classList.remove("bg-[#795CF5]"));
    allTabLabels.forEach((label) => {
      label.classList.remove("text-[#795CF5]", "font-semibold");
      label.classList.add("text-white", "font-normal");
    });
    allTabTexts.forEach((text) => {
      text.classList.remove("text-[#795CF5]", "font-semibold");
      text.classList.add("text-white", "font-normal");
    });

    // Show selected video
    const selectedFeatureImage = document.getElementById(targetId);
    const selectedMobileFeatureImage = document.getElementById(`mobile-${targetId}`);
    const selectedProgressBar = document.getElementById(barId);
    const selectedTabIcon = document.getElementById(`tab-icon-wrapper-${tabIndex}`);
    const selectedTabLabel = document.getElementById(`feature-tab-text-${tabIndex}`);

    if (selectedFeatureImage) selectedFeatureImage.classList.remove("hidden");
    if (selectedMobileFeatureImage) selectedMobileFeatureImage.classList.remove("hidden");
    if (selectedProgressBar) selectedProgressBar.classList.remove("hidden");
    if (selectedTabIcon) selectedTabIcon.classList.add("bg-[#795CF5]");
    if (selectedTabLabel) {
      selectedTabLabel.classList.remove("text-white", "font-normal");
      selectedTabLabel.classList.add("text-[#795CF5]", "font-semibold");
    }

    // Pause all videos and play selected one
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const selectedVideo = videoRefs.current[`${targetId}-video`];
    if (selectedVideo) {
      selectedVideo.play();
    }
  };

  const features = [
    {
      id: "inventorypos-system",
      title: "Smart POS system for modern retail",
      icon: "/assets/features-section/pos-system.svg",
      videoSrc: "/assets/Posvideo.mp4",
      barId: "bar-pos",
      tabIndex: 1,
    },
    {
      id: "inventory-ecommerce",
      title: "Sell online with built-in, fully synced e-commerce",
      icon: "/assets/features-section/cart-icon.svg",
      videoSrc: "/assets/Manual.mp4",
      barId: "bar-ecommerce",
      tabIndex: 2,
    },
    {
      id: "inventory-management",
      title: "Inventory management to stay in control of every product",
      icon: "/assets/features-section/inventory-management.svg",
      videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/inventory-management.webm",
      barId: "bar-inventory",
      tabIndex: 3,
    },
    {
      id: "inventory-autosync",
      title: "Smart analytics and reports to drive visibility and accountability",
      icon: "/assets/features-section/autosync.svg",
      videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/smart-analytics.webm",
      barId: "bar-autosync",
      tabIndex: 4,
    },
  ];

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
                id={feature.id}
                className={`feature-image feature-section w-full flex items-stretch justify-center ${
                  feature.tabIndex === 1 ? "" : "hidden"
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[`${feature.id}-video`] = el;
                  }}
                  className="w-full md:h-[300px] lg:h-[380px] xl:h-[430px] object-cover rounded-3xl lazy-video feature-video"
                  id={`${feature.id}-video`}
                  autoPlay
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
                <div
                  className="feature-tab flex items-center justify-center gap-4 xl:gap-6 cursor-pointer"
                  id={`feature-tab-${feature.tabIndex}`}
                  onClick={() => handleTabClick(feature.id, feature.barId, feature.tabIndex)}
                >
                  <div
                    id={`tab-icon-wrapper-${feature.tabIndex}`}
                    className={`tab-icon-wrapper w-10 xl:w-11 p-2.5 flex items-center justify-center rounded-full ${
                      feature.tabIndex === 1 ? "bg-[#795CF5]" : "bg-[rgba(243,244,246,0.1)]"
                    }`}
                  >
                    <img
                      src={feature.icon}
                      className="w-5 h-5"
                      alt="features-icon"
                    />
                  </div>
                  <a
                    id={`feature-tab-text-${feature.tabIndex}`}
                    className={`tab-label text-lg xl:text-xl leading-6 xl:leading-9 font-onest ${
                      feature.tabIndex === 1
                        ? "text-[#795CF5] font-semibold"
                        : "text-white font-normal"
                    } hover:text-[#795CF5]`}
                  >
                    {feature.title}
                  </a>
                </div>
                <div
                  id={feature.barId}
                  className={`progress-bar w-full h-1 xl:h-1.5 mt-5 xl:mt-7 rounded-2xl bg-[rgba(243,244,246,0.1)] overflow-hidden ${
                    feature.tabIndex === 1 ? "" : "hidden"
                  }`}
                >
                  <div
                    ref={(el) => {
                      progressBarRefs.current[`${feature.id}-progress`] = el;
                    }}
                    className="w-0 h-full bg-[#F3F4F6] transition-all"
                    id={`progress-bar-${feature.tabIndex}`}
                  ></div>
                </div>
                <div
                  id={`mobile-${feature.id}`}
                  className={`md:hidden w-full feature-section mt-5 mobile-feature-image ${
                    feature.tabIndex === 1 ? "" : "hidden"
                  }`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[`${feature.id}-mobile-video`] = el;
                    }}
                    className="w-full object-cover rounded-3xl lazy-video feature-video"
                    id={`${feature.id}-mobile-video`}
                    autoPlay
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