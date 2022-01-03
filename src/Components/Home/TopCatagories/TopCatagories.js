import { Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import image from "../../../images/shoe.jpg";

const TopCatagories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Top Catagories
      </Typography>
      <Slider {...settings}>
        {[...Array(20)].map((p) => (
          <div key={p}>
            <img className="secondary-hover-effect" src={image} alt="" />
            <h2>Catagory{p}</h2>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TopCatagories;
