"use client";

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInCard } from "@/app/lib/animations";
import { mizacTipleri } from "../_data/mizac-tipleri";
import type { MizacItem } from "../_data/mizac-tipleri";
import MizacDetaySidebar from "../MizacDetaySidebar";
import { notFound } from "next/navigation";

export default function MizacDetayClient({ slug }: { slug: string }) {
    const detail: MizacItem | undefined = mizacTipleri.find(
        (m) => m.slug === slug
    );

    if (!detail) notFound();

    const traits = detail.traits ?? [];
    const longDescription = detail.longDescription ?? "";
    const coreDesire = detail.coreDesire ?? "";
    const coreFear = detail.coreFear ?? "";
    const quote = detail.quote ?? "";

    return (
        <main className="flex flex-col bg-white text-primary">
            <PageHero
                title={detail.title}
                subtitle="Mizaç Tipleri"
                backgroundImage="/banner5.png"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "MİZAÇ TİPLERİ", href: "/mizac-tipleri" },
                    { label: detail.title.toUpperCase() },
                ]}
            />

            {/* CONTENT */}
            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-16 lg:gap-20 items-start">

                        {/* MAIN CONTENT */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-20"
                        >

                            {/* MİZAÇ INTRO */}
                            <motion.article variants={fadeInCard}>

                                {/* Section heading */}
                                <div className="mb-10">
                                    <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-secondary mb-5">
                                        MİZAÇ TİPLERİ / GENEL PROFİL
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-primary">
                                        {detail.title}
                                    </h2>

                                    <div className="mt-6 h-px w-20 bg-secondary" />

                                    {detail.subtitle && (
                                        <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-primary/70">
                                            {detail.subtitle}
                                        </p>
                                    )}
                                </div>


                                <div className="mx-auto w-full max-w-[620px]">
                                    <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f5f7f8]">
                                        <Image src={detail.image} alt={detail.title} fill priority className="object-contain" sizes="(max-width: 768px) 100vw, 620px" />

                                        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-primary/[0.06]" />

                                        <div className="absolute left-6 top-6 h-12 w-px bg-secondary/35" />
                                        <div className="absolute left-6 top-6 h-px w-12 bg-secondary/35" />

                                        <div className="absolute bottom-6 right-6 h-12 w-px bg-primary/10" />
                                        <div className="absolute bottom-6 right-6 h-px w-12 bg-primary/10" />
                                    </div>
                                </div>

                                {/* CORE DESIRE / FEAR */}
                                {(coreDesire || coreFear) && (
                                    <div className="grid md:grid-cols-2 mt-10 border-y border-primary/10">

                                        {coreDesire && (
                                            <div className="py-8 md:pr-10 md:border-r border-primary/10">

                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-xs font-semibold tracking-[0.2em] text-secondary">
                                                        01
                                                    </span>

                                                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
                                                        Temel Arzu
                                                    </p>
                                                </div>

                                                <p className="text-[16px] leading-[1.8] text-primary/80">
                                                    {coreDesire}
                                                </p>

                                            </div>
                                        )}

                                        {coreFear && (
                                            <div className="py-8 md:pl-10 border-t md:border-t-0 border-primary/10">

                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-xs font-semibold tracking-[0.2em] text-secondary">
                                                        02
                                                    </span>

                                                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
                                                        Temel Korku
                                                    </p>
                                                </div>

                                                <p className="text-[16px] leading-[1.8] text-primary/80">
                                                    {coreFear}
                                                </p>

                                            </div>
                                        )}

                                    </div>
                                )}


                                {/* TRAITS */}
                                {!!traits.length && (
                                    <div className="mt-10">

                                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/50 mb-5">
                                            Öne Çıkan Özellikler
                                        </p>

                                        <div className="flex flex-wrap gap-x-3 gap-y-3">

                                            {traits.map((trait) => (
                                                <span
                                                    key={trait}
                                                    className="
                                                        border border-primary/15
                                                        px-4 py-2.5
                                                        text-xs
                                                        tracking-[0.14em]
                                                        uppercase
                                                        text-primary/70
                                                        transition-all
                                                        duration-300
                                                        hover:border-secondary
                                                        hover:text-secondary
                                                    "
                                                >
                                                    {trait}
                                                </span>
                                            ))}

                                        </div>

                                    </div>
                                )}

                            </motion.article>


                            {/* GENERAL OVERVIEW */}
                            {!!longDescription.trim() && (
                                <motion.article variants={fadeInCard}>

                                    <div className="mb-10">

                                        <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-secondary mb-5">
                                            GENEL BAKIŞ
                                        </p>

                                        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-primary">
                                            {detail.title} Hakkında
                                        </h2>

                                        <div className="mt-6 h-px w-20 bg-secondary" />

                                    </div>


                                    <div className="space-y-7 max-w-[850px]">

                                        {longDescription
                                            .split("\n\n")
                                            .map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="text-[17px] leading-[1.9] text-primary/85"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}

                                    </div>

                                </motion.article>
                            )}


                            {/* QUOTE */}
                            {!!quote.trim() && (
                                <motion.section variants={fadeInCard}>

                                    <div className="relative overflow-hidden rounded-md bg-primary px-8 py-12 md:px-12 md:py-14">

                                        {/* Decorative circles */}
                                        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
                                        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-secondary/20" />

                                        <div className="relative z-10">

                                            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-secondary mb-7">
                                                MİZAÇ PERSPEKTİFİ
                                            </p>

                                            <div className="h-px w-16 bg-secondary mb-8" />

                                            <blockquote className="max-w-3xl text-xl md:text-2xl font-light leading-[1.7] text-white/90">
                                                “{quote}”
                                            </blockquote>

                                        </div>

                                    </div>

                                </motion.section>
                            )}

                        </motion.div>


                        {/* SIDEBAR */}
                        <MizacDetaySidebar />

                    </div>

                </div>
            </section>

        </main>
    );
}