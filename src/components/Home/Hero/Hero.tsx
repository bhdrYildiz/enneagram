'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type Slide = {
    id: number
    pill: string
    title: string
    subtitle: string
    ctaPrimary: { label: string; href: string }
    ctaSecondary?: { label: string; href: string }
    image: string
}

export default function Hero() {
    const slides: Slide[] = useMemo(
        () => [
            {
                id: 1,
                pill: 'KENDİNİ KEŞFET',
                title: 'Mizaç Tipini\nKeşfet.',
                subtitle:
                    'Kendini tanı, ilişkilerini ve kararlarını daha net yönet.',
                ctaPrimary: { label: 'Mizaç Tipini Keşfet', href: '/mizac-tipleri' },
                ctaSecondary: { label: 'Eğitimleri Gör', href: '/egitimlerimiz' },
                image: '/hero-1.jpg',
            },
            {
                id: 2,
                pill: 'EĞİTİMLER',
                title: 'Dönüşüm\nEğitimleri.',
                subtitle:
                    'Kurumlara ve bireylere özel, uygulanabilir eğitim programları.',
                ctaPrimary: { label: 'Eğitimlerimiz', href: '/egitimlerimiz' },
                ctaSecondary: { label: 'İletişime Geç', href: '/iletisim' },
                image: '/hero-2.jpg',
            },
            {
                id: 3,
                pill: 'DANIŞMANLIK',
                title: 'Bireysel\nDanışmanlık.',
                subtitle:
                    'Kişiye özel yol haritası ile sürdürülebilir gelişim.',
                ctaPrimary: { label: 'Randevu Al', href: '/iletisim' },
                ctaSecondary: { label: 'Hakkımızda', href: '/hakkimizda' },
                image: '/hero-3.jpg',
            },
        ],
        []
    )

    const [active, setActive] = useState(0)

    // Auto-play
    useEffect(() => {
        const t = setInterval(() => {
            setActive((p) => (p + 1) % slides.length)
        }, 6500)
        return () => clearInterval(t)
    }, [slides.length])

    const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length)
    const goNext = () => setActive((p) => (p + 1) % slides.length)

    return (
        <section className="relative w-full overflow-hidden">
            {/* Slider container */}
            <div className="relative h-[calc(100vh-10vh-40px)] min-h-[520px] w-full">
                {/* Slides */}
                <div
                    className="absolute inset-0 flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {slides.map((s) => (
                        <div key={s.id} className="relative w-full flex-shrink-0">
                            {/* Background image */}
                            <Image
                                src={s.image}
                                alt={s.pill}
                                fill
                                priority={s.id === 1}
                                className="object-cover"
                            />

                            {/* Soft overlay (readability) */}
                            <div className="absolute inset-0 bg-primary/45" />

                            {/* Content */}
                            <div className="relative z-10 h-full">
                                <div className="h-full w-[92%] xl:w-[80%] mx-auto flex items-center">
                                    <div className="max-w-[640px] text-on-primary">
                                        <div className="inline-flex items-center rounded-md border border-on-primary/30 px-4 py-2 text-xs tracking-[0.2em] font-[300] bg-primary/25 backdrop-blur">
                                            {s.pill}
                                        </div>

                                        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.05] font-[300] whitespace-pre-line">
                                            {s.title}
                                        </h1>

                                        <p className="mt-5 text-on-primary/90 font-[200] text-base md:text-lg">
                                            {s.subtitle}
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-4">
                                            <Link
                                                href={s.ctaPrimary.href}
                                                className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-secondary hover:bg-hover text-on-primary font-[300] transition-colors"
                                            >
                                                {s.ctaPrimary.label}
                                            </Link>

                                            {s.ctaSecondary && (
                                                <Link
                                                    href={s.ctaSecondary.href}
                                                    className="inline-flex items-center justify-center rounded-md px-6 py-3 border border-on-primary/35 hover:border-on-primary text-on-primary font-[300] transition-colors bg-primary/15 backdrop-blur-sm"
                                                >
                                                    {s.ctaSecondary.label}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button
                    onClick={goPrev}
                    aria-label="Önceki"
                    className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-primary/35 hover:bg-primary/55 border border-on-primary/20 text-on-primary backdrop-blur-sm transition"
                >
                    ‹
                </button>
                <button
                    onClick={goNext}
                    aria-label="Sonraki"
                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-primary/35 hover:bg-primary/55 border border-on-primary/20 text-on-primary backdrop-blur-sm transition"
                >
                    ›
                </button>

                {/* Dots */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={`h-2.5 rounded-full transition-all ${active === i ? 'w-8 bg-secondary' : 'w-2.5 bg-on-primary/60 hover:bg-on-primary'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
