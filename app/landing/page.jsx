'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const page = () => {
  return (
    <div className='px-[8.5rem] py-[6rem] bg-gray-light h-[41rem] '>
      {/* <div className='w-[12rem] h-[12rem] bg-blue rounded-full absolute left-[-120px]'></div> */}
      <h1 className='text-blue font-serif w-[20rem]'>Improve the way you charge, with only <span className='text-orange'>one click.</span></h1>
      <div className='w-[12rem] h-[12rem] bg-gray rounded-full absolute left-[-120px]'></div>
      <p className='text-black text-xl font-serif w-[26rem] my-[2rem]'>Lorem ipsum blazginf destkop and mobile applications, CEO, marketing, AI solutions, cybersecutity.</p>
      <Button variant="contained" className='bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>App store</Button>
      <Button variant="outlined" className='rounded-md h-[3rem] border-blue text-blue'>Play store</Button>
      <div className='w-[27rem] h-[27rem] bg-gray rounded-full absolute right-[-11.87rem] top-[9.87rem] z-10'></div>
      <div className='w-[12rem] h-[12rem] bg-blue rounded-full absolute right-[-6rem] bottom-[11rem]  z-20 '></div> 

      <p></p>
      <p className='font-serif text-xl text-blue my-[0.6rem]' >Different Platform?<Link href="#" underline="none" className='px-[0.4rem] font-serif text-blue font-bold underline'>
          {'Contact Us'}
        </Link> </p>
  

    </div>
  )
}

export default page
