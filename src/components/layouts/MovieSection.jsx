import React from "react";
import MovieCard from "../ui/MovieCard";

const MovieSection = ({ movies }) => {
  return (
    <div className="movie-section px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-6 
          2xl:grid-cols-7
          gap-4 
          sm:gap-5 
          md:gap-6 
          lg:gap-7
        "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Optional: show this when no movies */}
      {movies.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No movies found</p>
        </div>
      )}
    </div>
  );
};

export default MovieSection;
