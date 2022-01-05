import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcons from "../../Common/Shared/SocialIcons/SocialIcons";

const Product = ({ product }) => {
  const { imageUrl, brandName, name, price, colour } = product;
  console.log(imageUrl);
  return (
    <Grid item md={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={`https://${imageUrl}`}
          alt="image"
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>

          {/* category & brand */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Colour: {colour}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Brand: {brandName}
            </Typography>
          </Box>

          {/* price */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2 }}
            gutterBottom
          >
            $ {price.current.value}
          </Typography>

          {/* rating & reviews */}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Rating readOnly value={3} />
            <Typography variant="body1" color="text.secondary" gutterBottom>
              (3 Reviews)
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SocialIcons />
            <Box
              sx={{
                display: "flex",
                borderLeft: "2px solid gray",
              }}
            >
              <Box className="primary-hover-effect">
                <IconButton className="primary-hover-effect">
                  <ScaleOutlinedIcon fontSize="normal" />
                </IconButton>
              </Box>
              <Box className="primary-hover-effect">
                <IconButton className="primary-hover-effect">
                  <FavoriteBorderIcon fontSize="normal" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
