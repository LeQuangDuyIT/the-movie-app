import { useEffect, useState } from 'react';
import APIServices from '../services/APIServices';
/**
 * Custom hook
 * @param {movieType} movieType
 * @desc movieType is one of "now_playing" | "popular" | "upcoming" | "top_rated"
 */
const useFetchMoviesByType = movieType => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const onFetchData = async () => {
        setLoading(true);
        try {
            const moviesData = await APIServices.getMoviesByType(movieType);
            setData(moviesData.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        onFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        loading
    };
};

export default useFetchMoviesByType;
