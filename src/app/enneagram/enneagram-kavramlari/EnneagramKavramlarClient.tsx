"use client";

import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeInCard } from "@/app/lib/animations";
import EnneagramSidebar from "../EnneagramSidebar";
import { enneagramKavramlarContent } from "../_data/enneagram";

function TextBlock({ text }: { text: string }) {
    return <p className="whitespace-pre-line text-[17px] leading-relaxed text-primary">{text}</p>;
}

export default function EnneagramKavramlarClient() {
    const content = enneagramKavramlarContent;

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
                            {content.blocks.map((b) => (
                                <motion.article key={b.title} variants={fadeInCard} className="relative group">
                                    <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                        <div className="p-10 md:p-12">
                                            <motion.p
                                                variants={fadeUp}
                                                className="text-lg text-center uppercase tracking-[0.25em] text-primary font-bold mb-8"
                                            >
                                                ENNEAGRAM / KAVRAMLAR
                                            </motion.p>

                                            <motion.h2
                                                variants={fadeUp}
                                                className="text-base tracking-[0.25em] font-semibold uppercase text-primary text-center"
                                            >
                                                {b.title}
                                            </motion.h2>

                                            <motion.div variants={fadeUp} className="h-px w-24 bg-secondary mt-5 mb-8 mx-auto" />

                                            <motion.div variants={fadeUp} className="space-y-6">
                                                <TextBlock text={b.body} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        <EnneagramSidebar
                            title="Enneagram"
                            items={[
                                { label: "Enneagram Nedir?", href: "/enneagram" },
                                { label: "Enneagram Kavramları", href: "/enneagram/enneagram-kavramlari" },
                                { label: "Eğitimler", href: "/egitimlerimiz" },
                                { label: "Mizaç Tipleri", href: "/mizac-tipleri" },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
