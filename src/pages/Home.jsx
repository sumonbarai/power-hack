import React from "react";

import BillBody from "../components/BillBody";
import BillTitleBar from "../components/BillTitleBar";
import Header from "../layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <BillTitleBar />
      <BillBody />
    </>
  );
};

export default Home;
