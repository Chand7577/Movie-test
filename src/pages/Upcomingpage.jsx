import React, { useState } from "react";
import Header from "../components/ui/Header";
import MovieSection from "../components/layouts/MovieSection";
import useMoviesFetch from "../hooks/useMoviesFetch";
import { API_KEY } from "../utils/helper";
export default function Upcomingpage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${1}`,
  );

  const { movies, movie, moviesList, handleClick, setMovie } =
    useMoviesFetch(apiUrl);

  return (
    <>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      <h1 className="text-white p-2  text-3xl ml-6 relative top-4">
        Upcoming Movies
      </h1>
      {moviesList.length == 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
    </>
  );
}
