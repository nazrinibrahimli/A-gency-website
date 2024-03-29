import React from 'react';
import { FormControl,InputLabel,Input, FormHelperText, TextField,Button} from '@mui/material';


const RegistrationForm = () => {
  return (
    <div className='bg-[white] w-[17rem] lg:w-[22rem] h-[28rem] rounded-sm py-[3rem] px-[1rem] lg:px-[2rem]'>
      <FormControl fullWidth color=''>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          type="text"
          autoComplete="current-password"
          className='mb-4'
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="text"
          autoComplete="current-password"
          className='mb-4'
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
       <div className='w-full shadow-none font-sans bg-gray-dark  text-[white] rounded-sm mt-[2rem] h-[3rem]  '>
       <Button variant="" className='h-full w-full '>register now</Button>
      </div>
        {/* <Button variant="contained" className='mt-2 w-full flex font-sans bg-[#252849] rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>register now</Button> */}
      </FormControl>
    </div>
  )
}

export default RegistrationForm
