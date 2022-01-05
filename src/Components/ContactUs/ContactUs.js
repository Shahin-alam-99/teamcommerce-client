import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import contactImage from "../../images/contact-us.svg";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Grid
        container
        spacing={{
          xs: 1,
          md: 2,
        }}
      >
        <Grid item md={6} xs={12}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={contactImage}
            alt=""
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            my: "auto",
          }}
        >
          <Typography gutterBottom variant="h4">
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" required />
            <TextField fullWidth label="E-email" sx={{ my: 2 }} required />
            <TextField fullWidth label="Message" multiline rows={4} required />
            <Button variant="contained" sx={{ mt: 1, width: "100%" }}>
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
