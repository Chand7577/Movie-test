import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { API_KEY, getRandomPageNo } from "../utils/helper";
import useMoviesFetch from "../customHooks/useMoviesFetch";

import MovieSection from "../components/layouts/MovieSection";
function Homepage() {
  // const [movie, setMovie] = useState("");
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );

  const { movies } = useMoviesFetch(apiUrl);

  // useEffect(() => {}, [movie]);

  return (
    <div>
      <Header />
      <MovieSection movies={movies} />
    </div>
  );
}

export default Homepage;
