'use client'
import React, { useState } from 'react';
import { Vina_Sans } from 'next/font/google';



const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})



export default function Home(): JSX.Element {
  return (

    <div>
      <div className={`flex items-center justify-center h-screen bg-cover bg-fixed custom-img `}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"></div>
        <div className=" z-[2] p-10 sm:z-[2] justify-center items-center">
          <div className={`${vina_Sans}flex max-w-full text-7xl font-bold text-white`}>Welcome to ZeeK Media</div>
          <p className=" text-white  text-2xl pb-5 pt-5">YOUR HUB FOR ALL WONDERFUL DESIGNS.</p>
          <button className="btn text-cyan text-2xl hover:text-cyan-400 active:text-white-900'">Get Started</button>
        </div>
      </div>
    </div>
  )
}
