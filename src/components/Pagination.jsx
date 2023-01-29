import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../features/filterSlice/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { pageNumber, sliceStart, sliceEnd, totalNumberOfBills } = useSelector(
    (state) => state.filter
  );
  const totalBills = totalNumberOfBills;
  const numberOfPage = Math.ceil(totalBills / 10);

  return (
    <div>
      {[...Array(numberOfPage).keys()].map((num) => (
        <button
          key={num}
          className={` ${
            pageNumber === num ? "bg-red-500" : "bg-[#313641]"
          } m-2 p-2 text-white cursor-pointer`}
          onClick={() => dispatch(nextPage(num))}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
