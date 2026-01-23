import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { getRandomPageNo } from "../utils/helper";
import useMoviesFetch from "../hooks/useMoviesFetch";
import PaginationBtn from "../components/ui/PaginationBtn";

import MovieSection from "../components/layouts/MovieSection";
function Homepage() {
  const API_KEY = import.meta.env.VITE_META_API_KEY;
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPageNo()}`,
  );
  // initial render
  const { movies, movie, moviesList, handleClick, setMovie, btns } =
    useMoviesFetch(apiUrl);

  // fun for btn click for pagination

  const handleClickMe = (value) => {
    setApiUrl(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${value}`,
    );
  };

  return (
    <div>
      <Header handleClick={handleClick} movie={movie} setMovie={setMovie} />
      <h1 className="text-white p-2  text-3xl ml-6 relative top-4">
        Popular Movies
      </h1>
      {moviesList.length == 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <MovieSection movies={moviesList} />
      )}
      {
        "// bug in this line that i still need to solve or probably in the logic"
      }
      {moviesList.length == 0 && (
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
      )}
    </div>
  );
}

export default Homepage;
