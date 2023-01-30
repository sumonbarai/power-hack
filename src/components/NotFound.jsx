import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <div className="text-5xl capitalize">page not found</div>
        <Link
          to="/"
          className="text-sm cursor-pointer bg-slate-500 p-2 rounded m-3 block text-white text-center"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
