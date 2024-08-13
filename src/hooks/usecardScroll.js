import { useRef } from "react";

const useCardScroll = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth; // Total width of the scrollable content
      const scrollLeft = container.scrollLeft; // Current horizontal scroll position
      const maxScrollLeft = scrollWidth / 2; // Middle point of the scrollable content

      // Handle circular scrolling
      if (scrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0; // Reset to start if scrolled past the middle
      } else if (scrollLeft <= 0) {
        container.scrollLeft = maxScrollLeft; // Reset to end if scrolled to the start
      } else {
        container.scrollBy({
          left: scrollOffset, // Scroll by the specified offset
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    }
  };

  return { scrollContainerRef, scroll }; // Return ref and scroll function
};

export default useCardScroll;
