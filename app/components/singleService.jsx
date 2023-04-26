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

const Numbers = (props) => {
  return (
        <Box sx={{ flexGrow: 1 }} className="mx-[2rem]">
            
      <Grid item xs={12} md={12} lg={12} sx={{mb:8}}>
       <Card  sx={{ maxWidth: 550,maxHeight: 600, borderRadius: 0 , borderColor: 'white', boxShadow:0 ,}}  className="mx-auto">
      <CardMedia
        sx={{ height: 320 }}
        image={props.image}
        title="image"
      />
      <CardContent sx={{mb:3, paddingLeft:0}}>
        <Typography gutterBottom variant="h4" component="div" className='font-serif font-medium text-blue'>
          {props.title}
        </Typography>
        <Typography variant="body1" color="" className='font-sans'>
          {props.info}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb:3, paddingLeft:0}}>
       <Button size="large" variant='outlined' className='hover:text-[white] hover:bg-blue hover:border-blue bg-[#71bd84] font-sans rounded-sm border-3 text-[white] w-[10.5rem] h-[3rem]	border-[#71bd84]'> <p className='text-[white] lowercase text-base'>Learn More</p> </Button>
      </CardActions>
    </Card>
        </Grid>
       </Box>


  )
}

export default Numbers
