'use client';

import { useEffect, useRef, useState } from 'react';

interface FeatureTab {
  id: string;
  target: string;
  barId: string;
  title: string;
  iconSrc: string;
  iconAlt: string;
  videoSrc: string;
  isActive?: boolean;
}

interface FeaturesTabSectionProps {
  title?: string;
  features?: Partial<FeatureTab>[];
}

export default function FeaturesTabSection({
  title = "Powerful Features Built for Growing Businesses",
  features = [
    {
      id: "feature-tab-1",
      target: "inventorypos-system",
      barId: "bar-pos",
      title: "Smart POS system for modern retail",
      iconSrc: "/assets/features-section/pos-system.svg",
      iconAlt: "features-icon",
      videoSrc: "/assets/Posvideo.mp4",
      isActive: true,
    },
    {
      id: "feature-tab-2",
      target: "inventory-ecommerce",
      barId: "bar-ecommerce",
      title: "Sell online with built-in, fully synced e-commerce",
      iconSrc: "/assets/features-section/cart-icon.svg",
      iconAlt: "features-icon",
      videoSrc: "/assets/Manual.mp4",
      isActive: false,
    },
    {
      id: "feature-tab-3",
      target: "inventory-management",
      barId: "bar-inventory",
      title: "Inventory management to stay in control of every product",
      iconSrc: "/assets/features-section/inventory-management.svg",
      iconAlt: "features-icon",
      videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/inventory-management.webm",
      isActive: false,
    },
    {
      id: "feature-tab-4",
      target: "inventory-autosync",
      barId: "bar-autosync",
      title: "Smart analytics and reports to drive visibility and accountability",
      iconSrc: "/assets/features-section/autosync.svg",
      iconAlt: "features-icon",
      videoSrc: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/landing-page/smart-analytics.webm",
      isActive: false,
    },
  ]
}: FeaturesTabSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set video ref callback
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  // Set progress bar ref callback
  const setProgressBarRef = (index: number) => (el: HTMLDivElement | null) => {
    progressBarRefs.current[index] = el;
  };

  // Initialize video progress tracking
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    features.forEach((_, index) => {
      const video = videoRefs.current[index];
      const progressBar = progressBarRefs.current[index];
      
      if (!video || !progressBar) return;

      // Add smooth transition
      progressBar.style.transition = "width 0.2s linear";

      const handlePlay = () => {
        progressBar.style.width = "0%";
      };

      const handleTimeUpdate = () => {
        if (video.duration > 0) {
          const percent = (video.currentTime / video.duration) * 100;
          progressBar.style.width = percent + "%";
        }
      };

      const handleEnded = () => {
        progressBar.style.width = "100%";
        setTimeout(() => {
          // Disable transition for instant reset
          progressBar.style.transition = "none";
          progressBar.style.width = "0%";

          // Re-enable transition for next play
          requestAnimationFrame(() => {
            progressBar.style.transition = "width 0.2s linear";
          });
        }, 200);
      };

      video.addEventListener("play", handlePlay);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleEnded);

      // Store cleanup function
      cleanupFunctions.push(() => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleEnded);
      });
    });

    // Cleanup all event listeners on component unmount
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [features, activeFeature]); // Added activeFeature dependency to reinitialize when tab changes

  // Reset and play video when active feature changes
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });

    // Play the active video
    const activeVideo = videoRefs.current[activeFeature];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(console.error);
    }
  }, [activeFeature]);

  const handleTabClick = (index: number) => {
    setActiveFeature(index);
  };

  return (
    <section className="features-tab-section mt-20 md:mt-28 lg:mt-40 py-10 md:py-10 xl:py-24 rounded-[40px] bg-[#231F20] z-11">
      <div className="wrapper">
        <h1 className="w-full text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[48px] md:leading-[56px] lg:leading-[60px] xl:leading-[76px] mb-10 md:mb-11 xl:mb-10 text-left font-onest font-semibold text-white lg:max-w-[867px] md:max-w-[657px]">
          {title}
        </h1>

        {/* Features & Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* IMAGE SECTION (Only for md and up) */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3 h-full">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.target}
                className={`feature-image feature-section w-full flex items-stretch justify-center ${index === activeFeature ? '' : 'hidden'}`}
              >
                <video
                  ref={setVideoRef(index)}
                  className="w-full md:h-[300px] lg:h-[380px] xl:h-[430px] object-cover rounded-3xl lazy-video feature-video"
                  id={`${feature.target}-video`}
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
            {features.map((feature, index) => (
              <div key={feature.id} className="flex flex-col w-full items-start justify-start">
                <div
                  className={`feature-tab flex items-center justify-center gap-4 xl:gap-6 cursor-pointer ${index === activeFeature ? 'text-[#795CF5]' : 'text-white'}`}
                  id={feature.id}
                  onClick={() => handleTabClick(index)}
                  data-target={feature.target}
                  data-bar={feature.barId}
                >
                  <div
                    className={`tab-icon-wrapper w-10 xl:w-11 p-2.5 flex items-center justify-center rounded-full ${index === activeFeature ? 'bg-[#795CF5]' : 'bg-[rgba(243,244,246,0.1)]'}`}
                    id={`tab-icon-wrapper-${index + 1}`}
                  >
                    <img
                      src={feature.iconSrc}
                      className="w-5 h-5"
                      alt={feature.iconAlt}
                    />
                  </div>
                  <a
                    className={`tab-label text-lg xl:text-xl leading-6 xl:leading-9 font-onest font-semibold hover:text-[#795CF5] ${index === activeFeature ? 'text-[#795CF5]' : 'text-white font-normal'}`}
                    id={`feature-tab-text-${index + 1}`}
                  >
                    {feature.title}
                  </a>
                </div>
                
                <div
                  id={feature.barId}
                  className={`progress-bar w-full h-1 xl:h-1.5 mt-5 xl:mt-7 rounded-2xl bg-[rgba(243,244,246,0.1)] overflow-hidden ${index === activeFeature ? '' : 'hidden'}`}
                >
                  <div
                    ref={setProgressBarRef(index)}
                    className="w-0 h-full bg-[#F3F4F6] transition-all"
                    id={`progress-bar-${index + 1}`}
                  ></div>
                </div>
                
                {/* Mobile Image Section */}
                <div
                  id={`mobile-${feature.target}`}
                  className={`md:hidden w-full feature-section mt-5 mobile-feature-image ${index === activeFeature ? '' : 'hidden'}`}
                >
                  <video
                    ref={setVideoRef(index)}
                    className="w-full object-cover rounded-3xl lazy-video feature-video"
                    id={`${feature.target}-video`}
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