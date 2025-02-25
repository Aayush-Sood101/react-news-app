import { useEffect, useState } from "react";
import axios from 'axios';

const BASE_URL  = 'https://newsdata.io/api/1/latest'; // Ensure correct endpoint
const API_KEY = import.meta.env.VITE_API_KEY; // Use import.meta.env for Vite



function useFetch(query, language) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        setError(null); // Fixed NULL → null

        try {
            const apiResponse = await axios.get(BASE_URL, {
                params: {
                    apikey: API_KEY, // Correct param name (was apiKey)
                    q: query,
                    language: language
                }
            });

            setData(apiResponse.data.results || []); // Ensure data is set
        } 
        catch (error) {
            console.log(error);
            setData(null);
            setError("Error fetching data... Please refresh!!");
        } 
        finally {
            setLoading(false); // Ensure loading stops in all cases
        }
    }

    useEffect(() => {
        fetchData();
    }, [query, language]);

    return { data, error, loading };
}

export default useFetch;
