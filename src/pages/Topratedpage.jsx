import React from "react";
import Header from "../components/ui/Header";
import useMoviesFetch from "../customHooks/useMoviesFetch";
import MovieSection from "../components/layouts/MovieSection";
function Topratedpage() {
  const API_KEY = "d320b1dd0002eb57d0ba9fc61ed1d4c2";

  // fun to generate random page
  const getRandomPageNo = () => {
    return Math.floor(Math.random() * 58 + 1);
  };

  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`;
  const { movies } = useMoviesFetch(API_URL);
  return (
    <>
      <Header />
      <h1>top rated page</h1>
      <MovieSection movies={movies} />
    </>
  );
}

export default Topratedpage;
