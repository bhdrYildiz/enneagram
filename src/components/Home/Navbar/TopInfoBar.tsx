'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaTripadvisor } from 'react-icons/fa'

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
            className={`bg-secondary/70 h-10 fixed top-0 left-0 right-0 z-[1100]
                    transition-all duration-300
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        >
            <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
                <div className="flex items-center space-x-6 text-on-primary text-xs">
                    <div className="flex items-center space-x-2">
                        <FaPhone className="w-3 h-3" />
                        <span>+90 530 389 71 63</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="w-3 h-3" />
                        <span>info@enneagram.com</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 text-xs">
                    <FaFacebook className="w-4 h-4 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                    <FaInstagram className="w-4 h-4 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                    <FaYoutube className="w-4 h-4 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                    <FaTripadvisor className="w-4 h-4 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                    <div className="w-px h-4 bg-gray-600 ml-2"></div>
                </div>
            </div>
        </div>
    )
}

export default TopInfoBar