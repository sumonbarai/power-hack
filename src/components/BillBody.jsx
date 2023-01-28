import React from "react";
import Bill from "./Bill";
import Pagination from "./Pagination";

const BillBody = () => {
  return (
    <div className="container m-auto bg-slate-400 p-6 ">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <Bill />
            <Bill />
            <Bill />
            <Bill />
            <Bill />
            <Bill />
            <Bill />
            <Bill />
            <Bill />
          </tbody>
        </table>
      </div>
      <div className="pt-4 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default BillBody;
