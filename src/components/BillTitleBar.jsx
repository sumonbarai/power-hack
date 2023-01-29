import React from "react";

const BillTitleBar = ({ control }) => {
  return (
    <div className="navbar container m-auto bg-slate-400 px-4">
      <div className="flex-1">
        <div className="font-bold text-xl">
          <div className="flex gap-4">
            <div>Billings</div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-xs"
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
