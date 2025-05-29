import * as React from "react";

// Define breakpoints as constants for better maintainability
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

/**
 * A generic hook to check if the screen width is below a certain breakpoint
 */
function useMediaQuery(breakpoint: number): boolean {
  const [isBelow, setIsBelow] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const onChange = () => {
      setIsBelow(window.innerWidth < breakpoint);
    };

    // Set initial value
    setIsBelow(window.innerWidth < breakpoint);

    // Modern event listener
    mql.addEventListener("change", onChange);

    // Clean up event listeners
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [breakpoint]);

  return isBelow;
}

/**
 * Hook to check if the current device is a mobile device (width < 768px)
 */
export function useIsMobile(): boolean {
  return useMediaQuery(BREAKPOINTS.MOBILE);
}

/**
 * Hook to check if the current device is a mobile or tablet device (width < 1024px)
 */
export function useIsMobileOrTablet(): boolean {
  return useMediaQuery(BREAKPOINTS.TABLET);
}
