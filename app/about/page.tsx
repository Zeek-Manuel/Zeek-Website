'use client';
import React from 'react'
import useDetectDevice from '../Uitlities/UseDetectDevice';

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isMobile } = useDetectDevice();

  return (
    <div className={`container mx-auto  flex flex-col  p-4 ${isMobile? 'h-full': 'h-screen'}`}>
      <h1 className='p-4 justify-center text-center text-4xl text-dark text-cyan-600'>ABOUT ZEEK MEDIA</h1>
      <p className='text-center p-2 space-x-3 text-base'>
        {
            `ZeeK Media: Where Vision Meets Design

            We are a passionate collective of photographers and graphic designers dedicated to crafting compelling visual narratives. We believe that captivating images and impactful design hold the power to inspire, engage, and tell stories that resonate.

            **More than just pixels and fonts, we are:**

            * **Storytellers:** We capture the essence of your brand, product, or event through evocative photography and design that evokes emotion and creates lasting impressions.
            * **Collaborators:** We work closely with our clients to understand their unique vision and objectives, ensuring every project exceeds expectations.
            * **Innovators:** We are constantly pushing creative boundaries, exploring new technologies, and staying ahead of the curve to deliver fresh and contemporary designs.
            * **Experts:** With a combined wealth of experience and diverse skillsets, our team is equipped to tackle any visual challenge.

            **We offer a comprehensive range of services, including:**

            * **Photography:** From product photography and portraits to event coverage and architectural photography, we capture the essence of your subject with both technical skill and artistic flair.
            * **Graphic Design:** We create impactful logos, brochures, websites, social media graphics, and more, ensuring your brand identity is consistent and visually arresting.
            * **Video Production:** We bring your story to life through compelling video content, adding another dimension to your visual communication strategy.
            * **Branding & Design:** We help you develop a cohesive brand identity that resonates with your target audience and sets you apart from the competition.

            **We are committed to:**

            * **Quality:** We deliver exceptional work that reflects our dedication to excellence and meticulous attention to detail.
            * **Client Satisfaction:** We prioritize open communication and collaboration, ensuring your needs are met and you are consistently satisfied with our progress.
            * **Timeliness:** We understand the importance of meeting deadlines and delivering projects on schedule.
            * **Professionalism:** We conduct ourselves with integrity and respect, building trust and long-lasting relationships with our clients.

            **Let us help you unlock the power of visual storytelling. Contact us today and discover how we can bring your vision to life.**
            `
        }
        </p>
    </div>
  )
}

