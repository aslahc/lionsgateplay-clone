import { useCallback, useRef } from "react";

const useScroll = () => {
  // Ref to hold the scroll container element
  const scrollContainerRef = useRef(null);

  const scroll = useCallback((scrollOffset) => {
    const container = scrollContainerRef.current;

    if (container) {
      const { scrollWidth, scrollLeft } = container;
      const maxScrollLeft = scrollWidth / 2; // Half of the scrollWidth for wrapping logic
      let newScrollLeft = scrollLeft + scrollOffset;

      // Check if scrolling exceeds the container's max scroll limit
      if (newScrollLeft >= maxScrollLeft) {
        // Wrap around to the start
        container.scrollLeft = newScrollLeft - maxScrollLeft;
      } else if (newScrollLeft <= 0) {
        // Wrap around to the end
        container.scrollLeft = maxScrollLeft + newScrollLeft;
      } else {
        // Smooth scroll within bounds
        container.scrollBy({ left: scrollOffset, behavior: "smooth" });
      }
    }
  }, []);

  return { scrollContainerRef, scroll };
};

export default useScroll;
