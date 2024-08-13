import PropTypes from "prop-types";

const CardCarouselItem = ({ movie, onClick }) => {
  return (
    <div
      // Container for each movie item with responsive width and hover effects
      className="relative flex-shrink-0 px-1 h-full hover:cursor-pointer scroll-snap-align-start border border-transparent transition-all duration-300"
      style={{ width: "30%" }} // Default width for larger screens
      onClick={() => onClick(movie.network.officialSite)} // Handle click event by passing the official site URL
    >
      <div className="rounded-lg h-56 overflow-hidden border-transparent border-4 hover:border-lime-500 transition duration-300 relative">
        <img
          src={movie.image?.original || "default-image-url"} // Fallback to default image if original image is not available
          alt={movie.name} // Alt text for the image
          className="rounded-lg w-full h-full object-cover" // Ensure image covers the container while maintaining aspect ratio
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

// Define the expected prop types for the component
CardCarouselItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired, // Unique identifier for the movie
    name: PropTypes.string.isRequired, // Name of the movie
    image: PropTypes.shape({
      original: PropTypes.string, // URL of the movie's image
    }),
    network: PropTypes.shape({
      officialSite: PropTypes.string, // URL of the movie's official site
    }).isRequired,
  }).isRequired, // The movie prop is required
  onClick: PropTypes.func.isRequired, // onClick should be a function
};

export default CardCarouselItem;
