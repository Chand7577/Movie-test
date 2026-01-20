import { useEffect, useState } from "react";

const useMoviesFetch = (API_URL) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.results) {
      setMovies(data.results);
    } else {
      setMovies(data);
    }
  };

  // fetch movie function
  useEffect(() => {
    fetchMovies();
  }, [API_URL]);

  return {
    movies,
  };
};

export default useMoviesFetch;
