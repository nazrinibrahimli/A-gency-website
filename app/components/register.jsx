import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import landing from 'public/static/cooperation.jpeg'
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import RegistrationForm from './registrationForm';
const register = () => {
  return (
    <div className='relative overflow-hidden  mt-[4rem]  py-[8rem] mb-[8rem]  bg-[url("../public/static/team2.jpg")] bg-center bg-cover '>
       <Box>
         <Grid container>
           <Grid item md={12} lg={6} className="">
              <h1 className='text-center text-2xl lg:text-4xl font-medium text-white py-[5rem] px-[3rem]'>We are here to help you grow your business. Join thousand of happy customers.</h1>
           </Grid>
           <Grid item md={12} lg={6} className="mx-auto flex justify-center items-center"  >
              <RegistrationForm/>
           </Grid>
         </Grid>
       </Box> 
    </div>
  )
}

export default register
