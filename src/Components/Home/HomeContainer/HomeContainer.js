import React from "react";
import Brands from "../Brands/Brands";
import Carousel from "../Carousel/Carousel";
import HomeCatagorySection from "../HomeCatagorySection/HomeCatagorySection";
import TopCatagories from "../TopCatagories/TopCatagories";

const HomeContainer = () => {
  return (
    <>
      <Carousel />
      <TopCatagories />
      <HomeCatagorySection />
      <Brands />
    </>
  );
};

export default HomeContainer;
