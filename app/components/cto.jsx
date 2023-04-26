import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';

const cto = (props) => {
  return (
    <div className=''>
              <Grid item xs={12} md={12} lg={12} sx={{textAlign:'center',}}  >
                    <img src={props.icon}/>
                  <h1 className='text-[white] '>{props.title}</h1>
                  <div className='hover:bg-[#71bd84] mx-auto w-[14rem] mt-[2rem] px-auto font-sans rounded-sm h-[3rem] border-[white] border-[1px] text-[white]'>
                    <Button className='w-full h-full '>
                    <p className='text-[white] text-[1rem] text-center lowercase'>{props.cto}</p>                   
                     </Button>
                    </div> 
              </Grid>
    </div>
  )
}

export default cto
