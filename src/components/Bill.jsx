import React from "react";

const Bill = () => {
  return (
    <tr className="text-center">
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
      <td>Blue</td>
      <td>
        <button className="btn btn-xs">Edit</button> |{" "}
        <button className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default Bill;
