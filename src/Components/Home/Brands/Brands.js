import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <Container sx={{ my: 10 }} maxWidth="xl">
      <Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
        Our Brands
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {brands.map((brand) => (
          <Grid
            sx={{ background: "#f4f4f4", border: "1px solid #dfdfdf" }}
            key={brand.id}
            item
            md={3}
            xs={6}
            sm={4}
          >
            <img src={brand.src} alt="" />{" "}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Brands;
