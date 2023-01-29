import React from "react";
import { useGetBillQuery } from "../features/billing/billingApi";
import Loader from "../shared/loader/Loader";
import Error from "../shared/ui/Error";
import Table from "./Table";

const BillBody = () => {
  const {
    data: bills,
    isLoading,
    isError,
    isSuccess,
  } = useGetBillQuery(null, { refetchOnFocus: true });

  // what is render
  let content = null;
  if (isLoading) {
    content = <Loader />;
  }

  if (!isLoading && isError) {
    content = <Error message="Data fetching error" />;
  }

  if (!isLoading && !isError && bills.length === 0) {
    content = (
      <p className="text-center text-2xl capitalize">
        No Billed Found in Database
      </p>
    );
  }
  if (!isLoading && !isError && bills.length > 0) {
    content = <Table bills={bills} />;
  }

  return <div className="container m-auto bg-slate-400 p-6 ">{content}</div>;
};

export default BillBody;
