import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const MOVIE_IMAGE_URL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div
      className="card text-white flex flex-col gap-2 border h-[22rem]"
      onClick={() => handleClick(movie.id)}
    >
      <div className="card-head">
        <img src={MOVIE_IMAGE_URL} className="size-70 shrink-0" />
      </div>
      <div className="card-body">
        <h3 className="movie-name">{movie.title}</h3>
        <p className="movie-rating">Rating:{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
