import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const headerRef = useRef(null);
  const headerMobileRef = useRef(null);

  const scrollAnimation = useCallback(
    (ele, windowY) => {
      if (!ele) {
        return false;
      }
      if (windowY < scrollPos) {
        ele.classList.add("--scrollUp");
        ele.classList.remove("--scrollDown");
      } else {
        ele.classList.add("--scrollDown");
        ele.classList.remove("--scrollUp");
      }
    },
    [scrollPos]
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowY = window.scrollY;

      scrollAnimation(headerRef.current, windowY);
      if (windowY > 75) {
        scrollAnimation(headerMobileRef.current, windowY);
      }
      setScrollPos(windowY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollAnimation]);

  return {
    headerRef,
    headerMobileRef,
  };
};
