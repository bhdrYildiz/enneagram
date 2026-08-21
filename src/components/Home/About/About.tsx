'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight, FiBookOpen, FiUsers, FiTarget } from 'react-icons/fi';

const AboutSection = () => {
    return (
        <section className="relative overflow-hidden bg-white py-24 font-cormorant">

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-secondary/[0.05] blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1380px] px-6 lg:px-12">

                {/* BAŞLIK */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-16">

                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                                Enneagram Eğitim & Danışmanlık
                            </span>

                            <h2 className="mt-4 text-4xl font-light leading-tight text-primary md:text-5xl lg:text-6xl">
                                İnsanı anlamakla
                                <br />
                                başlayan çözümler.
                            </h2>
                        </div>

                        <p className="max-w-md text-base leading-7 text-primary/55 md:text-right">
                            Eğitimden rehberliğe, mizaç analizinden kurumsal gelişime uzanan bütüncül bir yaklaşım.
                        </p>

                    </div>

                </motion.div>


                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">

                    {/* SOL / GÖRSEL KOMPOZİSYON */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative min-h-[650px]">

                        {/* ANA FOTOĞRAF */}
                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group absolute left-0 top-0 h-[440px] w-[78%] overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.10)]">

                            <Image src="/enherethero.jpg" alt="Enneagram Eğitim" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/85 px-5 py-4 backdrop-blur-xl">
                                <p className="text-3xl font-light text-primary">13+</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary/50">Yıllık Deneyim</p>
                            </div>

                        </motion.div>


                        {/* KÜÇÜK FOTOĞRAF */}
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="group absolute bottom-0 right-0 h-[285px] w-[48%] overflow-hidden rounded-[2rem] border-[8px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]">

                            <Image src="/enneagramhero.jpg" alt="Kurumsal Eğitim" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />

                            <div className="absolute bottom-5 left-5 text-white">
                                <p className="text-3xl font-light">100.000+</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60">Ulaşılan Birey</p>
                            </div>

                        </motion.div>


                        {/* FLOATING ETİKET */}
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[7%] top-[90px] rounded-2xl border border-black/[0.06] bg-white/90 px-5 py-4 shadow-lg backdrop-blur-xl">

                            <span className="text-[9px] uppercase tracking-[0.24em] text-secondary">
                                Yaklaşımımız
                            </span>

                            <p className="mt-1 text-sm text-primary">
                                Mizaç Merkezli
                            </p>

                        </motion.div>


                        {/* DEKORATİF ORBIT */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="pointer-events-none absolute bottom-[105px] left-[70px] h-28 w-28 rounded-full border border-secondary/20">
                            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary" />
                        </motion.div>

                    </motion.div>


                    {/* SAĞ / İÇERİK */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                            Neler Yapıyoruz?
                        </span>

                        <h3 className="mt-5 text-3xl font-light leading-tight text-primary md:text-4xl">
                            Mizaç bilgisini günlük hayata ve kurumlara taşıyoruz.
                        </h3>

                        <p className="mt-7 text-lg leading-9 text-primary/65">
                            Enneagram Eğitim & Danışmanlık; bireylerin kendilerini ve birbirlerini daha doğru anlamalarını destekleyen eğitim, danışmanlık ve mizaç temelli gelişim çözümleri sunar.
                        </p>

                        <p className="mt-5 text-lg leading-9 text-primary/65">
                            Eğitim kurumlarında ENOKSİS ve ENREHET sistemleriyle rehberlik süreçlerini destekler; geliştirdiği test ve raporlama araçlarıyla bireysel ve kurumsal farkındalığın gelişmesine katkı sağlar.
                        </p>


                        {/* MİNİ ALANLAR */}
                        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            <div className="group rounded-2xl border border-black/[0.07] bg-primary/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
                                <FiBookOpen className="h-5 w-5 text-secondary" />
                                <p className="mt-4 text-base text-primary">Eğitim</p>
                                <p className="mt-1 text-xs leading-5 text-primary/45">Bireysel ve profesyonel gelişim</p>
                            </div>

                            <div className="group rounded-2xl border border-black/[0.07] bg-primary/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
                                <FiUsers className="h-5 w-5 text-secondary" />
                                <p className="mt-4 text-base text-primary">Danışmanlık</p>
                                <p className="mt-1 text-xs leading-5 text-primary/45">İnsan ve ilişki odaklı çözümler</p>
                            </div>

                            <div className="group rounded-2xl border border-black/[0.07] bg-primary/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
                                <FiTarget className="h-5 w-5 text-secondary" />
                                <p className="mt-4 text-base text-primary">Mizaç Analizi</p>
                                <p className="mt-1 text-xs leading-5 text-primary/45">Test ve kişiye özel raporlama</p>
                            </div>

                        </div>


                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link href="/hakkimizda" className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary">
                                Hakkımızda
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <Link href="/enneagram" className="group inline-flex items-center gap-3 rounded-full border border-primary/15 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:border-secondary hover:text-secondary">
                                Enneagram'ı Keşfet
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default AboutSection;