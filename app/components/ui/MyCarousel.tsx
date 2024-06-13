'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import MyImages from '../MyImages';
import Image from 'next/image';
import photo from './../../../public/images/C.webp';
import photo1 from './../../../public/images/Zeek Graphics.jpg';
import photo2 from './../../../public/images/bobiture2 copy.jpg';
import photo3 from './../../../public/images/cloth gye 4.jpg';
import photo4 from './../../../public/images/backdrop.png';



const MyCarousel = () => {
  return (
    <Carousel>
        <CarouselContent>
            <CarouselItem><Image src={photo}  height={300} alt=''/></CarouselItem>
            <CarouselItem><Image src={photo1} height={300} alt=''/></CarouselItem>
            <CarouselItem><Image src={photo2} height={300} alt=''/></CarouselItem>
            <CarouselItem><Image src={photo3} height={300} alt=''/></CarouselItem>
            <CarouselItem><Image src={photo4} height={300} alt=''/></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default MyCarousel
