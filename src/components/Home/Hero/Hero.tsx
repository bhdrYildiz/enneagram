'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {

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


                        <h1 className="mt-8 max-w-[720px] text-5xl font-light leading-[1.02] tracking-[-0.035em] text-white md:text-6xl lg:text-[72px]">

                            Enneagram ile

                            <br />

                            Kendinizi ve İnsanları

                            <br />

                            <span className="relative inline-block text-secondary">

                                Daha İyi Tanıyın

                                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: .7 }} className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />

                            </span>

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


                    {/* RIGHT */}
                    <motion.div style={{ x: imageX, y: imageY }} className="relative hidden h-[650px] lg:block">


                        {/* ANA GÖRSEL */}
                        <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-3 top-2 h-[520px] w-[480px] overflow-hidden rounded-[34px] border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,.4)]">

                            <Image src="/hizmetler/enherethero.jpg" alt="Enneagram eğitimleri" fill priority className="object-cover transition-transform duration-1000 hover:scale-105" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/35 via-transparent to-transparent" />

                        </motion.div>


                        {/* SOL GÖRSEL */}
                        <motion.div animate={{ y: [0, 12, 0], rotate: [1, -1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-8 left-0 h-[310px] w-[260px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,.35)]">

                            <Image src="/hizmetler/enoksisbanner.jpg" alt="Enneagram" fill className="object-cover" />

                        </motion.div>


                        {/* ALT SAĞ GÖRSEL */}
                        <motion.div animate={{ y: [0, -10, 0], rotate: [1, 1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-12 -right-12 h-[210px] w-[280px] overflow-hidden rounded-[26px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,.35)]">

                            <Image src="/enneagram-slayder1.jpg" alt="Enneagram etkinlikleri" fill className="object-cover" />

                        </motion.div>


                        {/* ORBIT */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="absolute left-[205px] top-[220px] h-[150px] w-[150px] rounded-full border border-secondary/25">

                            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_18px_rgba(255,255,255,.3)]" />

                        </motion.div>

                        {/* KÜÇÜK PARLAK NOKTALAR */}
                        <motion.span animate={{ opacity: [.2, 1, .2], scale: [.7, 1.2, .7] }} transition={{ duration: 3, repeat: Infinity }} className="absolute left-24 top-16 h-2 w-2 rounded-full bg-secondary" />

                        <motion.span animate={{ opacity: [.3, 1, .3], scale: [.8, 1.4, .8] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-36 right-8 h-1.5 w-1.5 rounded-full bg-white" />

                    </motion.div>

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