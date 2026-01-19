import React from "react";

const OverViewContainer = ({ movieDetail }) => {
  return (
    <div className="overview-container text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black  pb-12">
      <div className="desc-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Upper section - poster + info */}
        <div className="desc-upper flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
          {/* Poster */}
          <div className="img-container flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
              alt={movieDetail.title}
              className="w-full max-w-[340px] md:w-[340px] rounded-xl shadow-2xl object-cover border border-gray-700"
            />
          </div>

          {/* Title + quick info */}
          <div className="desc flex flex-col gap-3 mt-2 md:mt-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {movieDetail.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span>{movieDetail.vote_average?.toFixed(1)}</span>
              </div>

              <div className="text-gray-300">{movieDetail.runtime} min</div>

              <div className="text-gray-300">{movieDetail.release_date}</div>
            </div>
          </div>
        </div>

        {/* Overview section */}
        <div className="desc-lower ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-100">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-4xl">
            {movieDetail.overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverViewContainer;
