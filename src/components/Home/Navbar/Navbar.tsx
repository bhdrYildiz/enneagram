'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import Image from 'next/image'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav?: () => void
    isHomePage?: boolean
    showTopBar: boolean
}

export default function Navbar({
    openNav,
    isHomePage,
    showTopBar,
}: Props) {

    const transparent = isHomePage && showTopBar

    return (

        <header
            className={`fixed left-0 right-0 z-[1000] transition-all duration-500 ${showTopBar ? "top-10" : "top-0"
                }`}
        >

            <div
                className={`mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-8 transition-all duration-500 ${transparent
                    ? "bg-transparent"
                    : "rounded-b-md bg-primary/85 backdrop-blur-md shadow-md"
                    }`}
            >

                {/* LOGO */}

                <Link
                    href="/"
                    className="relative h-20 w-56 shrink-0 transition hover:scale-[1.03]"
                >

                    <Image
                        src="/Logo.png.png"
                        alt="Enneagram"
                        fill
                        priority
                        className="object-contain"
                    />

                </Link>

                {/* DESKTOP MENU */}

                <nav className="hidden lg:flex items-center gap-12">

                    {navLinks.map((link) => (

                        <Link
                            key={link.id}
                            href={link.url}
                            className="group relative text-[16px] font-light tracking-[0.03em] text-white transition-colors duration-300 hover:text-secondary"
                        >

                            {link.label}

                            <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300 group-hover:w-8" />

                        </Link>

                    ))}

                </nav>

                {/* RIGHT */}

                <div className="flex items-center gap-5">

                    <Link
                        href="/mizac-tipleri"
                        className="hidden lg:inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-hover hover:shadow-xl"
                    >

                        Mizaç Tipini Keşfet

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >

                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />

                        </svg>

                    </Link>

                    <HiBars3BottomRight
                        onClick={openNav}
                        className="h-8 w-8 cursor-pointer text-white transition hover:text-secondary lg:hidden"
                    />

                </div>

            </div>
        </header>

    )
}