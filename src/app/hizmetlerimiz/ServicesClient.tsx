'use client';

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeUp, fadeInCard } from '@/app/lib/animations';
import { motion } from 'framer-motion';

const services = [
    {
        slug: "enneagramik",
        title: "EnneagramİK",
        description:
            "EnneagramİK raporlamaları; yönetim, işe alım, kariyer yönetimi, ekip oluşturma ve eğitim planlama süreçlerinde kurumlara bütüncül bir bakış açısı sunar. İnsan kaynağını mizacı merkeze alarak anlamayı ve doğru pozisyonlandırmayı hedefler.",
        logo: "/logos/enneagramik.svg",
    },
    {
        slug: "aile-rehberimiz",
        title: "Aile Rehberimiz",
        description:
            "Aile Rehberimiz, mizacı merkeze alan bir rehberlik hizmetidir. Çocuğun doğuştan getirdiği mizaç özelliklerini anlayarak ebeveynlere sağlıklı iletişim, yönlendirme ve gelişim süreçlerinde yol gösterir.",
        logo: "/logos/aile-rehberi.svg",
    },
    {
        slug: "enoksis",
        title: "Enoksis",
        description:
            "Enoksis, eğitime mizaç merkezli bir perspektif sunan özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaç farklılıklarını esas alır; rehberlik, ölçme ve gelişim süreçlerini bu temelde yapılandırır.",
        logo: "/logos/enoksis.svg",
    },
    {
        slug: "enrehet",
        title: "Enrehet",
        description:
            "Enrehet, rehber öğretmenler için tasarlanmış; bireysel ya da grup halinde uygulanabilen, mizaçlara özel hazırlanmış rehberlik etkinliklerinden oluşur. Okul ortamında uygulanabilir ve sürdürülebilir çözümler sunar.",
        logo: "/logos/enrehet.svg",
    },
    {
        slug: "test",
        title: "Test",
        description:
            "Enoksis test modülü, öğrencilerin mizaç tiplerinin bilimsel ve sistematik biçimde tespit edilmesini sağlar. Bu tespitler, eğitim ve rehberlik süreçlerinin sağlıklı şekilde planlanmasına temel oluşturur.",
        logo: "/logos/test.svg",
    },
    {
        slug: "egitimler",
        title: "Eğitimler",
        description:
            "Enneagram eğitimleri; bireylerin doğuştan getirdikleri mizaç özelliklerini tanımalarını, potansiyel imkan ve kabiliyetlerinin farkına varmalarını sağlar. Gelişim alanlarını güçlendirme ve riskleri iyileştirme imkânı sunar.",
        logo: "/logos/egitimler.svg",
    },
    {
        slug: "rapor",
        title: "Rapor",
        description:
            "Enoksis’in Enneagram Digital altyapısı ile öğrencilerin mizaç ve kanat mizaçları tespit edilir. Sonuçlar; anlaşılır, detaylı ve rehberlik süreçlerine entegre edilebilir raporlar halinde sunulur.",
        logo: "/logos/rapor.svg",
    },
    {
        slug: "yayincilik",
        title: "Yayıncılık",
        description:
            "Yayıncılık çalışmalarımız, her çocuğun bireysel farklılıklarını ve mizaç yapısını merkeze alır. Eğitimde tek tip yaklaşımların ötesine geçerek, her birey için özel yollar sunan içerikler üretir.",
        logo: "/logos/yayincilik.svg",
    },
];

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

            {/* SERVICES */}
            <section className="relative bg-white overflow-hidden">
                {/* subtle background decor */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
                    <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-black/5 blur-3xl" />
                </div>

                <div className="relative max-w-[1280px] mx-auto px-6 py-24">
                    {/* HEADER */}
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

                        {/* editorial divider */}
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

                    {/* GRID */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
                    >
                        {services.map((service) => (
                            <motion.article
                                key={service.slug}
                                variants={fadeInCard}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                            >
                                {/* premium corner line + glow */}
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-secondary/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    <div className="absolute left-0 top-0 h-[2px] w-16 bg-secondary/70" />
                                    <div className="absolute left-0 top-0 h-16 w-[2px] bg-secondary/70" />
                                </div>

                                {/* subtle pattern */}
                                <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

                                <div className="relative p-10 md:p-12">
                                    {/* LOGO "frame" */}
                                    <div className="mb-8 flex items-center gap-4">
                                        <div className="relative h-14 w-40">
                                            <div className="absolute inset-0 rounded-xl border border-black/10 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-700 group-hover:border-black/20" />
                                            <div className="relative h-full w-full flex items-center justify-center px-4">
                                                <Image
                                                    src={service.logo}
                                                    alt={service.title}
                                                    width={140}
                                                    height={60}
                                                    className="object-contain opacity-95 transition duration-700 group-hover:opacity-100"
                                                />
                                            </div>
                                        </div>

                                        {/* tiny badge (optional premium touch) */}
                                        <div className="hidden md:flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary/60">
                                            <span className="h-[1px] w-8 bg-black/15" />
                                            Program
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-2xl md:text-[28px] leading-tight tracking-wide text-primary mb-4">
                                        {service.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-[15px] leading-relaxed text-primary/75 mb-10">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <Link
                                        href={`/hizmetler/${service.slug}`}
                                        className="inline-flex items-center gap-3 text-sm tracking-[0.28em] uppercase text-primary"
                                    >
                                        <span className="relative">
                                            Read more
                                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-black/25 transition-all duration-500 group-hover:bg-black/60" />
                                        </span>
                                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>

                                {/* bottom gradient hover */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/[0.06] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
