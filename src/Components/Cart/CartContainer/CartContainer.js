import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import HeaderContainer from "../../Common/Shared/Header/HeaderContainer/HeaderContainer";

const CartContainer = () => {
  /* states */
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveQuantity = () => {
    if (quantity === 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = (e) => {
    console.log(e.taget.innerText);
  };
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {/* header */}
      <HeaderContainer />
      {/* main cart */}
      <Container sx={{ my: 3 }} maxWidth="xl">
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {/* products */}
          <Grid item md={8} xs={12}>
            {/* cart title */}
            <Grid
              container
              sx={{
                borderBottom: "1px solid gray",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Grid item md={4}>
                <Typography variant="h5">Product</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Price
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Quantity
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Subtotal
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Cancel
                </Typography>
              </Grid>
            </Grid>
            {/*============
           product
           ============= */}
            {products.map((product) => (
              <Grid
                container
                sx={{
                  borderBottom: "1px solid gray",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                }}
                spacing={{ md: 2, xs: 1 }}
              >
                {/* product */}
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                  item
                  md={4}
                  xs={12}
                >
                  <Box>
                    <img src={product.src} alt="" />
                  </Box>
                  <Typography variant="h6">{product.name}</Typography>
                </Grid>
                {/* Price */}
                <Grid
                  item
                  md={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Typography onClick={handleClick} variant="h5">
                    $ {product.price}
                  </Typography>
                </Grid>
                {/* quantity */}
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  item
                  md={2}
                  xs={12}
                >
                  <IconButton onClick={handleRemoveQuantity}>
                    <RemoveCircleOutlineOutlinedIcon />
                  </IconButton>
                  <TextField value={quantity} />
                  <IconButton onClick={handleAddQuantity}>
                    <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                </Grid>
                {/* Subtotal */}
                <Grid
                  item
                  md={2}
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5">$ {product.price}</Typography>
                </Grid>
                {/* Cancel */}
                <Grid
                  item
                  md={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton>
                    <HighlightOffOutlinedIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          {/*=========== 
          cart
          ================ */}
          <Grid item md={4} xs={12}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h4"
                  color="text.secondary"
                  gutterBottom
                >
                  Cart
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    $ 0
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    Shipping
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    $ 0
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h6"
                    gutterBottom
                  >
                    $ 0
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onClick={handleClick}>Proceed to Checkout </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CartContainer;
