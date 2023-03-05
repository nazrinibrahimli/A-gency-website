import React from 'react';
import { FormControl,InputLabel,Input, FormHelperText, TextField,Button} from '@mui/material';


const RegistrationForm = () => {
  return (
    <div className='bg-[white] w-[18rem] h-[24rem] rounded-md py-[3rem] px-[2rem]'>
      <FormControl fullWidth color=''>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          type="text"
          autoComplete="current-password"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="text"
          autoComplete="current-password"
          className='mt-2'
        />
        <FormHelperText id="my-helper-text">we'll never share your email</FormHelperText>
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" className='mt-2 w-full flex font-sans bg-blue rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>Sign up</Button>
      </FormControl>
    </div>
  )
}

export default RegistrationForm
