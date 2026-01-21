import { useEffect, useState } from "react";
import { API_KEY } from "../utils/helper";
const useMoviesFetch = (API_URL) => {
  const [movies, setMovies] = useState([]);

  const [moviesList, setMoviesList] = useState([]); // for list of movies that has the searched keyword
  const [movie, setMovie] = useState(""); // for list of the movies that has the searched keyword

  const [btns, _] = useState([1, 2, 3, 4, 5, 6, 7, 8]); // pagination btn values
  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.results) {
      setMovies(data.results.slice(0, -2));
    } else {
      setMovies(data);
    }
  };

  // fun will be used on button in header's component

  const handleClick = (page = 1) => {
    setMovie(" ");

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie.toLowerCase()}&page=${page}`,
    )
      .then((res) => res.json())
      .then((data) => setMoviesList(data.results));
  };

  // fetch movie function
  useEffect(() => {
    fetchMovies();
  }, [API_URL]);

  return {
    movies,
    movie,
    setMovie,
    moviesList,
    handleClick,

    btns,
  };
};

export default useMoviesFetch;
