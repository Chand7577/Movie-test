import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({ handleClick, movie, setMovie }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-950/90 via-indigo-950/80 to-gray-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Movie
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Db
              </span>
              {/* Optional subtle glow/halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            </div>
          </Link>

          {/* Navigation + Search */}
          <div className="flex items-center gap-6 md:gap-10">
            <nav className="hidden md:flex items-center gap-7">
              <NavLink to="/">Popular</NavLink>
              <NavLink to="/top">Top Rated</NavLink>
              <NavLink to="/upcom">Upcoming</NavLink>
            </nav>

            {/* Search lives here — passed props unchanged */}
            <div className="min-w-[220px] sm:min-w-[280px]">
              <Search
                handleClick={handleClick}
                movie={movie}
                setMovie={setMovie}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Tiny helper component for cleaner nav links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 group"
  >
    {children}
    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 group-hover:w-full transition-all duration-300 rounded" />
  </Link>
);

export default Header;
