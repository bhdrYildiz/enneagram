'use client';

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeUp, fadeInCard } from '@/app/lib/animations';
import { motion } from 'framer-motion';
import { services } from "./_data/services";

export default function ServicesClient() {
    return (
        <main className="flex flex-col font-cormorant bg-white">
            <PageHero
                title="HİZMETLERİMİZ"
                subtitle="- ENNEAGRAM EĞİTİM&apos;İ KEŞFEDİN -"
                backgroundImage="/enneagram-slayder1.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "HİZMETLERİMİZ" },
                ]}
            />
            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-full mb-16 text-center"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-xs tracking-[0.45em] uppercase text-secondary mb-4"
                        >
                            Hizmetlerimiz
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl text-primary tracking-wide mb-6"
                        >
                            Mizaç Merkezli
                            <br />
                            Eğitim ve Danışmanlık
                        </motion.h1>

                        <motion.div variants={fadeUp} className="mx-auto mb-8 h-[1px] w-24 bg-black/15" />

                        <motion.p
                            variants={fadeUp}
                            className="text-lg md:text-xl text-primary/80 leading-relaxed"
                        >
                            Enneagram temelli yaklaşımımızla; birey, aile, okul ve kurumlara{" "}
                            <br className="hidden md:block" />
                            özel olarak tasarlanan, derinlikli ve sürdürülebilir çözümler sunuyoruz.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch"
                    >
                        {services.map((service) => (
                            <motion.article
                                key={service.slug}
                                variants={fadeInCard}
                                className="relative group h-full"
                            >
                                {/* DEKOR FRAME — KARTTAN TAŞIYOR */}
                                <div className="hidden lg:block absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-2xl z-0" />

                                <div
                                    className="relative z-10 flex flex-col h-full
                              rounded-2xl border border-black/10 bg-white
                              shadow-[0_14px_40px_rgba(0,0,0,0.06)]
                              transition-all duration-500
                              group-hover:-translate-y-1
                              group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]"
                                >
                                    <div className="relative p-10 md:p-12 flex flex-col h-full">
                                        <div className="mb-8 flex items-center gap-4">
                                            <div className="relative h-14 w-40">
                                                <div className="absolute inset-0 rounded-xl border border-black/10 bg-white shadow-sm" />
                                                <div className="relative h-full w-full flex items-center justify-center px-4">
                                                    <Image
                                                        src={service.logo}
                                                        alt={service.title}
                                                        width={140}
                                                        height={60}
                                                        className="object-contain opacity-95"
                                                    />
                                                </div>
                                            </div>

                                            <div className="hidden md:flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary/60">
                                                <span className="h-[1px] w-8 bg-black/15" />
                                                Program
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-[28px] leading-tight tracking-wide text-primary mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-[15px] leading-relaxed text-primary/75 mb-10 line-clamp-3">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto">
                                            <Link
                                                href={`/hizmetlerimiz/${service.slug}`}
                                                className="inline-flex items-center gap-3 text-sm tracking-[0.28em] uppercase text-primary"
                                            >
                                                <span className="relative">
                                                    Read more
                                                    <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-black/20 transition-colors duration-500 group-hover:bg-black/50" />
                                                </span>
                                                <span className="transition-transform duration-500 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
