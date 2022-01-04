import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MiddleBar = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: { xs: "none", sm: "flex" },
        justifyContent: "space-between",
        my: 1,
        alignItems: "center",
      }}
    >
      {/* website logo */}
      <Typography variant="h5">Logo</Typography>
      {/* search area */}
      <Box>
        <TextField
          // size="small"
          variant="outlined"
          placeholder="Search Products"
        />
        <Button
          size="large"
          variant="contained"
          sx={{ py: 2, pl: 4 }}
          startIcon={<SearchIcon />}
        />
      </Box>

      {/* features */}
      <Box sx={{ display: "flex" }}>
        <Box className="primary-hover-effect">
          <IconButton className="primary-hover-effect">
            <ScaleOutlinedIcon sx={{ color: "black" }} fontSize="large" />
          </IconButton>
          <Typography variant="body2">Compare</Typography>
        </Box>
        <Box sx={{ mx: 3 }} className="primary-hover-effect">
          <IconButton className="primary-hover-effect">
            <FavoriteBorderIcon sx={{ color: "black" }} fontSize="large" />
          </IconButton>
          <Typography variant="body2">Wishlist</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="primary-hover-effect"
          onClick={() => navigate("/cart")}
        >
          <IconButton className="primary-hover-effect">
            <ShoppingCartOutlinedIcon
              sx={{ color: "black" }}
              fontSize="large"
            />
          </IconButton>
          <Typography variant="body2">Cart</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MiddleBar;
