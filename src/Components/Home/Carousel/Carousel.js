import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import  ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';



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
          
        <Slider {...settings}>
      
        <Box className='firstSlid ' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className='fruity' sx={{
          mx: 'auto',
          width: 200,
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center',
        }} item lg={5} md={5} sm={5} xs={12}>
        <Typography className='colorEfface' sx={{fontSize:"40px",fontWeight:900}}> Fruity shope</Typography>
        
        <Button variant="outlined">By product
        <IconButton className="primary-hover-effect">
            <ShoppingCartOutlinedIcon
              sx={{ color: "orange" }}
              fontSize="small"
            />
          </IconButton> </Button>
      
        </Grid>
        <Grid className='fruityi' item lg={6} md={6} sm={6} xs={12}>
  <img  src="https://i.ibb.co/JxBsTHj/removetteam3.png" alt="removetteam3" border="0"></img>
  </Grid>
      </Grid>
    </Box>
        <Box className='firstSlid2' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
  <img  src="https://i.ibb.co/hFM4FNn/removeteam2.png" alt="removetteam3" border="0"></img>
  </Grid>
        <Grid className='fruity' sx={{
          mx: 'auto',
        
          p: 1,
          m: 1,
          pt:20,
          borderRadius: 1,
          textAlign: 'center',
        }} item lg={5} md={5} sm={5} xs={12}>
        <Typography className='colorEfface' sx={{fontSize:"40px",fontWeight:900}}> Electronics shope</Typography>
        <Button variant="outlined">By product 
        <IconButton className="primary-hover-effect">
            <ShoppingCartOutlinedIcon
              sx={{ color: "orange" }}
              fontSize="small"
            />
          </IconButton>  </Button>
        </Grid>
        
      </Grid>
    </Box>
        <Box className='firstSlid3' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className='fruity'
         sx={{
          mx: 'auto',
          width: 200,
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center',
        }} item lg={5} md={5} sm={5} xs={12}>
        <Typography className='colorEfface' sx={{fontSize:"40px",fontWeight:900}}> Shoes shope</Typography>
        <Button variant="outlined">By product 
        <IconButton className="primary-hover-effect">
            <ShoppingCartOutlinedIcon
              sx={{ color: "orange" }}
              fontSize="small"
              
            />
          </IconButton>  </Button>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
  <img  src="https://i.ibb.co/znw80TQ/remove-team1.png" alt="removetteam3" border="0"></img>
  </Grid>
      </Grid>
    </Box>
        </Slider>
        
        </div>
    );
};

export default Carousel;