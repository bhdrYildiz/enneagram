"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookieConsent", "all");
        setShow(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem("cookieConsent", "necessary");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-[0_12px_50px_rgba(0,0,0,0.30)]">

                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">

                    <div className="max-w-3xl">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                                <span className="text-xl">🍪</span>
                            </div>

                            <h2 className="text-lg font-semibold text-white">
                                Çerez Tercihleriniz
                            </h2>
                        </div>

                        <p className="text-sm leading-6 text-white/70">
                            Size daha iyi bir deneyim sunabilmek, web sitemizin performansını
                            analiz etmek ve hizmetlerimizi geliştirmek amacıyla çerezlerden
                            yararlanıyoruz. Zorunlu çerezler web sitesinin çalışması için
                            gereklidir. Diğer çerezler ise yalnızca tercihiniz doğrultusunda
                            kullanılacaktır.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">
                            <Link
                                href="/cerez-politikasi"
                                className="font-medium text-secondary transition-colors hover:text-hover"
                            >
                                Çerez Politikası
                            </Link>

                            <Link
                                href="/kvkk"
                                className="font-medium text-white/60 transition-colors hover:text-white"
                            >
                                Aydınlatma Metni
                            </Link>
                        </div>
                    </div>

                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                        <button
                            onClick={acceptNecessary}
                            className="whitespace-nowrap rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                        >
                            Sadece Zorunlu
                        </button>

                        <button
                            onClick={acceptAll}
                            className="
                whitespace-nowrap rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-hover hover:shadow-lg"
                        >
                            Tümünü Kabul Et
                        </button>

                    </div>
                </div>

                <div className="h-1 w-full bg-secondary" />
            </div>
        </div>
    );
};

export default CookieConsent;