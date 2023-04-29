import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';

const cto = (props) => {
  return (
    <div className=''>
              <Grid item xs={12} md={12} lg={12} sx={{}}  >
                    <img src={props.icon}/>
                  <h1 className='text-[white] text-3xl mb-[2rem] pr-[4rem]'>{props.title}</h1>
                  <div className='w-[14rem] mt-[4rem] px-auto text-center font-sans rounded-sm h-[3rem] border-[white] border-[1px] text-[white]'>
                    <button className='h-full text-center bg-white w-full'>
                    <p className='text-gray-dark text-[1rem]  capitalize font-medium'>{props.cto}</p>                   
                     </button>
                    </div> 
              </Grid>
    </div>
  )
}

export default cto
