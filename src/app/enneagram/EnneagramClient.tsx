"use client";

import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInCard } from "@/app/lib/animations";
import EnneagramSidebar from "./EnneagramSidebar";
import { enneagramPageContent } from "./_data/enneagram";

function TextBlock({ text }: { text: string }) {
    return (
        <p className="whitespace-pre-line text-[17px] leading-relaxed text-primary">
            {text}
        </p>
    );
}

export default function EnneagramClient() {
    const content = enneagramPageContent;

    return (
        <main className="flex flex-col whitespace-pre-line text-[15px] leading-relaxed text-gray-600 font-normal bg-white">
            <PageHero
                title="ENNEAGRAM NEDİR?"
                subtitle="- ENNEAGRAM&apos;I KEŞFEDİN -"
                backgroundImage="/enneagram_banner.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "ENNEAGRAM", href: "/enneagram" },
                    { label: "ENNEAGRAM NEDİR?" },
                ]}
            />

            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="space-y-12"
                        >
                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                    <div className="p-10 md:p-12">
                                        <p className="text-lg text-center uppercase tracking-[0.25em] text-primary font-bold mb-8">
                                            ENNEAGRAM / MİZAÇ MERKEZLİ KİŞİLİK MODELİ
                                        </p>
                                        <p className="text-base tracking-[0.25em] font-semibold uppercase text-primary">
                                            ENNEAGRAM
                                        </p>
                                        <div className="h-px w-24 bg-secondary mt-5 mb-8" />

                                        <div className="space-y-6">
                                            {content.introParagraphs.map((p, i) => (
                                                <TextBlock key={i} text={p} />
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <Link
                                                href="/enneagram/enneagram-kavramlari"
                                                className="inline-flex items-center gap-3 text-sm tracking-[0.28em] uppercase text-primary"
                                            >
                                                <span className="relative font-semibold">
                                                    Enneagram Kavramları
                                                    <span className="absolute left-0 -bottom-1 h-px w-full bg-secondary transition-colors duration-500 group-hover:bg-secondary/20" />
                                                </span>
                                                <span className="transition-transform duration-500 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                    <div className="p-10 md:p-12">
                                        <p className="text-lg text-center uppercase tracking-[0.25em] text-primary font-bold mb-8">
                                            MİZAÇ, KİŞİLİK, KARAKTER NEDİR?
                                        </p>
                                        <div className="space-y-6">
                                            {content.cards.map((card) => (
                                                <section key={card.title}>
                                                    <p className="text-base tracking-[0.25em] font-semibold uppercase text-primary">
                                                        {card.title}
                                                    </p>
                                                    <div className="h-px w-24 bg-secondary mt-4 mb-8" />

                                                    <div className="space-y-6">
                                                        <TextBlock text={card.body} />
                                                    </div>
                                                </section>
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <Link
                                                href="/mizac-tipleri"
                                                className="inline-flex items-center gap-3 text-sm tracking-[0.28em] uppercase text-primary"
                                            >
                                                <span className="relative font-semibold">
                                                    Mizaç Tipleri
                                                    <span className="absolute left-0 -bottom-1 h-px w-full bg-secondary transition-colors duration-500 group-hover:bg-secondary/20" />
                                                </span>
                                                <span className="transition-transform duration-500 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            <motion.section variants={fadeInCard}>
                                <div className="bg-primary text-white p-10 md:p-12 rounded-md">
                                    <p className="text-base tracking-[0.25em] mb-6 uppercase">
                                        ÖZETLE ;
                                    </p>
                                    <div className="space-y-12 text-white/90 leading-[40px] text-base">
                                        {content.ozetBullets.map((b, i) => (
                                            <p key={i}>
                                                {b}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.section>

                        </motion.div>
                        <EnneagramSidebar
                            title="Enneagram"
                            items={[
                                { label: "Enneagram Nedir?", href: "/enneagram" },
                                { label: "Enneagram Kavramları", href: "/enneagram/enneagram-kavramlari" },
                                { label: "Eğitimler", href: "/egitimlerimiz" },
                                { label: "Mizaç Tipleri", href: "/mizac-tipleri" }
                            ]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
