'use client'
import React, { useState } from 'react';
import { Vina_Sans } from 'next/font/google';
import Image from 'next/image';
import photo from '../public/images/cloth gye 3.jpg';
import photo2 from '../public/images/cloth gye 4.jpg';
import photo3 from '../public/images/bobiture2 copy.jpg';
import photo4 from '../public/images/mirba01.jpg';
import photo5 from '../public/images/Zeek Graphics.jpg';
import photo6 from '../public/images/softinz cover alt 2 copy.jpg';
import photo7 from '../public/images/Odo Yewu ladies.jpg';
import photo8 from '../public/images/P copy.jpg';
import { Button } from '@/components/ui/button';
import { CarouselSize } from './components/ui/Carousel';
import { HeroParallax } from './components/ui/HeroParallax';
import MyCarousel from './components/ui/MyCarousel';



const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})



export default function Home(): JSX.Element {
  return (
    <div className='container mx-auto h-full m-auto'>
        <h1 className='flex text-center justify-center text-6xl font-bold pt-12 text-cyan-600'>WELCOME TO ZEEK GRAPHICS</h1>
      <div className="container  grid  grid-cols-2  m-10 pt-5">
        <div className='pt-5 m-5'>
          <MyCarousel/>
        </div>
        <div className={`text-6xl text-right p-6 font-bold font-mono m-6  flex flex-col justify-end `}>
          CREATIVITY IS THE BREATH OF LIFE
            <div className=' justify-end'>
              <Button className=' btn btn-md rounded-lg text-base text-center text-white bg-cyan-400 w-1/2 sm:w-1/2  hover:bg-cyan-700'>
                Get Started
              </Button>
            </div>
        </div>
      </div>
        <div className="container mx-auto m-auto justify-center bg-gray">
          <h1 className=' text-4xl text-center font-bold font-mono p-2'>PORTFOLIO SUMMARY</h1>
          <div className='grid grid-cols-4 m-5 justify-center'>
            <h2 className='font-bold text-2xl font-serif h-full p-2 '>
              Textile Design
              <div className='border-r-2 border-gray-600 font-thin  text-base bg-cyan-200'>This is going to explain a little about our Textile design portfolio</div>
            </h2>
            <h2 className='font-bold text-2xl font-serif h-full p-2'>
              Web Design
              <div className='border-r-2 border-gray-600 font-thin  text-base bg-slate-200'>This is going to explain a little about our Web design portfolio</div>
            </h2>
            <h2 className='font-bold text-2xl font-serif h-full p-2'>
              Graphic Design
              <div className='border-r-2 border-gray-600 font-thin  text-base bg-cyan-200'>This is going to explain a little about our Graphic design portfolio</div>
            </h2>
            <h2 className='font-bold text-2xl font-serif h-full p-2'>
              Logo Design
              <div className='border-r-2 border-gray-600 font-thin text-base bg-slate-200'>This is going to explain a little about our logo design portfolio</div>
            </h2>
          </div>
        </div>
    </div>
  )

}