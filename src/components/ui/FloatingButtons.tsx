'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <a
                href="https://wa.me/905557597345"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geç"
                className="fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
            >
                <FaWhatsapp size={38} color="#ffffff" />
            </a>

            <button type="button" onClick={scrollToTop} aria-label="Sayfanın başına dön" className={`fixed bottom-6 right-6 cursor-pointer z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-secondary ${showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}>
                <FaArrowUp className="h-5 w-5" />
            </button>
        </>
    )
}