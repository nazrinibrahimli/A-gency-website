'use client';
import style from './global.css'
import Header from './components/header';
import Footer from './components/footer';
import Link from '@mui/material/Link';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head />
      <body className='h-full'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
