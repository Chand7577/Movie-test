import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Poster";

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        w-full 
        bg-gray-800 
        rounded-lg 
        overflow-hidden 
        border border-gray-700 
        cursor-pointer 
        hover:bg-gray-700 
        transition-colors
      "
    >
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-auto object-cover"
        loading="lazy"
      />

      <div className="p-3">
        <h3 className="text-white text-base font-medium line-clamp-2">
          {movie.title || movie.name || "No title"}
        </h3>

        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="text-gray-300">
            {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}
          </span>

          {movie.release_date && (
            <span className="text-gray-500">
              {new Date(movie.release_date).getFullYear()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
