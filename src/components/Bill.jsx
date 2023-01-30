import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDeleteBillMutation } from "../features/billing/billingApi";

const Bill = ({ data, control }) => {
  const [deleteBill, { data: billDeleted }] = useDeleteBillMutation();
  const { _id, amount, billingId, email, name, phone } = data || {};

  // handle function
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are You sure Delete Bill ?");
    if (confirmDelete) {
      deleteBill(_id);
    }
  };
  // update data passing one step up in modal
  const handleEdit = () => {
    control(data);
  };

  // success message toast
  useEffect(() => {
    if (billDeleted) {
      toast.success("Successfully deleted!");
    }
  }, [billDeleted]);
  return (
    <tr className="text-center bg-white border">
      <td>{billingId}</td>
      <th>{name}</th>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{amount}</td>
      <td>
        <button className="btn btn-xs" onClick={handleEdit}>
          Edit
        </button>{" "}
        |{" "}
        <button className="btn btn-xs" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Bill;
