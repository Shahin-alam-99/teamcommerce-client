import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "2b671826bdmshecaaab6a75a61b2p1b7118jsn4d72b7d5fc1a",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <Container>
      <Grid container spacing={{ md: 2, xs: 1 }}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsContainer;
