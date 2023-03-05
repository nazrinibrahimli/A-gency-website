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
    <div className='relative overflow-hidden  mt-[4rem] mx-[8rem] py-[4rem] mb-[8rem] rounded-xl  bg-[#4f45b8] '>
       <Box>
         <Grid container>
           <Grid item md={12} lg={6} className="flex justify-center items-center">
           <div className='z-40 mx-[4rem] '>
              <div className='w-[13rem] h-[13rem] bg-gray-light rounded-full absolute top-[-2.2rem] left-[-120px] z-20'></div>
              <div className='w-[13rem] h-[13rem] bg-blue rounded-full absolute top-[-7rem] left-[-40px] z-10'></div>
              <h1 className='text-center lg:w-[23rem] md:w-[16rem] font-medium text-white'>We are here to help you grow your business</h1>
                  {/* <Button variant="contained" size="small" className= 'shadow-none my-[2rem] text-white font-sans bg-blue rounded-md mr-[1rem] h-[3rem] hover:bg-gray-dark'>register</Button> */}
            </div>
           </Grid>
           <Grid item md={12} lg={6} sx={{display:"flex", justifyContent:"center"}}>
              <RegistrationForm/>
           </Grid>
         </Grid>
       </Box> 
        {/* <div className="">    <div className='w-[10rem] h-[10rem] bg-blue rounded-full absolute top-[15rem] right-[8rem]  z-10 '></div> 
    <div className='w-[20rem] h-[20rem] bg-pink-dark rounded-full absolute  bottom-[8rem] right-[8.87rem]  z-20'></div>
</div> */}

    </div>
  )
}

export default register
