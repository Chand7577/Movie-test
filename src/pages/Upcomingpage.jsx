import React from "react";
import Header from "../components/ui/Header";
import MovieSection from "../components/layouts/MovieSection";
import useMoviesFetch from "../customHooks/useMoviesFetch";
import { API_KEY, getRandomPageNo } from "../utils/helper";
export default function Upcomingpage() {
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`;
  const { movies } = useMoviesFetch(API_URL);

  return (
    <>
      <Header />
      <MovieSection movies={movies} />
    </>
  );
}
