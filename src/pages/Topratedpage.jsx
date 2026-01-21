import React, { useState } from "react";
import Header from "../components/ui/Header";
import useMoviesFetch from "../hooks/useMoviesFetch";
import MovieSection from "../components/layouts/MovieSection";
import { API_KEY, getRandomPageNo } from "../utils/helper";
function Topratedpage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );

  const { movies, movie, moviesList, handleClick, setMovie } =
    useMoviesFetch(apiUrl);

  return (
    <>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      <h1 className="text-white p-2  text-3xl ml-6 relative top-4">
        Top Rated Movies
      </h1>
      {moviesList.length == 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
    </>
  );
}

export default Topratedpage;
