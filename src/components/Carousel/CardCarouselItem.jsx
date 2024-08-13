import PropTypes from "prop-types";

const CardCarouselItem = ({ movie, onClick }) => {
  return (
    <div
      className="
        relative flex-shrink-0 px-1 h-full hover:cursor-pointer scroll-snap-align-start 
        border border-transparent transition-all duration-300
        w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-5.6667"
      onClick={() => onClick(movie.network.officialSite)}
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
  );
};

CardCarouselItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      original: PropTypes.string,
    }),
    network: PropTypes.shape({
      officialSite: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardCarouselItem;
