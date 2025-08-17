"use client";

import { useEffect, useState } from "react";

export const useIsTouch = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    checkTouch();
    window.addEventListener("touchstart", checkTouch, { passive: true });
    
    return () => {
      window.removeEventListener("touchstart", checkTouch);
    };
  }, []);

  return isTouch;
};
