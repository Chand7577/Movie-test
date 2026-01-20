import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { API_KEY, getRandomPageNo } from "../utils/helper";
import useMoviesFetch from "../customHooks/useMoviesFetch";

import MovieSection from "../components/layouts/MovieSection";
function Homepage() {
  const [moviesList, setMoviesList] = useState([]);
  const [movie, setMovie] = useState("");
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );
  // initial render
  const { movies } = useMoviesFetch(apiUrl);

  const handleClick = () => {
    setApiUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie.toLowerCase()}&page=${1}`,
    );

    setMovie(" ");

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => (data) => setMoviesList(data.results));
  };

  return (
    <div>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      {moviesList.length == 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
    </div>
  );
}

export default Homepage;
