import React from "react";
import { useState } from "react";
import useMoviesFetch from "../../customHooks/useMoviesFetch";

const Search = () => {
  const [movieName, setMovieName] = useState("");

  const getMovie = () => {
    const API_KEY = "d320b1dd0002eb57d0ba9fc61ed1d4c2";

    // fun to generate random page
    const getRandomPageNo = () => {
      return Math.floor(Math.random() * 58 + 1);
    };

    const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&query=${movieName}&page=${getRandomPageNo()}`;
    const { movies } = useMoviesFetch(API_URL);
  };

  return (
    <div className="search-container flex gap-2  ">
      <input
        type="text"
        placeholder="Movie Name"
        className=" rounded-md border"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button
        className="bg-red-500  rounded-sm border cursor-pointer"
        onClick={getMovie}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
