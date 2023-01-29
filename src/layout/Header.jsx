import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
import { useGetBillQuery } from "../features/billing/billingApi";

const Header = () => {
  const dispatch = useDispatch();
  const { data: bills } = useGetBillQuery();

  // total amount calculation

  const initialValue = 0;
  const sumOfAmount = bills?.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.amount),
    initialValue
  );

  const handleLogOut = () => {
    // clear redux store
    dispatch(userLoggedOut());
    // clear local storage
    localStorage.removeItem("auth");
  };
  return (
    <div className="bg-slate-400 mb-7">
      <div className="navbar container m-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Logo
          </Link>
        </div>
        <div className="flex-none">
          <p className="font-semibold">{`Paid Total = ${sumOfAmount}`}</p>
          <button
            onClick={() => handleLogOut()}
            className="btn btn-xs ml-3 capitalize"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
