'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useDetectDevice from '../Uitlities/UseDetectDevice';
import styles from './NavBar.module.css';


const navBar = (): JSX.Element => {
    const { isMobile } = useDetectDevice();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
  };


    const navLinks: object[] = [
        {
            linkName: "Home",
            route: "/"
        },
        {
            linkName: "Portfolio",
            route: "/portfolio"
        },
        {
            linkName: "About",
            route: "/about"
        },
        {
            linkName: "Privacy Policy",
            route: "/privacy-policy"
        },
    ];

  return (
    <section className='container max-w-full  bg-black/10 '>
        <nav className={` container mx-auto text-dark p-2 text-base font-medium items-center`}>
            {
!isMobile ?
            <ul className={`desktopNav flex gap-12 justify-end items-start p-3`}>
                {
                navLinks.map((navLink: object, id: number) => (
                    <li
                    className='hover:text-cyan-600 active:text-cyan-700'
                    key={id}>
                        <Link
                        href={Object(navLink).linkName}
                    >
                            {Object(navLink).linkName}
                        </Link>
                    </li>
                ))
                }
                </ul>
:
                <button
                    onClick={handleClick}
                    className={styles.mobileMenuButton}>
                <span className={`bg-black-500 block transition-all duration-300 ease-out
                                h-0.5 w-6 rounded-sm ${isOpen ?
                                'rotate-45 translate-y-1' : '-translate-y-0.5'
                                }`} >
                </span>
                <span className={`bg-black-500 block transition-all duration-300 ease-out
                                h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                                'opacity-0' : 'opacity-100'
                                }`} >
                </span>
                <span className={`bg-black-500 block transition-all duration-300 ease-out
                                h-0.5 w-6 rounded-sm ${isOpen ?'-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                </span>

                </button>
            }
            {
                isMobile &&
                <ul className={`flex flex-col ${styles.mobileMenu} ${isOpen? 'desktopNav': ''}`}>
                {
                navLinks.map((navLink: object, id: number) => (
                    <li
                    key={id}>
                        <Link
                        href={Object(navLink).linkName}
                    >
                            {Object(navLink).linkName}
                        </Link>
                    </li>
                ))
                }
                </ul>
            }
        </nav>
    </section>
  )
}

export default navBar;
