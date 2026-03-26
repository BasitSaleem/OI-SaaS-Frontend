"use client";

import { useState, useEffect } from "react";
import { getCachedVideo, setCachedVideo } from "@/utils/videoCache";

export function useVideoCache(url: string) {
  const [videoSrc, setVideoSrc] = useState<string>(url);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let blobUrl: string | null = null;

    const loadVideo = async () => {
      try {
        // 1. Check if video is in IndexedDB
        const cachedBlob = await getCachedVideo(url);

        if (cachedBlob) {
          if (isMounted) {
            blobUrl = URL.createObjectURL(cachedBlob);
            setVideoSrc(blobUrl);
            setIsCached(true);
          }
          return;
        }

        // 2. If not cached, fetch it
        const response = await fetch(url);
        const blob = await response.blob();

        // 3. Store in IndexedDB for next time
        await setCachedVideo(url, blob);

        if (isMounted) {
          blobUrl = URL.createObjectURL(blob);
          setVideoSrc(blobUrl);
          setIsCached(true);
        }
      } catch (error) {
        console.error("Error in useVideoCache:", error);
        // Fallback to original URL is already the default state
      }
    };

    loadVideo();

    return () => {
      isMounted = false;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [url]);

  return { videoSrc, isCached };
}
