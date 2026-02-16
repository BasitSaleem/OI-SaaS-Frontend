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
        const isSafariAgent = /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edg/.test(ua);

        // Detect iPadOS 13+ which presents as Macintosh
        const isIpad =
            /Macintosh/.test(ua) &&
            (navigator.maxTouchPoints ? navigator.maxTouchPoints > 0 : false);

        const safariDetected = isSafariAgent || !!isIpad;

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
