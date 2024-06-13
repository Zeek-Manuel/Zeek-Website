import * as React from "react"
import Image from 'next/image';
import photo from './../../../public/images/C.webp';
import photo2 from './../../../public/images/D.jpg';
import photo3 from './../../../public/images/F.jpg';
import photo4 from './../../../public/images/G.jpg';
import photo5 from './../../../public/images/backdrop.png';
import photo6 from './../../../public/images/Zeek Graphics.jpg';
import photo7 from './../../../public/images/backg.jpeg';
import photo8 from './../../../public/images/bobiture2 copy.jpg';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  const imagePic = [photo,photo2,photo3,photo4,photo5,photo6,photo7,photo8]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {imagePic.map((src, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
             <div key={index} className=''>
                <Image src={src} alt={`Image ${index + 1}`} height={300} width={500} layout='responsive'/>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

