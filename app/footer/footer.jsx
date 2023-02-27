import React from 'react'


const Footer = () => {
  return (
    <div>
            <footer className='bg-blue h-[20rem] w-full mt-[30rem]'>
        <div className='flex justify-between px-[2rem] py-[3.3rem]'>
        <ul className=''>
          <h2 className="text-white sm:text-sm md:text-xl"> agent.io</h2>

        </ul>
        <ul className=''>
          <h2 className="text-white sm:text-md md:text-2xl font-serif">Our Products</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Investing</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Insurance</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Savings</li>
        </ul>
        <ul className=''>
          <h2 className="text-white sm:text-md md:text-2xl font-serif">Top Features</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Instant access</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Finance education</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Apps & integrations</li>
        </ul>
        <ul className=''>
          <h2 className="text-white sm:text-md md:text-2xl font-serif">Company</h2>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">About us</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Contact</li>
          <li className="text-[white] py-2 sm:text-sm md:text-lg">Career</li>
        </ul>
        </div>
        <div className='bg-[black] h-[5rem] flex justify-around items-center'>
          <p className='text-[white] sm:text-xs md:text-lg'>Ⓒ Copyright @agent.io 2023.</p>
          <p className='text-[white] sm:text-xs md:text-lg'>Terms and Conditions</p>
          <p className='text-[white] sm:text-xs md:text-lg'>Privacy and Policy</p>

        </div>
  
      </footer>
    </div>
  )
}

export default Footer
