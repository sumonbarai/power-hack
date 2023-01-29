import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useUpdateBillMutation } from "../features/billing/billingApi";
import Error from "../shared/ui/Error";

const Modal = ({ open, control, updateData }) => {
  const [name, setName] = useState(updateData.name);
  const [email, setEmail] = useState(updateData.email);
  const [phone, setPhone] = useState(updateData.phone);
  const [amount, setAmount] = useState(updateData.amount);
  const [customError, setCustomError] = useState(false);
  const [updateBill, { data, isLoading }] = useUpdateBillMutation();

  const handleForm = (e) => {
    e.preventDefault();
    const editedData = {
      name,
      email,
      phone,
      amount,
    };

    if (phone.length === 11) {
      updateBill({ _id: updateData._id, editedData: editedData });
      setCustomError("");
    } else {
      setCustomError("Invalid Phone Number");
    }
  };

  useEffect(() => {
    if (data) {
      control();
      toast.success("Successfully updated!");
    }
  }, [data, control]);

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Update New Bill
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Type Full Name"
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Type Email Address"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Type Phone Number"
                  className="input input-bordered w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Paid Amount</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Type Amount"
                  className="input input-bordered w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                disabled={isLoading}
              >
                Update
              </button>
            </div>
            {customError && <Error message={customError} />}
          </form>
        </div>
      </>
    )
  );
};
export default Modal;
