"use client";

import { useState, useEffect } from "react";

export function useDevice() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const checkIfDevice = () => {
            const width = window.innerWidth;
            const isMob = width < 768;
            const isTab = width >= 768 && width < 1024;
            const isDesk = width >= 1024;

            setIsMobile(isMob);
            setIsTablet(isTab);
            setIsDesktop(isDesk);
        };

        checkIfDevice();
        window.addEventListener("resize", checkIfDevice);

        return () => window.removeEventListener("resize", checkIfDevice);
    }, []);

    return { isMobile, isTablet, isDesktop, isMounted };
}
