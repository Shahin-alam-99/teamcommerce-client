import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Catagories = () => {
    const catagoriesInfo=[
        {
            src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            title:" Headphones",
          
        },
        {
            src:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:" Camera",
          
        },
        {
            src:"https://productpictips.com/wp-content/uploads/2019/10/Canva-Black-Leather-Strap-Silver-Chronograph-Watch.jpg",
            title:"Watch",
           
        },
        {
            src:"https://us.123rf.com/450wm/monticello/monticello1701/monticello170100444/70465258-composition-with-variety-of-organic-food-products-isolated-on-white.jpg?ver=6",
            title:"Groceries ",
        
        },
        {
            src:"https://image.shutterstock.com/image-illustration/kitchen-appliances-blender-toaster-coffee-260nw-366899375.jpg",
            title:"kitchen gadget",
         
        },
       
       
        {
            src:"https://i.stack.imgur.com/CeCrU.jpg",
            title:"Hoodie ",
          
        },
    ]
    return (
        <Container>
        <Box  sx={{ flexGrow: 1 , m:"auto",p:"20px",  }} >

  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            { catagoriesInfo.map((info)=>(
                 <Grid item xs={2} sm={4} md={4} >
 <Card sx={{ maxWidth: 345 }}>
 <CardActionArea>
   <CardMedia
     component="img"
     height="140"
     image={info.src}
     alt="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {info.title}
     </Typography>
     <Button variant="outlined">See products</Button>
   </CardContent>
 </CardActionArea>
</Card>
            
 </Grid>))
            }
       </Grid>
    </Box>
    </Container>
    );
};

export default Catagories;