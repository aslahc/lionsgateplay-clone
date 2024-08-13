import PropTypes from "prop-types";
import { useEffect } from "react";
import CardCarouselItem from "./CardCarouselItem";
import useIsMobile from "../../hooks/useIsMobile";
import useScroll from "../../hooks/useScroll";
import { shuffleArray } from "../../utils/ShuffleArray";

const CardCarousel = ({ movies }) => {
  const { scrollContainerRef, scroll } = useScroll();
  const isMobile = useIsMobile();
  const shuffledMovies = shuffleArray(movies.concat(movies));

  const handleCardClick = (trailerUrl) => {
    if (trailerUrl) {
      window.open(trailerUrl, "_blank");
    } else {
      console.error("No trailer URL provided.");
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth / 2;
    }
  }, [scrollContainerRef]);

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
          <CardCarouselItem
            key={`${movie.id}-${index}`}
            movie={movie}
            onClick={handleCardClick}
          />
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
      network: PropTypes.shape({
        officialSite: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default CardCarousel;
