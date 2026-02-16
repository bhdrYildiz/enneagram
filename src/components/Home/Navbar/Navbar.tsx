'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav?: () => void;
    fixed?: boolean;
    isHomePage?: boolean;
}

const Nav = ({ openNav, fixed = false, isHomePage = false }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        if (fixed) {
            setNavBg(true);
            return;
        }

        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [fixed]);

    return (
        <div
            className={`${navBg
                ? 'bg-primary/90 backdrop-blur-sm shadow-md top-0'
                : isHomePage
                    ? 'bg-primary top-10'
                    : 'bg-primary/80 backdrop-blur-sm top-10'
                } transition-all duration-300 h-[10vh] z-[1000] fixed w-full`}
        >
            <div className='flex items-center h-full justify-between w-[100%] xl:w-[100%] mx-auto'>
                <Link href="/" className="relative h-32 w-40 block">
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        fill
                        priority
                        className="object-contain transition-all duration-300 hover:scale-105"
                    />
                </Link>

                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id}>
                            <p
                                className='relative text-on-primary text-base font-[300] w-fit block
                  after:block after:content-[""] after:absolute after:h-[3px]
                  after:bg-secondary after:w-full after:scale-x-0 hover:after:scale-x-100
                  after:transition duration-300 after:origin-right
                  hover:text-hover'
                            >
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className='flex items-center space-x-4'>
                    <Link
                        href="/tatilini-tasarla"
                        className='rounded md:px-12 mp:py-2.5 px-8 py-2 text-on-primary text-base font-[300]
              bg-secondary hover:bg-hover transition-all duration-200 cursor-pointer'
                    >
                        Mizaç Tipini Keşfet
                    </Link>

                    <HiBars3BottomRight
                        onClick={openNav}
                        className='w-8 h-8 cursor-pointer text-on-primary lg:hidden hover:text-hover transition-colors duration-200'
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav
