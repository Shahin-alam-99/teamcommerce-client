import React from "react";
import HeaderContainer from "../../Common/Shared/Header/HeaderContainer/HeaderContainer";
import Brands from "../Brands/Brands";
import Carousel from "../Carousel/Carousel";
import HomeCatagorySection from "../HomeCatagorySection/HomeCatagorySection";
import TopCatagories from "../TopCatagories/TopCatagories";

const HomeContainer = () => {
  return (
    <>
      <HeaderContainer />
      <Carousel />
      <TopCatagories />
      <HomeCatagorySection />
      <Brands />
    </>
  );
};

export default HomeContainer;
