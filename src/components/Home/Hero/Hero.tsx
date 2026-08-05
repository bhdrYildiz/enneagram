'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    FiArrowRight
} from 'react-icons/fi'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#101827]">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1b2635] to-[#0d1722]" />

                <div className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[130px]" />

                <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-hover/10 blur-[180px]" />

            </div>

            <div className="relative z-10">

                <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-120px)] flex items-center">

                    <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-20 items-center w-full">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8 }}
                        >

                            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-2 text-xs uppercase tracking-[0.3em] text-white">

                                Enneagram Eğitim & Danışmanlık

                            </div>

                            <h1 className="mt-8 text-5xl md:text-7xl leading-[1.02] font-light text-white">

                                Enneagram ile
                                <br />

                                Kendinizi
                                <br />

                                ve İnsanları
                                <br />

                                Daha İyi Tanıyın

                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-9 text-white/75">

                                Eğitim, danışmanlık ve kurumsal gelişim
                                çözümleriyle bireylerin ve ekiplerin
                                potansiyellerini ortaya çıkarıyoruz.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/egitimlerimiz"
                                    className="group rounded-full bg-secondary hover:bg-hover px-8 py-4 text-white inline-flex items-center gap-3 transition-all"
                                >

                                    Eğitimleri İncele

                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />

                                </Link>

                                <Link
                                    href="/hakkimizda"
                                    className="rounded-full border border-white/15 bg-white/10 backdrop-blur-xl hover:bg-white/20 px-8 py-4 text-white transition"
                                >

                                    Hakkımızda

                                </Link>

                            </div>

                            {/* Stats */}

                            <div className="mt-16 grid grid-cols-3 gap-10">

                                <div>

                                    <h3 className="text-4xl font-light text-white">

                                        100+

                                    </h3>

                                    <p className="mt-2 text-white/60">

                                        Eğitim

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-light text-white">

                                        15+

                                    </h3>

                                    <p className="mt-2 text-white/60">

                                        Yıllık Deneyim

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-light text-white">

                                        %100

                                    </h3>

                                    <p className="mt-2 text-white/60">

                                        Memnuniyet

                                    </p>

                                </div>

                            </div>

                        </motion.div>
                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8, delay: .25 }}
                            className="relative hidden lg:block h-[760px]"
                        >

                            {/* Büyük Fotoğraf */}

                            <motion.div
                                whileHover={{ y: -8, rotate: -1 }}
                                transition={{ duration: .3 }}
                                className="absolute right-0 top-0 w-[420px] h-[500px] rounded-[34px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.35)]"
                            >

                                <Image
                                    src="/enherethero.jpg"
                                    alt=""
                                    fill
                                    className="object-cover hover:scale-105 transition duration-700"
                                />

                            </motion.div>

                            {/* Sol Alt */}

                            <motion.div
                                whileHover={{ y: -8, rotate: 1 }}
                                transition={{ duration: .3 }}
                                className="absolute left-0 bottom-60 w-[260px] h-[320px] rounded-[28px] overflow-hidden shadow-2xl"
                            >

                                <Image
                                    src="/enneagramhero.jpg"
                                    alt=""
                                    fill
                                    className="object-cover hover:scale-105 transition duration-700"
                                />

                            </motion.div>

                            {/* Sağ Alt */}

                            <motion.div
                                whileHover={{ y: -8, rotate: -1 }}
                                transition={{ duration: .3 }}
                                className="absolute right-20 top-120 w-[300px] h-[240px] rounded-[28px] overflow-hidden shadow-2xl"
                            >

                                <Image
                                    src="/enneagram-slayder1.jpg"
                                    alt=""
                                    fill
                                    className="object-cover hover:scale-105 transition duration-700"
                                />

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </div>
        </section>

    )

}