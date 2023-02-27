import React from 'react'
import Link from '@mui/material/Link';
const Header = () => {
  return (
    <div>
            <header className='flex p-[2rem] bg-gray-light'>
      <h2 className='font-serif text-bold px-4 z-20'> <span className='text-white'>A'</span>gency</h2>
      <div className='w-[12rem] h-[12rem] bg-blue rounded-full absolute left-[-6rem] top-[-6rem] z-10'></div> 

      <nav className='ml-auto'>
      <Link href="landing" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Home'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Services'}
        </Link>
        <Link href="about" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'About'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Our Project'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Insight'}
        </Link>
        <Link href="#" underline="none" className='text-2xl text-blue lowercase px-3 font-serif'>
          {'Contact Us'}
        </Link>
        </nav>
      </header>
      
    </div>
  )
}

export default Header
