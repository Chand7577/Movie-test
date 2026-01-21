import React from "react";

const Search = ({ handleClick, movie, setMovie }) => {
  return (
    <div className="relative flex items-center w-full max-w-[320px] sm:max-w-[360px]">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search movies..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
        className={`
          w-full px-4 py-2.5 pl-10 pr-12
          bg-gray-900/60 backdrop-blur-sm
          border border-gray-700/70
          text-white text-sm placeholder-gray-500
          rounded-full
          focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/30
          transition-all duration-300 shadow-inner
        `}
      />

      {/* Search button (right side) */}
      <button
        onClick={handleClick}
        disabled={!movie.trim()}
        className={`
          absolute left-[14.4rem] p-8.6
          bg-gradient-to-r from-red-600 to-rose-600
          hover:from-red-700 hover:to-rose-700
          text-white rounded-full
          transition-all duration-300
          shadow-md hover:shadow-red-500/40
          active:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:shadow-none
        `}
        aria-label="Search movies"
      >
        <svg
          className="w-8 h-8 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
