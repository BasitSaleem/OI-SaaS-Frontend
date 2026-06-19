"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";

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

  // Memoize so consumers only re-render when isLocked actually flips —
  // not on every lock()/unlock() call that leaves isLocked unchanged
  // (e.g. nested lock count 1→2). lock/unlock are stable via useCallback.
  const value = useMemo(
    () => ({ lock, unlock, isLocked }),
    [lock, unlock, isLocked]
  );

  return (
    <ScrollLockContext.Provider value={value}>
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
