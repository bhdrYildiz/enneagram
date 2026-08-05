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
                backgroundImage="/enneagram_banner_2.jpg"
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
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="uppercase tracking-[0.45em] text-secondary text-xs mb-5"
                        >
                            ENNEAGRAM EĞİTİM & DANIŞMANLIK
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-6xl text-primary leading-tight"
                        >
                            İnsan Odaklı
                            <br />
                            Gelişim Çözümleri
                        </motion.h1>

                        <motion.div
                            variants={fadeUp}
                            className="w-28 h-px bg-secondary mx-auto my-8"
                        />

                        <motion.p
                            variants={fadeUp}
                            className="text-xl text-primary/75 leading-9 max-w-4xl mx-auto"
                        >
                            Enneagram temelli yaklaşımımızla bireylerin,
                            ailelerin, eğitim kurumlarının ve organizasyonların
                            gelişimine katkı sağlayan eğitim,
                            danışmanlık ve dönüşüm programları sunuyoruz.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 mt-20"
                    >
                        {[
                            {
                                number: "30+",
                                title: "Yıllık Deneyim",
                            },
                            {
                                number: "100.000+",
                                title: "Katılımcı",
                            },
                            {
                                number: "500+",
                                title: "Kurum",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                className="text-center border border-black/10 rounded-2xl py-10"
                            >
                                <div className="text-5xl text-secondary">
                                    {item.number}
                                </div>

                                <div className="mt-4 uppercase tracking-[0.25em] text-sm text-primary/70">
                                    {item.title}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-24 space-y-16"
                    >
                        {services.map((service, index) => (
                            <motion.article
                                key={service.slug}
                                variants={fadeInCard}
                                className="
                               group
                               overflow-hidden
                               rounded-3xl
                               border border-black/10
                               bg-white
                               transition-all
                               duration-500
                               hover:border-secondary/40
                               hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                           "
                            >
                                <div className="flex h-full flex-col p-8">

                                    <div className="mt-2 flex items-start justify-between gap-8">

                                        <div className="flex-1">

                                            <h3
                                                className="
                                               text-[30px]
                                               leading-tight
                                               text-primary
                                               transition-colors
                                               duration-300
                                               group-hover:text-secondary
                                           "
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className="
                                               mt-5
                                               line-clamp-3
                                               text-[16px]
                                               leading-8
                                               text-primary/70
                                           "
                                            >
                                                {service.description}
                                            </p>

                                        </div>

                                        <div
                                            className="
                                           relative
                                           h-28
                                           w-28
                                           shrink-0
                                           overflow-hidden
                                           rounded-2xl
                                           bg-gray-100
                                       "
                                        >
                                            <Image
                                                src={service.heroImage}
                                                alt={service.title}
                                                fill
                                                className="
                                               object-cover
                                               transition-transform
                                               duration-700
                                               group-hover:scale-110
                                           "
                                            />
                                        </div>

                                    </div>

                                    <div className="mt-auto pt-8">

                                        <div className="border-t border-black/10 pt-6">

                                            <Link
                                                href={`/hizmetlerimiz/${service.slug}`}
                                                className="
                                               inline-flex
                                               items-center
                                               gap-2
                                               text-sm
                                               font-medium
                                               tracking-[0.18em]
                                               uppercase
                                               text-primary
                                               transition-all
                                               duration-300
                                               group-hover:gap-4
                                           "
                                            >
                                                Detayları İncele

                                                <span
                                                    className="
                                                   transition-transform
                                                   duration-300
                                                   group-hover:translate-x-1
                                               "
                                                >
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
