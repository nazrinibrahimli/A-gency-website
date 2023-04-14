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
                    <Button size="large" variant='outlined' className='mt-[2rem] font-sans rounded-sm border-5	border-[white]'>
                    <p className='text-[white] text-[0.8rem]'>{props.cto}</p>                   
                     </Button>
              </Grid>
    </div>
  )
}

export default cto
