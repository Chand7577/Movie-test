import React, { useState } from "react";
import Header from "../components/ui/Header";
import OverViewSection from "../components/layouts/OverViewSection";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../customHooks/useMoviesFetch";
import { API_KEY } from "../utils/helper";

function Singlepage() {
  const { id } = useParams();
  const [movieDetailUrl, setMovieDetailUrl] = useState(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );

  const [castDetailUrl, setCastDetailUrl] = useState(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );

  const { movies: movieDetail } = useMoviesFetch(movieDetailUrl);
  const { movies: movieCast } = useMoviesFetch(castDetailUrl);

  const movies = {
    movieDetail,
    movieCast,
  };

  return (
    <>
      <Header />
      <h1>single pagge</h1>
      <OverViewSection movies={movies} />
    </>
  );
}

export default Singlepage;
