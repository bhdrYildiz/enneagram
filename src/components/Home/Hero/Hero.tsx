'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {

    const text = "Daha İyi Tanıyın";

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

    const imageX = useTransform(springX, [-0.5, 0.5], [-18, 18])
    const imageY = useTransform(springY, [-0.5, 0.5], [-14, 14])

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    return (
        <section onMouseMove={handleMouseMove} className="relative overflow-hidden bg-[#101827]">

            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#172433] to-[#0b1520]" />

                <motion.div animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[140px]" />

                <motion.div animate={{ x: [0, -70, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-40 bottom-0 h-[650px] w-[650px] rounded-full bg-secondary/10 blur-[180px]" />

                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            </div>


            {/* BÜYÜK DÖNEN GEOMETRİ */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} className="pointer-events-none absolute -right-[170px] top-1/2 hidden h-[780px] w-[780px] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block">

                <div className="absolute inset-[80px] rounded-full border border-secondary/[0.08]" />
                <div className="absolute inset-[170px] rounded-full border border-white/[0.05]" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/15 to-transparent" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-secondary/15 to-transparent" />

            </motion.div>
            <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-center px-6 py-16">

                <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_1fr]">


                    {/* LEFT */}
                    <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="relative z-20">

                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .15 }} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl">

                            <motion.span animate={{ scale: [1, 1.5, 1], opacity: [.5, 1, .5] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-secondary" />

                            Enneagram Eğitim & Danışmanlık

                        </motion.div>
                        <h1 className="mt-8 font-light leading-[1.08] tracking-[-0.035em] text-white text-[38px] md:text-[48px] lg:text-[clamp(38px,3.4vw,54px)]">

                            <span className="block whitespace-nowrap">
                                Enneagram ile
                            </span>

                            <span className="block whitespace-nowrap">
                                Kendinizi ve İnsanları
                            </span>

                            <motion.span
                                aria-label="Daha İyi Tanıyın"
                                initial="hidden"
                                animate="visible"
                                className="relative block w-fit pb-2 font-[family-name:var(--font-caveat)] text-[#0794c7]"
                                style={{
                                    fontSize: "1.15em",
                                    fontWeight: 600,
                                    lineHeight: 1.1,
                                }}
                            >
                                {Array.from(text).map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        aria-hidden="true"
                                        className="inline-block whitespace-pre"
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 18,
                                                rotate: -6,
                                                filter: "blur(4px)",
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                rotate: 0,
                                                filter: "blur(0px)",
                                            },
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.4 + index * 0.065,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .5 }} className="mt-8 max-w-xl text-lg leading-9 text-white/65">

                            Eğitim, danışmanlık ve kurumsal gelişim çözümleriyle bireylerin ve ekiplerin potansiyellerini ortaya çıkarıyoruz.

                        </motion.p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/egitimlerimiz" className="group inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,.25)]">
                                Eğitimleri Keşfet
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link href="/hakkimizda" className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1]">
                                Bizi Tanıyın
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">

                            <div>
                                <span className="text-3xl font-light text-white">15+</span>
                                <p className="mt-1 text-sm text-white/40">Yıllık Deneyim</p>
                            </div>

                            <div className="hidden h-12 w-px bg-white/10 sm:block" />

                            <div>
                                <span className="text-3xl font-light text-white">100.000+</span>
                                <p className="mt-1 text-sm text-white/40">Ulaşılan Birey</p>
                            </div>

                            <div className="hidden h-12 w-px bg-white/10 sm:block" />

                            <div>
                                <span className="text-3xl font-light text-white">500+</span>
                                <p className="mt-1 text-sm text-white/40">Çalışılan Kurum</p>
                            </div>

                        </div>

                    </motion.div>
                    {/* RIGHT - OPTIMIZED TWO IMAGE LAYOUT */}
                    <div className="relative hidden h-[620px] lg:block">

                        {/* ARKA PLAN DEKORASYONU */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute right-0 top-12 h-[420px] w-[520px] rounded-full border border-white/[0.06]"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute right-12 top-12 h-[420px] w-[420px] rounded-full border border-secondary/10"
                        />

                        {/* ANA GÖRSEL */}
                        <div className="group absolute right-0 top-0 h-[520px] w-[440px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.3)]">

                            <Image
                                src="/hizmetler/herogorsel.jpg"
                                alt="Enneagram eğitim ve danışmanlık"
                                fill
                                priority
                                fetchPriority="high"
                                sizes="440px"
                                quality={80}
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101827]/30 via-transparent to-transparent" />

                        </div>

                        {/* İKİNCİ GÖRSEL */}
                        <div className="group absolute bottom-5 left-0 h-[290px] w-[340px] overflow-hidden rounded-[26px] border-[6px] border-[#101827] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

                            <Image
                                src="/herogorsel2.jpeg"
                                alt="Enneagram etkinlikleri"
                                fill
                                loading="lazy"
                                sizes="240px"
                                quality={75}
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                            />

                        </div>

                        {/* KÜÇÜK DEKORATİF NOKTA */}
                        <div
                            aria-hidden="true"
                            className="absolute right-4 top-[-18px] h-2.5 w-2.5 rounded-full bg-secondary"
                        />

                    </div>

                </div>

            </div>


            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 lg:flex">

                <span className="text-[8px] uppercase tracking-[0.3em]">
                    Keşfet
                </span>

                <div className="relative h-10 w-px overflow-hidden bg-white/10">
                    <motion.span animate={{ y: [-30, 40] }} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-0 top-0 h-5 w-px bg-secondary" />
                </div>

            </div>

        </section>
    )
}