import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fillterByEmailAction,
  fillterByNameAction,
  fillterByPhoneAction,
} from "../features/filterSlice/filterSlice";
import validEmailChecker from "../shared/ui/validEmailChecker";

const BillTitleBar = ({ control }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // debounce handle in input field
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (validEmailChecker(input)) {
        dispatch(fillterByEmailAction(input));
      } else if (Number(input)) {
        dispatch(fillterByPhoneAction(input));
      } else {
        dispatch(fillterByNameAction(input));
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [input, dispatch]);

  return (
    <div className="navbar container m-auto bg-slate-400 px-4">
      <div className="flex-1">
        <div className="font-bold text-xl">
          <div className="flex gap-4">
            <div>Billings</div>
            <input
              type="text"
              placeholder="Search by Full name or Email or Phone"
              className="input input-bordered input-sm w-full max-w-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex-none">
        <p className="font-semibold">
          <button onClick={control} className="btn btn-sm">
            Add New Bill
          </button>
        </p>
      </div>
    </div>
  );
};

export default BillTitleBar;
