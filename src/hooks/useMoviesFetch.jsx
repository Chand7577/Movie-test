import { useEffect, useState } from "react";
import { API_KEY } from "../utils/helper";
const useMoviesFetch = (API_URL) => {
  const [movies, setMovies] = useState([]);

  const [moviesList, setMoviesList] = useState([]); // for list of movies that has the searched keyword
  const [movie, setMovie] = useState(""); // for list of the movies that has the searched keyword

  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.results) {
      setMovies(data.results);
    } else {
      setMovies(data);
    }
  };

  // fun will be used on button in header's component

  const handleClick = () => {
    setMovie(" ");

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie.toLowerCase()}&page=${1}`,
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
  };
};

export default useMoviesFetch;
