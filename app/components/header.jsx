import React from 'react'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
      <header className='flex p-[1rem]  bg-[#f6fbf7] overflow-hidden relative'>
      <h2 className='font-serif font-light text-gray-dark py-[0.5rem] px-[2rem] italic '>A'gency</h2>
      <nav className='ml-auto  flex'>
<Link href="/" underline="none" className='text-blue   px-3 font-sans flex justify-center items-center'>
  <p className='text-black font-sans text-2xl'>Home</p></Link>

  <Link href="about" underline="none" className=' text-black  px-3 font-sans flex justify-center items-center'>
<p className='text-black font-sans text-2xl' >About</p></Link>
  <Link href="services" underline="none" className='text-blue   px-3 font-sans flex justify-center items-center'>
  <p className='text-black font-sans text-2xl'>Services</p></Link>



        {/* <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Our Project'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Insight'}
        </Link> */}
        {/* <Link href="#" underline="none" className='text-xl text-gray-dark  px-3 font-sans'>
          {'Contact Us'}

        </Link>       */}
          </nav>
        {/* <Button variant="contained" className='mr-[3rem] flex font-sans bg-blue rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>
        <Link href="#" underline="none" className='text-[white] font-sans'>
          {'Sign in'}
        </Link>
        </Button> */}

      </header>
      
    </div>
  )
}

export default Header
