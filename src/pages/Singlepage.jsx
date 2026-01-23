import React, { useState } from "react";
import Header from "../components/ui/Header";
import OverViewSection from "../components/layouts/OverViewSection";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../hooks/useMoviesFetch";

import MovieSection from "../components/layouts/MovieSection";

function Singlepage() {
  const API_KEY = import.meta.env.VITE_META_API_KEY;
  const { id } = useParams();
  const [movieDetailUrl, setMovieDetailUrl] = useState(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );

  const [castDetailUrl, setCastDetailUrl] = useState(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );

  const {
    movies: movieDetail,
    movie,
    moviesList,
    handleClick,
    setMovie,
  } = useMoviesFetch(movieDetailUrl);

  const { movies: movieCast } = useMoviesFetch(castDetailUrl);

  const movies = {
    movieDetail,
    movieCast,
  };

  return (
    <>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      <h1>single pagge</h1>
      {moviesList.length == 0 ? (
        <OverViewSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
    </>
  );
}

export default Singlepage;
