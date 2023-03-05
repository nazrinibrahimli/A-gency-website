import React from 'react'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
      <header className='flex p-[1rem] bg-gray-light '>
      <h2 className='font-serif text-bold px-[3rem] z-20'> <span className='text-white'>A'</span>gency</h2>
      <div className='w-[12rem] h-[12rem] bg-blue rounded-full absolute left-[-6rem] top-[-6rem] z-10'></div> 
      <nav className='m-auto '>
      <Link href="/" underline="none" className='text-xl text-blue  px-3 font-sans'>
          {'Home'}
        </Link>
        <Link href="services" underline="none" className='text-xl text-gray-dark  px-3 font-sans'>
          {'Services'}
        </Link>
        <Link href="about" underline="none" className='text-xl text-gray-dark  px-3 font-sans'>
          {'About'}
        </Link>
        {/* <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Our Project'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Insight'}
        </Link> */}
        <Link href="#" underline="none" className='text-xl text-gray-dark  px-3 font-sans'>
          {'Contact Us'}
        </Link>        </nav>
        <Button variant="contained" className='mr-[3rem] flex font-sans bg-blue rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>
        <Link href="#" underline="none" className='text-[white] font-sans'>
          {'Sign in'}
        </Link>
        </Button>

      </header>
      
    </div>
  )
}

export default Header
