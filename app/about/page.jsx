'use client';
import Image from 'next/image';
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
import team from 'public/static/team-2.jpg';
import teamSec from 'public/static/team-1.jpg';
import client1 from 'public/static/client-1.jpg';
import client2 from 'public/static/client.jpg';
import client3 from 'public/static/client-2.jpg';
import { Rating } from '@mui/material';

import * as React from 'react';
import { display, spacing } from '@mui/system';

export default function About(){
    return(
        <div className='pb-[8rem]'>

            {/* <h2 className="text-blue font-serif text-center my-[5rem] px-[2rem]">Our company is willing to help its customers to experience highest quality and customer satisfaction.</h2> */}
            <Box sx={{ flexGrow: 1}} >
              <Grid container sx={{}}>
                <Grid item xs={12} lg={6} sx={{position: "relative", width:50,height:"30rem"  ,backgroundColor:"#f6fbf7",}} className="lg:p-[8rem]  p-[4rem]">
               <h3 className='font-medium text-sm text-[#8ccb99]'>ENSURING YOUR SYSTEM ARE OPTIMAL</h3>
                <h1 className='font-light mt-[2rem] '>Our Story</h1>
                <p className=' mt-[2rem]'>Founded by Ronan Colleran and Gillian O’Dowd, Azon Recruitment leverages Ronan’s 25+ years of experience in recruitment, to apply specialist recruitment expertise to provide end-to-end solutions across all of our client’s business functions.
                </p>
                </Grid>

                <Grid item xs={12} lg={6} sx={{width:50,height:"30rem",}}>
                  <div className='w-full h-full bg-[url("../public/static/team4.jpg")] bg-cover bg-center'></div>

                </Grid>
              </Grid>
            </Box>      

            <Box sx={{ flexGrow: 1, }} >
              <Grid container sx={{}}>
              <Grid item xs={12} lg={6} sx={{width:50,height:"30rem",}}>
              <div className='w-full h-full bg-[url("../public/static/team3.jpg")] bg-cover bg-center'></div>
                </Grid>
                <Grid item xs={12} lg={6} sx={{width:50,height:"30rem"  ,backgroundColor:"#f6fbf7",p:"8rem"}} className="lg:p-[8rem]  p-[4rem]">
                <h3 className='font-medium text-sm text-[#8ccb99]'>ENSURING YOUR SYSTEM ARE OPTIMAL</h3>

               <h1 className='mt-[2rem] font-light'>Why Us?</h1>
                <p className='mt-[2rem]'>A’gency's biggest asset is our people. From new grads to very experienced team members, our focus is on building strong lasting relationships, with clients and candidates, based on our deep sectoral expertise.</p>
                </Grid>
              </Grid>
            </Box>  


            <details>
            <summary className='w-full bg-green h-[5rem] text-white text-center flex items-center justify-center list-none font-sans text-xl font-light '>
                Read More About Us
              </summary>
              <p className='p-[2rem]'>
              When it comes to connecting with customers, brick-and-mortar businesses have an advantage over their online counterparts: face-to-face contact. The good news is your clients’ sites can match the personal touch of even the best offline retailers by telling their stories in compelling ways.
              Don’t underestimate the power of appealing to emotion. Brain scans show that when consumers evaluate brands, they’re influenced by personal feelings and experiences more than a company’s features and facts. Keep this in mind when considering how to write an About Us page for a client, and when you’re designing it. In the examples at the end of this article, you’ll see how great About Us pages use emotion to persuade.
              Additionally, About Us pages often cater to a high-intent audience. When a site visitor navigates to an About Us page, it means they’re actively interested in learning more about a business. Make the most of that intent and get more conversions on your clients’ sites pages by following our guidelines. 
              </p>
            </details>





            <div className='mt-[5rem] px-[4rem]'>
            <h3 className='mb-[4rem] mt-[6rem] text-center text-3xl font-serif text-blue'>Some words from our clients.</h3>
            <Box sx={{ flexGrow: 1 }} >
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                <Card sx={{ maxWidth: 345}} className="card hovered">

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Edwin zohir
              </Typography>
              <Rating name="read-only" value={5} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Businessman
              </Typography>
              <Typography variant="" color="" className='text-base font-sans font-light'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card> 
                </Grid>

                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}} >
                   <Card sx={{ maxWidth: 345 }} className="card" >

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Mary Jacob
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                Doctor
              </Typography>
              <Typography variant="" color="" className='text-base font-light font-sans'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
 
          </Card> 
                   </Grid>
                   <Grid item xs={12} lg={4} sx={{justifyContent:"center", display:"flex"}}>
                   <Card sx={{ maxWidth: 345 }} className="card">
            <CardContent >
              <Typography gutterBottom variant="h6" component="div" >
                Anthony Hop
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography gutterBottom variant="h6" component="div" sx={{color:"#d45124"}}>
                ML Developer
              </Typography>
              <Typography variant="" color="" className='text-base font-light font-sans '>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card> 
                  </Grid>



         
              </Grid>
            </Box>
            </div>
            
            
        </div>

    )
}