import React from "react";

import useMoviesFetch from "../../customHooks/useMoviesFetch";

const Search = ({ handleClick, movie, setMovie }) => {
  return (
    <div className="search-container flex gap-2  cursor-pointer">
      <input
        type="text"
        placeholder="Movie Name"
        className=" rounded-md border"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button
        className="bg-red-500  rounded-sm border cursor-pointer"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
