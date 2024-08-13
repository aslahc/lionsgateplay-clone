import PropTypes from "prop-types";
import { useEffect } from "react";
import CardCarouselItem from "./CardCarouselItem"; // Component to display individual movie card
import useIsMobile from "../../hooks/useIsMobile"; // Custom hook to check if the device is mobile
import useScroll from "../../hooks/usecardScroll"; // Custom hook for scroll functionality
import { shuffleArray } from "../../utils/ShuffleArray"; // Utility function to shuffle the array

const CardCarousel = ({ movies }) => {
  // Custom hook for handling scroll functionality
  const { scrollContainerRef, scroll } = useScroll();

  // Custom hook to determine if the device is mobile
  const isMobile = useIsMobile();

  // Shuffle movies array and concatenate to create a seamless loop
  const shuffledMovies = shuffleArray(movies.concat(movies));

  /**
   * Handles click event on a movie card.
   * Opens the trailer URL in a new tab if provided.
   *
   * @param {string} trailerUrl - The URL of the movie trailer.
   */
  const handleCardClick = (trailerUrl) => {
    if (trailerUrl) {
      window.open(trailerUrl, "_blank");
    } else {
      console.error("No trailer URL provided."); // Log an error if no URL is provided
    }
  };

  useEffect(() => {
    // Center the scroll position on mount
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth / 2;
    }
  }, [scrollContainerRef]);

  return (
    <div className="relative overflow-hidden group">
      {/* Render left scroll button only if not on mobile devices */}
      {!isMobile && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll(-300)} // Scroll left by 300 pixels
        >
          &lt;
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto h-48 sm:h-64 whitespace-nowrap scroll-smooth"
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {/* Render CardCarouselItem components for each movie */}
        {shuffledMovies.map((movie, index) => (
          <CardCarouselItem
            key={`${movie.id}-${index}`}
            movie={movie}
            onClick={handleCardClick} // Pass handleCardClick to each item
            className="w-1/4 md:w-1/6 lg:w-1/5" // Adjust width based on screen size
          />
        ))}
      </div>
      {/* Render right scroll button only if not on mobile devices */}
      {!isMobile && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll(300)} // Scroll right by 300 pixels
        >
          &gt;
        </button>
      )}
    </div>
  );
};

// Define the expected prop types for the component
CardCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Unique identifier for the movie
      name: PropTypes.string.isRequired, // Name of the movie
      image: PropTypes.shape({
        original: PropTypes.string, // URL of the movie's image
      }),
      network: PropTypes.shape({
        officialSite: PropTypes.string, // URL of the movie's official site
      }).isRequired,
    })
  ).isRequired, // The movies prop is required
};

export default CardCarousel;
