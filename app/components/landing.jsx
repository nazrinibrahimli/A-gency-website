'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import landing from 'public/static/landing.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
const LandingPage = () => {
  return (
    <div className='lg:px-[15.5rem] sm:px-[8rem] py-[2.2rem] bg-gray-light h-[43rem] relative overflow-hidden rounded-bl-full  '>
      <h1 className='lg:w-[23rem] font-semibold'>Improve the way you charge, with only <span className=' text-orange'>one click.</span></h1>
      <p className=' w-[26rem] my-[3rem]'>We specialize in destkop and mobile applications, CEO, marketing, AI solutions, cybersecutity.</p>
      <Button variant="contained" className='font-sans bg-[#252849]  rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'><AppleIcon sx={{mr:1}}/>  App store</Button>
      <Button variant="outlined" className='font-sans rounded-md h-[3rem] border-[#252849] text-[#252849]'><AndroidIcon sx={{mr:1}}/> Play store</Button>
      <div className='md:w-[23rem] sm:w-[18rem] h-[18rem] md:h-[23rem] bg-blue rounded-full absolute sm:top-[18rem] md:top-[8rem] sm:right-[-12rem] md:right-[-12rem] lg:right-[-11.87rem] z-20 	'></div>
      <div className='md:w-[23rem] sm:w-[21rem] h-[21rem] md:h-[23rem] bg-gray rounded-full absolute sm:right-[-8rem] md:right-[-5rem]  z-10'></div>
      <p className='text-[#252849] text-md my-[0.6rem] font-sans' >Different Platform?<Link href="#" underline="none" className='px-[0.4rem] font-sans text-[#273444] font-bold underline'>
          {'Contact Us'}
        </Link> </p>
  

    </div>
  )
}

export default LandingPage
