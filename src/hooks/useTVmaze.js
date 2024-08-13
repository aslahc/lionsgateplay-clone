import { useState, useEffect } from "react";

const useTVmaze = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // State to indicate loading status
  const [loading, setLoading] = useState(true);

  // State to store any error that occurs during fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the TVmaze API
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON data from the response
        const result = await response.json();

        // Set the fetched data to state
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        // Set loading to false when the fetch is complete (whether successful or not)
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useTVmaze;
