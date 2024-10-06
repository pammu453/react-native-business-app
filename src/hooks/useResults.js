import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const getData = async (search) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'san jose'
                }
            })
            setResults(res.data.businesses)
            setError("")
        } catch (error) {
            setError("Something went wrong")
        }
    }

    useEffect(() => {
        getData("")
    }, [])

    return [results, error, getData]
}