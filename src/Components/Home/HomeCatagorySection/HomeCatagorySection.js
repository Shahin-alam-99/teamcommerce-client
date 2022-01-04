import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../images/product-banner.png";
import product from "../../../images/shoe.jpg";
import ProductModal from "../../ProductModal/ProductModal";

const HomeCatagorySection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container sx={{ mb: 5 }} maxWidth="xl">
        {/*================
       category names
       ============== */}
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h2">
            Shoes
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 1, md: 5 }}>
          <Grid item sm={12} md={4} lg={4}>
            <img style={{ height: "100%" }} src={banner} alt="" />
          </Grid>
          <Grid item sm={12} md={8} lg={8}>
            <Grid container spacing={{ md: 2, xs: 1 }}>
              {[...Array(8)].map((p) => (
                <Grid item md={3} lg={3} sm={4} xs={12}>
                  <Card onClick={handleOpen} className="secondary-hover-effect">
                    <Box sx={{ overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product}
                        alt="green iguana"
                      />
                    </Box>
                    <CardContent
                      sx={{ textAlign: "center", pb: "0 !important" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        Product Name
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Rating value={3} readOnly />
                        <Typography variant="body2">(3 Reviews)</Typography>
                      </Box>
                      <Typography
                        sx={{ textAlign: "center", my: 2 }}
                        variant="h5"
                      >
                        $40
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ProductModal open={open} handleClose={handleClose} />
    </>
  );
};

export default HomeCatagorySection;
