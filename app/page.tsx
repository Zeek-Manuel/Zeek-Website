'use client'
import React, { useState } from 'react';
import { Vina_Sans } from 'next/font/google';
import Image from 'next/image';
import background from '../public/images/backdrop.png';
import background2 from '../public/images/cloth gye 4.jpg';
import styles from './page.module.css';
import Link from 'next/link';
import useDetectDevice from './Uitlities/UseDetectDevice';



const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})



export default function Home(): JSX.Element {
  const { isMobile } = useDetectDevice();

  return (

    <div>
      <div className={`${vina_Sans.className} container mx-auto max-h-full justify-center`}>
          <div className={` text-cyan-700 text-8xl justify-center flex p-6 `}>
              Welcome To Zeek Media
          </div>
            <div className={`${isMobile ? "container flex flex-col text-dark gap-6 p-5" : "container text-dark  p-3 gap-5 grid grid-cols-2" }`}>
              <div className={` text-center text-4xl font-medium  `}>
                <Link href='/photography'>Photography</Link>

                  <Image
                    src={background} alt='backdrop' className='justify-center w-full h-5/6 border-double  rounded-xl pt-2'
                    width={500} height={500} />
              </div>
              <div className='text-center text-4xl font-medium' >
                <Link href='/design'>Design</Link>

                <Image
                  src={background2} alt='backdrop' className='justify-center w-full h-5/6 border-double rounded-xl pt-2'
                  width={500} height={200} />
              </div>
            </div>
      </div>
      <div className='container max-w-full max-h-full bg-black/5 text-base font-medium p-5 text-dark'>
        <div className='text-center text-4xl font-bold mx-auto p-5'>{`The Crucial Role of Design in Today's World`}</div>
          <div className='container mx-auto '>

          {`

          In an era defined by rapid technological advancements, globalization, and an ever-evolving societal landscape, the importance of design has never been more pronounced. Design permeates every aspect of our daily lives, influencing our experiences, perceptions, and interactions with the world. From the sleek smartphones we use to the layouts of our urban spaces, design shapes our environment and plays a pivotal role in addressing contemporary challenges. This essay explores the multifaceted significance of design in today's world, emphasizing its impact on innovation, communication, and sustainability.

          At its core, design is about problem-solving and innovation. In a world that constantly demands novel solutions, the role of design in fostering creativity and ingenuity cannot be overstated. Design thinking, a human-centric approach that emphasizes empathy, ideation, and prototyping, has become a cornerstone in tackling complex issues. Whether it's developing user-friendly technology interfaces or creating sustainable urban infrastructure, design thinking enables a holistic understanding of problems, leading to more effective and innovative solutions.

          Moreover, design serves as a powerful medium for communication. In an age of information overload, where attention spans are fleeting, visual communication has become increasingly vital. Graphic design, for instance, plays a pivotal role in conveying messages, branding, and creating memorable visual identities. A well-designed logo or user interface can transcend language barriers, making information more accessible and engaging. The synergy between aesthetics and functionality in design enhances the user experience, fostering a deeper connection between individuals and the products, services, or messages they encounter.

          The impact of design on sustainability is another crucial dimension in today's world. As global concerns about climate change and environmental degradation intensify, designers are increasingly tasked with creating solutions that prioritize ecological responsibility. Sustainable design encompasses not only the use of eco-friendly materials but also the consideration of life cycle assessments, energy efficiency, and waste reduction. Designers are challenged to envision products and spaces that minimize environmental impact while maximizing functionality and aesthetic appeal, contributing to a more sustainable and responsible future.

          In the realm of urban planning and architecture, design plays a pivotal role in shaping the cities of tomorrow. With the majority of the world's population now residing in urban areas, the design of these spaces directly influences our quality of life. Thoughtful urban planning considers factors such as accessibility, green spaces, and public amenities, fostering communities that are not only aesthetically pleasing but also conducive to well-being and social cohesion. Design has the power to transform urban environments into sustainable, inclusive, and resilient hubs that meet the needs of diverse populations.

          The importance of design extends beyond tangible products and spaces; it also influences intangible aspects of our lives, such as digital experiences. User experience (UX) design, for example, has become integral to the success of digital platforms and applications. A well-designed user interface enhances usability, accessibility, and overall satisfaction, contributing to the success and adoption of digital innovations. In an interconnected world where digital interactions are ubiquitous, the significance of intuitive and user-friendly design cannot be overstated.

          In conclusion, design is a dynamic and indispensable force that shapes the modern world in myriad ways. Its impact is evident in the products we use, the spaces we inhabit, and the way we communicate and interact. From fostering innovation and creativity to addressing environmental challenges and enhancing user experiences, design serves as a catalyst for positive change. As we navigate the complexities of the 21st century, recognizing and valuing the importance of design is essential for building a more sustainable, inclusive, and aesthetically pleasing world.
          `}
          </div>

      </div>
    </div>
  )
}
