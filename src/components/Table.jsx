import React, { useState } from "react";
import Bill from "./Bill";
import Modal from "./Modal";
import Pagination from "./Pagination";

const Table = ({ bills }) => {
  const [opened, setOpened] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const controlModal = (data) => {
    setOpened((prevState) => !prevState);
    setUpdateData(data);
  };
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
            <Bill key={data._id} data={data} control={controlModal} />
          ))}
        </table>
      </div>
      <div className="pt-4 flex justify-center items-center">
        <Pagination />
      </div>
      {opened && (
        <Modal open={opened} control={controlModal} updateData={updateData} />
      )}
    </>
  );
};

export default Table;
