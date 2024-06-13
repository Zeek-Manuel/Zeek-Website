'use client'
import React from 'react'

import photo1 from './../../public/images/Zeek Graphics.jpg';
import photo2 from './../../public/images/C.webp';
import photo3 from './../../public/images/Concert.jpg';
import photo4 from './../../public/images/D.jpg';
import photo5 from './../../public/images/F.jpg';
import photo6 from './../../public/images/G.jpg';
import photo7 from './../../public/images/P copy.jpg';
import photo8 from './../../public/images/bobiture2 copy.jpg';
import Image from 'next/image';


const MyImages = () => {
    const imagePic = [photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8]
  return (
    <div className=''>
        {imagePic.map((src, index)=>(
            <div key={index} className=''>
                <Image src={src} alt={`Image ${index + 1}`} layout='responsive'/>
            </div>
        ))}
    </div>
  )
}

export default MyImages
