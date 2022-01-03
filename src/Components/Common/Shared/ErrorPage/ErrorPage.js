import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../../../images/error.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        background: `url(${errorImage}) fixed center`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h2" color="primary">
        Return to
        <Button
          sx={{ fontSize: 20, ml: 2 }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          {" "}
          Home Page
        </Button>
      </Typography>
    </Box>
  );
};

export default ErrorPage;
