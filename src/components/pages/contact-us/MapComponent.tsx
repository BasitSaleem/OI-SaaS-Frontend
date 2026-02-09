"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Locations
const locations = [
  {
    id: 1,
    name: "USA Office",
    address: "4254 Normandy Ct, Fredericksburg, VA 22408, USA",
    coords: [38.2532, -77.4527] as [number, number],
  },
  {
    id: 2,
    name: "Pakistan Office",
    address: "Islamabad, Pakistan",
    coords: [33.6844, 73.0479] as [number, number],
  },
];

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Custom Icon with Pulse Effect
  const createCustomIcon = () => {
    return L.divIcon({
      className: "custom-map-marker",
      html: `
        <div class="marker-container">
          <div class="pulse-ring"></div>
          <div class="marker-dot"></div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="wrapper">

        <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <style jsx global>{`
            .leaflet-container {
              width: 100%;
              height: 100%;
              background: #0b0d10 !important;
              // filter: sepia(0.4) brightness(0.9) contrast(1.1) hue-rotate(-10deg);
            }
            .leaflet-tile {
              filter: grayscale(1) invert(1) opacity(0.2);
            }
            .leaflet-control-attribution {
              display: none !important;
            }
            .custom-map-marker {
              position: relative;
            }
            .marker-container {
              display: flex;
              align-items: center;
              justify-center;
              width: 30px;
              height: 30px;
            }
            .marker-dot {
              width: 12px;
              height: 12px;
              background-color: #1AD1B9;
              border-radius: 50%;
              box-shadow: 0 0 15px #1AD1B9, 0 0 30px #1AD1B9;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;
            }
            .pulse-ring {
              width: 30px;
              height: 30px;
              border: 3px solid #1AD1B9;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse 2s infinite ease-out;
              opacity: 0;
            }
            @keyframes pulse {
              0% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 0.8;
              }
              100% {
                transform: translate(-50%, -50%) scale(2.5);
                opacity: 0;
              }
            }
            .leaflet-popup-content-wrapper {
              background: #1a1a1a !important;
              color: white !important;
              border-radius: 12px !important;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .leaflet-popup-tip {
              background: #1a1a1a !important;
            }
          `}</style>
          <MapContainer
            center={[25, 0]}
            zoom={2}
            scrollWheelZoom={false}
            className="z-0 h-full w-full"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {locations.map((loc) => (
              <Marker
                key={loc.id}
                position={loc.coords}
                icon={createCustomIcon()}
              >
                <Popup>
                  <div className="p-1">
                    <h3 className="font-bold text-[#1AD1B9]">{loc.name}</h3>
                    <p className="text-sm text-gray-300">{loc.address}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
