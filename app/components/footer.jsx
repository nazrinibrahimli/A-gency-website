import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <div>
      <footer className='bg-blue h-[20rem] w-full  '>
        <div className='flex justify-between px-[4rem] py-[4rem] h-full'>
        <Box sx={{ flexGrow: 1 }} className="">
          <Grid container spacing={0} className="">
          <Grid item xs={6} md={3} className="" >
          <ul className='mr-[2rem]'>
          <h2 className="text-[white] sm:text-sm md:text-2xl mb-[3rem]"> A'gency.io</h2>
          <h2 className="text-[white] sm:text-sm md:text-md">46 Street, Broadway 25, NYC </h2>
          <h2 className="text-[white] sm:text-sm md:text-md">(718) 7854 67 63</h2>
          <h2 className="text-[white] sm:text-sm md:text-md">agency@io</h2>

        </ul>
        </Grid>
        <Grid item xs={6} md={3} className=" " >
        <ul className=''>
          <h2 className="text-[white] sm:text-md md:text-xl font-sans mb-[1.2rem]">Our Products</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Investing</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Insurance</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Savings</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Apps</li>
        </ul>
        </Grid>

        <Grid item xs={6} md={3} className="" >
        <ul className=''>
          <h2 className="text-[white] sm:text-md md:text-xl font-sans mb-[1.2rem]">Top Features</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Instant access</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Finance education</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Apps & integrations</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Budgeting</li>
        </ul>
        </Grid>

        <Grid item xs={6} md={3} className="" >
        <ul className=''>
          <h2 className="text-[white] sm:text-md md:text-2xl font-sans mb-[1.2rem]">Company</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-base">About us</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Contact</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">Career</li>
          <li className="text-[white] py-2 sm:text-sm md:text-base">FAQ</li>
        </ul>
        </Grid>
        </Grid>
        </Box> 
        </div>
      </footer>
              
      <div className='bg-[black]  h-[5rem] flex justify-around items-center'>
          <p className='text-[white] sm:text-xs md:text-base'>Ⓒ Copyright @agent.io 2023.</p>
          <p className='text-[white] sm:text-xs md:text-base'>Terms and Conditions</p>
          <p className='text-[white] sm:text-xs md:text-base'>Privacy and Policy</p>
      </div>
    </div>
  )
}

export default Footer
