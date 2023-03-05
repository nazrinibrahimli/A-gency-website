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
    <div className='px-[15.5rem] py-[2.2rem] bg-gray-light h-[40rem] relative overflow-hidden rounded-bl-full  '>
      {/* <div className='w-[12rem] h-[12rem] bg-blue rounded-full absolute left-[-120px]'></div> */}
      <h1 className=' w-[23rem] font-semibold'>Improve the way you charge, with only <span className='underline text-orange'>one click.</span></h1>
      {/* <div className='w-[12rem] h-[12rem] bg-gray rounded-full absolute left-[-120px]'></div> */}
      <p className=' w-[26rem] my-[3rem]'>Lorem ipsum blazginf destkop and mobile applications, CEO, marketing, AI solutions, cybersecutity.</p>
      <Button variant="contained" className='font-sans bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'><AppleIcon sx={{mr:1}}/>  App store</Button>
      <Button variant="outlined" className='font-sans rounded-md h-[3rem] border-blue text-blue'><AndroidIcon sx={{mr:1}}/> Play store</Button>
      <div className='w-[23rem] h-[23rem] bg-blue rounded-full absolute right-[-11.87rem] top-[12.87rem] z-20 	'></div>
      <div className='w-[23rem] h-[23rem] bg-gray rounded-full absolute right-[-1.87rem]  z-10'></div>
      {/* <Image src={landing} alt="" width="330" height="330" className='rounded-full absolute right-[3rem]'/> */}
      {/* <div className='w-[12rem] h-[12rem] bg-pink-dark rounded-full absolute right-[8rem] top-[21rem]  z-30 '>
</div>  */}
      <p className='text-blue text-md my-[0.6rem] font-sans' >Different Platform?<Link href="#" underline="none" className='px-[0.4rem] font-sans text-blue font-bold underline'>
          {'Contact Us'}
        </Link> </p>
  

    </div>
  )
}

export default LandingPage
