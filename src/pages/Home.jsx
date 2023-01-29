import React, { useState } from "react";

import BillBody from "../components/BillBody";
import BillTitleBar from "../components/BillTitleBar";
import Header from "../layout/Header";
import Modal from "../shared/ui/Modal";

const Home = () => {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <>
      <Header />
      <BillTitleBar control={controlModal} />
      <BillBody />

      {opened && <Modal open={opened} control={controlModal} />}
    </>
  );
};

export default Home;
