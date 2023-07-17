import { useEffect, useState } from "react";
export const useMedia = (breakPoints) => {
  const getCurrentBreakPoint = () => {
    const currentWidth = window.innerWidth;

    for (const breakpoint of breakPoints) {
      if (currentWidth >= breakpoint.min && currentWidth <= breakpoint.max) {
        return breakpoint;
      }
    }
    return undefined;
  };

  const [currentBreakpoint, setCurrentBreakpoint] = useState(() =>
    getCurrentBreakPoint()
  );

  const windowSizeChanged = () => {
    const breakPoint = getCurrentBreakPoint();
    setCurrentBreakpoint(breakPoint);
  };
  useEffect(() => {
    window.addEventListener("resize", windowSizeChanged);
    return () => {};
  }, []);

  return currentBreakpoint;
};

export default useMedia;
