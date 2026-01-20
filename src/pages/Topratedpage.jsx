import React, { useState } from "react";
import Header from "../components/ui/Header";
import useMoviesFetch from "../customHooks/useMoviesFetch";
import MovieSection from "../components/layouts/MovieSection";
import { API_KEY, getRandomPageNo } from "../utils/helper";
function Topratedpage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );

  const { movies } = useMoviesFetch(apiUrl);
  return (
    <>
      <Header />
      <h1>top rated page</h1>
      <MovieSection movies={movies} />
    </>
  );
}

export default Topratedpage;
