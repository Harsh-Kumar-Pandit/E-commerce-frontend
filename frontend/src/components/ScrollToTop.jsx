import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTopSmooth = (duration = 800) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/product")) {
      scrollToTopSmooth(500);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
