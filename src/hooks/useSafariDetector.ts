"use client";

import { useState, useEffect } from "react";

export function useSafariDetector() {
    const [isSafari, setIsSafari] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const ua = navigator.userAgent;

        // Comprehensive Safari detection (Desktop & Mobile)
        const safariDetected =
            /Safari/.test(ua) &&
            /Apple Computer/.test(navigator.vendor) &&
            !/Chrome/.test(ua) && // Exclude Chrome
            !/Edg/.test(ua);    // Exclude Edge

        setIsSafari(safariDetected);

        const checkTablet = () => {
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        checkTablet();
        window.addEventListener("resize", checkTablet);

        return () => window.removeEventListener("resize", checkTablet);
    }, []);

    const shouldShowImage = isMounted && (isSafari || isTablet);

    return { isSafari, isTablet, isMounted, shouldShowImage };
}
