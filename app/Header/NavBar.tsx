'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useDetectDevice from '../Utilities/UseDetectDevice';
import styles from './NavBar.module.css';
import menu from '../../public/Icons/menu.png';
import close from '../../public/Icons/close.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


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
        <section className='container max-w-full p-2 relative z-20 justify-between'>
            <nav className={` container max-w-full text-dark text-sm font-medium fixed top-0 left-0 right-0 bg-white`}>
                {
                    !isMobile ?
                    <ul className={`container mx-auto flex gap-16 p-2 items-center`}>
                        <Link href={'/'} className='container font-sans font-extrabold text-3xl flex flex-start pl-6 text-cyan-400'>ZEEK</Link>
                    <div className='container flex justify-center gap-10 bg-slate-100 active rounded-full px-3 py-3'>
                        {/* <Link  className='hover:text-cyan-400 active:text-cyan-900 justify-end' href={'/'}>Home</Link> */}
                        {
                            navLinks.map((navLink: object, id: number) => (
                                <li
                                    className='hover:text-cyan-400 active:text-cyan-900 '
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
                    </div>
                        <Button className='btn-md px-4 rounded-full bg-cyan-400 text-white hover:bg-cyan-700'>Pricing</Button>
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
                        <Link href={'/'} className='container justify-center items-center font-sans font-extrabold text-3xl flex flex-start text-cyan-400'>ZEEK</Link>

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
                            className='btn btn-sm text-cyan-500 text-base justify-center'>Pricing</Link>
                        </ul>

                }
            </nav>
        </section>
    )
}

export default navBar;
