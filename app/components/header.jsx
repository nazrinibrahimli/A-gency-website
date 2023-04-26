import React from 'react'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
      <header className='flex p-[1.3rem] bg-[#131214] overflow-hidden relative'>
      <h2 className='font-serif text-bold text-white px-[2.2rem]'>A'gency</h2>
      <nav className='ml-auto  flex'>
<Link href="/" underline="none" className='text-lg text-white   px-3 font-sans hover:text-white'>Home
        </Link>

  <Link href="services" underline="none" className='text-lg text-white   px-3 font-sans hover:text-white'>
  Services  </Link>
<Link href="about" underline="none" className='text-lg text-white  px-3 font-sans hover:text-white'>
About    </Link>

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
