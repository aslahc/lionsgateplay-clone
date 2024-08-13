import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const CardCarousel = ({ movies }) => {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = scrollWidth / 2;

      if (scrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0;
      } else if (scrollLeft <= 0) {
        container.scrollLeft = maxScrollLeft;
      } else {
        container.scrollBy({
          left: scrollOffset,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth / 2;
    }

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const shuffledMovies = shuffleArray(movies.concat(movies));

  const handleCardClick = (trailerUrl) => {
    if (trailerUrl) {
      window.open(trailerUrl, "_blank");
    } else {
      console.error("No trailer URL provided.");
    }
  };

  return (
    <div className="relative overflow-hidden group">
      {!isMobile && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll(-300)}
        >
          &lt;
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto h-48 sm:h-64 whitespace-nowrap scroll-smooth"
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {shuffledMovies.map((movie, index) => (
          <div
            key={`${movie.id}-${index}`} // Ensure unique key
            className="relative flex-shrink-0 px-1 h-full hover:cursor-pointer scroll-snap-align-start border border-transparent transition-all duration-300"
            style={{ width: "15%" }}
            onClick={() => handleCardClick(movie.network.officialSite)} // Handle click
          >
            <div className="rounded-lg h-56 overflow-hidden border-transparent border-4 hover:border-lime-500 transition duration-300 relative">
              <img
                src={movie.image?.original || "default-image-url"}
                alt={movie.name}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 mt-48 flex justify-center">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white text-center px-2">
                  {movie.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isMobile && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll(300)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

CardCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.shape({
        original: PropTypes.string,
      }),
      trailerUrl: PropTypes.string, // Add this line for trailer URL
    })
  ).isRequired,
};

export default CardCarousel;
