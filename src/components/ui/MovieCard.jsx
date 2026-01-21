import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Poster";

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  // Truncate overview to avoid huge text blocks
  const overviewText = movie.overview
    ? movie.overview.length > 180
      ? movie.overview.substring(0, 180) + "..."
      : movie.overview
    : "No overview available.";

  return (
    <div
      onClick={handleClick}
      className="
        group relative
        w-full aspect-[2/3]   /* ≈ poster ratio */
        rounded-xl overflow-hidden
        bg-gray-800
        border border-gray-700
        shadow-md shadow-black/30
        cursor-pointer
        transition-all duration-300
        hover:shadow-xl hover:shadow-purple-900/40
        hover:scale-[1.03]
      "
    >
      {/* Poster image */}
      <img
        src={posterUrl}
        alt={movie.title || movie.name || "Movie poster"}
        className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110 group-hover:brightness-75
        "
        loading="lazy"
      />

      {/* Bottom info (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-white text-base sm:text-lg font-semibold line-clamp-2 drop-shadow-md">
          {movie.title || movie.name || "Untitled"}
        </h3>

        <div className="mt-1.5 flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-medium">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}
            </span>
          </div>

          {movie.release_date && (
            <span className="text-gray-300">
              {new Date(movie.release_date).getFullYear()}
            </span>
          )}
        </div>
      </div>

      {/* Hover overlay with overview */}
      <div
        className="
          absolute inset-0
          bg-black/70 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-center p-5 text-center
        "
      >
        <p className="text-gray-200 text-sm leading-relaxed line-clamp-5 overflow-hidden">
          {overviewText}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
