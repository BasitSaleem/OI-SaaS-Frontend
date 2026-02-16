"use client";

import { useState, useEffect } from "react";

export function useSafariDetector() {
    const [isSafari, setIsSafari] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const ua = navigator.userAgent;

        // Comprehensive Safari detection (Desktop & Mobile)
        const isSafariAgent = /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edg/.test(ua);

        // Detect iPadOS 13+ which presents as Macintosh
        const isIpad =
            /Macintosh/.test(ua) &&
            (navigator.maxTouchPoints ? navigator.maxTouchPoints > 0 : false);

        const safariDetected = isSafariAgent || !!isIpad;

        setIsSafari(safariDetected);

        const checkDevice = () => {
            const width = window.innerWidth;
            const isTab = width >= 768 && width < 1024;
            const isMob = width < 768;

            setIsTablet(isTab || !!isIpad);
            setIsMobile(isMob);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    const shouldShowImage = isMounted && (isTablet || isMobile);

    return { isSafari, isTablet, isMobile, isMounted, shouldShowImage };
}
