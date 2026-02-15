"use client";

import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeInCard } from "@/app/lib/animations";
import EnneagramSidebar from "../EnneagramSidebar"
import { enneagramKavramlarContent } from "../_data/enneagram";

const content = enneagramKavramlarContent;

function TextBlock({ text }: { text: string }) {
    return <p className="whitespace-pre-line text-[15px] leading-relaxed text-primary/75">{text}</p>;
}

export default function EnneagramKavramlarClient() {
    return (
        <main className="flex flex-col font-cormorant bg-white">
            <PageHero
                title="ENNEAGRAM KAVRAMLARI"
                subtitle="- ENNEAGRAM -"
                backgroundImage="/enneagram_banner.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "ENNEAGRAM", href: "/enneagram" },
                    { label: "ENNEAGRAM KAVRAMLARI" },
                ]}
            />
            <section className="py-20 md:py-24">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="space-y-16"
                        >
                            {content.blocks.map((b) => (
                                <motion.article
                                    key={b.title}
                                    variants={fadeInCard}
                                    className="border-b border-black/10 pb-14"
                                >
                                    <motion.p
                                        variants={fadeUp}
                                        className="text-xs uppercase tracking-[0.25em] text-gray-500"
                                    >
                                        ENNEAGRAM KAVRAMLARI
                                    </motion.p>

                                    <motion.h2
                                        variants={fadeUp}
                                        className="mt-4 text-3xl md:text-4xl font-light text-[#1c2c34] leading-tight"
                                    >
                                        {b.title}
                                    </motion.h2>

                                    <motion.div variants={fadeUp} className="h-px w-16 bg-[#ab9a8b] mt-5" />

                                    <motion.div variants={fadeUp} className="mt-6 space-y-6">
                                        <TextBlock text={b.body} />
                                    </motion.div>

                                    {!!b.emphasisLines?.length && (
                                        <motion.div variants={fadeUp} className="mt-8">
                                            <div className="border border-black/10">
                                                <div className="bg-[#1c2c34] text-white px-5 py-4 font-light tracking-wide">
                                                    Hat Dizilimi
                                                </div>
                                                <div className="border border-black/10 border-t-0 p-5 bg-white">
                                                    {b.emphasisLines.map((line, i) => (
                                                        <p key={i} className="text-sm tracking-[0.18em] text-[#1c2c34]">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.article>
                            ))}

                            <motion.div variants={fadeUp} className="border border-black/10 bg-white p-10 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                                <p className="text-xs tracking-[0.45em] uppercase text-secondary mb-4">
                                    Sonraki Adım
                                </p>
                                <h3 className="text-2xl md:text-3xl font-light text-[#1c2c34] leading-tight">
                                    Enneagram Nedir? Sayfasına Dön
                                </h3>
                                <div className="h-px w-16 bg-[#ab9a8b] mt-5" />

                                <p className="mt-6 text-gray-600 leading-relaxed">
                                    Temel tanım, tarihçe ve mizaç/kişilik/karakter açıklamaları.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        href="/enneagram"
                                        className="px-6 py-3 bg-[#1c2c34] text-white text-sm tracking-[0.25em] uppercase hover:bg-secondary transition"
                                    >
                                        Enneagram Nedir?
                                    </Link>
                                    <Link
                                        href="/egitimlerimiz"
                                        className="px-6 py-3 border border-black/10 text-sm tracking-[0.25em] uppercase text-primary hover:border-secondary transition"
                                    >
                                        Eğitimler
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>

                        <EnneagramSidebar
                            title="Enneagram"
                            items={[
                                { label: "Enneagram Nedir?", href: "/enneagram" },
                                { label: "Enneagram Kavramları", href: "/enneagram/kavramlar" },
                                { label: "Eğitimler", href: "/egitimlerimiz" },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
