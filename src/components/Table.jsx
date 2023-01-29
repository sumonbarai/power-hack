import React from "react";
import Bill from "./Bill";
import Pagination from "./Pagination";

const Table = ({ bills }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full bg-[#F2F2F2]">
          {/* <!-- head --> */}

          <tr className="text-center">
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
          {bills.map((data) => (
            <Bill key={data._id} data={data} />
          ))}
        </table>
      </div>
      <div className="pt-4 flex justify-center items-center">
        <Pagination />
      </div>
    </>
  );
};

export default Table;
