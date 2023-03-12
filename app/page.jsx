'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import LandingPage from './components/landing';
import Numbers from './components/services';
import microsoft from 'public/static/microsoft.webp';
import dropbox from 'public/static/dropbox.png';
import slack from 'public/static/slack.png';
import google from 'public/static/google.png';
import oracle from 'public/static/ibm.png';
import mcKinsey from 'public/static/micKinsey.png';
import Features from './components/features'
import {Box,Grid} from '@mui/material';
import Register from './components/register'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';



export default function Home() {
  return (
    <main >
      <LandingPage className="relative "/>
      <h3 className='my-[5rem] text-center text-3xl font-serif'>Over <b>38k+ </b>software business growing with A'gency.io.</h3>
      <div className="">
      <Box>
      <Grid container>
        <Grid item xs={12} lg={6} sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem"}}>
          <Image src={microsoft} width="150" height=""/>
          <Image src={dropbox} width="150" height=""/>
          <Image src={slack} width="110" height=""/>
            </Grid>
        <Grid item xs={12} lg={6}   sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem" }}>
          <Image src={google} width="100" height=""/>
          <Image src={oracle} width="100" height=""/>
          <Image src={mcKinsey} width="100" height=""/>
        </Grid>
      </Grid>
      </Box>
      </div>
      <Numbers/>
      <h3 className='mt-[7rem] text-center text-3xl font-serif'>Get your business to professional level with A'gency.io. </h3>
      <Features/>
      <h3 className='mt-[7rem] text-center text-3xl font-serif'>Our company will help you to achieve everything you imagine.</h3>
      <Register/>
      <h3 className='mt-[5rem] mb-[2rem] text-center text-3xl font-serif'>Download our free apps for client.</h3>
      <p className='text-gray text-center mb-[2rem]'>End-to-end payments and financial management in a single solution.</p>
      <div className="flex justify-center items-center mb-[8rem]">
      <div className="lg:flex sm:none">
     <div className='w-[9.5rem] font-sans bg-[#252849]  rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>
       <Button variant="contained" className=''><AppleIcon sx={{mr:1}}/>  App store</Button>
      </div>
      <div className='w-[9.5rem] sm:mt-[0.8rem] lg:mt-0 font-sans rounded-md h-[3rem] border-[#252849] text-[#252849]'>
      <Button variant="outlined" className=''><AndroidIcon sx={{mr:1}}/> Play store</Button>
      </div>
     </div>
      </div>
      </main>
  )
}
