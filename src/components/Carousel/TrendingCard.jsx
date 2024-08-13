import PropTypes from "prop-types";

const TrendingCard = ({ movie, onClick }) => {
  return (
    <div
      // Container for each movie card with responsive width, hover effects, and transitions
      className="relative flex-shrink-0 px-1 h-full hover:cursor-pointer scroll-snap-align-start border border-transparent transition-all duration-300"
      style={{ width: "30%" }} // Sets the width of the card to 30% of its container
      onClick={() => onClick(movie.network.officialSite)} // Calls the onClick function with the movie's official site URL
    >
      <div className="rounded-lg h-56 overflow-hidden border-transparent border-4 hover:border-lime-500 transition duration-300 relative">
        <img
          src={movie.image?.original || "default-image-url"} // Fallback to a default image if the original image is not available
          alt={movie.name} // Alt text for the image
          className="rounded-lg w-full h-full object-cover" // Ensures the image covers the container and maintains aspect ratio
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
TrendingCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired, // Unique identifier for the movie
    name: PropTypes.string.isRequired, // Name of the movie
    image: PropTypes.shape({
      original: PropTypes.string, // URL of the movie's image
    }),
    network: PropTypes.shape({
      officialSite: PropTypes.string.isRequired, // URL of the movie's official site
    }).isRequired,
  }).isRequired, // The movie prop is required
  onClick: PropTypes.func.isRequired, // Function to handle click events
};

export default TrendingCard;
