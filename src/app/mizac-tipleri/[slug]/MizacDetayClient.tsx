"use client";

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInCard } from "@/app/lib/animations";
import { mizacTipleri } from "../_data/mizac-tipleri";
import type { MizacItem } from "../_data/mizac-tipleri";
import MizacDetaySidebar from "../MizacDetaySidebar";
import { notFound } from "next/navigation";

export default function MizacDetayClient({ slug }: { slug: string }) {
    const detail: MizacItem | undefined = mizacTipleri.find((m) => m.slug === slug);

    if (!detail) notFound();

    const traits = detail.traits ?? [];
    const longDescription = detail.longDescription ?? "";
    const coreDesire = detail.coreDesire ?? "";
    const coreFear = detail.coreFear ?? "";
    const quote = detail.quote ?? "";

    return (
        <main className="flex flex-col bg-white font-cormorant">
            <PageHero
                title={detail.title.toUpperCase()}
                subtitle="- MİZAÇ TİPLERİ -"
                backgroundImage="/enneagram_image_2.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "MİZAÇ TİPLERİ", href: "/mizac-tipleri" },
                    { label: detail.title.toUpperCase() },
                ]}
            />

            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-8"
                        >
                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)] overflow-hidden">
                                    <div className="relative w-full h-72 mt-8 overflow-hidden">
                                        <Image
                                            src={detail.image}
                                            alt={detail.title}
                                            fill
                                            priority
                                            className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 65vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                    </div>

                                    <div className="p-10 md:p-12">
                                        <p className="text-base tracking-wide leading-relaxed text-center font-semibold uppercase text-primary">
                                            {detail.title}
                                        </p>
                                        <div className="h-px w-24 bg-secondary mt-4 mb-8 mx-auto" />
                                        {detail.subtitle && (
                                            <p className="text-base tracking-wide leading-relaxed text-primary text-center mb-4">
                                                {detail.subtitle}
                                            </p>
                                        )}

                                        {(coreDesire || coreFear) && (
                                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                                {coreDesire && (
                                                    <div className="border border-black/10 p-6 rounded-sm shadow-xl">
                                                        <p className="text-base tracking-wide uppercase text-secondary font-semibold mb-2 text-center">
                                                            Temel Arzu
                                                        </p>
                                                        <p className="text-[15px] leading-relaxed text-primary text-center">
                                                            {coreDesire}
                                                        </p>
                                                    </div>
                                                )}

                                                {coreFear && (
                                                    <div className="border border-black/10 p-6 rounded-sm shadow-xl">
                                                        <p className="text-base tracking-wide uppercase text-secondary font-semibold mb-2 text-center">
                                                            Temel Korku
                                                        </p>
                                                        <p className="text-[15px] leading-relaxed text-primary text-center">
                                                            {coreFear}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {!!traits.length && (
                                            <div className="flex flex-wrap gap-2">
                                                {traits.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="border border-secondary bg-secondary hover:scale-105 text-white text-xs tracking-[0.15em] uppercase px-4 py-4 mx-auto"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.article>

                            {!!longDescription.trim() && (
                                <motion.article variants={fadeInCard} className="relative group">
                                    <div className="relative z-10 rounded-md border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                        <div className="p-10 md:p-12">
                                            <p className="text-lg text-center uppercase tracking-wide text-primary font-bold mb-8">
                                                GENEL BAKIŞ
                                            </p>
                                            <p className="text-base tracking-wide font-semibold uppercase text-primary">
                                                {detail.title} Hakkında
                                            </p>
                                            <div className="h-px w-24 bg-secondary mt-5 mb-8" />

                                            <div className="space-y-6">
                                                {longDescription.split("\n\n").map((para, i) => (
                                                    <p key={i} className="text-[17px] leading-relaxed text-primary">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            )}

                            {!!quote.trim() && (
                                <motion.section variants={fadeInCard}>
                                    <div className="bg-primary text-white p-10 md:p-12 rounded-md">
                                        <p className="text-white/90 leading-[40px] text-xl font-light">
                                            "{quote}"
                                        </p>
                                    </div>
                                </motion.section>
                            )}
                        </motion.div>

                        <MizacDetaySidebar />
                    </div>
                </div>
            </section>
        </main>
    );
}
