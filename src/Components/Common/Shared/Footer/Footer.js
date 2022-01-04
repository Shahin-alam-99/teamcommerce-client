import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


import React from 'react';

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
                              About us
                         </Typography>
                         <Typography variant="body1" >
                              Faq
                         </Typography>
                         <Typography variant="body1" >
                              Delivery information
                         </Typography>
                         <Typography variant="body1">
                              contact us
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Account
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              My Account
                         </Typography>
                         <Typography variant="body1" >
                              Order history
                         </Typography>
                         <Typography variant="body1" >
                              Wish list
                         </Typography>
                         <Typography variant="body1">
                              Specials
                         </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ p: 2 }}>
                         <Typography variant="h5">
                              Services
                         </Typography>
                         <hr />
                         <Typography variant="body1" >
                              Discount Returns
                         </Typography>
                         <Typography variant="body1" >
                              Policy
                         </Typography>
                         <Typography variant="body1" >
                              Customer service
                         </Typography>
                         <Typography variant="body1">
                              Team & condition
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