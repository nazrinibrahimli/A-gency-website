'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import landing from 'public/static/landing.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import bgImage from "../../public/static/app.jpg"
const LandingPage = () => {
  return (
    <div className='lg:px-[9.5rem] px-[3rem] pt-[3rem] bg-fixed bg-center bg-no-repeat bg-[url("/static/bg.jpg")]  bg-cover  h-[40rem] relative overflow-hidden '>
      <h1 className='text-center text-6xl  text-[white] font-bold'>Improve the way you charge, with only <span className=' text-[white]'>one click.</span></h1>
     
      <p className='px-[4rem] text-center  text-[white] my-[3rem]'>We specialize in destkop and mobile applications, CEO, marketing, AI solutions, cybersecutity.</p>
      <div className="lg:flex lg:w-[25rem] mx-auto">
     <div className=' w-[10.5rem] font-sans bg-[#252849]  text-[white] rounded-sm mx-auto  h-[3rem] '>
       <Button variant="" className='h-full w-full'><AppleIcon sx={{mr:1}}/>  App store</Button>
      </div>
      <div className='w-[10.5rem] mt-[0.8rem] lg:mt-0 font-sans bg-[#71bd84] rounded-sm  mx-auto   h-[3rem] border-[#71bd84] border-[1px] text-[white]'>
      <Button variant="" className='h-full w-full '><AndroidIcon sx={{mr:1}}/> Play store</Button>
      </div>
     </div>

      {/* <p className='text-[#252849] text-md my-[0.6rem] font-sans' >Different Platform?</p>
       <Link href="#" > 
       <p className='px-[0.4rem] font-sans text-[#273444] font-bold underline'>Contact Us</p>
      </Link> */}
      {/* <div className='md:w-[23rem] sm:w-[18rem] h-[18rem] md:h-[23rem] bg-blue rounded-full absolute sm:top-[18rem] md:top-[8rem] sm:right-[-12rem] md:right-[-12rem] lg:right-[-11.87rem] z-20 	'></div>
      <div className='md:w-[23rem] sm:w-[21rem] h-[21rem] md:h-[23rem] bg-gray rounded-full absolute sm:right-[-8rem] md:right-[-5rem]  z-10'></div>

   */}

    </div>
  )
}

export default LandingPage
