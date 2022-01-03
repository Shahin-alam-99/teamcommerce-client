import { Box, Container, Typography } from "@mui/material";
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
    <Box sx={{ background: "#F1F1F1", py: 5, my: 15 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Top Catagories
        </Typography>
        <Slider {...settings}>
          {[...Array(20)].map((p) => (
            <Box
              className="secondary-hover-effect"
              key={p}
              sx={{
                background: "white",
                width: "200px !important",
                p: 3,
                borderRadius: "5px",
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <img style={{ width: "100%" }} src={image} alt="" />
              </Box>
              <h2>Catagory{p}</h2>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TopCatagories;
