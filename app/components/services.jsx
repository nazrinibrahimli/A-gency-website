'use client';
import React from 'react'
import Image from 'next/image';
import cooperation from 'public/static/cooperation.jpeg';
import slack from 'public/static/slack.png';
import google from 'public/static/google.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Numbers = () => {
  return (
      // <div className="flex  my-[10rem] ">
      <div className='rounded-xl mx-[3rem] pb-[3rem]'>
        <Box sx={{ flexGrow: 1 }} className=" mx-[2rem] rounded-xl  ">
          <h1 className='text-center text-gray-dark  pt-[5rem] font-extralight'> Services we provide</h1>
          <Grid container spacing={2} className="py-[3.5rem]">
                  
      <Grid item xs={12} md={6} lg={3} className="">
       <Card  sx={{ maxWidth: 350,maxHeight: 590, borderRadius: 5 , }}  className="transitioned-card mx-auto">
      <CardMedia
        sx={{ height: 180 }}
        image="/static/ai.jpg"
        title="green iguana"
      />
      <CardContent sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className='font-serif font-medium text-blue'>
          AI Solutions
        </Typography>
        <Typography variant="body1" color="" className='font-sans'>
          Lizards are a widespread group of squamate
        </Typography>
      </CardContent>
      <CardActions sx={{mx:2, mb:3}}>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="" variant="outlined" className='text-[white] bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>Share</Button> */}
        <Button size="small" className='font-sans text-blue'> <p className='text-blue text-base'>Learn More</p> </Button>
      </CardActions>
    </Card>
        </Grid>

            <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 350,maxHeight: 590,borderRadius: 5 ,}} className="transitioned-card mx-auto">
      <CardMedia
        sx={{ height: 180 }}
        image="/static/cyber.jpg"
        title="green iguana"
      />
      <CardContent  sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className='font-serif font-medium text-blue'>
          Cyber Security 
        </Typography>
        <Typography variant="body1" color="" className='font-sans'>
          Lizards are a widespread group of squamate
        </Typography>
      </CardContent>
      <CardActions  sx={{mx:2, mb:3}}>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="" variant="outlined" className=' text-[white] bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>Share</Button> */}
        <Button size="small" className='font-sans text-blue'> <p className='text-blue text-base'>Learn more</p></Button>
      </CardActions>
    </Card>
     </Grid>




        <Grid item xs={12} md={6} lg={3}>
       <Card sx={{ maxWidth: 350,maxHeight: 590,borderRadius: 5 ,}} className="transitioned-card mx-auto">
       <CardMedia
        sx={{ height: 180 }}
        image="/static/cloud.jpeg"
        title="green iguana"
      />
      <CardContent  sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className=' font-serif font-medium text-blue'>
          Cloud
        </Typography>
        <Typography variant="body1" color="" className='font-sans'>
          Lizards are a widespread group of squamate
          
        </Typography>
      </CardContent>
      <CardActions  sx={{mx:2, mb:3}}>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="" variant="outlined" className=' text-[white] bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>Share</Button> */}
        <Button size="small" className='font-sans text-blue'> <p className='text-blue text-base'>Learn more</p></Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
              
<Card sx={{ maxWidth: 350,maxHeight: 590,  borderRadius: 5 ,}}  className="transitioned-card mx-auto">
<CardMedia
        sx={{ height: 180 }}
        image="/static/dev.jpg"
        title="green iguana"
      />
      <CardContent  sx={{mx:2, mb:3}}>
        <Typography gutterBottom variant="h5" component="div" className='font-serif font-medium text-blue'>
          Web Development
        </Typography>
        <Typography variant="body1" color="" className='font-sans'>
          Lizards are a widespread group of squamate
        </Typography>
      </CardContent>
      <CardActions  sx={{mx:2, mb:3}}>
      {/* <Button size="" variant="outlined" className='text-[white] bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>Share</Button> */}
         <Button size="small" className='font-sans text-blue'> <p className='text-blue text-base'>Learn more</p></Button>
      </CardActions>
    </Card>
            </Grid>
          </Grid>
          {/* <Link href="#" underline="none" className='text-3xl text-white  mb-[4rem] font-serif underline'>
          {'see all services'}
        </Link> */}
      {/* <Button variant="outlined" className='bg-white text-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>see all</Button> */}
      {/* <Button variant="contained" className='mx-auto flex font-sans bg-[#252849] rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>
      <Link href="services" underline="true" className='text-[white] font-sans'>{'See Services'}</Link></Button>

  */}
       </Box>
       </div>


  )
}

export default Numbers
