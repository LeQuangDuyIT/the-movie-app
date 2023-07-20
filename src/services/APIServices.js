const buildAPIurl = endPoint =>
    `https://api.themoviedb.org/3/movie/${endPoint}?api_key=20c41d9238f96640dcec3ca0cce1b034`;

const APIServices = {
    getMoviesByType: movieType => {
        const apiUrl = buildAPIurl(movieType);
        return fetch(apiUrl).then(response => response.json());
    },
    getMovieById: movieId => {
        const apiUrl = buildAPIurl(movieId);
        return fetch(apiUrl).then(response => response.json());
    }
};
export default APIServices;
