'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

import Navbar from './Navbar'
import MobileNav from './MobileNav'
import TopInfoBar from './TopInfobar'

export default function ResponsiveNav() {

    const [showNav, setShowNav] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);

    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const handleNavShow = useCallback(() => {
        setShowNav(true);
    }, []);

    const handleCloseNav = useCallback(() => {
        setShowNav(false);
    }, []);

    useEffect(() => {

        const onScroll = () => {

            if (window.scrollY > 90) {
                setShowTopBar(false);
            } else {
                setShowTopBar(true);
            }

        }

        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    return (

        <>

            <TopInfoBar visible={showTopBar} />

            <Navbar
                openNav={handleNavShow}
                isHomePage={isHomePage}
                showTopBar={showTopBar}
            />

            <MobileNav
                showNav={showNav}
                closeNav={handleCloseNav}
            />

        </>

    )

}