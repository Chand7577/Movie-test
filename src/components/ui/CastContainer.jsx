import React from "react";
import CastCard from "./CastCard";
const CastContainer = ({ movieCast }) => {
  return (
    <>
      <h1 className="text-white ml-[9rem] text-3xl  mt-8">Cast</h1>
      <div className="cast-container flex flex-wrap py-8 px-2 h-auto items-center justify-center gap-8">
        {movieCast?.map((cast, idx) => {
          return <CastCard cast={cast} key={idx} />;
        })}
      </div>
    </>
  );
};

export default CastContainer;
