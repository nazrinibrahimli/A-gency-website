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
import client1 from '../public/static/client-1.jpg'
import { motion } from "framer-motion"
import {useState} from "react";
import team from "public/static/team3.jpg"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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

  

{/* <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent  bg-gray-dark
      w-[100px]  h-[100px]
      flex
      justify-center
      items-center
      "
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="w-[40px] 
  h-[40px]
  bg-[#f6fbf7]
  rounded-full"/>
    </motion.div> */}


      {/* <LandingPage className="relative "/>
      <h3 className='my-[5rem]  text-center text-3xl font-serif'>Over <b>38k+ </b>software business <span className='text-orange'>growing with A'gency.io</span>.</h3>
      */}



<motion.div 
animate={{ x: 0 }} 
initial={{x: 200}}
 
className="box"
>

 <LandingPage className=" "/>
</motion.div>
     
     
     
     
<h3 className='my-[5rem]  text-center text-3xl font-serif'>Over <b>38k+ </b>software business <span className='text-orange'>growing with A'gency.io</span>.</h3>

      <div className="mx-[2rem] mt-[3rem]">
      <Box>
      <Grid container >
        <Grid item xs={12} lg={6} sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem"}}>
          <Image src={microsoft} width="140" height=""/>
          <Image src={dropbox} width="140" height=""/>
          <Image src={slack} width="90" height=""/>
            </Grid>
        <Grid item xs={12} lg={6}   sx={{display:"flex", justifyContent: "space-around", alignItems:"center", mb:"3rem" }}>
          <Image src={google} width="100" height=""/>
          <Image src={oracle} width="90" height=""/>
          <Image src={mcKinsey} width="100" height=""/>
        </Grid>
      </Grid>
      </Box>
      </div>

      <h1 className='text-center text-gray-dark  pt-[5rem] mb-[2rem] font-extralight'> Services we provide</h1>
      <Grid container spacing={2} className="py-[3rem]">
      <Numbers image={"/static/app.jpg"} title="E-commerce Development" info="Whatever your business needs are, we can build it. We design our e-commerce pages to meet your KPIs, whether you are looking for bottom line revenue optimization, better conversion rates or an effective customer acquisition strategy."/>
      <Numbers image={"/static/webDev.jpg"} title="Web Development" info="Your one stop shop for front and back end web development is with us. Our front end caters to an intuitive customer experience while our backend ensures optimal performance, keeping functionality and uptime consistent with elite market standards." />
      <Numbers  image={"/static/mobDev.jpg"} title="App Development" info="When it comes to iOS or Android development, we believe developing native to each OS is the only approach. This allows us to natively integrate into each specific OS, giving the end-user a superior experience, but also providing a more stable, refined final product." />
      <Numbers image={"/static/cooperation-1.jpeg"} title="Content Management Systems" info="Our CMS platforms are custom designed and developed to fully integrate into your business, enhance business flows and catered to meet your business needs. We can easily develop a custom admin panel to control and manage all aspects of your online business." />
      </Grid>

       <h1 className='mt-[3rem] text-center text-3xl font-serif'>Get your business to professional level with A'gency.io. </h1>
      <Features/>
      <h1 className='mt-[7rem] text-center text-3xl font-serif'>Our company will help you to achieve everything you imagine.</h1>
      <Register/>
      <h1 className='mt-[5rem] mb-[2rem] text-center text-3xl font-serif'>Our Directors</h1>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container  className=" w-full p-[2rem]  lg:p-[4rem]">
      <Grid item xs={12} md={6} lg={4} sx={{ }} className="px-[4rem]">
        <div className=' lg:w-[300px] w-[300px] h-[18rem]  bg-[url("../public/static/ceo1.jpg")] bg-center bg-cover bg-no-repeat'></div>
          <p className='text-start text-[black] text-xl font-serif my-[1rem]'>Laura Ionescu</p>
          <p className='text-start  mb-[1rem]'>Post winning the global CEO for One Month programme 2022, Laura Ionescu continues to pursue her desire to serve as a spokesperson and representative for youth. </p>
          <a  className='text-green py-[1rem]'>Continue Reading</a>

        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ }} className="px-[4rem]">
        <div className=' lg:w-[300px] w-[300px] h-[18rem] bg-[url("../public/static/ceo2.jpg")] bg-center bg-cover bg-no-repeat'></div>
        <p className='text-start text-[black] text-xl font-serif my-[1rem] '>Anna Jones</p>
          <p className='text-start  mb-[1rem]'>She has held executive positions at director level including as the Director Community and Economic Participation and Director Office for Youth.</p>
           <a  className='text-green py-[1rem]'>Continue Reading</a>
          </Grid>
        <Grid item xs={12} md={12} lg={4} sx={{}} className=" px-[4rem]">
          <div className=' lg:w-[300px] w-[300px] h-[18rem] bg-[url("../public/static/ceo3.jpg")] bg-center bg-cover bg-no-repeat'></div>
          <p className='text-start text-[black] text-center text-xl font-serif my-[1rem]'>Joshua Sng Zhong Hao</p>
          <p className='text-start mb-[1rem]'> With a keen interest in the role businesses can play to serve the societies they operate in, he took a gap year to dive into the world of business. </p>
          <a  className='text-green '>Continue Reading</a>

          </Grid>
      </Grid>
      </Box>

      <h1 className='mt-[5rem] mb-[2rem] text-center text-3xl font-serif'>Download our free apps for client.</h1>
      <p className=' text-center font-base mb-[2rem]'>End-to-end payments and financial management in a single solution.</p>
      <div className="flex justify-center items-center mb-[8rem]">
      <div className="lg:flex sm:none">
     <div className='w-[10.5rem] font-sans bg-gray-dark  text-[white] rounded-sm mr-[1rem] h-[3rem] '>
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
