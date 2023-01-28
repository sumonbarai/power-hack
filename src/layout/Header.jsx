import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-300">
      <div className="navbar container m-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Logo
          </Link>
        </div>
        <div className="flex-none">
          <p className="font-semibold">Paid Total = 0</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
