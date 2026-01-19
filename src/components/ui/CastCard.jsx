import React from "react";

const CastCard = ({ cast }) => {
  return (
    <div
      className={`
        flex items-center gap-4 justify-around
        bg-gray-900/80 hover:bg-gray-800 
        rounded-xl p-3 
        min-w-[260px] flex-shrink-0 
        transition-all duration-200 
        border border-gray-800 hover:border-gray-700
        shadow-sm hover:shadow-md
      `}
    >
      {/* Actor Image */}
      <div className="flex-shrink-0">
        <img
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
              : "/placeholder-avatar.png"
          }
          alt={cast.original_name || cast.name || "Actor"}
          className="w-16 h-16 rounded-full object-cover ring-1 ring-gray-700/60"
          loading="lazy"
        />
      </div>

      {/* Actor Info */}
      <div className="min-w-0 flex-1">
        <p className="font-medium text-white text-sm truncate">
          {cast.original_name || cast.name}
        </p>
        <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
          {cast.character ? `as ${cast.character}` : "Actor"}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
