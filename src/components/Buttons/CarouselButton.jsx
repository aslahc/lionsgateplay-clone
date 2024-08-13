import PropTypes from "prop-types";

/**
 * CarouselButton component renders a button used to navigate the carousel.
 */
const CarouselButton = ({ direction, onClick, isVisible }) => (
  <button
    // Apply styling classes to position and style the button
    className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full z-10 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0"
    } ${direction === "left" ? "left-0" : "right-0"}`}
    onClick={onClick}
    aria-label={`Scroll ${direction}`} // Accessibility label for screen readers
  >
    {/* Display the arrow based on the direction prop */}
    {direction === "left" ? "<" : ">"}
  </button>
);

// Define the expected prop types for the component
CarouselButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired, // Direction should be either "left" or "right"
  onClick: PropTypes.func.isRequired, // onClick should be a function
  isVisible: PropTypes.bool.isRequired, // isVisible should be a boolean
};

export default CarouselButton;
