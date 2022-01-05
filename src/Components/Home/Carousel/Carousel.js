import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselInfo = [
    {
      src: "https://i.ibb.co/JxBsTHj/removetteam3.png",
      bg: "https://cdn.wallpapersafari.com/99/80/IpEkdW.jpg",
      title: "Healthy Fresh Fruits",
      offer: "15",
    },
    {
      src: "https://i.ibb.co/hFM4FNn/removeteam2.png",
      bg: "https://img.freepik.com/free-photo/photographic-equipment-with-cellphone-gray-background_23-2147856088.jpg?size=626&ext=jpg",
      title: "Awesome Gadgets",
      offer: "20",
    },
    {
      src: "https://i.ibb.co/znw80TQ/remove-team1.png",
      bg: "https://wallpaperaccess.com/full/680075.jpg",
      title: "Running Shoes",
      offer: "30",
    },
  ];

  return (
    <div style={{ width: "vw", margin: "auto" }}>
      <Slider {...settings}>
        {carouselInfo.map((info) => (
          <Box
            sx={{
              backgroundColor: "rgba(236, 231, 231, 0.9)",
              backgroundImage: `url(${info.bg})`,
              backgroundBlendMode: "overlay",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Grid container>
              <Grid
                className="fruity"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                item
                md={6}
                xs={12}
              >
                <Typography
                  className="colorEfface"
                  sx={{ fontSize: "40px", fontWeight: 900 }}
                >
                  {info.title}
                </Typography>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Typography variant="h5" color="text.secondary" sx={{}}>
                    Sale up to
                  </Typography>
                  <Typography variant="h5" color="secondary" sx={{ ml: 1 }}>
                    {info.offer}% off
                  </Typography>
                </Box>

                <Button
                  endIcon={<ShoppingCartOutlinedIcon />}
                  variant="outlined"
                >
                  By product
                </Button>
              </Grid>
              <Grid item md={6} xs={12}>
                <img
                  style={{ width: "100%", heigh: "auto" }}
                  src={info.src}
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
