import React from "react";
import MiddleBar from "../MiddleBar/MiddleBar";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

const HeaderContainer = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <NavBar />
    </>
  );
};

export default HeaderContainer;
