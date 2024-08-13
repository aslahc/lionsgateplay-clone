import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const BannerCarousel = ({ movies }) => {
  const scrollContainerRef = useRef(null);
  const [screenSize, setScreenSize] = useState("large");
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = scrollWidth / 2;

      let newScrollLeft = scrollLeft + scrollOffset;

      // Handle wrapping logic
      if (newScrollLeft >= maxScrollLeft) {
        container.scrollLeft = newScrollLeft - maxScrollLeft;
      } else if (newScrollLeft <= 0) {
        container.scrollLeft = maxScrollLeft + newScrollLeft;
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

    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize("small");
      } else if (window.innerWidth <= 768) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const shuffledMovies = shuffleArray(movies.concat(movies));

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
      {screenSize === "large" && (
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => scroll(-300)}
        >
          &lt;
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto h-40 sm:h-48 md:h-60 scroll-smooth"
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {shuffledMovies.map((movie, index) => (
          <div
            key={`${movie.id}-${index}`} // Ensure unique key
            className={`relative ${getImageWidth()} flex-shrink-0 hover:cursor-pointer rounded-lg px-1 sm:px-2 md:px-4 h-full scroll-snap-align-start transition duration-300`}
          >
            <div className="relative h-60 rounded-lg hover:border-4 hover:border-lime-500 transition duration-300">
              <img
                src={movie.image?.original || "default-image-url"}
                alt={movie.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4 text-white">
              <h3 className="text-sm sm:text-lg md:text-2xl font-bold truncate w-11/12">
                {movie.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {screenSize === "large" && (
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => scroll(300)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

BannerCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.shape({
        original: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default BannerCarousel;
