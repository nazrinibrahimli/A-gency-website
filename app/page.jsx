'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import LandingPage from './components/landing';
import Numbers from './components/services';
import microsoft from 'public/static/microsoft.webp';
import dropbox from 'public/static/dropbox.png';
import slack from 'public/static/slack.png';
import google from 'public/static/google.png';
import oracle from 'public/static/ibm.png';
import Features from './components/features'
import Register from './components/register'


export default function Home() {
  return (
    <main >
      <LandingPage className="relative "/>
      <h3 className='my-[5rem] text-center text-3xl font-serif'>Over <b>38k+ </b>software business growing with <span className='underline text-dark-orange'>A'gency.io</span>.</h3>
      <div className="flex justify-evenly h-[2.0rem]">
      <Image src={microsoft} width="150" height=""/>
      <Image src={dropbox} width="150" height=""/>
      <Image src={slack} width="110" height=""/>
      <Image src={google} width="100" height=""/>
      <Image src={oracle} width="100" height=""/>
      </div>
      <Numbers/>
      <h3 className='mt-[7rem] text-center text-3xl font-serif'>Get your business to professional level with <span className='underline text-dark-orange'>A'gency.io</span>.</h3>
      <Features/>
      <h3 className='mt-[7rem] text-center text-3xl font-serif'>Our company will help you to <span className='underline text-dark-orange'>achieve everything</span> you imagine.</h3>
      <Register/>
    </main>
  )
}
