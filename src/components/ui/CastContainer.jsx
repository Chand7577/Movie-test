import React from "react";
import CastCard from "./CastCard";
const CastContainer = ({ movieCast }) => {
  console.log(movieCast);
  return (
    <div className="cast-container">
      <CastCard />
    </div>
  );
};

export default CastContainer;
