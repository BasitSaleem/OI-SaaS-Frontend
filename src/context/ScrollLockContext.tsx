"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface ScrollLockContextType {
  lock: () => void;
  unlock: () => void;
  isLocked: boolean;
}

const ScrollLockContext = createContext<ScrollLockContextType | undefined>(undefined);

export const ScrollLockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lockCount, setLockCount] = useState(0);

  const lock = useCallback(() => {
    setLockCount((prev) => prev + 1);
  }, []);

  const unlock = useCallback(() => {
    setLockCount((prev) => Math.max(0, prev - 1));
  }, []);

  const isLocked = lockCount > 0;

  return (
    <ScrollLockContext.Provider value={{ lock, unlock, isLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

export const useScrollLock = () => {
  const context = useContext(ScrollLockContext);
  if (context === undefined) {
    throw new Error("useScrollLock must be used within a ScrollLockProvider");
  }
  return context;
};

/**
 * Hook to automatically handle locking/unlocking based on a boolean state
 */
export const useScrollLockEffect = (isOpen: boolean) => {
  const { lock, unlock } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lock();
      return () => unlock();
    }
  }, [isOpen, lock, unlock]);
};
