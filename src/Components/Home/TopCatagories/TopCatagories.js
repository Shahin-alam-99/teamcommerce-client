import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TopCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("./catagories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <Box sx={{ background: "#F1F1F1", py: 5, my: 15 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}
        >
          Top Catagories
        </Typography>
        <Slider {...settings}>
          {catagories.map((catagory) => (
            <Box
              className="secondary-hover-effect"
              key={catagory.id}
              sx={{
                background: "white",
                width: {
                  md: "200px !important",
                  xs: "85% !important",
                },
                p: { sm: 1, xs: 3 },
                borderRadius: "5px",
              }}
            >
              <Box>
                <Box sx={{ overflow: "hidden" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src={catagory.src}
                    alt=""
                  />
                </Box>
                <Typography variant="body2">{catagory.name}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TopCatagories;
