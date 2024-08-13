import { useState, useEffect } from "react";

const useIsMobile = () => {
  // State to store the mobile viewport status
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update mobile status based on viewport width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  return isMobile; // Return current mobile status
};

export default useIsMobile;
