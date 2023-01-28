import React from "react";
import { Link } from "react-router-dom";
import BillBody from "../components/BillBody";
import BillTitleBar from "../components/BillTitleBar";

const Home = () => {
  return (
    <>
      <BillTitleBar />
      <BillBody />
    </>
  );
};

export default Home;
