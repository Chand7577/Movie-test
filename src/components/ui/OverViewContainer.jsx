import React from "react";

const OverViewContainer = ({ movieDetail }) => {
  // Backdrop for background (w1280 or original gives good quality)
  const backdropUrl = movieDetail.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Backdrop";

  // Poster (fallback if backdrop missing)
  const posterUrl = movieDetail.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Blurred backdrop background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backdropUrl})`,
        }}
      >
        {/* Strong blur + dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black backdrop-blur-xl" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Upper section: Poster + Title/Info */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Poster – stands out clearly */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src={posterUrl}
              alt={movieDetail.title}
              className={`
                w-full max-w-[300px] sm:max-w-[340px] md:w-[340px] lg:w-[380px]
                rounded-2xl shadow-2xl shadow-black/60
                border border-white/10
                object-cover transform transition-transform duration-500
                hover:scale-[1.03]
              `}
            />
          </div>

          {/* Title + quick info – glass card */}
          <div
            className={`
              flex-1 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10 
              rounded-2xl p-6 md:p-8 lg:p-10
              shadow-xl shadow-black/40
            `}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
              {movieDetail.title || movieDetail.name || "Untitled"}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-lg md:text-xl">
              <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <span className="text-yellow-400 text-3xl">★</span>
                <span className="font-semibold">
                  {movieDetail.vote_average
                    ? movieDetail.vote_average.toFixed(1)
                    : "—"}
                </span>
              </div>

              {movieDetail.runtime && (
                <div className="bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  {movieDetail.runtime} min
                </div>
              )}

              {movieDetail.release_date && (
                <div className="bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  {movieDetail.release_date.split("-")[0]}
                </div>
              )}
              <div className="movie-overview">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-100 drop-shadow-md">
                  Overview
                </h2>

                <p className="text-gray-200 leading-relaxed text-lg md:text-xl">
                  {movieDetail.overview ||
                    "No overview available for this movie."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview section – another glass panel */}
      </div>
    </div>
  );
};

export default OverViewContainer;
