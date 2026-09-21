'use client'

import { useEffect, useState } from 'react'

export default function CookieConsent() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')

        if (!consent) {
            setShow(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'all')
        setShow(false)
    }

    if (!show) return null

    return (
        <div
            className="fixed bottom-4 left-4 right-4 z-[2147483647] max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(0,0,0,0.20)] md:bottom-6 md:left-6 md:right-auto"
        >
            <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                    Çerez Kullanımı
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                    Bu internet sitesinde sizlere daha iyi hizmet sunabilmek
                    için çerezler kullanılmaktadır.
                </p>
            </div>

            <button
                type="button"
                onClick={acceptCookies}
                className="
                    w-full
                    bg-primary
                    px-6 py-4
                    text-base font-semibold
                    text-white
                    transition-colors
                    hover:bg-primary/90
                "
            >
                Tamam
            </button>
        </div>
    )
}