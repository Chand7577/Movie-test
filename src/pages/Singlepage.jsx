import React from "react";
import Header from "../components/ui/Header";
import OverViewSection from "../components/layouts/OverViewSection";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../customHooks/useMoviesFetch";

function Singlepage() {
  const API_KEY = "d320b1dd0002eb57d0ba9fc61ed1d4c2";
  const { id } = useParams();

  // fun to generate random page
  const getRandomPageNo = () => {
    return Math.floor(Math.random() * 58 + 1);
  };

  const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const CAST_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  const { movies: movieDetail } = useMoviesFetch(MOVIE_DETAIL_URL);
  const { movies: movieCast } = useMoviesFetch(CAST_DETAIL_URL);

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
