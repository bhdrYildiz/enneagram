"use client";

import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeInCard } from "@/app/lib/animations";
import EnneagramSidebar from "../EnneagramSidebar";
import { enneagramKavramlarContent } from "../_data/enneagram";

function TextBlock({ text }: { text: string }) {
    return (
        <p className="whitespace-pre-line text-[17px] leading-[1.9] text-primary/85">
            {text}
        </p>
    );
}

export default function EnneagramKavramlarClient() {
    const content = enneagramKavramlarContent;

    return (
        <main className="flex flex-col bg-white text-primary">

            {/* PAGE HERO */}
            <PageHero
                title="ENNEAGRAM KAVRAMLARI"
                subtitle="ENNEAGRAM"
                backgroundImage="/banner5.png"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "ENNEAGRAM", href: "/enneagram" },
                    { label: "ENNEAGRAM KAVRAMLARI" },
                ]}
            />

            {/* CONTENT */}
            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-24">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-16 lg:gap-20 items-start">

                        {/* MAIN CONTENT */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.12 }}
                            className="space-y-20"
                        >

                            {/* SECTION INTRO */}
                            <motion.article variants={fadeInCard}>

                                <div className="mb-12">
                                    <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-secondary mb-5">
                                        ENNEAGRAM / TEMEL KAVRAMLAR
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-primary">
                                        Enneagram Kavramları
                                    </h2>

                                    <div className="mt-6 h-px w-20 bg-secondary" />
                                </div>

                            </motion.article>


                            {/* CONCEPTS */}
                            <div className="space-y-16">

                                {content.blocks.map((block, index) => (
                                    <motion.article
                                        key={block.title}
                                        variants={fadeUp}
                                        className="relative"
                                    >

                                        <div className="flex items-start gap-6 md:gap-8">

                                            {/* NUMBER */}
                                            <div className="hidden md:flex shrink-0 w-12 pt-1">
                                                <span className="text-sm font-semibold tracking-[0.15em] text-secondary">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            {/* CONTENT */}
                                            <div className="flex-1">

                                                <div className="flex items-center gap-4">

                                                    <h3 className="text-lg md:text-xl font-semibold tracking-[0.18em] uppercase text-primary">
                                                        {block.title}
                                                    </h3>

                                                </div>

                                                <div className="mt-4 mb-7 h-px w-16 bg-secondary" />

                                                <TextBlock text={block.body} />

                                            </div>

                                        </div>

                                    </motion.article>
                                ))}

                            </div>


                            {/* BOTTOM NOTE */}
                            <motion.section
                                variants={fadeInCard}
                                className="border-t border-primary/10 pt-10"
                            >

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                    <div>
                                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-secondary mb-3">
                                            DEVAM EDİN
                                        </p>

                                        <p className="text-xl font-light text-primary">
                                            Mizaç tiplerini keşfedin.
                                        </p>
                                    </div>

                                    <a
                                        href="/mizac-tipleri"
                                        className="group inline-flex items-center gap-4 text-sm tracking-[0.22em] uppercase text-primary"
                                    >
                                        <span className="relative font-semibold">
                                            Mizaç Tipleri
                                            <span className="absolute left-0 -bottom-2 h-px w-full bg-secondary transition-all duration-300 group-hover:w-1/2" />
                                        </span>

                                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </a>

                                </div>

                            </motion.section>

                        </motion.div>


                        {/* SIDEBAR */}
                        <EnneagramSidebar
                            title="Enneagram"
                            items={[
                                {
                                    label: "Enneagram Nedir?",
                                    href: "/enneagram",
                                },
                                {
                                    label: "Enneagram Kavramları",
                                    href: "/enneagram/enneagram-kavramlari",
                                },
                                {
                                    label: "Eğitimler",
                                    href: "/egitimlerimiz",
                                },
                                {
                                    label: "Mizaç Tipleri",
                                    href: "/mizac-tipleri",
                                },
                            ]}
                        />

                    </div>

                </div>
            </section>

        </main>
    );
}