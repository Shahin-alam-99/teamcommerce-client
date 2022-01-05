import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
     return (
          <div>
               <Grid container spacing={2} style={{ marginBottom: '30px' }}>
                    <Grid item xs={8} md={12}>
                         <Typography sx={{ textAlign: 'center' }} variant='h4'>About us</Typography>
                         <Grid container spacing={2} style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                              <Grid item xs={12} md={6} >
                                   <Typography sx={{}} variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas voluptate doloremque inventore dolorum totam in, labore quisquam rerum. Officia voluptatem perspiciatis placeat, sunt, et voluptatum adipisci ipsam accusamus molestias laudantium nesciunt qui necessitatibus dolore asperiores delectus amet rerum est, aspernatur id magnam ab ullam dolores. Neque odio saepe laborumEaque voluptas voluptate doloremque inventore dolorum totam in, labore quisquam rerum. Officia voluptatem perspiciatis placeat, sunt, et voluptatum adipisci ipsam accusamus molestias laudantium nesciunt qui necessitatibus dolore asperiores delectus amet rerum est, aspernatur?</Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                   <img src="https://i.ibb.co/5vXM80H/about-us.jpg" sx={{ borderLeft: 1 }} style={{ marginTop: '20px' }} width="400px" height="400px" alt="" />
                              </Grid>
                              <Grid item xs={12} >
                                   <img src="https://i.ibb.co/LnTFtrP/77159886.png" style={{ width: 400, height: 400, padding: "5px" }} alt="" />
                                   <img src="https://i.ibb.co/fHtR21v/arif.jpg" style={{ width: 400, height: 400, padding: "5px" }} alt="" />
                                   <img src="https://i.ibb.co/qrRhjtk/83024583.jpg" style={{ width: 400, height: 400, padding: "5px" }} alt="" />
                              </Grid>

                         </Grid>

                    </Grid>
               </Grid>
          </div>
     );
};

export default AboutUs;