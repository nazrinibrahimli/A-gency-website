'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
export default function About(){
    return(
        <div>
            <h1 className="text-blue font-serif text-center my-[5rem]">We are helping customers globally and everytime</h1>
            <div className='xl:flex justify-evenly mt-[5rem]'>
            <Card sx={{ maxWidth: 345 }} className="card hovered">
            {/* <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Edwin zohir
              </Typography>
              <Typography variant="body2" color="" className='text-lg font-sans'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className='text-white'>Share</Button>
              <Button size="small" className='text-white'>Learn More</Button>
            </CardActions>
          </Card> 

          <Card sx={{ maxWidth: 345 }} className="card">
            {/* <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Msrk Jacob
              </Typography>
              <Typography variant="body2" color="" className='text-lg font-sans'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className='text-white'>Share</Button>
              <Button size="small" className='text-white'>Learn More</Button>
            </CardActions>
          </Card> 
          <Card sx={{ maxWidth: 345 }} className="card">
            {/* <CardMedia
              component="img"
              alt="atm abb"
              height="140"
              image=""
            /> */}
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                Anthony Hop
              </Typography>
              <Typography variant="body2" color="" className='text-lg font-sans'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className='text-white'>Share</Button>
              <Button size="small" className='text-white'>Learn More</Button>
            </CardActions>
          </Card> 
            </div>
            
        </div>

    )
}