import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header  h-19  text-white flex justify-between items-center">
      <div className="icon-container">
        <p>MovieDb</p>
      </div>
      <ul className="nav-links flex gap-6 cursor-pointer">
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="/top">Top Rated</Link>
        </li>
        <li>
          <Link to="/upcom">Upcoming</Link>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default Header;
