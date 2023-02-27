'use client';
import style from './global.css'
import Header from './header/header';
import Footer from './footer/footer';
import Link from '@mui/material/Link';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <head />
      <body className='h-full'>
        <Header/>
        {children}
        <Footer/>

  

      </body>
  
    </html>
  )
}
