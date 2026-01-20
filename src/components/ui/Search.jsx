import React from "react";

import useMoviesFetch from "../../customHooks/useMoviesFetch";

const Search = () => {
  return (
    <div className="search-container flex gap-2  cursor-pointer">
      <input
        type="text"
        placeholder="Movie Name"
        className=" rounded-md border"
      />
      <button className="bg-red-500  rounded-sm border cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Search;
