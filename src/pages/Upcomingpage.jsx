import React, { useState } from "react";
import Header from "../components/ui/Header";
import MovieSection from "../components/layouts/MovieSection";
import useMoviesFetch from "../hooks/useMoviesFetch";
import { API_KEY } from "../utils/helper";
import PaginationBtn from "../components/ui/PaginationBtn";
export default function Upcomingpage() {
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${1}`,
  );

  const { movies, movie, moviesList, handleClick, setMovie, btns } =
    useMoviesFetch(apiUrl);

  // fun for btn click for pagination

  const handleClickMe = (value) => {
    setApiUrl(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${value}`,
    );
  };

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
      <div
        className="
    flex flex-wrap justify-center items-center
    gap-3
    mt-6 px-6 py-4
    rounded-2xl
    bg-gray-900/80 backdrop-blur
    border border-gray-800
    shadow-xl
    
  "
      >
        {btns.map((btn, index) => (
          <PaginationBtn
            key={index}
            handleClickMe={handleClickMe}
            value={btn}
          />
        ))}
      </div>
    </>
  );
}
