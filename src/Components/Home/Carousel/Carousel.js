import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
import { Box, Grid, Typography } from '@mui/material';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return (
        <div style={{width:'vw',margin:'auto'}}>
            {/* https://ibb.co/SQs3gBw
https://ibb.co/jk5QkYx
https://ibb.co/dWybzwj */}


            <h2> Single Item</h2>
        <Slider {...settings}>
      
        <Box className='firstSlid' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Typography> fruity shope</Typography>
        </Grid>
        <Grid item xs={6}>
  <img  src="https://i.ibb.co/JxBsTHj/removetteam3.png" alt="removetteam3" border="0"></img>
  </Grid>
      </Grid>
    </Box>
        <Box className='firstSlid2' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={6}>
  <img  src="https://i.ibb.co/hFM4FNn/removeteam2.png" alt="removetteam3" border="0"></img>
  </Grid>
        <Grid item xs={6}>
        <Typography> fruity shope</Typography>
        </Grid>
        
      </Grid>
    </Box>
        <Box className='firstSlid3' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Typography> fruity shope</Typography>
        </Grid>
        <Grid item xs={6}>
  <img  src="https://i.ibb.co/znw80TQ/remove-team1.png" alt="removetteam3" border="0"></img>
  </Grid>
      </Grid>
    </Box>
       
          {/* <div className='firstSlid '>
          <div>
            <h1>fruity shope</h1>
          </div>
          <div>
          <img  src="https://i.ibb.co/JxBsTHj/removetteam3.png" alt="removetteam3" border="0"></img>
          </div>
         
          </div> */}
          {/* <div className='firstSlid2'>
          
           <img src="https://i.ibb.co/hFM4FNn/removeteam2.png" alt="removeteam2" border="0"></img>
          </div>
          <div className='firstSlid3'>
         
           <img src="https://i.ibb.co/znw80TQ/remove-team1.png" alt="remove-team1" border="0"></img>
          </div> */}
          
          
        </Slider>
        
        </div>
    );
};

export default Carousel;