import PropTypes from "prop-types";

const MovieItem = ({ movie, imageWidth }) => {
  // Handle click event to open movie's official site
  const handleClick = () => {
    if (movie.network.officialSite) {
      window.open(movie.network.officialSite, "_blank");
    } else {
      console.error("No official site URL provided."); // Log an error if no URL is provided
    }
  };

  return (
    <div
      // Container for each movie item with responsive width, hover effects, and transitions
      className={`relative ${imageWidth} flex-shrink-0 hover:cursor-pointer rounded-lg px-1 sm:px-2 md:px-4 h-full scroll-snap-align-start transition duration-300`}
      onClick={handleClick} // Add click handler to open the movie's official site
    >
      <div className="relative h-60 rounded-lg hover:border-4 hover:border-lime-500 transition duration-300">
        <img
          src={movie.image?.original || "default-image-url"} // Fallback to default image if original image is not available
          alt={movie.name} // Alt text for the image
          className="w-full h-full rounded-lg object-cover" // Ensure image covers the container while maintaining aspect ratio
        />
      </div>
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4 text-white">
        <h3 className="text-sm sm:text-lg md:text-2xl font-bold truncate w-11/12">
          {movie.name}
        </h3>
      </div>
    </div>
  );
};

// Define the expected prop types for the component
MovieItem.propTypes = {
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
  imageWidth: PropTypes.string.isRequired, // Width of the image, which adjusts based on screen size
};

export default MovieItem;
