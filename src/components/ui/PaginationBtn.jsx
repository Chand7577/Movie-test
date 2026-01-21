import React from "react";

const PaginationBtn = ({ handleClickMe, value }) => {
  return (
    <button
      onClick={() => handleClickMe(value)}
      className="
        min-w-[48px] h-12
        px-4
        flex items-center justify-center

        text-base font-semibold
        rounded-xl

        border border-gray-700
        bg-gray-800 text-gray-200

        hover:bg-indigo-600 hover:text-white
        hover:border-indigo-500

        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-indigo-500

        transition-all duration-200 ease-in-out
        shadow-md
        cursor-pointer
      "
    >
      {value}
    </button>
  );
};

export default PaginationBtn;
