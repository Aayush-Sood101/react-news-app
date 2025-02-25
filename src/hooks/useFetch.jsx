import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://newsdata.io/api/1/news"; // ✅ Correct API endpoint
const API_KEY = import.meta.env.VITE_API_KEY; // Ensure this is set in .env file

function useFetch(query, language) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Start with false to prevent unnecessary loading
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("API key is missing.");
      return;
    }

    if (!query) return; // Prevent unnecessary API calls if no query is entered

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            apikey: API_KEY,
            q: query,
            language: language,
          },
        });

        console.log("API Response:", response.data); // Debugging

        if (response.data?.results?.length) {
          setData(response.data.results); // Already setting the results array here
        } else {
          setData([]); // Empty array instead of null
          setError("No news found.");
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Error fetching news.");
      }

      setLoading(false);
    }

    fetchData();
  }, [query, language]);

  return { data, loading, error };
}

export default useFetch;