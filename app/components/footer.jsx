import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-dark  w-full  '>
        <div className='flex justify-between px-[4rem] py-[3rem] h-full'>
        <Box sx={{ flexGrow: 1 }} className="">
          <Grid container spacing={0} className="">
          <Grid item xs={6} md={3} className="mt-[2rem]" >
          <ul className='pr-[2rem]'>
          <h2 className="text-[white] sm:text-base font-semibold md:text-2xl mb-[1rem] "> A'gency.io</h2>
          <h2 className="text-[white] sm:text-sm md:text-base ">46 Street, Broadway 25, NYC </h2>
          <h2 className="text-[white] sm:text-sm md:text-base ">(718) 7854 67 63</h2>
          <h2 className="text-[white] sm:text-sm md:text-base ">agency@io</h2>

        </ul>
        </Grid>
        <Grid item xs={6} md={3} className="mt-[2rem] " >
        <ul className='pl-[2rem]'>
          <h2 className="text-[white] sm:text-base md:text-xl font-semibold mb-[0.7rem] ">Our Products</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Investing</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Insurance</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Savings</li>
        </ul>
        </Grid>

        <Grid item xs={6} md={3} className="mt-[2rem]" >
        <ul className=''>
          <h2 className="text-[white] sm:text-base md:text-xl font-semibold mb-[0.7rem] ">Top Features</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Instant access</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Finance education</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Apps & integrations</li>
        </ul>
        </Grid>

        <Grid item xs={6} md={3} className="mt-[2rem]" >
        <ul className='pl-[2rem]'>
          <h2 className="text-[white] sm:text-base md:text-xl font-semibold mb-[0.7rem] ">Company</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">About us</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Contact</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base ">Career</li>
        </ul>
        </Grid>
        </Grid>
        </Box> 
        </div>
      </footer>
              
      <div className='bg-gray  h-[5rem] flex justify-around items-center'>
          <p className='text-[white] sm:text-xs md:text-base'>Ⓒ Copyright @agent.io 2023.</p>
          <p className='text-[white] sm:text-xs md:text-base'>Terms and Conditions</p>
          <p className='text-[white] sm:text-xs md:text-base'>Privacy and Policy</p>
      </div>
    </div>
  )
}

export default Footer
