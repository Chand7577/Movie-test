import React from "react";
import OverViewContainer from "../ui/OverViewContainer";
import CastContainer from "../ui/CastContainer";
const OverViewSection = ({ movies }) => {
  return (
    <div className="overview-section-container">
      <OverViewContainer movieDetail={movies.movieDetail} />
      <CastContainer movieCast={movies.movieCast} />
    </div>
  );
};

export default OverViewSection;
