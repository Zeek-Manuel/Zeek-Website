"use client";
import { Vina_Sans } from 'next/font/google';
import Image from 'next/image';
import styles from './photography.module.css';
import a from '../../public/images/A.webp';
import b from '../../public/images/F.jpg';
import c from '../../public/images/C.webp';
import d from '../../public/images/D.jpg';
import e from '../../public/images/G.jpg';
import f from '../../public/images/6004798.jpg';
import useDetectDevice from '../Uitlities/UseDetectDevice';




const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})


export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMobile } = useDetectDevice();

  return (
    <div className={`container mx-auto ${isMobile ? 'h-screen':'h-full'} ${vina_Sans.className}`}>
        <h1 className={`text-4xl text-cyan-700 text-center p-6 ${vina_Sans.className}`}>Welcome to photography page</h1>
        <h3 className='p-4 text-2xl font-semibold'>Gallery</h3>
        <p className='text-base p-2 italic text-cyan-400'>Swipe to the left</p>
        <div className="carousel rounded-box w-full">
          <div className="carousel-item w-1/2">
            <Image src={a} alt='' className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <Image src={b} alt='' className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <Image src={c} alt='' className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <Image src={d} alt='' className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <Image src={e} alt='' className="w-full" />
          </div>
          <div className="carousel-item w-1/2">
            <Image src={f} alt='' className="w-full" />
          </div>
        </div>
    </div>
  )
}

