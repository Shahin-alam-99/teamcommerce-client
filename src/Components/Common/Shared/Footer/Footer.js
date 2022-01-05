import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <Container>
               <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} sm={12} md={3} sx={{ p: 2 }} >

                         <Typography variant="h4">
                              sides name
                         </Typography>

                         <Typography variant="body1" >
                              Dhaka avenue,Dhaka,mirpur.

                         </Typography>
                         <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                              Call: 0163450132
                         </Typography>
                         <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                              Email:zonaetmonna2233@gmail.com
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Information
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/about">About us</Link>
                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/faq">Faq</Link>
                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Delivery information">Delivery information</Link>
                         </Typography>
                         <Typography variant="body1">
                              <Link style={{ textDecoration: 'none' }} to="/contact us">contact us</Link>
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Account
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/contact us">My Account</Link>
                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Order history">Order history</Link>

                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Wish list">Wish list</Link>
                         </Typography>
                         <Typography variant="body1">
                              <Link style={{ textDecoration: 'none' }} to="/Specials">Specials</Link>
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Services
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Discount Returns">Discount Returns</Link>
                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Policy">Policy</Link>
                         </Typography>
                         <Typography variant="body1" >
                              <Link style={{ textDecoration: 'none' }} to="/Customer service">Customer service</Link>
                         </Typography>
                         <Typography variant="body1">
                              <Link style={{ textDecoration: 'none' }} to="/Team & condition">Team & condition</Link>
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Newsletter
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              Get update our new product & offer
                         </Typography>
                         <TextField id="outlined-basic"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              size="small"
                         />
                         <Button sx={{ width: 75 }} variant="contained" endIcon={<SendIcon />}>
                              Send
                         </Button>
                    </Grid>
               </Grid>
          </Container >
     );
};

export default Footer;