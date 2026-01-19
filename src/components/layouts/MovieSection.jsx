import React from "react";
import MovieCard from "../ui/MovieCard";

const MovieSection = ({ movies }) => {
  return (
    <div className="movie-section">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieSection;
