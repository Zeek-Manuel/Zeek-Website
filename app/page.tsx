'use client'
import React, { useState } from 'react';
import { Vina_Sans } from 'next/font/google';
import Image from 'next/image';
import background from '../public/images/backdrop.png';
import styles from './page.module.css';
import Link from 'next/link';



const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})



export default function Home(): JSX.Element {
  return (

    <><div>
      <div className={`${vina_Sans.className} container max-w-full h-full justify-center`}>
              <h1 className=' container justify-center max-w-full text-6xl text-cyan-600 flex p-6 '>Welcome to ZeeK Media</h1>
        <div className="hero">
          <Image src={background} alt="Background" objectFit='cover' />
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex flex-col p-2">
              <p className=" text-white text-4xl p-2">EXPLORE.
              </p>
            <button className="btn btn-primary justify-start text-2xl">Get Started</button>
            </div>
        </div>

      </div>
    </div><div className='container max-w-full max-h-full bg-black/5 text-base font-medium p-5 text-dark'>
        <div className='container mx-auto '>

        </div>

      </div></>
  )
}
