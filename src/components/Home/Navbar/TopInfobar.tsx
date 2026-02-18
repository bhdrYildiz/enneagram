'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaWhatsapp, } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6';

const TopInfoBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`hidden md:block bg-secondary/70 h-10 fixed top-0 left-0 right-0 z-[1100]
                    transition-all duration-300
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        >
            <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
                <div className="flex items-center space-x-6 text-on-primary text-xs">
                    <div className="flex items-center space-x-2">
                        <FaPhone className="w-3 h-3" />
                        <span>+90 555 759 73 45</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="w-3 h-3" />
                        <span>bilgi@enneagramegitim.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationPin className="w-3 h-3" />
                        <span>Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096 Fatih/İstanbul</span>
                    </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4 text-md">
                    <a className="hover:text-hover transition-colors" href="https://www.instagram.com/enneagramegitim/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a className="hover:text-hover transition-colors" href="https://www.facebook.com/enneagramegitim/" target="_blank">
                        <FaFacebookF />
                    </a>
                    <a className="hover:text-hover transition-colors" href="https://www.x.com/enneagramegitim/" target="_blank">
                        <FaTwitter />
                    </a>
                    <a className="hover:text-hover transition-colors" href="https://www.youtube.com/@tv.enneagram" target="_blank">
                        <FaYoutube />
                    </a>
                    <a className="hover:text-hover transition-colors" href="https://wa.me/905557597345" target="_blank">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopInfoBar