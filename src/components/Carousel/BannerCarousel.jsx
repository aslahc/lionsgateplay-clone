import PropTypes from "prop-types";
import { useEffect, useState, useMemo } from "react";
import { shuffleArray } from "../../utils/ShuffleArray"; // Utility function to shuffle the array
import CarouselButton from "../Buttons/CarouselButton"; // CarouselButton component for navigation
import MovieItem from "./MovieItem"; // MovieItem component to display individual movie
import useScroll from "../../hooks/useScroll"; // Custom hook for scroll functionality

const BannerCarousel = ({ movies }) => {
  // Custom hook for handling scrolling
  const { scrollContainerRef, scroll } = useScroll();

  // State to keep track of screen size
  const [screenSize, setScreenSize] = useState("large");
  // State to handle hover status
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Center the scroll position on mount
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth / 2;
    }

    // Function to check and set screen size
    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize("small");
      } else if (window.innerWidth <= 768) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Initial check and event listener for screen size changes
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [scrollContainerRef]);

  // Shuffle movies array and concatenate to create a seamless loop
  const shuffledMovies = useMemo(
    () => shuffleArray(movies.concat(movies)),
    [movies]
  );

  // Function to determine image width based on screen size
  const getImageWidth = () => {
    switch (screenSize) {
      case "small":
        return "w-full";
      case "medium":
        return "w-4/5";
      default:
        return "w-1/2";
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Render left carousel button only on large screens */}
      {screenSize === "large" && (
        <CarouselButton
          direction="left"
          onClick={() => scroll(-300)}
          isVisible={isHovered}
        />
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto h-40 sm:h-48 md:h-60 scroll-smooth scroll-snap-x"
      >
        {/* Render MovieItem components for each movie */}
        {shuffledMovies.map((movie, index) => (
          <MovieItem
            key={`${movie.id}-${index}`}
            movie={movie}
            imageWidth={getImageWidth()}
          />
        ))}
      </div>
      {/* Render right carousel button only on large screens */}
      {screenSize === "large" && (
        <CarouselButton
          direction="right"
          onClick={() => scroll(300)}
          isVisible={isHovered}
        />
      )}
    </div>
  );
};

// Define the expected prop types for the component
BannerCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Unique identifier for the movie
      name: PropTypes.string.isRequired, // Name of the movie
      image: PropTypes.shape({
        original: PropTypes.string, // URL of the movie's image
      }),
    })
  ).isRequired, // The movies prop is required
};

export default BannerCarousel;
