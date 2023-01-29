import React from "react";

const Bill = ({ data }) => {
  const { amount, billingId, email, name, phone } = data || {};
  return (
    <tr className="text-center bg-white border">
      <td>{billingId}</td>
      <th>{name}</th>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{amount}</td>
      <td>
        <button className="btn btn-xs">Edit</button> |{" "}
        <button className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default Bill;
