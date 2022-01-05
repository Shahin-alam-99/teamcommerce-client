import { Grid, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
     return (
          <div>
               <Grid container spacing={2}>
                    <Grid item xs={8} md={12}>
                         <Typography sx={{ textAlign: 'center' }} variant='h4'>About us</Typography>
                         <Grid container spacing={2}>
                              <Grid item xs={8}>
                                   <Typography sx={{}} variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas voluptate doloremque inventore dolorum totam in, labore quisquam rerum. Officia voluptatem perspiciatis placeat, sunt, et voluptatum adipisci ipsam accusamus molestias laudantium nesciunt qui necessitatibus dolore asperiores delectus amet rerum est, aspernatur id magnam ab ullam dolores. Neque odio saepe laborum?</Typography>
                              </Grid>
                         </Grid>

                    </Grid>
               </Grid>
          </div>
     );
};

export default AboutUs;