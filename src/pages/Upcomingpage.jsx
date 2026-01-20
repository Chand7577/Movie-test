import React, { useState } from "react";
import Header from "../components/ui/Header";
import MovieSection from "../components/layouts/MovieSection";
import useMoviesFetch from "../customHooks/useMoviesFetch";
import { API_KEY } from "../utils/helper";
export default function Upcomingpage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${1}`,
  );

  const { movies } = useMoviesFetch(apiUrl);

  return (
    <>
      <Header />
      <MovieSection movies={movies} />
    </>
  );
}
