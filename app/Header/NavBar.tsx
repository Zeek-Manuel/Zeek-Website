'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useDetectDevice from '../Uitlities/UseDetectDevice';
import styles from './NavBar.module.css';
import menu from '../../public/Icons/menu.png';
import close from '../../public/Icons/close.png';
import Image from 'next/image';


const navBar = (): JSX.Element => {
    const { isMobile } = useDetectDevice();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        isVisible ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }, [isVisible])


    const navLinks: object[] = [
        {
            linkName: "Portfolio",
            href: "/Portfolio"
        },
        {
            linkName: "About",
            href: "/about"
        },
        {
            linkName: "Privacy Policy",
            href: "/privacy-policy"
        },
    ];

    return (
        <section className='container max-w-full  p-6 relative'>
            <nav className={` container max-w-full text-dark text-base p-2 font-medium fixed top-0 left-0 right-0 glass`}>
                {
                    !isMobile ?
                <ul className={`desktopNav flex gap-16 justify-center  p-2 items-center `}>
                    <Link  className='hover:text-cyan-600 active:text-cyan-700' href={'/'}>Home</Link>
                    {
                        navLinks.map((navLink: object, id: number) => (
                            <li
                                className='hover:text-cyan-600 active:text-cyan-700'
                                key={id}
                            >
                                    <Link
                                    href={Object(navLink).href}
                                    >
                                        {Object(navLink).linkName}
                                    </Link>
                            </li>
                        ))
                    }
                    <Link
                        href= '/login'
                        className='btn btn-sm text-cyan-500 text-base justify-end '
                    >
                        Login
                    </Link>
                </ul>
    :

                <button
                    className={ `${styles.mobileMenuButton} container flex flex-col `}
                    onClick={() => setIsVisible(isVisible ? false : true)}
                >
                    {
                    !isVisible ?
                        <Image src={menu} alt='openMenu'
                            height={30}
                            width={30}
                        />
                    :
                        <Image src={close} alt='closeMenu'
                            height={30}
                            width={30}
                        />
                    }
                </button>
                }
                {
                isMobile &&
                        <ul className={`${styles.mobileMenu} ${isVisible ? styles.active : ''} list-none font-medium bg-cyan-800 text-white text-base z-5`}>
                            <Link
                                onClick={() => setIsVisible(isVisible ? false : true)}

                            className='flex flex-col justify-center items-center' href={'/'}>Home</Link>
                        {
                            navLinks.map((navLink: object, id: number) => (
                                <li
                                key={id}>
                                    <Link
                                    href={Object(navLink).href}
                                    className={`${styles.mobileNavLink}`}
                                    onClick={() => setIsVisible(isVisible ? false : true)}
                                >
                                        {Object(navLink).linkName}
                                    </Link>
                                </li>
                            ))
                        }
                            <Link 
                            href= '/login'
                            onClick={() => setIsVisible(isVisible ? false : true)}
                            className='btn btn-sm text-cyan-500 text-base justify-center'>Login</Link>
                        </ul>

                }
            </nav>
        </section>
    )
}

export default navBar;
