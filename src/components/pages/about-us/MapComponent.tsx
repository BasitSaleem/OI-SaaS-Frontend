"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import '../../../../public/css/map.css'

// Locations
const locations = [
  {
    id: 1,
    name: "USA Office",
    address: {
      line1: "4254 Normandy Ct,",
      line2: "Fredericksburg, VA 22408",
      country: "United States",
    },
    coords: [38.2532, -77.4527] as [number, number],
  },
];

// Sub-component to handle map zoom and pan
const MapHandler = ({
  isHovered,
  isMobile,
  center,
}: {
  isHovered: boolean;
  isMobile: boolean;
  center: [number, number];
}) => {
  const map = useMap();

  useEffect(() => {
    if (isHovered || isMobile) {
      map.flyTo(center, 15, { duration: 1.2, easeLinearity: 0.25 });
    } else {
      map.flyTo(center, 12, { duration: 1.2, easeLinearity: 0.25 });
    }
  }, [isHovered, isMobile, map, center]);

  return null;
};

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return null;

  // Custom Icon with Pulse Effect and Stem
  const createCustomIcon = () => {
    return L.divIcon({
      className: `custom-map-marker ${isHovered ? "is-hovered" : ""}`,
      html: `
        <div class="marker-container">
          <div class="pulse-ring"></div>
          <div class="marker-dot"></div>
          <div class="marker-stem"></div>
          <div class="hover-circle circle-1"></div>
          <div class="hover-circle circle-2"></div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  const office = locations[0];

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="wrapper">
        <div
          className="relative h-[550px] w-full overflow-hidden rounded-[40px] border border-white/10 shadow-2xl cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <MapContainer
            center={office.coords}
            zoom={12}
            scrollWheelZoom={false}
            zoomControl={false}
            className="z-0 h-full w-full"
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            <Marker position={office.coords} icon={createCustomIcon()} />
            <MapHandler isHovered={isHovered} isMobile={isMobile} center={office.coords} />
          </MapContainer>

          {/* Gradient Overlay Layer */}
          <div
            className="absolute inset-0 z-[500] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 10, 10, 0.2) 0%, rgba(23, 23, 23, 0.5) 75%, #0A0A0A 100%)",
            }}
          />

          {/* Location Info Overlay */}

          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12 z-[1000] flex flex-col sm:flex-row items-start gap-6 pointer-events-none">
            {/* MapPin Icon Container - Always Visible */}
            <div className="flex-shrink-0 p-4 bg-white/5 backdrop-blur-xl rounded-[20px] border-2 border-[rgba(255,255,255,0.05)] ">
              <MapPin className="text-[#1AD1B9] w-6 h-6" />
            </div>

            {/* Animate-able Text Content */}
            <AnimatePresence>
              {(isHovered || isMobile) && (
                <motion.div
                  initial={isMobile ? "visible" : "hidden"}
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1,
                      },
                    },
                    hidden: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-6">
                    <motion.h3
                      variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[var(--white-color)] text-3xl sm:text-4xl lg:text-[45px] leading-[130%] font-medium font-['onest'] tracking-tight mb-2"
                    >
                      Our Location
                    </motion.h3>
                  </div>

                  <div className="space-y-3">
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#D4D4D4] text-xl sm:text-2xl lg:text-[28px] leading-[180%] font-normal font-['onest']"
                    >
                      {office.address.line1}
                    </motion.p>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#D4D4D4] text-xl sm:text-2xl lg:text-[28px] leading-[180%] font-normal font-['onest']"
                    >
                      {office.address.line2}
                    </motion.p>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#A3A3A3] text-xl sm:text-2xl lg:text-[28px] leading-[180%] font-normal font-['onest'] uppercase"
                    >
                      {office.address.country}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
