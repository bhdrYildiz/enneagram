'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="relative py-20 bg-white font-cormorant">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block">
                        <p className="text-base text-secondary font-semibold uppercase tracking-[0.3em] mb-3">
                            Enneagram Eğitim & Danışmanlık
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] mb-4">
                            Neler Yapar ?
                        </h2>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <div className="grid grid-cols-12 gap-5">

                            {/* Büyük Fotoğraf */}

                            <div className="col-span-12">

                                <div className="group relative overflow-hidden rounded-3xl h-[430px]">

                                    <Image
                                        src="/enherethero.jpg"
                                        alt="Enneagram Eğitim"
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                    <div className="absolute left-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4">

                                        <p className="text-3xl font-light text-primary">

                                            15+

                                        </p>

                                        <p className="text-sm uppercase tracking-widest text-gray-600">

                                            Yıllık Deneyim

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Küçük Fotoğraf */}

                            <div className="col-span-6">

                                <div className="group relative overflow-hidden rounded-3xl h-[220px]">

                                    <Image
                                        src="/enneagramhero.jpg"
                                        alt="Kurumsal Eğitim"
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className="absolute left-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4">

                                        <h4 className="text-3xl font-light text-primary">

                                            100+

                                        </h4>

                                        <p className="uppercase tracking-widest text-xs text-gray-600">

                                            Eğitim

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-span-6">

                                <div className="group relative overflow-hidden rounded-3xl h-[220px]">

                                    <Image
                                        src="/enneagram-slayder1.jpg"
                                        alt="Danışmanlık"
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className="absolute left-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4">

                                        <h4 className="text-3xl font-light text-primary">
                                            100%
                                        </h4>

                                        <p className="uppercase tracking-widest text-xs text-gray-600">

                                            Memnuniyet

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-lg text-primary leading-relaxed mb-16 tracking-wide">
                                Enneagram Eğitimleri yanında mizaç merkezli çalışmalar yapar. Bu çerçevede eğitim kurumlarına ENOKSİS (Enneagram Okul Sistemi) hizmetiyle mizacı merkeze aldığı eğitim yaklaşımını uygular.
                                Yine eğitim kurumları için alanında tek ve özgün çalışma olan ENREHET (Enneagram Rehberlik Etkinlikleri) ile rehberlik desteği sağlar. Geliştirdiği Enneagram Testleri ile mizaç tespitleri
                                yapar ve mizaçlara uygun rapor hazırlar.
                            </p>
                            <p className="text-base text-primary leading-relaxed font-semibold">
                                Enneagram Eğitim & Danışmanlık
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/hakkimizda"
                                className="inline-flex items-center justify-center bg-primary hover:bg-secondary 
                                text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300"
                                prefetch={false}
                            >
                                HAKKIMIZDA
                            </Link>
                            <Link
                                href="/enneagram"
                                className="inline-flex items-center justify-center border-2 border-hover 
                                text-primary hover:bg-hover hover:text-on-primary px-8 py-3 text-sm 
                                font-medium tracking-wider transition-all duration-300"
                                prefetch={false}
                            >
                                ENNEAGRAM
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;