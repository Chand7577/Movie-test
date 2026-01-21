import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { API_KEY, getRandomPageNo } from "../utils/helper";
import useMoviesFetch from "../hooks/useMoviesFetch";

import MovieSection from "../components/layouts/MovieSection";
function Homepage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );
  // initial render
  const { movies, movie, moviesList, handleClick, setMovie } =
    useMoviesFetch(apiUrl);

  return (
    <div>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      <h1 className="text-white p-2  text-3xl ml-6 relative top-4">
        Popular Movies
      </h1>
      {moviesList.length == 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
    </div>
  );
}

export default Homepage;
