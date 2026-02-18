'use client'
import { useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import TopInfoBar from './TopInfobar'
import Navbar from './Navbar'

const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleNavShow = useCallback(() => setShowNav(true), []);
    const handleCloseNav = useCallback(() => setShowNav(false), []);

    return (
        <div>
            <TopInfoBar />
            <Navbar openNav={handleNavShow} isHomePage={isHomePage} />
            <MobileNav showNav={showNav} closeNav={handleCloseNav} />
        </div>
    )
}

export default ResponsiveNav