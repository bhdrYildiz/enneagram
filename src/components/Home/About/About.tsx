'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import VideoLightbox from '@/app/lib/VideoLightbox';

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
                    <div className="relative lg:pr-4 lg:pb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <VideoLightbox
                                src="/videos/enneagramvideo-1.mp4"
                                poster="/videos/videoDeneme-0.png"
                                alt="Enneagram tanıtım videosu"
                            />
                        </motion.div>
                    </div>

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

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-secondary pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">100+</h3>
                                <p className="text-sm text-primary uppercase tracking-wider">Eğitim</p>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">15+</h3>
                                <p className="text-sm text-primary uppercase tracking-wider">Yıllık Deneyim</p>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">100%</h3>
                                <p className="text-sm text-primary uppercase tracking-wider">Öğrenci Memnuniyeti</p>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">24/7</h3>
                                <p className="text-sm text-primary uppercase tracking-wider">Hizmet</p>
                            </div>
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