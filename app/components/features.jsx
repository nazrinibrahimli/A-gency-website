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
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { spacing } from '@mui/system';

const Numbers = () => {
  return (
        <Box sx={{ flexGrow: 1 }} className=" px-[1rem]  md:px-[5rem]  rounded-xl  bg-white ">
          <h2 className='text-center text-gray-dark pt-[2rem] font-extralight'>The product we work with </h2>



          
          <Grid container spacing={2} className="py-[3.5rem]">
             <Grid item xs={12} lg={4} >
            <Card className="mx-auto rounded-sm  shadow-none border-blue hover:border-orange py-[3rem]">
             <CardContent>
                <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
                <LiveHelpIcon sx={{fontSize:65,mb:3,p:2 }} style={{ color: "white", backgroundColor: "", borderRadius:100}} className="bg-[#50C878]	hover:bg-gray-dark"/>
              </CardMedia>
              <Typography gutterBottom variant="h5" component="div" className='font-serif text-center text-blue'>
                24/7 Support
              </Typography>
              <Typography variant="body1" color="" className='font-sans text-center text-gray-dark px-[3rem]'>
              A'gency provides 24/7 support to all customers all around the world! 
                    </Typography>
            </CardContent>
            </Card>
           </Grid>







     <Grid item xs={12} lg={4}>
    <Card  className="mx-auto rounded-sm  shadow-none border-orange hover:border-blue py-[3rem]">

      <CardContent className='px-auto'>

        
      <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >
      <EnhancedEncryptionIcon sx={{ fontSize: 65,mb:3,p:2 }}className="bg-[#50C878]	hover:bg-gray-dark" style={{ color: "white", backgroundColor: "", borderRadius:100 }} />
      </CardMedia>
        <Typography gutterBottom variant="h5" component="div" className='text-center font-serif text-blue'>
            Secure & Fast
        </Typography>
        <Typography variant="body1" color="" className='font-sans text-center text-gray-dark px-[3rem]'>
          We enable our customers to work with secure and fast platforms. 
          
        </Typography>
      </CardContent>

    </Card>

     </Grid>




        <Grid item xs={12} lg={4}>
       <Card  className=" rounded-sm  shadow-none border-blue hover:border-orange py-[3rem]">

      <CardContent >
      <CardMedia sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}} >

        <MobileFriendlyIcon sx={{ fontSize:65,mb:3,p:2 }} style={{ color: "white", backgroundColor: "", borderRadius:100 }} className="bg-[#50C878]	hover:bg-gray-dark"/>
        </CardMedia>
        <Typography gutterBottom variant="h5" component="div" className='font-serif text-center text-blue'>
          Easy Interface
        </Typography>
        <Typography variant="body1" color="" className='font-sans text-center text-gray-dark px-[3rem]'>
        We appriciate our customers and provide them fully responsive apps.      
        </Typography>
      </CardContent>

    </Card>
        </Grid>
  

          </Grid>
        </Box>



  )
}

export default Numbers
