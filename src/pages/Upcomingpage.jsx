import React from "react";
import Header from "../components/ui/Header";
import MovieSection from "../components/layouts/MovieSection";
import useMoviesFetch from "../customHooks/useMoviesFetch";
export default function Upcomingpage() {
  const API_KEY = "d320b1dd0002eb57d0ba9fc61ed1d4c2";

  // fun to generate random page
  const getRandomPageNo = () => {
    return Math.floor(Math.random() * 58 + 1);
  };

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`;
  const { movies } = useMoviesFetch(API_URL);

  return (
    <>
      <Header />
      <MovieSection movies={movies} />
    </>
  );
}
