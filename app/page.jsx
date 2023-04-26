'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import LandingPage from './components/landing';
import Numbers from './components/singleService';
import Cto from './components/cto';
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
import WorkIcon from '@mui/icons-material/Work';

export default function Home() {
  // const { scrollYProgress } = useViewportScroll()
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <main >
      {/* <motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
  </motion.div> */}
      <LandingPage className="relative "/>
      <h3 className='my-[5rem] text-center text-3xl font-serif'>Over <b>38k+ </b>software business <span className='text-orange'>growing with A'gency.io</span>.</h3>
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

      <h1 className='text-center text-gray-dark  pt-[5rem] mb-[2rem] font-extralight'> <span className='text-orange'>Services</span> we provide</h1>
      <Grid container spacing={2} className="py-[3.5rem]">
      <Numbers image={"/static/app.jpg"} title="E-commerce Development" info="Whatever your business needs are, we can build it. We design our e-commerce pages to meet your KPIs, whether you are looking for bottom line revenue optimization, better conversion rates or an effective customer acquisition strategy."/>
      <Numbers image={"/static/webDev.jpg"} title="Web Development" info="Your one stop shop for front and back end web development is with us. Our front end caters to an intuitive customer experience while our backend ensures optimal performance, keeping functionality and uptime consistent with elite market standards." />
      <Numbers  image={"/static/mobDev.jpg"} title="App Development" info="When it comes to iOS or Android development, we believe developing native to each OS is the only approach. This allows us to natively integrate into each specific OS, giving the end-user a superior experience, but also providing a more stable, refined final product." />
      <Numbers image={"/static/cooperation-1.jpeg"} title="Content Management Systems" info="Our CMS platforms are custom designed and developed to fully integrate into your business, enhance business flows and catered to meet your business needs. We can easily develop a custom admin panel to control and manage all aspects of your online business." />
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container  className="bg-blue w-full h-[22rem]">
        <Grid item xs={12} md={6} lg={6} sx={{display:"flex", alignItems:"center", justifyContent:"center", }} className="border-[white] lg:border-r-[3px] sm:border-b-[3px] lg:border-b-0 ">
        <Cto title="Our Capabilities" cto="explore our services" />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Cto title="Our Featured Work" cto="take a look"/>
        </Grid>
      </Grid>
      </Box>
       <h3 className='mt-[7rem] text-center text-3xl font-serif'>Get your business to <span className='text-orange'> professional level</span> with A'gency.io. </h3>
      <Features/>
      <h3 className='mt-[7rem] text-center text-3xl font-serif'>Our company will help you to <span className='text-orange'>achieve everything</span> you imagine.</h3>
      <Register/>
      <h3 className='mt-[5rem] mb-[2rem] text-center text-3xl font-serif'>Download our <span className='text-orange'>free apps </span>for client.</h3>
      <p className='text-gray text-center mb-[2rem]'>End-to-end payments and financial management in a single solution.</p>
      <div className="flex justify-center items-center mb-[8rem]">
      <div className="lg:flex sm:none">
     <div className='w-[10.5rem] font-sans bg-[#252849]  text-[white] rounded-sm mr-[1rem] h-[3rem] '>
       <Button variant="" className='h-full w-full'><AppleIcon sx={{mr:1}}/>  App store</Button>
      </div>
      <div className='w-[10.5rem] sm:mt-[0.8rem] lg:mt-0 font-sans rounded-sm h-[3rem] border-[#71bd84] border-[1px] text-[white] bg-[#71bd84]'>
      <Button variant="" className='h-full w-full'><AndroidIcon sx={{mr:1}}/> Play store</Button>
      </div>
     </div>
      </div>

      </main>
  )
}
